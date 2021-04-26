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

const User = module.exports = mongoose.model("User", userSchema);

// user.save is for adding a new user in the database
module.exports.add = (user, callback) => {
    user.save(callback);
};

// function to GET a user by their id
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};

module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};

// Exports our user schema
module.exports = mongoose.model('User', userSchema);
