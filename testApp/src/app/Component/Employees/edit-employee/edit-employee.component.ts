import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/Model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { __param } from 'tslib';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
   editEmployeeRequest: Employee = {
    id: 0, name: '', department: '', salary: 0, phone: 0,
    email: ''
  };

  constructor(private srcemployeesService: EmployeesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param) => {
          const id  = param.get('id')
        if (id) {
        this.srcemployeesService.getEmployeeById(id).subscribe({
          next: (EmployeeList) => {
              this.editEmployeeRequest=EmployeeList;
          } 
        })
        }
      }
    })
  }
  UpdateEmployee() {
    alert(this.editEmployeeRequest.name)
    this.srcemployeesService.UpdateEmployee(this.editEmployeeRequest.id,this.editEmployeeRequest).subscribe({
      next: (EmployeeList) => {
         
        this.router.navigate(['Employee'])

      },
      error: (response) => {
         console.log(response);

      }
    });
  }
}
