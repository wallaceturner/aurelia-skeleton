import {autoinject} from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from 'aurelia-router';
import {WebAPI} from './web-api';
import { LoginResult, LoginRequest } from './shared/LoginResult';
import { LoginEvent } from './events/login-event';

@autoinject()
export class Login {
  
  email:string;
  password:string;
  loginResult:LoginResult;
  loggingIn:boolean;

  constructor(private api: WebAPI, private router: Router,private ea: EventAggregator) {  
}

// attached() {
//   setTimeout(()=>{
//     if(this.api.isLoggedIn){
//       this.loggingIn = true;
//       this.router.navigate('dashboard');
//     }
//   },2000)  
// }

  async login() {    
    this.loggingIn=true;
    let request = new LoginRequest();
    request.email = this.email;
    request.password = this.password;
    this.loginResult = await this.api.login(request);
    this.loggingIn=false;
      
    if(this.loginResult.success){
      this.ea.publish(Object.assign(new LoginEvent(), null))
      this.router.navigateToRoute('dashboard');
    }
  }
}
