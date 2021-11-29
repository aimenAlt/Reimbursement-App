import { Injectable } from '@angular/core';
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  storeUser(user: User) {
    sessionStorage.setItem("userData", JSON.stringify(user));
    this.isLoggedIn = true;
  }

  retrieveUser(): User {
    let data: any = sessionStorage.getItem("userData");
    let fetchedUser: User =  JSON.parse(data == null ?  '' : data);
    this.isLoggedIn = data; //Will be converted to true/false based on if data was null or not
    return fetchedUser;


  }

  removeUser() {
    sessionStorage.removeItem("userData");
    this.isLoggedIn = false;
  }

  retrieveUserType() {
    let data: any = sessionStorage.getItem("userData");
    let user: User = JSON.parse(data == null ?  '' : data);
    return user.userType;
  }

  retrieveUserID() {
    let data: any = sessionStorage.getItem("userData");
    let user: User = JSON.parse(data == null ?  '' : data);
    return user.userID;
  }


  constructor() { }
}
