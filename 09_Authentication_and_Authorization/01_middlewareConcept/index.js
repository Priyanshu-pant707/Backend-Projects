const express= require('express');

const app=express();

const logrequest=(req,res,next)=>{
console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`);
next()  // move on to the next phase
}


app.use(logrequest); // work for each and every routes


app.get('/',function(req,res){

    res.send(' hello from / route');
})

app.get('/profile',function(req,res){
    res.send('profile route hit')
})

app.get('/profile/:username',function(req,res){
    let name=req.params.username;
    res.send(`hello ${name}`)
})


app.listen(3000,function(){
    console.log('server is working fine....');
})