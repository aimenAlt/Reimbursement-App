import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../users/auth.service";

@Component({
  selector: 'app-home-manager',
  templateUrl: './home-manager.component.html',
  styleUrls: ['./home-manager.component.css']
})
export class HomeManagerComponent implements OnInit {

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
