export class VerifyRequest{
token:string;
userId:string;
}

export class VerifyResult{
  success:boolean;
  errors:string[] = [];
  warning:string;
  message:string;
}
