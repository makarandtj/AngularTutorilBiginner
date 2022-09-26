import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './MyUser/users/users.component';
import { UserComponent } from './MyUser/user/user.component';
import { NavigationComponent } from './Home/navigation/navigation.component';
import { EmployeesListComponent } from './Component/Employees/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './Component/Employees/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './Component/Employees/edit-employee/edit-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    NavigationComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
