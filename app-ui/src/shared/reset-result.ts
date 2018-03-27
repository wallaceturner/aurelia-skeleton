export class ResetRequest{
  token:string;
  userId:string;
  password: string;
  confirm: string;
}

export class ResetResult{
  success:boolean;
  alreadyLoggedIn:boolean;
  errors:string[] = [];
}


