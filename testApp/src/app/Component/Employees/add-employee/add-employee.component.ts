import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

addEmployeeRequest:Employee={
  id: 0, name: '', department: '', salary: 0, phone: 0,
  email: ''
};
  constructor(private srcemployeesService : EmployeesService,private router:Router) { }

  ngOnInit(): void {
  }
 addEmployee( )
 {
   
 this.srcemployeesService.AddEmployee(this.addEmployeeRequest).subscribe({
  next :(EmployeeList)=>{
    this.router.navigate( ['Employee'])
  },
  error:(response)=> {
   
    console.log(response);
    
  }
});
 
}
}
