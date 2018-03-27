import { LoginEvent } from './events/login-event';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from 'aurelia-router';
import { autoinject } from 'aurelia-framework';
import { WebAPI } from './web-api';
import * as utility from './utility';
import { VerifyResult, VerifyRequest } from './shared/verify-request';

@autoinject()
export class Verify {

  verifyResult: VerifyResult;
  loading: boolean = true;
  constructor(private api: WebAPI, private router: Router,private ea: EventAggregator) {

  }
  async attached() {

    let request: VerifyRequest = new VerifyRequest();
    request.token = utility.getParameterByName('token');
    request.userId = utility.getParameterByName('id');
    this.verifyResult = await this.api.verify(request);
    this.loading = false;
    if(this.verifyResult.success){
      this.api.checkIsLoggedIn()
      .then(() =>{
        if(this.api.isLoggedIn){
          this.ea.publish(Object.assign(new LoginEvent(), null))
          setTimeout(()=>{ 
            //this.router.navigateToRoute('dashboard');             
            window.location.href = '/#/dashboard';//use this as otherwise tokens remain in the url address
          }, 1500)
        }else{
          console.log('verified successfully but checkIsLoggedIn returned false');
        }
      })
    }
  }

  
}
