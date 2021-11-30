import { Component, OnInit } from '@angular/core';
import {RequestService} from "../requests.service";
import {Router} from "@angular/router";
import {Request} from "../request.model";
import {AuthService} from "../../../users/auth.service";

@Component({
  selector: 'app-submit-req',
  templateUrl: './submit-req.component.html',
  styleUrls: ['./submit-req.component.css']
})
export class SubmitReqComponent implements OnInit {

  newReq: Request = {
    id: 0,
    employeeID: 0,
    description: '',
    cost: 0.00,
    date: '',
    status: '',
    imageLink: 'PLACE_HOLDER'
  }

  constructor(private requestsService: RequestService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  addRequest() {
    this.newReq.employeeID = this.authService.retrieveUserID();
    this.newReq.status = 'pending';
    this.requestsService.addRequestService(this.newReq).subscribe({
      next: response => {
        this.router.navigate(['home-employee']);
      },
      error: err => {

      }
    });
  }

}
