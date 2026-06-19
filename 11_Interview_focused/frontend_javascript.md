# Frotend javascript questions:


1. what is the difference between "==" and "==" ?
 - the operatpr "==" checks abstract equality , while "===" checks for strict equality .


2. what is the difference between the null and undefined ?
 - both options represents an empty value. if we initialize a variable but don't assign a value to it, it will be assigned a special marker - undefined . NULL is assigned manually.


3. Arrow function and the differences from regular functions ?

-  arrow functions cannot use the arguments object.
- they have a different syntax.
- arrow functions do not have their own this context. When referencing this , an arrow function takes the context from the surrounding scope.
- arrow functions cannot be used as constructor functions . In other words , they cannot be invoked with the new keyword.



4. what is closure and why are they needed ?
- a closure is a function along with all external varaibles that it has access to . For example , there is a function that has a nested function which will close over and retain the variable from its parent.



5. What are template literals ?
- template literals are enclosed in backticks and allow for multiline strings . They also allow form embedding espressions within them .
```
const name = 'John';
const text = `User's name is ${name}`;

console.log(text) // User's name is John

```


6. what is promise ?
- a promise is an object designed to work with asynchronous code. it maintains it own state . initially , a promise is in the pending state, then it transitions to the fulfilled state if the asynchronous code is executed successfully , or to the rehected state if an error occurs . A promise accepts two callback functions :
  - onfulfilled : which is triggered when the promise is fulfilled.
  - onRejected :  which is triggered when the promise is rejected .


7. what is async and await and how to use it?
- it is a special syntax for working with promises. 
- a function declared with the async syntax always returns a promise . 
- they jeyword await makes the javascript interpreter wait untill the promise on the right side of await is fulfilled before continuing the execution . it will then return the result , and the code execution will proceed . await cannot be ued in regular functions.



8. Event loop ?
- the event loop is a mechanism that helps javascript handle asynchronous operation even though it runs on a single thread.
  1. javascripts executes synchronous code first .
  2. async task go o special queues.
  3. when the call stack becomes empty , the event loop:
     - executes microtasks first (promise then)
     - then executes macrotasks (setTimeout, setInterval)
  4. This keeps the app responsice and non-blocking.
- the event loop checks the queue and runs pending async tasks after the main code finishes , ensuring smooth execution without freezing the program.


9. Prototypal inheritance ?

-  every object in javascript has a property -  a prototype. Methods and properties can be added to the prototype . Other objects can be created based on the prototype. the created object automatically inherits the methods and properties of its prototype . If a property is absent in the object, its search will be performed on the prototype.


