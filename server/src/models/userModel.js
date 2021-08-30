const mongoose = require('mongoose');

const User = mongoose.model('User', {
    username: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = { User };