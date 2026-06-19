/*

starting command

- open the terminal 
- write -> npm init -> for the raw intitalization
- write -> npm init -y -> for the ready to go setup

*/




// then
// npm init -> package.json will be created







// using file system

// we are using callback api

const fs = require('fs')


// writing in  a file
fs.writeFile("hello.txt", "hello toh kaise hai app log", function (err) {
    if (err) console.log(err);
    else
        console.log("done");
})

// append in the existing file

fs.appendFile("hello.txt", "ab mai append kr rha  hu", function (err) {
    if (err)
        console.log(err)
    else
        console.log("done hogya bhai ji")
})


//renaming the file

fs.rename("hello.txt", "nayanam.txt", function (err) {
    if (err) {
        console.log(err)

    }
    else
        console.log("rename done");
})



//copying the file

fs.copyFile("nayanam.txt","hello.txt",function(err){
    if(err)
        console.log(err);
    else
        console.log("done");
})


// deleting

fs.unlink("hello.txt",function(err){
    if(err)
        console.log(err);
    else
        console.log("deleted");
})