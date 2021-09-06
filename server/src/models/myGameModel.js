const mongoose = require('mongoose');

const myGameCard = mongoose.model('myGameCard', {
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true
  // },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    // required: true,
  },
  img: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  completed: {
    type: Boolean,
    // required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = {myGameCard};
