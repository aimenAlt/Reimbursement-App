import { Component, OnInit } from '@angular/core';
import {User} from "../user.model";
import {AuthService} from "../auth.service";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  updatedUser: User = new User();

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router ){ }

  ngOnInit(): void {
    this.updatedUser = this.authService.retrieveUser();
  }

  updateUser() {
    this.userService.updateUser(this.updatedUser).subscribe({
      next: response => {
        this.router.navigate(['home-employee'])
      },
      error: err => {

      }
    });
  }

}
