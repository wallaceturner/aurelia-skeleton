import { ResetResult } from './../../../app-ui/src/shared/reset-result';
import * as express from "express";
var bcrypt        = require('bcrypt-nodejs');
var User = require('../models/User');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var config = require('../config/config');

export class ResetController {
    constructor(app: any) {
        app.get('/api/reset', this.resetGet.bind(this));
        app.post('/api/reset', this.resetPost.bind(this));
    }

    resetGet(req: any, res: express.Response) {
        
        let result:ResetResult = new ResetResult();

        if (req.user) {
            result.alreadyLoggedIn = true;
            return res.json(result);            
        }

        let warningMsg:string='Your password reset request is invalid or has expired. Try again?';
        // Get the user using their ID
        User.findOne({ _id: req.query.userId })
            .where('resetPasswordExpires').gt(Date.now())
            .exec(function (err, user) {
                if (err) {
                    result.errors.push(JSON.stringify(err));
                    result.errors.push(warningMsg);
                    return res.json(result);
                }
                if (!user) {
                    result.errors.push(warningMsg);
                    return res.json(result);
                }
                // Validate their token
                bcrypt.compare(req.query.token, user.resetPasswordToken, function (err, isValid) {
                    if (err) {
                        result.errors.push(JSON.stringify(err));
                        result.errors.push(warningMsg);
                        return res.json(result);
                    }
                    if (!isValid) {
                        result.errors.push(warningMsg);
                        return res.json(result);
                    } else {
                        result.success=true;
                        return res.json(result);
                        // res.render('account/reset', {
                        //     url: req.url
                        // });
                    }
                });
            });
    }

    resetPost(req: any, res: express.Response) {

        let result:ResetResult = new ResetResult();
    // Create a workflow (here you could also use the async waterfall pattern)
    var workflow = new (require('events').EventEmitter)();

    /**
     * Step 1: Validate the password(s) meet complexity requirements and match.
     */

    workflow.on('validate', function () {

      req.assert('password', 'Your password cannot be blank.').notEmpty();
      req.assert('confirm', 'Your password confirmation cannot be blank.').notEmpty();
      req.assert('password', 'Your password must be at least 4 characters long.').len(4);
      req.assert('confirm', 'Your passwords must match.').equals(req.body.password);

      var errors = req.validationErrors();

      if (errors) {
        result.errors = errors.map(e => e.msg);
        return res.json(result);
      }

      // next step
      workflow.emit('findUser');
    });

    /**
     * Step 2: Lookup the User
     * We are doing this again in case the user changed the URL
     */

    workflow.on('findUser', function () {
        let errorMessage:string='Your password reset request is invalid or has expired. Try again?';
      // Get the user using their ID
      User.findOne({ _id: req.body.userId })
        .where('resetPasswordExpires').gt(Date.now())
        .exec(function (err, user) {
          if (err) {
            console.log('err', err.message);
            result.errors.push(errorMessage);  
            return res.json(result);
            
          }
          if (!user) {
            result.errors.push(errorMessage);  
            return res.json(result);
          }
          // Validate their token
          bcrypt.compare(req.body.token, user.resetPasswordToken, function (err, isValid) {
            if (err) {
                console.log('err', err.message);
              result.errors.push(errorMessage);  
              return res.json(result);
            }
            if (!isValid) {
                result.errors.push(errorMessage);  
                return res.json(result);
            }
          });

          // next step
          workflow.emit('updatePassword', user);
        });
    });

    /**
     * Step 3: Update the User's Password and clear the
     * clear the reset token
     */

    workflow.on('updatePassword', function (user) {

      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;

      // update the user record
      user.save(function (err) {
        if (err) {
            result.errors.push(err.message);
            return res.json(result);
        }
        // Log the user in
        req.logIn(user, function (err) {
          if (err) {
            result.errors.push(err.message);
            return res.json(result);
          }

          // next step
          workflow.emit('sendEmail', user);
        });
      });
    });

    /**
     * Step 4: Send the User an email letting them know thier
     * password was changed.  This is important in case the
     * user did not initiate the reset!
     */

    workflow.on('sendEmail', function (user) {

      // Create reusable transporter object using SMTP transport
      var transporter = nodemailer.createTransport(sgTransport(config.sendgridOptions));

      // Render HTML to send using .jade mail template (just like rendering a page)
      res.render('mail/passwordChange', {
        name:          user.profile.name,
        mailtoName:    config.smtp.name,
        mailtoAddress: config.smtp.address
      }, function (err, html) {
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
            subject:  'Your ' +config.name + ' password was reset',
            text:     text,
            html:     html
          };

          // Send email
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                result.errors.push(JSON.stringify(err));                              
                return res.json(result);
            } else {
              result.success = true;
              return res.json(result);
            }
          });

        }
      });

    });

    /**
     * Initiate the workflow
     */

    workflow.emit('validate');

  
    }
}

module.exports.controller = (app: any) => { new ResetController(app); };