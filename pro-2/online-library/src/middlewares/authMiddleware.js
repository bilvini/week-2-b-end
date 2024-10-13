const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Not authorized' });

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = { id: decoded.id }; // Simulate user retrieval
        next();
    } catch (error) {
        res.status(401).json({ message: 'Not authorized' });
    }
};

module.exports = { protect };
