const express = require("express");
const router = express.Router();

const { addFriend, getFriendsList, getFriend } = require("../services/friendsService");
const { asyncWrapper } = require("../utils/apiUtils");

router.post('/friends', asyncWrapper(async (req, res) => {
    const {userId} = req.user;
    const {title} = req.body;

    await addFriend(userId, title);

    res.json({message: "Friend added successfully"});
}));

router.get('/friends', asyncWrapper(async (req, res) => {
    const {userId} = req.user;    

    const friends = await getFriendsList(userId);

    res.json(friends);
}));

router.delete('/:id', asyncWrapper(async (req,res) => {
    const {userId} = req.user;
    const {id} = req.params;

    await getFriend(id, userId);

    res.json({message: 'Friend delete successfully'});

}));

module.exports = {
    friendRouter: router,
};