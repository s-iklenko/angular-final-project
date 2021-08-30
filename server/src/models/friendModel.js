const mongoose = require('mongoose');

const Friend = mongoose.model('Friend', {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
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

module.exports = {Friend};