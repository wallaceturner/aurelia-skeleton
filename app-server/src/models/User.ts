var bcrypt    = require('bcrypt-nodejs');
import * as crypto from "crypto";
var mongoose  = require('mongoose');


export class User{
  id:string='';
  saltFactor = 5;
  enhancedSecurity:any = {enabled: false};
  profile:any = {};
  activity:any = {last_logon:null, date_established:null};
  password:string
  email:string
  verifyToken:string
  verified:boolean;
  tokens:any[] = [];
  type:string;

  hashPassword() : Promise<string>{
    return new Promise<any>((resolve, reject) =>{
      bcrypt.genSalt(this.saltFactor, (err:any, salt:any) =>{
        if (err) {
          reject(err);
        }
        bcrypt.hash(this.password, salt, null, (err:any, hash:any)=> {
          if (err) {
            reject(err);
          }          
          resolve(hash);
        });
      });
  });
  }

  removeCollectionNameFromId(){
    this.id = this.id.replace('Users/', '');
  }

  /**
 * Check the user's password
 */

comparePassword(candidatePassword:any, cb:any) {
  bcrypt.compare(candidatePassword, this.password, function (err:any, isMatch:any) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

/**
 * Check user's SMS token
 */

compareSMS(candidateSMS:any, cb:any) {
  bcrypt.compare(candidateSMS, this.enhancedSecurity.sms, function (err:any, isMatch:any) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

  /**
 *  Get a URL to a user's Gravatar email.
 */

gravatar (size:any, defaults:any) {
  if (!size) {
    size = 200;
  }
  if (!defaults) {
    defaults = 'retro';
  }
  if (!this.email) {
    return 'https://gravatar.com/avatar/?s=' + size + '&d=' + defaults;
  }
  var md5 = crypto.createHash('md5').update(this.email);
  return 'https://gravatar.com/avatar/' + md5.digest('hex').toString() + '?s=' + size + '&d=' + defaults;
};
}











