import { Component, OnInit } from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = new User();

  errMsg: String = '';

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  validateLogin() {
    let validatedUser: User;

    this.userService.newValidateUser(this.newUser).subscribe({
      next: response => {
        validatedUser = response;
        if (validatedUser.userType != "") {
          this.authService.storeUser(validatedUser);
        }
        if(validatedUser.userType == "employee") {
          this.router.navigate(['home-employee']);
        } else if(validatedUser.userType == "manager") {
          this.router.navigate(["home-manager"]);
        }

      },
      error: err => {
        this.errMsg = 'Error in Validate Login';
        console.log(this.errMsg);
      }
    });

  }


}
