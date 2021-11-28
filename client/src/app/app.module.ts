import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { HomeEmployeeComponent } from './employee/home-employee/home-employee.component';
import { HomeManagerComponent } from './manager/home-manager/home-manager.component';
import { SubmitReqComponent } from './employee/submit-req/submit-req.component';
import { ViewReqComponent } from './employee/view-req/view-req.component';
import { UserInfoComponent } from './employee/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeEmployeeComponent,
    HomeManagerComponent,
    SubmitReqComponent,
    ViewReqComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
