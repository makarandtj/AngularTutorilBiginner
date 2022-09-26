import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Component/Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Component/Employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './Component/Employees/employees-list/employees-list.component';
import { UsersComponent } from './MyUser/users/users.component';

const routes: Routes = [
  {path:'Employee',component:EmployeesListComponent},
  {path:'AddEmployee',component:AddEmployeeComponent},
  {path:'EditEmployee/edit/:id',component:EditEmployeeComponent},
  {path:'',component:UsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
