# three core components of modern authentication :


- ***Session***
 - the problem :  http is fundamentally a stateless protocol , meaning it remembers nothing about past requests. modern web apps need stateful memory .
 - the solution :  the server creates a unique session id  upon login , storing the user's data alongside this id in a persistent , fast in-memory store like redis. The session id is sent to the client and included in all further requests, giving the server memory


- ***JWTs***
 -  the problem :  as apps scaled globally , storing and synchronizing millions of session across distributed servers caused latency and high storage costs. 
 - the solution :  jwts are a stateless mechanism that offloads storage from the server.
 - structure : the contain three base64-encoded parts :
    1. header :  metadata like the signing algorithm .
    2. Playload :  contains claim such as user id , issued at time and roles.
    3. signature : verified using a secret key held only by the serve to ensure the token hasn't been tampered with.


-***Cookies***
 - definition :  a mechanism allowing servers to store small piece of information directly in the user's browser .
 - workflow : the server set an 'http-only cookie containing the auth token.
 - the browser then automatically attaches this cookie to every subsequent request sent to the specific server.



# major types of authentication :
1. Stateful authentication 
2. stateless authentication 
3. api-key based authentication 
4. Oauth 2.0 and openid connect