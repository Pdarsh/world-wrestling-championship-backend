const jwt = require('jsonwebtoken');
const {verifyToken} = require("../helpers/jwtHelpers")
const authMiddleware = (req, res, next) => {
  // Check if the request is for the login route
  if (req.path === '/login') {
    return next();
  }

  // Check if the Authorization header is present
  const token = req.headers.authorization;
  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify and decode the JWT token
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({error:err.message});
  }

};

module.exports = authMiddleware;
