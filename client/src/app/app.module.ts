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
import { ViewReqComponent } from './employee/reimburse-reqs/view-req/view-req.component';
import { ViewReqsComponent } from './employee/reimburse-reqs/view-reqs/view-reqs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeEmployeeComponent,
    HomeManagerComponent,
    SubmitReqComponent,
    ViewReqComponent,
    ViewReqsComponent
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
