---
title: Shared Session
slug: shared/session
---
# Shared Session
The Pool² is a collaboration support tool. Thus, almost all microserives implementing functional requirements need to 
identify the user. A unique authentication for every microservice implies a lot of problems: There are more possible 
problem sources, maintenance becomes hard to apply and a user needs to enter his or her credentials every time the user 
switch between microservices. The latter is serious usability issue and can hinder adaption. Therefore, the Pool² 
implements an [OAuth 2](https://oauth.net/2/) provider that can be used to share a users session between microservices.

The microservice _Drops_ implements a secured session handling and an OAuth 2 provider that trusts all microservices that 
are deployed inside the VcA-infrastructure. Therefore, it implements an OAuth 2 handshake using grant type 
[Authorization Code](https://oauth.net/2/grant-types/authorization-code/) that redirects to a OAuth client with an 
authorization code without asking the users permission. The OAuth client has to be part of the internal microservice 
network to receive an access token. Thus, the users data is kept save without asking for the users permission on each 
time the user switches between microservices.<br />
(Hint: Drops does not implement the original [Authorization Code](https://oauth.net/2/grant-types/authorization-code/)
workflow. So, there is no way to receive an access token from without the internal microservice network.)

Authentication of microservices becomes a critical security challenge for the Pool² architecture. _Drops_ can trust a 
microservice if and only if the microservice is hosted by VcA. Undoubtedly, microservices can implement security issues, 
but since VcA is a socio-technical organization, we need to ensure clean implementation of microservices during a quality 
assurance process before deployment. For now, all microservices are deployed using a virtual network at the one server, 
so no external communication (using the internet or at least LAN) is needed (**TODO:** Reference for deployment guide). 
Thus, authentication is implemented using a naive microservice id and secret combination. This combination is send only 
for requesting the access token.<br />
**To consider:** Ensure that the authentication data of your microservice is secret for each deployment (test, staging, live)!
Additonally, do **not** save these data in any kind of client application, like javascript Web-Apps! These types of
application will be discussed later.

## OAuth 2 handshake
_Drops_ allows the user to initiate a server session. A encrypted [HTTP cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
is used to store all information needed to identify the user on server side. Additionally, _Drops_ implements an OAuth2
provider. Thus, another microservice is able to [`REDIRECT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)
to _Drops_ in order to request an authorization code.

1. Request from `Client` to `Microservice`
2. `REDIRECT` from `Microservice` to `Drops`
3. `Drops` checks if the redirecting `Microservice` is trusted (the URL contains an identifier)
4. `Drops` generates the `Authorization code`

Important notes to consider:
* Programmfluss
* Web-Apps
* OES