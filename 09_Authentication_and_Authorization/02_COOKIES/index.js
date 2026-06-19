const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

//middleware
app.use(cookieParser());

// Route to set a cookie
app.get('/', (req, res) => {
    res.cookie("name", "this is the cookie");
    res.send("Cookie has been set!");
});

// Route to access the cookie
app.get('/profile', (req, res) => {
    res.send(`Cookie value: ${req.cookies.name}`);
});


// routes to delete the cookie

app.get('/clearCookie',function(req,res){
    res.clearCookie("name");
    res.send("cookie has been cleared");
    
})
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
