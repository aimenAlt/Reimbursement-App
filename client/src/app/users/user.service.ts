import { Injectable } from '@angular/core';
import {User} from "./user.model";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

import {Request} from "../employee/reimburse-reqs/request.model";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl = "/api/users";

  constructor(private http: HttpClient ) { }


  getAllEmployees(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl + '/employees');
  }

  updateUser(user: User): Observable<User>{
    return this.http.put<User>(this.baseUrl, user);
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

  newValidateUser(user: User): Observable<User>{
    // consume endpoint to validate the user
    return this.http.get<User>(this.baseUrl + '/login', {
      params: {
        userName: user.userName,
        password: user.userPassword
      }
    });
  }


}
