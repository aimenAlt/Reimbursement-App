import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Request} from "./request.model";


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl = "/api/manager-reqs";

  constructor(private http: HttpClient) { }

  getAllReqs(): Observable<Request[]>{
    return this.http.get<Request[]>(this.baseUrl);
  }

  getAllEmpReqs(employeeID: number): Observable<Request[]>{
    return this.http.get<Request[]>(this.baseUrl + "/" + employeeID);
  }

  updateRequest(request: Request): Observable<Request>{
    return this.http.put<Request>(this.baseUrl, request);
  }

}
