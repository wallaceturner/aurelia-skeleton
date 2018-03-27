import { DatabaseRepository } from "./database-repository";
import { LoginAttempt } from "../models/LoginAttempt";
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');                // https://npmjs.org/package/mongoose
var config = require('../config/config');
import { User } from '../models/User';

export class MongoDbRepository extends DatabaseRepository {
    db: any;

    init(url: string) {
        mongoose.connect(url);
        this.db = mongoose.connection;
        this.db.on('error', this.errorCallback);
        this.db.on('open', this.openCallback);

        {
            var attemptSchema = new mongoose.Schema({
                ip: { type: String, default: '' },
                user: { type: String, default: '' },
                time: { type: Date, default: Date.now, expires: config.loginAttempts.expires }
            });

            attemptSchema.index({ ip: 1 });
            attemptSchema.index({ user: 1 });
            attemptSchema.set('autoIndex');

            mongoose.model('LoginAttempt', attemptSchema);
        }


        {
            var userSchema = new mongoose.Schema({

                email: { type: String, unique: true, index: true },
                password: { type: String },
                type: { type: String, default: 'user' },

                facebook: { type: String, unique: true, sparse: true },
                twitter: { type: String, unique: true, sparse: true },
                google: { type: String, unique: true, sparse: true },
                github: { type: String, unique: true, sparse: true },
                tokens: Array,

                profile: {
                    name: { type: String, default: '' },
                    gender: { type: String, default: '' },
                    location: { type: String, default: '' },
                    website: { type: String, default: '' },
                    picture: { type: String, default: '' },
                    phone: {
                        work: { type: String, default: '' },
                        home: { type: String, default: '' },
                        mobile: { type: String, default: '' }
                    }
                },

                activity: {
                    date_established: { type: Date, default: Date.now },
                    last_logon: { type: Date, default: Date.now },
                    last_updated: { type: Date }
                },

                resetPasswordToken: { type: String },
                resetPasswordExpires: { type: Date },

                verified: { type: Boolean, default: true },
                verifyToken: { type: String },

                enhancedSecurity: {
                    enabled: { type: Boolean, default: false },
                    type: { type: String },  // sms or totp
                    token: { type: String },
                    period: { type: Number },
                    sms: { type: String },
                    smsExpires: { type: Date }
                }

            });
            mongoose.model('User', userSchema);
        }
    }

    getLoginAttemptCount(conditions: any, callback: (err: any, count: any) => void): void {
        this.db.collection('loginattempts').count(callback);
    }
    saveLoginAttempt(loginAttempt: LoginAttempt, callback: (err: any, doc: any) => void): void {
        this.db.collection('loginattempts').save(loginAttempt, callback);
    }
    getUser(email: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.db.collection('users').findOne({ email: email }, (err, user) => {
                if (err)
                    reject(err);
                else if (user) {
                    user.id = user._id.toString();
                    Object.setPrototypeOf(user, User.prototype);
                    resolve(user);
                }
            });
        });
    }
    getUserById(id: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.db.collection('users').findOne({ _id: ObjectID(id) }, (err, user) => {
                if (err)
                    reject(err);
                else if (user) {
                    user.id = user._id.toString();
                    Object.setPrototypeOf(user, User.prototype);
                    resolve(user);
                }

            });
        });
    }
    saveUser(user: any): Promise<void> {
        return new Promise<any>((resolve, reject) => {
            this.db.collection('users').save(user, (err) => {
                user.id = user._id.toString();
                if (err)
                    reject(err);
                else
                    resolve();
            });
        });
    };
}