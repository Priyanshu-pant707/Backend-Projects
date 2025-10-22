# Authentication and Authorization

- authentication -> basically denotes that your are login to the window -> seeing posts in twiter
- authorization -> basically denotes authority -> edit,upload,delete controls



# Authentication : 
-  verifying identity
- The first step is to verify the identity of the user or system entity attempting to access a resource  or perofrm an action. This involves checking credentials such as usernames and passwards or using other authentication methods like tokens , API keys , or certificates.
- `Scenerio` ->  when a staff member , lets say a chef , wants to log in to the node Hotel System , they need to prove that they are indeed the chef they clain to be.

- `in practice` ->  in node.js , authentication involves checking the chefs credentials, like a username and password, to make sure they match what's on record , It's like asking the chef to enter a secret code (password) and confirming that it's correct.


# Authorization
- Access Control
- once the identity is verified through authentication, the system moves on to authorization Authorization determines what actions or resources the authenticated user or entity is allowed to access based on their permissions, roles, or others access control mechanisms.

-  `Scenerio` ->  once the chef has proven their identity, you as the manager , want to control what they can and cannot do. For instance , chefs should be able to update the menu items , but maybe not manage staff salaries.
- `in practice` -> in node.js after authenticating the chef , you'll use authorization to decide what parts of the system they have access to . it's like giving the chef a key card (authorization) that lets them into the kitchen but not into the manager's office.



## authorization examples
 - role based access controls (RBAC)
 - fine graned access control
 - 