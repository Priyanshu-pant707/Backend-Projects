const mongoose = require('mongoose');


function connectDB() {
    mongoose.connect(`your mongodb url`).then(() => {
        console.log('Database connected successfully');
    }).catch((err) => {
        console.log('Database connection failed', err);
    });
}

module.exports = connectDB;