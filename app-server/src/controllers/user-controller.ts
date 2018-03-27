var async = require('async');
var config = require('../config/config');
var passport = require('passport');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
import * as express from "express";
import * as crypto from "crypto";
import { VerifyResult } from './../../../app-ui/src/shared/verify-request';
import { SignupResult } from './../../../app-ui/src/shared/signup-result';
import { LoginResult } from "../../../app-ui/src/shared/LoginResult";
import { UserNavView } from "../../../app-ui/src/shared/user-nav-view";
import { DatabaseRepository } from '../database/database-repository';
import { LoginAttempt } from '../models/LoginAttempt';
import { User } from '../models/User';
import to from '../config/utils';

export class UserController {
  
 
  constructor(app: any, private databaseRepository:DatabaseRepository) {
    app.get('/api/login', this.loginGET.bind(this));
    app.post('/api/login', this.loginPOST.bind(this));
    app.post('/api/logout', this.logout.bind(this));
    app.post('/api/signup', this.signup.bind(this));
    app.get('/api/verify', this.verify.bind(this));
  }


  
  signup(req, res){


    // Begin a workflow
    var workflow = new (require('events').EventEmitter)();
    
        /**
         * Step 1: Validate the form fields
         */
    
        workflow.on('validate', function () {
    
          // Check for form errors
          req.assert('name', 'Your name cannot be empty.').notEmpty();
          req.assert('email', 'Your email cannot be empty.').notEmpty();
          req.assert('email', 'Your email is not valid.').isEmail();
          req.assert('password', 'Your password cannot be empty.').notEmpty();
          req.assert('confirmPassword', 'Your password confirmation cannot be empty.').notEmpty();
          req.assert('password', 'Your password must be at least 4 characters long.').len(4);
          req.assert('confirmPassword', 'Your passwords do not match.').equals(req.body.password);
    
          var errors = req.validationErrors();
          let result = new SignupResult();
          if (errors) {
            result.errors = errors.map(e => e.msg);
            return res.json(result);
          }
    
          // next step
          workflow.emit('verification');
        });
    
        /**
         * Step 2: Account verification step
         */
    
        workflow.on('verification', function () {
    
          var verified;
          var verifyToken;
    
          
          verified = false;
          // generate verification token
          crypto.randomBytes(25, function (err, buf) {
            verifyToken = buf.toString('hex');
            // next step
            workflow.emit('createUser', verified, verifyToken);
          });
        
    
        });
    
        /**
         * Step 3: Create a new account
         */
    
        workflow.on('createUser', async (verified, verifyToken) =>{
    
          // create user
          var user = new User();
          user.profile.name = req.body.name.trim();
          user.email = req.body.email.toLowerCase();
          user.password = req.body.password;
          user.verifyToken = verifyToken;
          user.verified = verified;
          user.activity.date_established = Date.now();
          user.type = 'user';
          user.password = await user.hashPassword();          
              
          // save user
          let [err,tmp] = await to(this.databaseRepository.saveUser(user));
          if (err) {
            let result = new SignupResult();
            if (err.code === 11000) {                
              result.errors.push('An account with that email address already exists! You should sign in with that account.')                
              return res.json(result);
            }
            result.errors.push(`Error: ${err.code}`);  
            return res.json(result);
          } else {
            // next step (4a)
            workflow.emit('sendValidateEmail', user, verifyToken);
          }
    
        });
    
        /**
         * Step 4a: Send them a validate email
         */
    
        workflow.on('sendValidateEmail', function (user, verifyToken) {
    
          var transporter = nodemailer.createTransport(sgTransport(config.sendgridOptions));
          let verificationLink = `${req.protocol}://${req.headers.host}/?id=${user.id}&token=${user.verifyToken}#/verify`;

          // Render HTML to send using .jade mail template (just like rendering a page)
          res.render('mail/accountVerification', {
            name:          user.profile.name,
            mailtoName:    config.smtp.name,
            validateLink:  verificationLink
          }, function (err, html) {
            if (err) {
              console.log('error', err);
              // return res.json(err);              
            }
            else {
              // Now create email text (multiline string as array FTW)
              var text = [
                'Hello ' + user.profile.name + '!',
                'Welcome to ' + config.name + '!  Here is a special link to activate your new account:',
                verificationLink,
                '  - The ' + config.smtp.name + ' team'
              ].join('\n\n');
    
              // Create email
              var mailOptions = {
                to:       user.profile.name + ' <' + user.email + '>',
                from:     config.smtp.name + ' <' + config.smtp.address + '>',
                subject:  'Activate your new ' + config.name + ' account',
                text:     text,
                html:     html
              };
    
              // Send email
              transporter.sendMail(mailOptions, function (err, info) {
                let result = new SignupResult();
                if (err) {
                  result.errors.push(JSON.stringify(err));
                  console.error(JSON.stringify(err));
                } else {                  
                  result.message = 'Please check your email to verify your account. Thanks for signing up!';
                  result.success = true;
                }
                return res.json(result);
              });
    
            }
          });
    
          // WORKFLOW COMPLETED
    
        });
    
    
        /**
         * Initiate the workflow
         */
    
        workflow.emit('validate');
    
      
  }
  /**
     * GET /login
     * Render login page
     */
  loginGET(req, res) {
    // Check if user is already logged in5
    let result: LoginResult = new LoginResult();
    
    if (req.user) {
      result.success = true;
      result.user = this.getUserNavView(req.user);
    }
    // Turn off login form if too many attempts
    result.tooManyAttempts = req.session.tooManyAttempts || false;
    req.session.tooManyAttempts = null;
    return res.json(result);
  }

  /**
  * POST /login
  * Log the user in
  */
  loginPOST(req: any, res: express.Response, next: express.NextFunction) {

    let that = this;
    // Begin a workflow
    var workflow = new (require('events').EventEmitter)();
    
    /**
     * Step 1: Validate the data
     */

    workflow.on('validate', () => {

      let result: LoginResult = new LoginResult();
      if (req.user) {
        result.success = true;
        result.user = this.getUserNavView(req.user);        
        return res.json(result);
      }
      // Validate the form fields
      req.assert('email', 'Your email cannot be empty.').notEmpty();
      req.assert('email', 'Your email is not valid').isEmail();
      req.assert('password', 'Your password cannot be blank').notEmpty();
      req.assert('password', 'Your password must be at least 4 characters long.').len(4);

      var errors: any[] = req.validationErrors();

      if (errors) {
        result.errors = errors.map(e => e.msg);
        return res.json(result);
      }

      // next step
      workflow.emit('abuseFilter');
    });

    /**
     * Step 2: Prevent brute force login hacking
     */

    workflow.on('abuseFilter', () => {

      var getIpCount = function (done: any) {
        var conditions = { ip: req.ip };
        
        that.databaseRepository.getLoginAttemptCount(conditions, function (err: any, count: any) {
          if (err) {
            return done(err);
          }
          done(null, count);
        });
      };

      var getIpUserCount = function (done: any) {
        var conditions = { ip: req.ip, user: req.body.email.toLowerCase() };
        that.databaseRepository.getLoginAttemptCount(conditions, function (err: any, count: any) {
          if (err) {
            return done(err);
          }
          done(null, count);
        });
      };

      var asyncFinally = function (err: any, results: any) {
        if (err) {
          return workflow.emit('exception', err);
        }

        if (results.ip >= config.loginAttempts.forIp || results.ipUser >= config.loginAttempts.forUser) {
          let result: LoginResult = new LoginResult();
          result.errors.push('You\'ve reached the maximum number of login attempts. Please try again later or reset your password.');
          req.session.tooManyAttempts = true;
          return res.json(result);
        }
        else {
          workflow.emit('authenticate');
        }

      };

      async.parallel({ ip: getIpCount, ipUser: getIpUserCount }, asyncFinally);
    });

    /**
     * Step 3: Authenticate the user
     */

    workflow.on('authenticate', () => {

      let result: LoginResult = new LoginResult();
      // Authenticate the user
      passport.authenticate('local', async (err: any, user: any, info: any) => {
        if (err) {
          result.errors.push(err.message);
          return res.json(result);
        }

        if (!user) {

          // Update abuse count          
          let loginAttempt = new LoginAttempt();
          loginAttempt.ip = req.ip;
          loginAttempt.user = req.body.email;
          that.databaseRepository.saveLoginAttempt(loginAttempt, function (err: any, doc: any) {
            if (err) {
              result.errors.push(err.message);
              return res.json(result);
            } else {
              // User Not Found (Return)
              result.errors.push(info.message);
              return res.json(result);
            }
          });

        } else {

          // update the user's record with login timestamp
          user.activity.last_logon = Date.now();
          let [err,tmp] = await to(that.databaseRepository.saveUser(user));
          if (err) {
            result.errors.push(err.message);
            return res.json(result);
          }

          // Log user in
          req.logIn(user, (err: any) => {
            if (err) {
              result.errors.push(err.message);
              return res.json(result);
            }

            // Send user on their merry way
            if (req.session.attemptedURL) {
              var redirectURL = req.session.attemptedURL;
              delete req.session.attemptedURL;
              result.redirectURL = redirectURL;
            }
            result.success = true;
            result.user = this.getUserNavView(user);
            return res.json(result);

          });

        }

      })(req, res, next);

    });

    /**
     * Initiate the workflow
     */

    workflow.emit('validate');


  }

  getUserNavView(user: any): UserNavView {
    let view = new UserNavView();
    view.name = user.profile.name || user.email || user.id;
    if (user.profile.picture)
      view.profileImage = user.profile.picture;
    else
      view.profileImage = user.gravatar(60);

    return view;
  }

  /**
   * POST /logout
   * Log the user out
   */
  logout(req: any, res: any) {
    // Augment Logout to handle enhanced security
    delete req.session.passport.secondFactor;
    req.logout();
    return res.json({});
  }

  verify(req: any, res: any){
    

    // Create a workflow
    var workflow = new (require('events').EventEmitter)();
    
        /**
         * Step 1: Validate the user and token
         */
    
        workflow.on('validate', async ()=> {
    
          let result:VerifyResult = new VerifyResult();
          // Get the user using their ID and token          
          let [err, user] = await to(this.databaseRepository.getUserById(req.query.userId));

          if (err || !user) {
            if(err)
              result.errors.push(err.message);
            result.warning = 'Your account verification token is invalid or has expired.';              
            return res.json(result);
          }            

          if(user.verified){
            result.warning = 'Your account has already been verified.';              
            return res.json(result);
          }

          if(user.verifyToken !== req.query.token){
            result.warning = 'Your account verification is invalid or has expired.';              
            return res.json(result);
          }
          
          
  
            // Let's verify the user!
            user.verified = true;
            user.verifyToken = undefined;
            user.activity.last_logon = Date.now();
  
            // update the user record
            let tmp:any;
            [err, tmp] = await to(this.databaseRepository.saveUser(user));
            if (err) {
              result.errors.push(err.message);
              return res.json(result);
            }

            // next step
            workflow.emit('sendWelcomeEmail', user);
        });
    
        /**
         * Step 2: Send them a welcome email
         */
    
        workflow.on('sendWelcomeEmail', function (user) {
    
          
          var transporter = nodemailer.createTransport(sgTransport(config.sendgridOptions));
    
          // Render HTML to send using .jade mail template (just like rendering a page)
          res.render('mail/welcome', {
            name:          user.profile.name,
            mailtoName:    config.smtp.name,
            mailtoAddress: config.smtp.address,            
          }, function (err, html) {
            if (err) {
              console.error(err);
            }
            else {
    
              // Now create email text (multiline string as array FTW)
              var text = [
                'Hello ' + user.profile.name + '!',
                'We would like to welcome you as our newest member!',
                'Thanks so much for using our services! If you have any questions, or suggestions, feel free to email us here at ' + config.smtp.address + '.',                
                '  - The ' + config.smtp.name + ' team'
              ].join('\n\n');
    
              // Create email
              var mailOptions = {
                to:       user.profile.name + ' <' + user.email + '>',
                from:     config.smtp.name + ' <' + config.smtp.address + '>',
                subject:  'Welcome to ' + config.name + '!',
                text:     text,
                html:     html
              };
    
              // Send email
              transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                  console.error(JSON.stringify(err));                  
                } else {
                  console.log('Message response: ' + info);
                }
              });
    
            }
          });
    
          // next step
          workflow.emit('logUserIn', user);
        });
    
        /**
         * Step 3: Log them in
         */
    
        workflow.on('logUserIn', function (user) {
    
          // log the user in
          req.logIn(user, function (err) {
            let result:VerifyResult = new VerifyResult();
            if (err) {                            
              result.errors.push(err.message);            
            }else{
              result.success = true;
              result.message = 'Your account verification is completed!';
            }
                        
            return res.json(result);            
          });
    
          // WORKFLOW COMPLETED
        });
    
        /**
         * Initiate the workflow
         */
    
        workflow.emit('validate');
    
      
  }

}

module.exports.controller = (app:any, db:DatabaseRepository) => { new UserController(app, db); };
