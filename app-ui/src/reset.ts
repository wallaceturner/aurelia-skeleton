import { ResetResult, ResetRequest } from './shared/reset-result';
import { LoginEvent } from './events/login-event';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { WebAPI } from './web-api';
import * as utility from './utility';

@autoinject()
export class Reset{
  loading: boolean = true;
  result: ResetResult;
  password: string;
  confirm: string;
  isValid: boolean;
  resetPasswordSuccess:boolean;
  constructor(private api: WebAPI, private router: Router, private ea: EventAggregator) {

  }

  async attached() {
    
    this.result = await this.api.reset(this.getResetRequest());
    this.loading = false;
    this.isValid = this.result.success;
  }

  async reset(){
    this.loading = true;  
    let resetPasswordResult = await this.api.resetPassword(this.getResetRequest());
    this.loading = false;
    
    if(resetPasswordResult.success){
      this.resetPasswordSuccess = true;
      this.api.checkIsLoggedIn()
      .then(() =>{
        if(this.api.isLoggedIn){
          this.ea.publish(Object.assign(new LoginEvent(), null))
          setTimeout(()=>{ this.router.navigateToRoute('dashboard'); }, 1500)
        }else{
          console.error('changed password successfully but checkIsLoggedIn returned false');
        }
      })
    }else{
      this.result.errors = resetPasswordResult.errors;
    }

  }

  getResetRequest() : ResetRequest{
    let request: ResetRequest = new ResetRequest();
    request.token = utility.getParameterByName('token');
    request.userId = utility.getParameterByName('id');    
    request.password = this.password;
    request.confirm = this.confirm;
    return request;
  }

  navigateToForgot(){
    window.location.href = '/#/forgot';//use this as otherwise tokens remain in the url address
  }
}
