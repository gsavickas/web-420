// ============================================
// ; Title:  API-Gateway
// ; Author: Grayton Savickas
// ; Date: 27 Mar 2021
// ; Description: gateway project
// ;===========================================
// */
var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';

config.web.secret = 'topSecret';

module.exports = config;