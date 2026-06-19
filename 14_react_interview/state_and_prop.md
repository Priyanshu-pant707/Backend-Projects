# Props and state :
- props and state are two of the most important concepts in react.
 - props are used to pass data from a parent component to a child component.
 - state is used to store and manage data that can change over time within a component.

## 1. Props :
- props allow a parent component to send data to a child component .
- passed from parent -> child 
-  read - only  (immutable)
- use to make components reusable .
- can not be modified inside the child component .

## 2. State :
-  state is data that belongs to a component and can change over time .
- whenever state changes , react automatically re-renders the components and updates the ui.
- managed inside the component .
- can be changed
- used for dynamic data.
- updated using state setter function
- makes ui interactive

***if you use the normal variable then at the changes of value , react doest not re-render the ui.***


# what [] bracket indicates in defining the useSate hook ?
- the square bracket come from array destructuring  in javascript.
```javascript

const [name,useName]=useState("Priyanshu");
```

- react's useState actually returns an array 
-  like ["Priyanshu",function]