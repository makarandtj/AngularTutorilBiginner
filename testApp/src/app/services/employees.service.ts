import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../Model/employee.model';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
baseApiUrl:string =environment.baseApiURL;
  constructor(private http: HttpClient) { }
  getAllEmployee(): Observable<Employee[]> 
  {
     return this.http.get<Employee[]>( this.baseApiUrl +'Employee/GetEmployee');
  }
  getEmployeeById(id:string): Observable<Employee> 
  {
     return this.http.get<Employee>( this.baseApiUrl +'Employee/GetEmployeeById/'+id);
  }

  AddEmployee(addEmployeeRequest: Employee):Observable<Employee> 
  {
    return   this.http.post<Employee>( this.baseApiUrl +'Employee/AddEmployee',addEmployeeRequest);
  }
  UpdateEmployee(id:number,editEmployeeRequest: Employee):Observable<Employee> 
  {
     
    return   this.http.put<Employee>( this.baseApiUrl +'Employee/UpdateEmployee/'+id,editEmployeeRequest);
  }
}
  