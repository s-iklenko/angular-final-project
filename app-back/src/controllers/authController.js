const express = require('express');
const router = express.Router();

const {registration, signIn} = require('../services/authService');
const {asyncWrapper} = require('../utils/apiUtils');
const {registrationValidator} = require('../middlewares/validationMidlleware');

router.post('/reg', registrationValidator, asyncWrapper(async (req, res) => {
    const {
        email,
        password
    } = req.body;

    await registration({email, password});

    res.json({message: 'Account created successfully'});
}));

router.post('/auth', asyncWrapper(async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const token = await signIn({email, password});

    res.json(token);
    // res.json({jwt_token: token, message: 'Logged in successfully!'});

}));

module.exports = {
    authRouter: router
};
