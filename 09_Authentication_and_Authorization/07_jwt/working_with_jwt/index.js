const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const verifyToken = require('./jwtMiddleware');

// imports:

const userModel = require('./user');
const connectDB = require('./db');

// connect to database
connectDB();

//middlewares
app.use(express.json());



app.post('/singup', async function (req, res) {
    const { username, password, email } = req.body;

    const salt = 10;

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, salt);

    const newuser = await userModel.create({
        username,
        password: hashedPassword,
        email
    })
   res.status(201).json({
  message: 'User registered successfully',
  user: { username: newuser.username, email: newuser.email }
});
})


app.post('/login', async function (req, res) {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    // creating a json webtoken : 

    const token = jwt.sign({ id: user._id, username: user.username }, 'secretkey', { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
})




app.get('/profile', verifyToken, function (req, res) {
    res.json({ message: `Welcome ${req.user.username}! This is your profile.` });
})


app.listen(3000, function () {

    console.log('Server is running on port 3000');
});