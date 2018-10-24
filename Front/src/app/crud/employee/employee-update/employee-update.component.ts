import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  formUpdate = {
    firstname: '',
    lastname: '',
    username: '',
    birthDate: '',
    address: '',
    phoneNumber: '',
    mail: '',
    job: ''
  };
  employeeId;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe((params) => {
      this.employeeId = params['id'];
    });

    this.employeeService.getOneUser(this.employeeId).subscribe(employee => {
      this.formUpdate.firstname = employee['firstname'];
      this.formUpdate.lastname = employee['lastname'];
      this.formUpdate.username = employee['username'];
      this.formUpdate.birthDate = employee['birthDate'];
      this.formUpdate.address = employee['address'];
      this.formUpdate.phoneNumber = employee['phoneNumber'];
      this.formUpdate.mail = employee['mail'];
      this.formUpdate.job = employee['job'];
    });

  }

  ngOnInit() {
  }

  updateEmployee() {
    this.employeeService.updateEmployee(
      this.employeeId,
      this.formUpdate.firstname,
      this.formUpdate.lastname,
      this.formUpdate.username,
      this.formUpdate.birthDate,
      this.formUpdate.address,
      this.formUpdate.phoneNumber,
      this.formUpdate.mail,
      this.formUpdate.job
    );
  }

}
