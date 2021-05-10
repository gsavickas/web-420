// ============================================
// ; Title:  API-Gateway
// ; Author: Grayton Savickas
// ; Date: 27 Mar 2021
// ; Description: gateway project
// ;===========================================
// */

// API Routes
var express = require('express');
var router = express.Router();
var auth_controller = require("../controllers/authController");
var checkToken = require("../check-token");

var auth_controller = require('../controllers/authController');

// POST request for user registering
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user token
router.get("/auth/token", checkToken, auth_controller.user_token);

// POST allows users login requests
router.post('/auth/login', auth_controller.user_login);

// GET allows user to logout via request
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;