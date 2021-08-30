const express = require('express');
const router = express.Router();

const {
    getUserById,
    changeProfile
} = require('../services/usersService');

const {
    asyncWrapper
} = require('../utils/apiUtils');

router.get('/profile', asyncWrapper(async (req, res) => {
    const {userId} = req.user;
    const user = await getUserById(userId);

    res.json(user);

}));

router.patch('/profile', asyncWrapper(async (req, res) => {
    const {userId} = req.user;
    const {username, age} = req.body;

    await changeProfile(userId, username, age);

    res.json({message: "Profile updated"});
}));

module.exports = {
    usersRouter: router
}
