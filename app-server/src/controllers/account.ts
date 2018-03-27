import { DatabaseRepository } from "../database/database-repository";

'use strict';

/**
 * Module Dependences
 */

var _             = require('lodash');
var User          = require('../models/User');
var debug         = require('debug')('skeleton');       // https://github.com/visionmedia/debug
var utils         = require('../config/utils');
var config        = require('../config/config');
var passport      = require('passport');
var nodemailer    = require('nodemailer');
var passportConf  = require('../config/passport');


/**
 * Account Controller
 */

module.exports.controller = function (app:any, databaseRepository:DatabaseRepository) {

  /**
   * GET /account*
   * *ALL* acount routes must be authenticated first
   */

  app.all('/api/dashboard', passportConf.isAuthenticated);

  
  app.get('/api/dashboard', function (req:any, res:any) {
    return res.json({ user: req.user });
  });
  
  /**
   * GET /account
   * Render User Profile Page
   */

  app.get('/account', function (req:any, res:any) {
    res.render('account/profile', {
      url: req.url
    });
  });

  /**
   * POST /account
   * Update User Profile Information
   */

  app.post('/account/profile', function (req:any, res:any, next:any) {

    // Create a workflow (here you could also use the async waterfall pattern)
    var workflow = new (require('events').EventEmitter)();

    /**
     * Step 1: Validate the form data
     */

    workflow.on('validate', function () {

      req.assert('name', 'Your name cannot be empty.').notEmpty();
      req.assert('email', 'Your email cannot be empty.').notEmpty();
      req.assert('email', 'Your email is not valid.').isEmail();
      req.assert('website', 'Website URL is not valid.').isURL();

      var errors = req.validationErrors();

      if (errors) {
        req.flash('error', errors);
        return res.redirect('/account');
      }

      // next step
      workflow.emit('updateProfile');
    });

    /**
     * Step 2: Update the user's information
     */

    workflow.on('updateProfile', function () {

      User.findById(req.user.id, function (err:any, user:any) {
        if (err) {
          return next(err);
        }

        user.email = req.body.email.toLowerCase() || '';
        user.profile.name = req.body.name.trim() || '';
        user.profile.gender = req.body.gender || '';
        user.profile.location = req.body.location.trim() || '';
        user.profile.phone.mobile = req.body.phoneMobile.trim() || '';
        user.profile.website = req.body.website.trim() || '';
        user.activity.last_updated = Date.now();

        user.save(function (err:any) {
          if (err) {
            return next(err);
          }

          // next step, pass user
          workflow.emit('sendAccountEmail', user);

        });
      });

    });

    /**
     * Step 3: Send the User an email letting them know their
     * password was changed.  This is important in case the
     * user did not initiate the reset!
     */

    workflow.on('sendAccountEmail', function (user:any) {

      // Create reusable transporter object using SMTP transport
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: config.gmail.user,
          pass: config.gmail.password
        }
      });

      // Render HTML to send using .jade mail template (just like rendering a page)
      res.render('mail/accountChange', {
        name:          user.profile.name,
        mailtoName:    config.smtp.name,
        mailtoAddress: config.smtp.address
      }, function (err:any, html:any):any {
        if (err) {
          return err;
        }
        else {

          // Now create email text (multiline string as array FTW)
          var text = [
            'Hello ' + user.profile.name + '!',
            'This is a courtesy message to confirm that your profile information was just updated.',
            'Thanks so much for using our services! If you have any questions, or suggestions, feel free to email us here at ' + config.smtp.address + '.',
            '  - The ' + config.smtp.name + ' team'
          ].join('\n\n');

          // Create email
          var mailOptions = {
            to:       user.profile.name + ' <' + user.email + '>',
            from:     config.smtp.name + ' <' + config.smtp.address + '>',
            subject:  'Your ' + app.locals.application + ' profile was updated',
            text:     text,
            html:     html
          };

          // Send email
          transporter.sendMail(mailOptions, function (err:any, info:any) {
            if (err) {
              req.flash('error', { msg: JSON.stringify(err) });
              debug(JSON.stringify(err));
              res.redirect('back');
            } else {
              req.flash('success', { msg: 'Your profile was updated.' });
              debug('Message response: ' + info.response);
              res.redirect('/account');
            }
          });

        }
      });

    });

    /**
     * Initiate the workflow
     */

    workflow.emit('validate');

  });

  /**
   * POST /account/password
   * Update User Password
   */

  app.post('/account/password', function (req:any, res:any, next:any) {

    // Create a workflow (here you could also use the async waterfall pattern)
    var workflow = new (require('events').EventEmitter)();

    /**
     * Step 1: Validate the password(s) meet complexity requirements and match.
     */

    workflow.on('validate', function () {
      req.assert('password', 'Your password cannot be empty.').notEmpty();
      req.assert('confirmPassword', 'Your password confirmation cannot be empty.').notEmpty();
      req.assert('password', 'Password must be at least 4 characters long').len(4);
      req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

      var errors = req.validationErrors();

      if (errors) {
        req.flash('error', errors);
        return res.redirect('/account');
      }

      // next step
      workflow.emit('updatePassword');
    });

    /**
     * Step 2: Update the user's passwords
     */

    workflow.on('updatePassword', function () {

      User.findById(req.user.id, function (err:any, user:any) {
        if (err) {
          return next(err);
        }

        user.password = req.body.password;
        user.activity.last_updated = Date.now();

        user.save(function (err:any) {
          if (err) {
            return next(err);
          }

          // next step, pass user
          workflow.emit('sendPasswordEmail', user);

        });
      });

    });

    /**
     * Step 3: Send the User an email letting them know their
     * password was changed.  This is important in case the
     * user did not initiate the reset!
     */

    workflow.on('sendPasswordEmail', function (user) {

      // Create reusable transporter object using SMTP transport
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: config.gmail.user,
          pass: config.gmail.password
        }
      });

      // Render HTML to send using .jade mail template (just like rendering a page)
      res.render('mail/passwordChange', {
        name:          user.profile.name,
        mailtoName:    config.smtp.name,
        mailtoAddress: config.smtp.address
      }, function (err:any, html:any):any{
        if (err) {
          return err;
        }
        else {

          // Now create email text (multiline string as array FTW)
          var text = [
            'Hello ' + user.profile.name + '!',
            'This is a courtesy message to confirm that your password was just changed.',
            'Thanks so much for using our services! If you have any questions, or suggestions, feel free to email us here at ' + config.smtp.address + '.',
            '  - The ' + config.smtp.name + ' team'
          ].join('\n\n');

          // Create email
          var mailOptions = {
            to:       user.profile.name + ' <' + user.email + '>',
            from:     config.smtp.name + ' <' + config.smtp.address + '>',
            subject:  'Your ' + app.locals.application + ' password was changed',
            text:     text,
            html:     html
          };

          // Send email
          transporter.sendMail(mailOptions, function (err:any, info:any) {
            if (err) {
              req.flash('error', { msg: err });
              return res.redirect('/account');
            } else {
              debug('Message sent: ' + info.response);
            }
          });

          // Send user on their merry way
          req.flash('success', { msg: 'Your password was changed!' });
          res.redirect('/account');

        }
      });

    });

    /**
     * Initiate the workflow
     */

    workflow.emit('validate');

  });

  /**
   * POST /account/delete
   * Delete User Account
   */

  app.post('/account/delete', function (req:any, res:any, next:any) {
    User.remove({ _id: req.user.id }, function (err:any) {
      if (err) {
        return next(err);
      }
      req.logout();
      res.redirect('/');
    });
  });

  /**
   * GET /account/unlink/:provider
   * Unlink a social account
   */

  app.get('/account/unlink/:provider', function (req:any, res:any, next:any) {
    var provider = req.params.provider;
    User.findById(req.user.id, function (err:any, user:any) {
      if (err) {
        return next(err);
      }

      user[provider] = undefined;
      user.tokens = _.reject(user.tokens, function (token:any) {
        return token.kind === provider;
      });
      user.activity.last_updated = Date.now();

      user.save(function (err:any) {
        if (err) {
          return next(err);
        }
        req.flash('info', { msg: 'Your ' + utils.capitalize(provider) + ' account has been disconnected. :(' });
        res.redirect('/account');
      });
    });
  });

  /**
   * Link Facebook
   */

  app.get('/account/link/facebook',
    passport.authenticate('facebook', {
      callbackURL: '/account/link/facebook/callback',
      failureRedirect: '/account'
    })
  );

  app.get('/account/link/facebook/callback', function (req:any, res:any, next:any) {
    passport.authenticate('facebook', {
      callbackURL: '/account/link/facebook/callback',
      failureRedirect: '/account'
    }, function (err:any, user:any, info:any) {

      // Let's check to make sure we don't already have an account with the same credentials
      User.findOne({ facebook: info.profile._json.id }, function (err:any, existingUser:any) {
        if (existingUser) {
          req.flash('error', { msg: 'Your Facebook acoount is already connected to another ' + config.name + ' account!' });
          req.flash('info', { msg: 'Sign in with that account and delete it. Then sign back in (with this account) and link your Facebook account.' });
          return res.redirect('/account');
        } else {
          // Link Accounts: Associate the *new* Facebook information to the person's *existing* account
          User.findById(req.user.id, function (err:any, user:any) {

            user.facebook = info.profile.id;
            user.tokens.push({ kind: 'facebook', accessToken: info.accessToken });
            user.profile.name = user.profile.name || info.profile._json.name;
            user.profile.gender = user.profile.gender || info.profile._json.gender;
            user.profile.picture = user.profile.picture || 'https://graph.facebook.com/' + info.profile.id + '/picture?type=large';
            user.profile.location = user.profile.location || info.profile._json.location.name;

            user.save(function (err:any) {
              if (err) {
                return next(err);
              }
              req.flash('info', { msg: 'Your Facebook account has been connected! :)' });
              return res.redirect('/account');
            });
          });
        }
      });

    })(req, res, next);
  });

  /**
   * Link Twitter
   */

  app.get('/account/link/twitter',
    passport.authenticate('twitter', {
      callbackURL: '/account/link/twitter/callback',
      failureRedirect: '/account'
    })
  );

  app.get('/account/link/twitter/callback', function (req:any, res:any, next:any) {
    passport.authenticate('twitter', {
      callbackURL: '/account/link/twitter/callback',
      failureRedirect: '/account'
    }, function (err:any, user:any, info:any) {

      // Let's check to make sure we don't already have an account with the same credentials
      User.findOne({ twitter: info.profile._json.id }, function (err:any, existingUser:any) {
        if (existingUser) {
          req.flash('error', { msg: 'Your Twitter acoount is already connected to another ' + config.name + ' account!' });
          req.flash('info', { msg: 'Sign in with that account and delete it. Then sign back in (with this account) and link your Twitter account.' });
          return res.redirect('/account');
        } else {
          // Link Accounts: Associate the *new* Twitter information to the person's *existing* account
          User.findById(req.user.id, function (err:any, user:any) {

            user.twitter = info.profile.id;
            user.tokens.push({ kind: 'twitter', token: info.token, tokenSecret: info.tokenSecret });
            user.profile.name = user.profile.name || info.profile._json.name;
            user.profile.location = user.profile.location || info.profile._json.location;
            user.profile.picture = user.profile.picture || info.profile._json.profile_image_url;

            user.save(function (err:any) {
              if (err) {
                return next(err);
              }
              req.flash('info', { msg: 'Your Twitter account has been connected! :)' });
              return res.redirect('/account');
            });
          });
        }
      });

    })(req, res, next);
  });

  /**
   * Link Github
   */

  app.get('/account/link/github',
    passport.authenticate('github', {
      callbackURL: '/account/link/github/callback',
      failureRedirect: '/account'
    })
  );

  app.get('/account/link/github/callback', function (req:any, res:any, next:any) {
    passport.authenticate('github', {
      callbackURL: '/account/link/github/callback',
      failureRedirect: '/account'
    }, function (err:any, user:any, info:any) {

      // Let's check to make sure we don't already have an account with the same credentials
      User.findOne({ github: info.profile._json.id }, function (err:any, existingUser:any) {
        if (existingUser) {
          req.flash('error', { msg: 'Your GitHub acoount is already connected to another ' + config.name + ' account!' });
          req.flash('info', { msg: 'Sign in with that account and delete it. Then sign back in (with this account) and link your GitHub account.' });
          return res.redirect('/account');
        } else {
          // Link Accounts: Associate the *new* GitHub information to the person's *existing* account
          User.findById(req.user.id, function (err:any, user:any) {

            user.github = info.profile.id;
            user.tokens.push({ kind: 'github', accessToken: info.accessToken });
            user.profile.name = user.profile.name || info.profile._json.name;
            user.profile.picture = user.profile.picture || info.profile._json.avatar_url;
            user.profile.location = user.profile.location || info.profile._json.location;
            user.profile.website = user.profile.website || info.profile._json.html_url;

            user.save(function (err:any) {
              if (err) {
                return next(err);
              }
              req.flash('info', { msg: 'Your GitHub account has been connected! :)' });
              return res.redirect('/account');
            });
          });
        }
      });

    })(req, res, next);
  });

  /**
   * Link Google
   */

  app.get('/account/link/google',
    passport.authenticate('google', {
      callbackURL: '/account/link/google/callback',
      failureRedirect: '/account'
    })
  );

  app.get('/account/link/google/callback', function (req:any, res:any, next:any) {
    passport.authenticate('google', {
      callbackURL: '/account/link/google/callback',
      failureRedirect: '/account'
    }, function (err:any, user:any, info:any) {

      // Let's check to make sure we don't already have an account with the same credentials
      User.findOne({ google: info.profile._json.id }, function (err:any, existingUser:any) {
        if (existingUser) {
          req.flash('error', { msg: 'Your Google acoount is already connected to another ' + config.name + ' account!' });
          req.flash('info', { msg: 'Sign in with that account and delete it. Then sign back in (with this account) and link your Google account.' });
          return res.redirect('/account');
        } else {

          // Link Accounts: Associate the *new* Google information to the person's *existing* account
          User.findById(req.user.id, function (err:any, user:any) {

            user.google = info.profile.id;
            user.tokens.push({ kind: 'google', accessToken: info.accessToken });
            user.profile.name = user.profile.name || info.profile._json.name;
            user.profile.gender = user.profile.gender || info.profile._json.gender;
            user.profile.website = user.profile.website || info.profile._json.link;
            user.profile.picture = user.profile.picture || info.profile._json.picture;

            user.save(function (err:any) {
              if (err) {
                return next(err);
              }
              req.flash('info', { msg: 'Your Google account has been connected! :)' });
              return res.redirect('/account');
            });
          });
        }
      });

    })(req, res, next);
  });

};
