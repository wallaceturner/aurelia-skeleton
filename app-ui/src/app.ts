import { autoinject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router, RouterConfiguration, NavigationInstruction, Next, Redirect } from 'aurelia-router';
import { WebAPI } from './web-api';
import { UserNavView } from './shared/user-nav-view';
import { LoginEvent } from './events/login-event';
import * as utility from './utility';

@autoinject()
export class App {
  router: Router;
  appName:string = 'Aurelia Skeleton';
  loggedIn:boolean;
  user:UserNavView;
  subscriptions: { dispose: () => void }[] = [];

  constructor(public api: WebAPI, private ea: EventAggregator) {  
    this.subscriptions.push(ea.subscribe(LoginEvent, (r) => this.setUser()));
    this.setUser();    
  }

  detached() {
    for (let sub of this.subscriptions)
      sub.dispose();
  }

  setUser(){
    this.loggedIn = this.api.isLoggedIn;
    this.user = this.api.user;
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    
    config.addAuthorizeStep(AuthorizeStep);    
    config.map([
      this.getRoute('dashboard', true, '', true),
      this.getRoute('login', false, 'Sign In'),
      this.getRoute('signup', false, 'Sign Up'),
      this.getRoute('verify', false, 'Verification'),
      this.getRoute('forgot', false),
      this.getRoute('reset', false),
      this.getRoute('account', false),
      this.getRoute('contact', false),
    ]);

    this.router = router;
  }

  getRoute(name:string, auth:boolean=true, title?:string, isRoot?:boolean) :any {
    if(!title)
      title = utility.capitalizeFirstLetter(name);
    
    title = `${this.appName} · ${title}`;
    let route = isRoot ? ['', name] : [name];    
    let obj:any =  { route: route, moduleId: name, name:name, title: title }
    if(auth){
      obj.settings = { auth: true };
    }
    return obj;
  }

  logout(){
    this.api.logout()
    .then(()=>{
      this.setUser();
      this.router.navigateToRoute('login');
    });
  }
}

@autoinject()
class AuthorizeStep {
  constructor(private api: WebAPI) {  
    
  }
  run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
    if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {            
      if (!this.api.isLoggedIn) {
        return next.cancel(new Redirect('login'));
      }
    }

    return next();
  }
}
