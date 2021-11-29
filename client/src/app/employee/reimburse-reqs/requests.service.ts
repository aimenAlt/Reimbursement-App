import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Request} from "./request.model";


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl = "/api/employee-reqs";

  constructor(private http: HttpClient) { }

  addRequestService(newReq: Request): Observable<Request> {
    return this.http.post<Request>(this.baseUrl, newReq);
  }

  getAllEmpReqs(employeeID: number): Observable<Request[]>{
    return this.http.get<Request[]>(this.baseUrl + "/" + employeeID);
  }

}
