const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// mongodb connection
mongoose.connect(`your mongodb url`).then(() => {
    console.log("mongodb connected successfully")
}).catch((err) => {
    console.log("connection failed", err)
});



// userschema 

const userSchema = new mongoose.Schema({
    email: String,
    password: String,

});

const usermodel = mongoose.model('user', userSchema);




app.get('/', function (req, res) {
    res.send("Authentication and Authorization signup and login");
})

// signup route

app.post('/signup', async function (req, res) {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = usermodel.create({ email, password: hashedPassword });
    res.send("User signed up successfully");
})


// login routes

app.post('/login', async function (req, res) {
    const { email, password } = req.body;
    const user = await usermodel.findOne({ email });
    if (!user) {
        return res.status(400).send("User not found");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send("Invalid credentials");
    }
    res.send("User logged in successfully");
})


app.listen(3000, function () {
    console.log("server is running on port number 3000.......")
})