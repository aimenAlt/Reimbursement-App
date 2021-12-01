import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./users/auth.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Reimbursement App';

  inHome: boolean = true;
  constructor(private router: Router,
              private authService: AuthService,
              private location: Location) {
    router.events.subscribe(val => {
      if (location.path() == "" || location.path() == "/home-employee" || location.path() == "/home-manager" ) {
        this.inHome = true;
      } else {
        this.inHome = false;

      }
    });

  }

  ngOnInit() {

  }




  goHome() {
    if(this.authService.retrieveUserType() == "manager") {
      this.router.navigate(["home-manager"]);
    } else if(this.authService.retrieveUserType() == "employee") {
      this.router.navigate(["home-employee"]);
    }
  }
}
