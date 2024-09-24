const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to authenticate and authorize users
const authenticate = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// Manager dashboard
router.get('/manager', authenticate, (req, res) => {
  if (req.user.role !== 'manager') {
    return res.status(403).json({ message: 'Access denied' });
  }
  res.sendFile(__dirname + '/../views/manager.html');
});

// Employee dashboard
router.get('/employee', authenticate, (req, res) => {
  if (req.user.role !== 'employee') {
    return res.status(403).json({ message: 'Access denied' });
  }
  res.sendFile(__dirname + '/../views/employee.html');
});

module.exports = router;
