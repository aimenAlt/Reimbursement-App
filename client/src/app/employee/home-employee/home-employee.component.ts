import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../users/auth.service";

@Component({
  selector: 'app-home-employee',
  templateUrl: './home-employee.component.html',
  styleUrls: ['./home-employee.component.css']
})
export class HomeEmployeeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.authService.isLoggedIn;
  }

  logOut() {
    this.authService.removeUser();
  }


}
