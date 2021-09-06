const {User} = require('../models/userModel');

const getUserById = async (userId) => {
    const user = await User.findOne({_id: userId}, '-__v -password');
    return user;
}

const changeProfile = async (userId, username, age) =>{
    const user = await User.findOne({_id: userId});
    await user.updateOne({$set: {username, age}});
};

module.exports = {
    getUserById,
    changeProfile
}
