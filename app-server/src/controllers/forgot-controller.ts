import { ForgotResult, ForgotRequest } from './../../../app-ui/src/shared/forgot-request';
var User = require('../models/User');
var async = require('async');
import * as express from "express";
import * as crypto from "crypto";
var config = require('../config/config');
var passport = require('passport');
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var bcrypt        = require('bcrypt-nodejs');

export class ForgotController {
    constructor(app: any) {
        app.post('/api/forgot', this.forgot.bind(this));
    }

    forgot(req: any, res: express.Response, next: express.NextFunction) {

        let request:ForgotRequest = req.body;
        Object.setPrototypeOf(request, ForgotRequest.prototype);
        
        // Begin a workflow
        var workflow = new (require('events').EventEmitter)();

        /**
         * Step 1: Is the email valid?
         */

        workflow.on('validate', function () {
            let result:ForgotResult = new ForgotResult();
            // Check for form errors
            req.assert('email', 'Email cannot be blank.').notEmpty();
            req.assert('email', 'Please enter a valid email address.').isEmail();

            var errors = req.validationErrors();

            if (errors) {
                result.errors = errors.map(e => e.msg);
                return res.json(result);
            }

            // next step
            workflow.emit('generateToken');
        });

        /**
         * Step 2: Generate a one-time (nonce) token
         */

        workflow.on('generateToken', function () {
            // generate token
            crypto.randomBytes(21, function (err, buf) {
                var token = buf.toString('hex');
                // hash token
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(token, salt, null, function (err, hash) {
                        // next step, pass token, hash
                        workflow.emit('saveToken', token, hash);
                    });
                });
            });
        });

        /**
         * Step 3: Save the token and token expiration
         */

        workflow.on('saveToken', function (token, hash) {
            let result:ForgotResult = new ForgotResult();
            // lookup user
            User.findOne({ email: request.email.toLowerCase() }, function (err, user) {
                if (err) {
                    result.errors.push(err.message);
                    return res.json(result);
                }
                if (!user) {
                    // If we didn't find a user associated with that
                    // email address then just finish the workflow
                    // If we tell them "no account exists" we are leaking
                    // information
                    result.errors.push('Hmmm... is that your correct email address?');
                    return res.json(result);
                }

                var hour = 3600000;
                var expiration = (hour * 4);

                user.resetPasswordToken = hash;
                user.resetPasswordExpires = Date.now() + expiration;

                // update the user's record with the token
                user.save(function (err) {
                    if (err) {
                        result.errors.push(err.message);
                        return res.json(result);
                    }
                });

                // next step
                workflow.emit('sendEmail', token, user);
            });
        });

        /**
         * Step 4: Send the user an email with a reset link
         */

        workflow.on('sendEmail', function (token, user) {

            let result:ForgotResult = new ForgotResult();
            let resetLink = `${req.headers.host}/?id=${user.id}&token=${token}#/reset`;
            var transporter = nodemailer.createTransport(sgTransport(config.sendgridOptions));

            // Render HTML to send using .jade mail template (just like rendering a page)
            res.render('mail/passwordReset', {
                name: user.profile.name,
                resetLink: resetLink,
                mailtoName: config.smtp.name,
                mailtoAddress: config.smtp.address
            }, function (err, html) {
                if (err) {
                    return err;
                }
                else {

                    // Now create email text (multiline string as array FTW)
                    var text = [
                        'Hello ' + user.profile.name + '!',
                        'Here is a special link that will allow you to reset your password. Please note it will expire in four hours for your protection:',
                        resetLink,
                        'Thanks so much for using our services! If you have any questions, or suggestions, feel free to email us here at ' + config.smtp.address + '.',
                        '  - The ' + config.smtp.name + ' team'
                    ].join('\n\n');

                    // Create email
                    var mailOptions = {
                        to: user.profile.name + ' <' + user.email + '>',
                        from: config.smtp.name + ' <' + config.smtp.address + '>',
                        subject: 'Reset your ' + config.name + ' password',
                        text: text,
                        html: html
                    };

                    // Send email
                    transporter.sendMail(mailOptions, function (err, info) {
                        if (err) {
                            result.errors.push(JSON.stringify(err));
                            console.error(JSON.stringify(err));
                            return res.json(result);
                        } else {
                            //req.flash('success', { msg: 'We sent you an email with further instructions. Check your email!' });
                            result.success = true;
                            result.message = 'We sent you an email with further instructions. Check your email!';
                            //debug('Message response: ' + info.response);
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


        //return res.json({});
    }
}

module.exports.controller = (app: any) => { new ForgotController(app); };