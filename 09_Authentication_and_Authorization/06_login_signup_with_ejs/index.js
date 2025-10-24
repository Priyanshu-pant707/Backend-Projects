
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const userModel = require('./models/user'); // Mongoose User Model


const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.send("<script>alert('User not found'); window.location='/login';</script>");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.send("<script>alert('Invalid credentials'); window.location='/login';</script>");
        }

        // Login successful
        res.render('loginSuccessFull', { user });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/signup', (req, res) => {
    res.render('signup');
});

app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.send("<script>alert('User already exists'); window.location='/signup';</script>");
        }

        // Hash password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        await userModel.create({
            name,
            email,
            password: hashedPassword
        });

        res.render('SignupSuccessfull');
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/logout/:userid', async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.userid);
        res.send("<script>alert('Account deleted successfully'); window.location='/';</script>");
    } catch (error) {
        console.error('Logout/Delete Error:', error);
        res.status(500).send('Internal Server Error');
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
