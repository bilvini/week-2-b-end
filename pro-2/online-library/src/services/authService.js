const { users } = require('../config/db');
const User = require('../models/User');

const registerUser = async (userData) => {
    const user = new User(userData.name, userData.email, userData.password);
    users.push(user);
    return user;
};

const loginUser = async (email, password) => {
    const user = users.find((u) => u.email === email);
    if (user && await user.matchPassword(password)) {
        return user;
    }
    throw new Error('Invalid credentials');
};

module.exports = { registerUser, loginUser };
