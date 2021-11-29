import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { HomeEmployeeComponent } from './employee/home-employee/home-employee.component';
import { HomeManagerComponent } from './manager/home-manager/home-manager.component';
import {SubmitReqComponent} from "./employee/reimburse-reqs/submit-req/submit-req.component";
import {HttpClientModule} from "@angular/common/http";
import { ViewReqsComponent } from './employee/reimburse-reqs/view-reqs/view-reqs.component';
import {EditUserComponent} from "./users/edit-user/edit-user.component";
import { ViewEmployeeReqsComponent } from './manager/reimburse-reqs/view-employee-reqs/view-employee-reqs.component';
import {ViewEmployeesComponent} from "./users/view-employees/view-employees.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeEmployeeComponent,
    HomeManagerComponent,
    SubmitReqComponent,
    ViewReqsComponent,
    EditUserComponent,
    ViewEmployeeReqsComponent,
    ViewEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
