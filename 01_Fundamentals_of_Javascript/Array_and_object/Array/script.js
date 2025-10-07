var arr=[1,2,3,4,"hey",function(){},[]]   // in javascript you can store any type of values
// no similar values required


//---------------------foreach


// you use for each wheneever you are required to perform some perticular task to each index or value of the array


var A=[1,2,3,4,5]

A.forEach(function(val){
    console.log(val+"kaise lig rhi hai javascript");

})


// -------------------map


// assume one more blanck array - map will return you new array
// lets you have to perform some certain calculation to to each element of the character and store it in the new array

var newA=A.map(function(val){
    return 13;
})
console.log(newA);   // each element the array would be 13.



var newAA=A.map(function(val){
    return val*2;
})
console.log(newAA);




//--------------------filter


// assume you have array of n element  , and you have to return the element which are greater than the 3 .
// new array length can not be determined in this


var check=[2,3,4,5,6,7,8]

var newCheck= check.filter(function(val){
    if(val>3)
        return true;
})

console.log(newCheck)

//-------------------find

var ans=check.find(function(val){
    if(val==2)
        return val; // return the first occurence if multiple exists.
})

console.log(ans);


//indexof

// return 1 if the value exists in the array otherwise it return -1

HTMLFormControlsCollection.log(check.indexOf(4))
