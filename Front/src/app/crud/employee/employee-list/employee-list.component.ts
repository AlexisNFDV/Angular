import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees;

  constructor(private employeeService: EmployeeService) {

    this.employeeService.getUsers().subscribe(employees => {
      this.employees = employees;
      console.log(employees);
    });

  }

  ngOnInit() {
  }

  deleteemployee(id) {
    this.employeeService.delete(id).subscribe(res => {
      window.location.reload();
    });
  }

}
