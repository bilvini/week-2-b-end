const User = require('../service/User');

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const getUserById = async (id) => {
    return await User.findById(id);
};

const getAllUsers = async () => {
    return await User.find();
};

module.exports = { createUser, getUserById, getAllUsers };
