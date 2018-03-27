import { SignupRequest } from './shared/signup-request';
import {autoinject} from 'aurelia-framework';
import * as $ from 'jquery';
import { WebAPI } from './web-api';
import { SignupResult } from './shared/signup-result';

@autoinject()
export class Signup{
  
  constructor(private api: WebAPI) {  }
  name:string;
  email:string;
  password:string;
  confirmPassword:string;
  zxcvbn:any;
  signupResult:SignupResult;
  signingUp:boolean;

  async signup() {
    let request = new SignupRequest();
    request.name = this.name;
    request.email = this.email;
    request.password = this.password;
    request.confirmPassword = this.confirmPassword;
    this.signingUp = true;
    this.signupResult = await this.api.signup(request);
    this.signingUp = false;
  }

  attached(){
    (<any>require)(['/lib/zxcvbn/dist/zxcvbn.js'], (zxcvbn) => {
      this.zxcvbn = zxcvbn;
    });
  }
  
  evaluateSecurity(){
        
    var password = $('#password').val();
    var name = $('#name').val();
    var email = $('#email').val();
    
    if (password) {
      // magic happens
      let user_inputs=[name, email];
      let result = this.zxcvbn(password, user_inputs);
    
      // Show the bar
      $('.progress').fadeIn(200);
      // and difficulty
      $('.difficulty').fadeIn(200).html('Time for a desktop PC to crack your password: <strong>' + result.crack_times_display. offline_slow_hashing_1e4_per_second + '</strong>');

      // Change progress bar colors
      if ( result.score <= 2 ) {
        $('.progress-bar').css({'width': (result.score * 25) + '%'}).removeClass('progress-bar-success').addClass('progress-bar-danger');
      } else {
        $('.progress-bar').css({'width': (result.score * 25) + '%'}).removeClass('progress-bar-danger').addClass('progress-bar-success');
      }
      
      // Label progress bar
      switch (result.score)
      {
        case 4:
          $('.progress-bar').html('Excellent Complexity!');
          break;
        case 3:
          $('.progress-bar').html('Strong Complexity!');
          break;
        case 2:
          $('.progress-bar').html('Good Complexity');
          break;
        case 1:
          $('.progress-bar').html('Weak Complexity');
          break;
        case 0:
          $('.progress-bar').html('');
          break;
        default:
          $('.progress-bar').html('');
          break;
      }

    } else {
      $('.progress').fadeOut(150);
      $('.difficulty').fadeOut(150);
    }
    
  
  }
}
