const jwt = require('jsonwebtoken');
const config = require('./config');

module.exports = (req, res, next) => {
    try {
        let token = req.headers['authorization'].split(' ')[1];
        const decoded = jwt.verify(token, config.secret);
        req.userData = decoded; //Add new field to my request
        next();
    } catch (error) {
        return res.status(401).json({message: "Auth failed"});
    }
};