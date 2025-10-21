const mongoose= require('mongoose')

mongoose.connect(`your mongodb url`)
.then((result) => {
console.log("mongodb connected successfully")    
}).catch((err) => {
    console.log("connection failed")
});


const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports=mongoose.model('user',userSchema);