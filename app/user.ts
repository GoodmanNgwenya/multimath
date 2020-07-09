import {Register} from './register';
export class User implements Register{
    forename:string;
    surname:string;
    nickname?:string;
    email:string;
    password:string;
    newPassword: string;
    
}