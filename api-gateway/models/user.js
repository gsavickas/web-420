// ============================================
// ; Title:  API-Gateway
// ; Author: Grayton Savickas
// ; Date: 27 Mar 2021
// ; Description: gateway project
// ;===========================================
// */

// imports mongoose
var mongoose = require('mongoose')

// Creates a user schema in mongoose
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

// Exports our user schema
module.exports = mongoose.model('User', userSchema);
