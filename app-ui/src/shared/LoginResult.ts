import { UserNavView } from "./user-nav-view";

export class LoginRequest{
  email:string;
  password:string;
}
export class LoginResult{
  success:boolean;
  errors:string[] = [];
  redirectURL:string;
  tooManyAttempts:boolean;
  user:UserNavView;
}
