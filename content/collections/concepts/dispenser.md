---
title: Dispenser and the coporate design
slug: dispenser
---

# Split Front- and Backend

In modern web architectures it's normal to split front- and backend development in two parts, we follow this idea and deploy front- and backend in to sperated dockers. There are some reasons to do this:

1. We can better organize the developing prozess for VcA
2. We can better scale our dockers in case we need a stronger infrastructure.
3. We can make easy changes at the frontend without any effort on backend side.

A Frontend docker contains a webserver that can be handled through a OAuth-Session and works with dispenser. Dispenser needs informations about a user to handle the navigation correctly for every single user. 

# Workflow:

1. Request from Browser to Nginx
2. Nginx forwards the request to the Frontend-Provider

if User has a session:
3. Frontend-Provider builds content page and converts it to Base64
4. Sends a json to dispenser, that contains the Base64-HTML and the user_id.
5. Dispenser returns a html-file, that contains the content-page.
6. Frontend-Provider gives as response the page to the user.

if User has no session:
3. [OauthDocu]()
4. Frontend-Provider builds content page and converts it to Base64
5. Sends a json to dispenser, that contains the Base64-HTML and the user_id.
6. Dispenser returns a html-file, that contains the content-page.
7. Frontend-Provider gives as response the page to the user.




