'use strict';

import * as express from "express";
import { DatabaseRepository } from "./database/database-repository";
import { MongoDbRepository } from "./database/mongo-db-repository";
import { RavenDbRepository } from "./database/raven-db-repository";
import { Config } from "./config/config";
import { User } from "./models/User";
var csrf              = require('csurf');                   // https://github.com/expressjs/csurf
var compress          = require('compression');             // https://github.com/expressjs/compression
var bodyParser        = require('body-parser');             // https://github.com/expressjs/body-parser
var errorHandler      = require('errorhandler');            // https://github.com/expressjs/errorhandler
var methodOverride    = require('method-override');         // https://github.com/expressjs/method-override
var cors = require('cors'); 
var fs                = require('fs');                      // http://nodejs.org/docs/v0.10.25/api/fs.html
var path              = require('path');                    // http://nodejs.org/docs/v0.10.25/api/path.html
var app    = express();  // export app for testing ;)
var server = require('http').Server(app);
//var io     = require('socket.io')(server);

var config:any            = require('./config/config');         // Get configuration file
var passport          = require('passport');                // https://npmjs.org/package/passport
var expressValidator  = require('express-validator');       // https://npmjs.org/package/express-validator
var cookieSession = require('cookie-session');


/**
 * Configure Database
 */

 let db:DatabaseRepository;
 if(config.database.type=='ravendb'){
  db = new RavenDbRepository();
  
 } else if(config.database.type=='mongodb'){
  db = new MongoDbRepository();  
 }
 db.on('error', ()=> {
  console.error(`database Connection Error. Please make sure the database is running. database.url: ${config.database.url}`);
  process.exit(0);
});
db.on('open', async () => {
  console.log(`${config.database.url} connected!`);
  config.databaseRepository = db;
  
  // "server.listen" for socket.io
  server.listen(app.get('port'), () => {

    // Log how we are running
    console.log(`listening on port: ${app.get('port')} app.settings.env: ${app.settings.env}`);    

    // Exit cleanly on Ctrl+C
    process.on('SIGINT', function () {
      //io.close();  // close socket.io
      console.log('\n');
      console.log('has ' + 'shutdown');
      console.log('was running for ' + Math.round(process.uptime()).toString() + ' seconds.');
      process.exit(0);
    });
  });
});
 db.init(config.database.url);




app.locals.application  = config.name;
// Format dates/times in jade templates
// Use moment anywhere within a jade template like this:
// p #{moment(Date.now()).format('MM/DD/YYYY')}
// http://momentjs.com/
// Good for an evergreen copyright ;)
app.locals.moment = require('moment');

// Format numbers in jade templates:
// Use numeral anywhere within a jade template like this:
// #{numeral('123456').format('$0,0.00')}
// http://numeraljs.com/
app.locals.numeral = require('numeral');

// Port to listen on.
app.set('port', config.port);

// // Setup the view engine (jade)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());

// Compress response data with gzip / deflate.
// This middleware should be placed "high" within
// the stack to ensure all responses are compressed.
app.use(compress());

// Body parsing middleware supporting
// JSON, urlencoded, and multipart requests.
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Easy form validation!
// This line must be immediately after bodyParser!
app.use(expressValidator());

// If you want to simulate DELETE and PUT
// in your app you need methodOverride.
app.use(methodOverride());

// Use sessions
app.use(cookieSession({
  name: 'session',
  keys: [config.session.secret],
 
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// app.use((req:any, res:any, next:any) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// });

// Security Settings
app.disable('x-powered-by');          // Don't advertise our server type
app.use(csrf());                      // Prevent Cross-Site Request Forgery
// app.use(helmet.ienoopen());           // X-Download-Options for IE8+
// app.use(helmet.nosniff());            // Sets X-Content-Type-Options to nosniff
// app.use(helmet.xssFilter());          // sets the X-XSS-Protection header
// app.use(helmet.frameguard('deny'));   // Prevent iframe clickjacking

app.use(passport.initialize());
app.use(passport.session());

// Keep user, csrf token and config available
app.use(function (req:any, res, next) {
  res.locals.user = req.user;
  res.locals.config = config;
  res.locals._csrf = req.csrfToken();
  res.set('X-CSRF-Token', res.locals._csrf);
  next();
});

// error handler
app.use(function (err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN') return next(err)

  // handle CSRF token errors here
  res.status(403)
  res.send( { error: 'CSRF token error'});
})

// Dynamically include routes (via controllers)
fs.readdirSync(__dirname + '/controllers').forEach((file:any) => {
  if (file.substr(-3) === '.js') {
    var route = require(__dirname + '/controllers/' + file);
    route.controller(app, db);
  }
});


// Handle 404 Errors
app.use(function (req:any, res:any, next:any) {
  res.status(404);
  console.log('404 Warning. URL: ' + req.url);

  // Respond with html page
  // if (req.accepts('html')) {
  //   res.render('error/404', { url: req.url });
  //   return;
  // }

  // Respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found!' });
    return;
  }

  // Default to plain-text. send()
  res.type('txt').send('Error: Not found!');

});

// True error-handling middleware requires an arity of 4,
// aka the signature (err, req, res, next).

// Handle 403 Errors
app.use(function (err:any, req:any, res:any, next:any) {
  if (err.status === 403) {
    res.status(err.status);
    console.log('403 Not Allowed. URL: ' + req.url + ' Err: ' + err);

    // Respond with HTML
    // if (req.accepts('html')) {
    //   res.render('error/403', {
    //     error: err,
    //     url: req.url
    //   });
    //   return;
    // }

    // Respond with json
    if (req.accepts('json')) {
      res.send({ error: 'Not Allowed!' });
      return;
    }

    // Default to plain-text. send()
    res.type('txt').send('Error: Not Allowed!');

  } else {
    // Since the error is not a 403 pass it along
    return next(err);
  }
});

// Production 500 error handler (no stacktraces leaked to public!)
if (app.get('env') === 'production') {
  app.use((err:any, req:express.Request, res:express.Response,next:express.NextFunction) => {
    res.status(err.status || 500);
    console.error('Error: ' + (err.status || 500).toString() + ' ' + err);
    res.json({
      error: {}  // don't leak information
    });
  });
}

// Development 500 error handler
if (app.get('env') === 'development') {
  app.use((err:any, req:express.Request, res:express.Response,next:express.NextFunction) => {
    res.status(err.status || 500);
    console.log('Error: ' + (err.status || 500).toString() + ' ' + err);    
    res.json({message:err.message, stack: err.stack });
  });

  // Final error catch-all just in case...
  app.use(errorHandler());



}

