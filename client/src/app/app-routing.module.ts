import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./users/login/login.component";
import {HomeManagerComponent} from "./manager/home-manager/home-manager.component";
import {HomeEmployeeComponent} from "./employee/home-employee/home-employee.component";
import {SubmitReqComponent} from "./employee/reimburse-reqs/submit-req/submit-req.component";
import {AdminGuard} from "./users/admin.guard";
import {ViewReqsComponent} from "./employee/reimburse-reqs/view-reqs/view-reqs.component";
import {EditUserComponent} from "./users/edit-user/edit-user.component";
import {ViewEmployeeReqsComponent} from "./manager/reimburse-reqs/view-employee-reqs/view-employee-reqs.component";
import {ViewEmployeesComponent} from "./users/view-employees/view-employees.component";

const routes: Routes= [
  {path:'', component: LoginComponent},
  {path:'home-manager', component: HomeManagerComponent, canActivate: [AdminGuard]},
  {path:'home-employee', component: HomeEmployeeComponent, canActivate: [AdminGuard]},
  {path:'submit-req', component: SubmitReqComponent, canActivate: [AdminGuard]},
  {path:'edit-user', component: EditUserComponent, canActivate: [AdminGuard]},
  {path:'view-reqs', component: ViewReqsComponent, canActivate: [AdminGuard]},
  {path:'view-employees', component: ViewEmployeesComponent, canActivate: [AdminGuard]},
  {path:'view-employee-reqs', component: ViewEmployeeReqsComponent, canActivate: [AdminGuard]}

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
