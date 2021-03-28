// ============================================
// ; Title:  API-Gateway
// ; Author: Grayton Savickas
// ; Date: 27 Mar 2021
// ; Description: gateway project
// ;===========================================
// */
var User = require('../models/user');

// Register a new user on POST
exports.user_register = function(req, res){
    res.send('Not Implemented: User registration POST');
};

// Verify token on GET
exports.user_token = function(req, res){
    res.send('Not Implemented: User token lookup GET');
};

