---
title: OAuth2 handshake
slug: ouath2-handshake
---

# OAuth2 handshake

Setting up the OAuth2 handshake requires two steps: (1) You have to register your microservice as an OAuth2 client in 
_Drops_. To do so, you have to contact the administrator of the Pool² and please her / him to add your microservice to 
the _Drops_ database. If you setup a development system, you are the administrator by yourself. In that case consider 
the description below. (2) You have to implement your part of the handshake.

## Setup a microservice as OAuth2 client in _Drops_

First, you have to log into _Drops_ as an administrator. See [Setup administrator](/guides/setup-admin/) to configure 
your user as an administrator. 
Second, create the microservice as a OAuth2 client: Open the appropriate form using the menu and enter an **ID**, a 
**Secret**, a **Redirect URL**, and a **Grant type** for the new service. 

The **ID** can be any unique identifier, for example the microservices name. The **Secret** should be known only to 
_Drops_ and the new microservice. Thus, I would recommend to generate a key using [KeePass](https://keepass.info/) enter 
it into the form, save it in a KeePass database, and enter it to the microservices deployment configuration. The **Redirect
URL** will be defined by the microservice developer and should be given the Pool² admin. The given URL identifies the 
endpoint that is used by _Drops_ to redirect the users client back, if the authorization code has been successfully 
created. The chosen **Grant types** define the possible authorization workflows possible between _Drops_ and the 
microservice. Currently, _Drops_ allows only `authorization code`.

## Protocol flow
The [RFC 6749](https://tools.ietf.org/html/rfc6749) defines multiple possible interactions between clients and OAuth 
provider. A general workflow is defined in §1.2 of the protocol. 

_Drops_ implements the `authorization code` handshake. Thus, the client has to redirect to _Drops_, which redirects the
user to the login page, if no session exists. Otherwise, _Drops_ will validate the requesting microservice, generates an
`authorization code`, and redirects back to the requesting microservice with the `authorization code` attached. Using 
this code, the service is able to request an `access token` that can be used to query information about _Drops_ currently 
logged in user. At this point, the microservice is able to create its own user session. Handling of this additional user
session should be synchronized with the _Drops_ session, thus we implemented a so called _OAuth message broker_.

![OAuth2 handshake sequence diagram](/oauth2-handshake.png "Figure 1: Describes the calls and redirects between the users
client, the microservice and _Drops_. Please consider that there are no special cases, e.g. if the user has not already 
logged into _Drops_ or error cases.")

## Endpoints
Implementation of the OAuth2 handshake requires to know the endpoints of _Drops_, but also to know which enpoints have to
be implemented.

The following endpoints of _Drops_ can be used:
```
drops.authorization.code    =   ${drops.url.base}/oauth2/code/get/${ID}
drops.access.token          =   ${drops.url.base}/oauth2/access_token
drops.get.profile           =   ${drops.url.base}/oauth2/rest/profile?access_token=%sa
```
You have to replace the `${drops.url.base}` by the host and potentially path to the deployed _Drops_ microservice.

There are some parameter to consider. First, to get an `authorization_code` _Drops_ needs to identify your service. For 
this purpose, add the **ID** of your microservice as a path parameter: `${drops.url.base}/oauth2/code/get/${ID}`. 

The access token endpoint expects some query parameter: `grant_type`, `client_id`, `client_secret`, `redirect_uri`, and 
`code`. While the `grant_type` has to be the currently chosen one (e.g. `authorization_code`), the next three parameter 
identify the microservice and have to be the same as added to _Drops_. The `code` parameter has to contain the received 
`authorization code`.

Last, requesting the profile information requires to hold a valid `access token` that has to be attached to the request 
as a query parameter.

Additionally, you have to prepare an endpoint by yourself, that takes an `authorization_code` and initiate the next step
using the `authorization_code`. _Drops_ appends the `authorization_code` to the given **Redirect URL**, thus you are free
to design your URLs. Example endpoints: `https://ms.de/` (takes the code as part of the path), or `https://ms.de?code=` 
(expects the code as a query parameter with the name `code`). 

## Example
An example controller implemented using [Play2 Framework](https://www.playframework.com/) and written in 
[Scala](https://www.scala-lang.org/) could have the following functions:
```scala
package controllers

import javax.inject._

import models.AccessToken
import play.api._
import play.api.libs.json.Json
import play.api.mvc._
import play.api.libs.ws._
import play.api.Configuration

import scala.concurrent.ExecutionContext
import scala.concurrent.ExecutionContext.Implicits.global


class HomeController @Inject() (ws: WSClient,conf : Configuration) extends Controller {

  /**
   * Create an Action to render an HTML page with a welcome message.
   * The configuration in the `routes` file means that this method
   * will be called when the application receives a `GET` request with
   * a path of `/`.
   */
  def index = Action {
    Ok(views.html.index("Your new application is ready."))
  }

  def login = Action {
    val url = conf.getString("drops.url.base").get + conf.getString("drops.url.code").get +
      conf.getString("drops.client_id").get
    Redirect(url)
  }

  def receiveCode(code: String) = Action.async {
    val url = conf.getString("drops.url.base").get + conf.getString("drops.url.accessToken").get
    val clientId = conf.getString("drops.client_id").get
    val clientSecret = conf.getString("drops.client_secret").get

    val accessToken = ws.url(url).withQueryString(
      "grant_type" -> "authorization_code",
      "client_id" -> clientId,
      "client_secret" -> clientSecret,
      "code" -> code,
      "redirect_uri" -> "http://localhost:8080/endpoint?code="
    ).get().map(response => response.status match {
      case 200 => AccessToken(response.json)
      case _ => println(response.status);throw new Exception 
                // Todo: throw meaningful exception considering the returned error message and status code!
    })

    accessToken.flatMap(token => {
      val url = conf.getString("drops.url.base").get + conf.getString("drops.url.profile").get

      ws.url(url).withQueryString(
        "access_token" -> token.content
      ).get().map(response => response.status match {
        case 200 => Ok(
          Json.obj("status" -> "success", "code" -> code, "token" -> token.content, "user" -> response.json)
        )
        case _ => Ok(
          Json.obj("status" -> "error", "code" -> code, "token" -> token.content, "response-status" -> response.status)
        )
      })
    })
  }
}
```

**Author:** [Johann Sell](https://cses.informatik.hu-berlin.de/members/johann.sell/) -- 
**Created:** 2018-06-29 --
**Updated:** 2018-06-29