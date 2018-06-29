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

First, you have to log into _Drops_ as an administrator. See ...**TODO**... to setup your user as an administrator. 
Second, create the microservice as a OAuth2 client: Open the appropriate form using the menu and enter an **ID**, a 
**Secret**, a **Redirect URL**, and a **Grant type** for the new service. 

The **ID** can be any unique identifier, for example the microservices name. The **Secret** should be known only to 
_Drops_ and the new microservice. Thus, I would recommend to generate a key using [KeePass](https://keepass.info/) enter 
it into the form, save it in a KeePass database, and enter it to the microservices deployment configuration. The **Redirect
URL** will be defined by the microservice developer and should be given the Pool² admin. The given URL identifies the 
endpoint that is used by _Drops_ to redirect the users client back, if the authorization token has been successfully 
created. The chosen **Grant types** define the possible authorization workflows possible between _Drops_ and the 
microservice. Currently, _Drops_ allows only `authorization code`.

## Protocol flow
The [RFC 6749](https://tools.ietf.org/html/rfc6749) defines multiple possible interactions between clients and OAuth 
provider. A general workflow is defined in §1.2 of the protocol. 

_Drops_ implements the `authorization code` handshake. Thus, the client has to redirect to _Drops_, which redirects the
user to the login page, if no session exists. Otherwise, _Drops_ will validate the requesting microservice, generates an
`authorization token`, and redirects back to the requesting microservice with the `authorization token` attached. Using 
this token, the service is able to request an `access token` that can be used to query information about _Drops_ currently 
logged in user. At this point, the microservice is able to create its own user session. Handling of this additional user
session should be synchronized with the _Drops_ session, thus we implemented a so called _OAuth message broker_.

**TODO: UML Sequence diagram!**

## Endpoints
Implementation of the OAuth2 handshake requires to know the endpoints of _Drops_, but also to know which enpoints have to
be implemented.

The following endpoints of _Drops_ can be used:
```
drops.authorization.code    =   ${drops.url.base}/oauth2/code/get
drops.access.token          =   ${drops.url.base}/oauth2/access_token
drops.get.profile           =   ${drops.url.base}/oauth2/rest/profile?access_token=%s
drops.redirectURL=${ms.host}${ms.entrypoint}
```
You have to replace the `${drops.url.base}` by the host and potentially path to the deployed _Drops_ microservice.

Additionally, you have to prepare an endpoint by yourself, that takes an `authorization_code` and initiate the next step
using the `authorization_code`. _Drops_ appends the `authorization_code` to the given **Redirect URL**, thus you are free
to design your URLs. Example endpoints: `https://ms.de/` (takes the code as part of the path), or `https://ms.de?code=` 
(expects the code as a query parameter with the name `code`). 


**Author:** [Johann Sell](https://cses.informatik.hu-berlin.de/members/johann.sell/) -- 
**Created:** 2018-06-29 --
**Updated:** 2018-06-29