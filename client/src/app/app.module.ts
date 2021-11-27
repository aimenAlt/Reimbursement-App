import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import { HomeEmployeeComponent } from './employee/home-employee/home-employee.component';
import { HomeManagerComponent } from './manager/home-manager/home-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeEmployeeComponent,
    HomeManagerComponent
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
