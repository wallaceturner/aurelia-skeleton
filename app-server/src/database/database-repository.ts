import { LoginAttempt } from "../models/LoginAttempt";



export class DatabaseRepository {
    init(url: string) { };
    openCallback:()=>void;
    errorCallback:(error:any)=>void;

    on(event: "error" | "open", cb: (error?:any) => void) {
        if (event === "error")
            this.errorCallback = cb;
        else if (event === "open")
            this.openCallback = cb;
    }
    getLoginAttemptCount(conditions:any, callback: (err: any, count: any) => void):void {  throw new Error("Not implemented"); };
    saveLoginAttempt(loginAttempt:LoginAttempt, callback: (err: any, doc: any) => void) : void {  throw new Error("Not implemented"); };
    getUser(email:string):Promise<any>{  throw new Error("Not implemented"); };
    getUserById(id:string) : Promise<any>{  throw new Error("Not implemented"); };
    saveUser(user:any):Promise<void>{  throw new Error("Not implemented"); };
}



