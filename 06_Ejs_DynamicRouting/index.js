const express = require('express')
const app= express();
const path=require('path')
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine','ejs');



app.get("/",function(req,res){
   res.render("index")
})

app.get("/profile/:username",function(req,res){
 //profile/priyanshu
 //profile/gaurav
 //profile/parth
 //profile/ritik
 //profile/ritesh
// res.send(req.params.username)    // req.params.username will gett the dynamic route value
res.send(`welcome , ${req.params.username}`)
})


//authorname//authorage -> different for every independent user
app.get('/author/:username/:age',function(req,res){
//res.send(req.params)
res.send(`welcome ${req.params.username} of age ${req.params.age}`)
})
app.listen(3000,function(){
    console.log("it is running fine .....")
})