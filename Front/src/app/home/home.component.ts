import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ProjectService } from '../services/project.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customers;
  employees;
  projects;

  constructor(private customerService: CustomerService, private projectService: ProjectService, private employeeService: EmployeeService) {

    this.customerService.getUsers().subscribe(customers => {
        this.customers = customers;
    });

    this.projectService.getProjects().subscribe(projects => {
      this.projects = projects;
    });

    this.employeeService.getUsers().subscribe(employees => {
      this.employees = employees;
    });

  }

  ngOnInit() {
  }

}
