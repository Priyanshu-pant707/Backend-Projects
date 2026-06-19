# Node Interview question   :

## what is node ?
- it is a run time environment for executing javascript  code on the server side .
- node is neither a language nor a framework.



## How node is a run time environment on server side ?  what is V8?

- google v8 engine .
- browser execute javascript on the client side , and similarly , node.js executes javascript on the server side .
- v8 is a javascript engine for the javascript language .

## runtime environment vs framework ?
- runtime environment focuses on providing the necessary infrastructure for code execution , including services like memory management and i/o operations.

- framework focuses on simplifying the development process by offering a structured set of tools , libraries and best practices.


##  express js ?
- it is a framework built on the top of node.js
- it is designed to simplify the process of building web applications and apis by providing a set of features like simple routing system , middleware support etc.

## what are the 7 main features of node js ?
- single threaded
- asynchronous
- event-driven
- v8  javascript engine
- cross platform
- npm
- real time capabilities


## what is synchronous programming ?
-  in a synchronous program ,each task is performed one after the other, and the program waits for each operation to complete before moving on to the next one.
- synchronous programming focuses on the order of execution in a sequential manner, while single-threaded programming focuses on the single thread.


## what is multi threaded programming ?
- in a multi-threaded programming  application, multiple threads can execute multiple tasks simultaneously and parallelly.

- as soon as one thread starts a task , the next task is immediately initiated by creating a second thread .


## what is asynchronous programming ?
- in node.js , asynchronous flow can be achieved by its single-threaded , non blocking , and event-driven architecture .


## events 
- signals that something has happened in the program.

## event emitter 
-  create or emit events.

## event queue 
- events emitted queued (stored) in event queue.

## event handler :
- function that responds to specific event

## even driven architecture 
- it means operations in node are drive or based by events.


## what is npm ?  what is the role of node_modules folder?
- NPM node package manager is used to manage the dependencies for your project
- node_modules folder contains all the dependencies of the node project.


## package.json ?
- this file contains project meta data (information about the project).



## what are modules in node  ? what is the difference between a function and module ?

- a module contains a specific functionality that can be easily reused with a node.js application.
- ideally in node.js , a javascript file can be treated as module.
- a module is a broader concept that encapsulates functionality , while a function is a specific set of instruction within that module.
- module can contain multiple functions and variables .


