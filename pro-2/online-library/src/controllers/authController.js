const authService = require('../services/authService');
const { formatResponse } = require('../utils/responseFormatter');

const register = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body);
        res.status(201).json(formatResponse(user));
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const user = await authService.loginUser(req.body.email, req.body.password);
        res.json(formatResponse(user));
    } catch (error) {
        next(error);
    }
};

module.exports = { register, login };
