import { WebAPI } from './web-api';
import {Aurelia} from 'aurelia-framework'
import environment from './environment';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => {
    var api = <WebAPI>aurelia.container.get(WebAPI);
    api.checkIsLoggedIn()
    .then(() =>{
      aurelia.setRoot('app');
    })    
    
  });

  // After starting the aurelia, we can request the AuthService directly
  // from the DI container on the aurelia object. We can then set the 
  // correct root by querying the AuthService's isAuthenticated method.
//   aurelia.start().then(() => {
//     var auth = aurelia.container.get(AuthService);
//     let root = auth.isAuthenticated() ? 'app' : 'login';
//     aurelia.setRoot(root);
// });
}
