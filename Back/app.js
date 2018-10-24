var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var rooter = require('./routes/routing');

var app = express();

//handle CORS 
// app.use((req, res, next) => {
//   res.setHeader('Content-type','application/json');
//   res.setHeader('Accept','application/json');
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
//   res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use(function(req, res, next) {
  res.setHeader('Content-type','application/json');
  res.setHeader('Accept','application/json');
  res.setHeader('Accept','text');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin');
  next();
});

//database setup
mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://user1:admin1@ds141872.mlab.com:41872/angular-project', {
      useNewUrlParser: true
  }
).then(() => {
  console.log('Database connected!')
}).catch((err) => {
  console.log('Could not connect to the database now. ', err)
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', rooter);

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
