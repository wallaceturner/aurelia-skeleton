import { ResetResult, ResetRequest } from './shared/reset-result';
import { ForgotRequest, ForgotResult } from './shared/forgot-request';
import { inject } from 'aurelia-framework';
import { HttpClient, HttpResponseMessage } from 'aurelia-http-client';
import environment from './environment';
import { LoginResult, LoginRequest } from './shared/LoginResult';
import { UserNavView } from './shared/user-nav-view';
import { SignupRequest } from './shared/signup-request';
import { SignupResult } from './shared/signup-result';
import { VerifyRequest, VerifyResult } from './shared/verify-request';
import { CsrfHeaderInterceptor } from './csrfHeaderInterceptor';

let client = new HttpClient();



export class WebAPI {
  isRequesting = false;
  isLoggedIn: boolean;
  user: UserNavView;

    
constructor(AuthService) {
    client.configure(x => {
      x.withInterceptor(new CsrfHeaderInterceptor());      
    });
  }

  forgot(request:ForgotRequest) : Promise<ForgotResult> {
    this.isRequesting = true;
    return new Promise(resolve => {
      let result:ForgotResult;
      client.post('api/forgot/', request)
        .then(data => {
          Object.setPrototypeOf(data.content, ForgotResult.prototype);
          resolve(data.content);
          this.isRequesting = false;
        })
        .catch((reason: any) => {
          result = new ForgotResult();
          this.handleApiError(reason, result.errors);
        })
        .then(()=>{
          this.isRequesting = false;
          resolve();
        });;
    });
  }

  login(request:LoginRequest): Promise<LoginResult> {
    this.isRequesting = true;
    return new Promise(resolve => {
      let result:LoginResult;
      client.post('api/login/', request)
        .then(data => {
          Object.setPrototypeOf(data.content, LoginResult.prototype);
          this.isLoggedIn = data.content.success;
          if (this.isLoggedIn)
            this.user = data.content.user;
          resolve(data.content);
          this.isRequesting = false;
        })
        .catch((reason: any) => {
          result = new LoginResult();
          this.handleApiError(reason, result.errors);
        })
        .then(()=>{
          this.isRequesting = false;
          resolve(result);
        });;
    });
  }

  handleApiError(reason:any, errors:string[]){
    if (reason instanceof HttpResponseMessage) {
      if(reason.statusCode == 403 && reason.response.indexOf('CSRF') > -1){
        location.reload();
      }else{
        errors.push(`${reason.statusText}: ${reason.response}`);
      }
                  
    } else {
      errors.push(reason);
    }
  }

  signup(request:SignupRequest): Promise<SignupResult> {
    this.isRequesting = true;
    
    return new Promise(resolve => {
      let result:SignupResult;
      client.post('api/signup/', request)
        .then(data => {
          Object.setPrototypeOf(data.content, SignupResult.prototype);     
          result = data.content;          
        })
        .catch((reason: any) => {
          result = new SignupResult();
          this.handleApiError(reason, result.errors);
        })
        .then(()=>{
          this.isRequesting = false;
          resolve(result);
        });
    });
          // return new Promise(resolve => {
          //   setTimeout(()=>{
          //     let result:SignupResult = new SignupResult();
          //     //result.errors.push('an error goes here');
          //     result.success = true;
          //     result.message = 'please check your email';
          //     this.isRequesting = false;
          //     resolve(result);
          //   },1000)
          // });
  }


  verify(request: VerifyRequest): Promise<VerifyResult> {
    this.isRequesting = true;
    
    return new Promise(resolve => {
      let result:VerifyResult;
      client.get('api/verify/', request)
        .then(data => {
          Object.setPrototypeOf(data.content, VerifyResult.prototype);     
          result = data.content;          
        })
        .catch((reason: any) => {
          result = new VerifyResult();
          this.handleApiError(reason, result.errors);
        })
        .then(()=>{
          this.isRequesting = false;
          resolve(result);
        });
    });          
  }

  reset(request: ResetRequest): Promise<ResetResult> {
    this.isRequesting = true;
    
    return new Promise(resolve => {
      let result:ResetResult;
      client.get('api/reset/', request)
        .then(data => {
          Object.setPrototypeOf(data.content, ResetResult.prototype);     
          result = data.content;          
        })
        .catch((reason: any) => {
          result = new ResetResult();
          this.handleApiError(reason, result.errors);
        })
        .then(()=>{
          this.isRequesting = false;
          resolve(result);
        });
    });          
  }

  resetPassword(request: ResetRequest): Promise<ResetResult> {
    this.isRequesting = true;
    
    return new Promise(resolve => {
      let result:ResetResult;
      client.post('api/reset/', request)
        .then(data => {
          Object.setPrototypeOf(data.content, ResetResult.prototype);     
          result = data.content;          
        })
        .catch((reason: any) => {
          result = new ResetResult();
          this.handleApiError(reason, result.errors);
        })
        .then(()=>{
          this.isRequesting = false;
          resolve(result);
        });
    });          
  }

  logout(): Promise<void> {
    return new Promise(resolve => {
      client.post('api/logout', {})
        .then(data => {
          this.isLoggedIn = false;
          this.user = null;
          resolve();
        });
    })
  }

  getDashboardView(): Promise<any> {
    return new Promise(resolve => {
      client.get('api/dashboard', {})
        .then(data => {
          resolve(data.content);
        });
    })
  }

  checkIsLoggedIn(): Promise<boolean> {
    return new Promise(resolve => {
      client.get('api/login')
        .then(data => {
          this.isLoggedIn = data.content.success;
          this.user = data.content.user;
          resolve(data.content.success);
        })
        .catch((reason: any) => {
          //console.log('reason', reason);
          resolve(false);
        })
    });

  }


}
