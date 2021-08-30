const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {User} = require('../models/userModel');

const registration = async ({email, password}) => {
    const user = new User({
        email,
        password: await bcrypt.hash(password,10)
    })
    await user.save();  
}

const signIn = async ({email, password}) => {
    const user = await User.findOne({email});

    if (!user) {
        throw new Error('Invalid email or password');
    }

    if (!(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid email or password');
    }

    const token = jwt.sign({
        _id: user._id,
        email: user.email
    }, 'secret');
    return token;
}

module.exports = {
    registration,
    signIn
}