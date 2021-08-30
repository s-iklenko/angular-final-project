const {Friend} = require('../models/friendModel');

const addFriend = async(userId, title) => {
    
    const friend = new Friend({userId, title});
    await friend.save();
}

const getFriendsList = async() => {
    const friends = await Friend.find();
    return friends;
}

const getFriend = async(friendId, userId) => {
    const friend = Friend.findOne({_id: friendId, userId});
    await friend.remove();
}

module.exports = {
    addFriend,
    getFriendsList,
    getFriend
};