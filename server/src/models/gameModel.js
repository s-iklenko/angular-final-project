const mongoose = require('mongoose');

const GameCard = mongoose.model('GameCard', {
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    completed: {
        type: Boolean,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = {GameCard};