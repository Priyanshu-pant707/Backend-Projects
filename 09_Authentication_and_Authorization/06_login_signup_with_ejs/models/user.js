const mongoose = require('mongoose');

// mongodb connection
mongoose.connect(`your mongodb url`).then(() => {
    console.log("mongodb connected successfully")
}).catch((err) => {
    console.log("connection failed", err)
});



// user schema


const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})


// model 
userModel= mongoose.model('user',userSchema);

module.exports=userModel;