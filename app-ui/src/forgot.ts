import { ForgotRequest, ForgotResult } from './shared/forgot-request';
import {autoinject} from 'aurelia-framework';
import { WebAPI } from "./web-api";

@autoinject()
export class Forgot{
  submitting:boolean;
  email:string;
  result:ForgotResult;
  
  constructor(private api: WebAPI) {
    
    
  }
  async submit(){
    this.submitting = true;
    let request:ForgotRequest = new ForgotRequest();
    request.email = this.email;
    this.result = await this.api.forgot(request);
    this.submitting = false;
  }
}
