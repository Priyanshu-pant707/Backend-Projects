// run npm i express in the terminal to install the express package


const express = require ('express');  // import express package

const app=express();    // we can use express as a function



//routes:

app.get('/',function(req,res){   // get method to handle the request and response
    res.send("hello bhai jaan");  // send method to send the response
})

app.listen(3000);   // listen method to start the server on port 3000