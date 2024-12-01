const jwt = require('jsonwebtoken');

// Middleware for Authenticating Users
const authenticate = (req, res, next) => {
    const token = req.headers['authorization']; // Extact token from Authorization header
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // decoded payload to the request object
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

// Middleware for Authorizing Roles
const authorize = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Permission denied' });
    }
    next();
};

module.exports = { authenticate, authorize }; 
