const express= require ('express')
const app= express();


const userModel =require('./usermodel');
const usermodel = require('./usermodel');


app.get('/',function(req,res){
    res.send("its working fine")
})

// creating new user

app.get('/create',async function(req,res){
  let createdUser=await userModel.create({      // asyncronus nature code we have to put async await
        name:"gaurav",
        email:"gaurav707@gmail.com",
        username:"gaurav"
    })
    res.send(createdUser);
})


// for updating the user

app.get('/update',async function(req,res){   

   // userModel.findOneAndUpdate(findone ,update ,{new:true})
let updateduser=await userModel.findOneAndUpdate({username:"priyanshu"},{name:"priyanshu pant "} , {new:true});
res.send(updateduser);
})



// reading all user
app.get('/read/all',async function(req,res){
    let users=await userModel.find();
    res.send(users);
})

// reading user according to the username
app.get('/read/:username',async function(req,res){
    let users=await userModel.find({username:req.params.username});
    res.send(users);
})


//deleting the user according to the username

app.get('/delete/:username',async function(req,res){
    let deletedUser= await userModel.findOneAndDelete({username:req.params.username});
   res.send(deletedUser);
})


app.listen(3000,function(){
    console.log("server is running on port number 3000.......")
})