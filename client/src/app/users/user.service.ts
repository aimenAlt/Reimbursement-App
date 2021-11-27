import { Injectable } from '@angular/core';
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  validateUser(user: User){
    // consume endpoint to validate the user
    if(user.userName == "Sam" && user.userPassword == "admin"){
      user.userId = 1;
      user.userName = "Sam";
      user.userType = "manager";
      user.userAddress = "Atlanta";
      user.userEmail = "ox1@g.com"
    } else if(user.userName == "Priya" && user.userPassword == "emp"){
      user.userId = 2;
      user.userName = "Priya";
      user.userType = "employee";
      user.userAddress = "Marietta";
      user.userEmail = "ox2@g.com"
    }
    return user;
  }

}
