import { Component, OnInit } from '@angular/core';
import {Request} from "../request.model";
import {RequestService} from "../requests.service";
import {Router} from "@angular/router";
import {AuthService} from "../../../users/auth.service";

@Component({
  selector: 'app-view-reqs',
  templateUrl: './view-reqs.component.html',
  styleUrls: ['./view-reqs.component.css']
})
export class ViewReqsComponent implements OnInit {

  allReqs: Request[] = [];

  errorMsg: string = '';

  constructor(private requestService: RequestService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getAllEmpReqs(this.authService.retrieveUserID()).subscribe({
      next: response => {
        this.allReqs = response;
      },
      error: error => {
        this.errorMsg = 'something is wrong in loadAllRequests';
        console.log(this.errorMsg);
      }
    });
  }

}
