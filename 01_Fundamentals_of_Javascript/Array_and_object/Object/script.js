{} // it is a black object

{name:"priyanshu"}  //object


// object are just like key value pairs

var obj={
    kuchbhi:"kuchbhi",
    anything:"anything"
}


// accessing object elments
console.log(obj.anything)
console.log(obj['kuchbhi'])


 
// if we dont want any updation to be done our object--- value updation
Object.freeze(obj);



// what is the length of function?

function abc(){}  // abc.length()=0;
function def(a,b,c){}  // def.length()=3;

// the length of the function is basically the number of the parameter 
// in the function-> reason? function are treated as objects in the javascript
