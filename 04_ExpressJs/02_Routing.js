// Importing the express module
const express = require('express');

// Creating an express application
const app = express();





// Creating a route for the home page ('/')




app.get('/', function (req, res) {

    res.send("hello from / route");

});


app.get('/about',function(req,res){
    res.send("hello from the /about route");
})


// redirectiong to another website

app.get('/Author',function(req,res){
    res.redirect("https://github.com/Priyanshu-pant707/Backend-Projects")
})






// Starting the server on port 3000
app.listen(3000, function () {
    console.log("🚀 Server running on http://localhost:3000");
});
