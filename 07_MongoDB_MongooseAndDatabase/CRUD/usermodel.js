


const mongoose= require('mongoose');

mongoose.connect(`you mongodb url`)
.then((result) => {
console.log("mongodb connected successfully")    
}).catch((err) => {
    console.log("connection failed")
});

const userSchema =mongoose.Schema({
    name:String,
    username:String,
    email:String
})

module.exports=mongoose.model("user",userSchema);