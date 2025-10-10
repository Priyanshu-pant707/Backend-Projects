// MiddleWare-> anything which comes before the routes
// it can be used for authentication, logging , etc




const express = require('express');

const app = express();

app.use(function (req, res, next) {
    console.log("this is a middleware");
    next();  // to pass the control to the next middleware or route
});  // it will be executed for every request


/// you can built as many as you want.

app.use(function (req, res, next) {
    console.log("this is a middleware2");
    next(); 
}); 



app.get('/', function (req, res) {
    res.send("hello from / route");
}
);

app.get('/about', function (req, res) {
    res.send("hello from the /about route");
})

app.listen(3000);
