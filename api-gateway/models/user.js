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
