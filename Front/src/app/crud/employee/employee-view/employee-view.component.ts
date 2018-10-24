import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {

  employee;
  employeeId;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe((params) => {
      this.employeeId = params['id'];
    });

    this.employeeService.getOneUser(this.employeeId).subscribe(employee => {
      this.employee = employee;
      console.log(employee);
    });

  }

  ngOnInit() {
  }

}
