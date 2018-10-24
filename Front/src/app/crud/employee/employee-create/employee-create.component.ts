import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  formCreate = {
    firstname: '',
    lastname: '',
    username: '',
    birthDate: '',
    address: '',
    phoneNumber: '',
    mail: '',
    job: ''
  };

  constructor(private employeeService: EmployeeService, private route: Router) { }

  ngOnInit() {
  }

  createEmployee() {
    this.employeeService.createEmployee(
      this.formCreate.firstname,
      this.formCreate.lastname,
      this.formCreate.username,
      this.formCreate.birthDate,
      this.formCreate.address,
      this.formCreate.phoneNumber,
      this.formCreate.mail,
      this.formCreate.job
    );
  }

}
