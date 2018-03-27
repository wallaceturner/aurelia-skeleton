import {autoinject} from 'aurelia-framework';
import { WebAPI } from "./web-api";

@autoinject()
export class Dashboard {
  constructor(private api: WebAPI) {  
  }
  attached() {
    this.api.getDashboardView()
    .then((data:any)=>{
      console.log('data', data);
    })
  }
}
