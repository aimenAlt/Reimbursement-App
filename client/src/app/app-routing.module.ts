import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./users/login/login.component";
import {HomeManagerComponent} from "./manager/home-manager/home-manager.component";
import {HomeEmployeeComponent} from "./employee/home-employee/home-employee.component";
import {SubmitReqComponent} from "./employee/reimburse-reqs/submit-req/submit-req.component";
import {AdminGuard} from "./users/admin.guard";
import {ViewReqsComponent} from "./employee/reimburse-reqs/view-reqs/view-reqs.component";

const routes: Routes= [
  {path:'', component: LoginComponent},
  {path:'home-manager', component: HomeManagerComponent},
  {path:'home-employee', component: HomeEmployeeComponent},
  {path:'submit-req', component: SubmitReqComponent},
  {path:'view-reqs', component: ViewReqsComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
