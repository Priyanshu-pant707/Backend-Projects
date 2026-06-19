const express= require('express')
const app=express()


// for setting the path

const path=require('path')
const cookieParser = require('cookie-parser');


// middlewares

app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser());

app.get('/setCookie',function(req,res){
    res.render("index");
})


app.get('/',function(req,res){
    res.render("landing")
})

app.post('/', function (req, res) {
  const { name, cookie } = req.body;

  // Set cookie
  res.cookie(name, cookie, { maxAge: 60000, httpOnly: true });
  
 res.redirect("/show")
});

// GET route to check cookie
app.get('/show', function (req, res) {
  
  res.render("show" , {cookie:req.cookies})
});





app.get('/clearCookie/:name', function (req, res) {
  const cookieName = req.params.name; // dynamic cookie name
  res.clearCookie(cookieName);
 res.redirect("/show")
})
app.listen(3000,function(){
      console.log("server is running fine ...")
})