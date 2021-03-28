/*
============================================
; Title:  API gateway
; Author: Grayton Savickas
; Date:   27 Mar 2021
; Modified By: 
; Description: Project to demonstrate creating RESTful APIs
;===========================================
*/

const header = require('../week-1/savickas-header')
// Tests the import of header function works
var headerValue = header.display("Grayton", "Savickas", "API gateway")
console.log(headerValue);

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var apiCatalog = require("./routes/api-catalog");

var indexRouter = require('./routes/index');

var app = express();

// database connection string to MongoDB Atlas
const conn = 'mongodb+srv://dbUser-gss:wANRMmT7OFBXFO2g@mando21.06wom.mongodb.net/api-gateway?retryWrites=true&w=majority';

/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
}).then(() => {
  console.log('Connection to the database instance was successful');
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiCatalog);

app.use('/', indexRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
