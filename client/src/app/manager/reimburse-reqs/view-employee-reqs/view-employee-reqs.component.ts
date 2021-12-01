import { Component, OnInit } from '@angular/core';
import {RequestService} from "../requests.service";
import {AuthService} from "../../../users/auth.service";
import {Router} from "@angular/router";
import {Request} from "../request.model";

@Component({
  selector: 'app-view-employee-reqs',
  templateUrl: './view-employee-reqs.component.html',
  styleUrls: ['./view-employee-reqs.component.css']
})
export class ViewEmployeeReqsComponent implements OnInit {

  allReqs: Request[] = [];
  filteredReqs: Request[] = [];
  filterElement: String = '';
  filterQuery: String = '';

  errorMsg: string = '';

  constructor(private requestService: RequestService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests() {
    this.requestService.getAllReqs().subscribe({
      next: response => {
        this.allReqs = response;
      },
      error: error => {
        this.errorMsg = 'something is wrong in loadAllRequests';
        console.log(this.errorMsg);
      }
    });
  }

  // filter



  approveRequest(req: Request) {
    req.status = 'approved';
    this.requestService.updateRequest(req).subscribe({
      next: response => {
        console.log('success');
      },
      error: error => {
        this.errorMsg = 'something is wrong in approve requests';
        console.log(this.errorMsg);
      }
    });
  }

  denyRequest(req: Request) {
    req.status = 'denied';
    this.requestService.updateRequest(req).subscribe({
      next: response => {
        console.log('success');
      },
      error: error => {
        this.errorMsg = 'something is wrong in deny requests';
        console.log(this.errorMsg);
      }
    });
  }


}
