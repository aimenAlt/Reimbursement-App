import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {HttpClient} from "@angular/common/http";
import {Request} from "../employee/reimburse-reqs/request.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl = "/api/user";

  constructor(private http: HttpClient ) { }



  updateUser(user: User){
    return this.http.put<Request>(this.baseUrl, user);
  }

  validateUser(user: User){
    // consume endpoint to validate the user
    if(user.userName == "Sam" && user.userPassword == "admin"){
      user.userID = 1;
      user.userName = "Sam";
      user.userType = "manager";
      user.userAddress = "Atlanta";
      user.userEmail = "ox1@g.com"
    } else if(user.userName == "Priya" && user.userPassword == "emp"){
      user.userID = 2;
      user.userName = "Priya";
      user.userType = "employee";
      user.userAddress = "Marietta";
      user.userEmail = "ox2@g.com"
    }
    return user;
  }

}
