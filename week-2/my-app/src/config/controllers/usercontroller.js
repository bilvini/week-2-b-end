const userService = require('../controllers/userService');
const { formatResponse } = require('../utils/responseFormatter');

const registerUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(formatResponse(user));
    } catch (error) {
        next(error);
    }
};

const getUser = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json(formatResponse(null, 'User not found'));
        res.json(formatResponse(user));
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.json(formatResponse(users));
    } catch (error) {
        next(error);
    }
};

module.exports = { registerUser, getUser, getAllUsers };
