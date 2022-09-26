import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  
  EmployeeList:Employee[]|null=null
  constructor(private srcemployeesService : EmployeesService) { }

  ngOnInit(): void {
    
    this.srcemployeesService.getAllEmployee().subscribe({
      next :(EmployeeList)=>{
        this.EmployeeList=EmployeeList;
      },
      error:(response)=> {
       
        console.log(response);
      }
    });
  }

}
