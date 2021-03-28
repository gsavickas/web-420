// ============================================
// ; Title:  API-Gateway
// ; Author: Grayton Savickas
// ; Date: 27 Mar 2021
// ; Description: gateway project
// ;===========================================
// */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
