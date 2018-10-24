import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit {

  formUpdate = {
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    customer: '',
    employee: '',
    amount: '',
    status: ''
  };
  projectId;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
    });

    this.projectService.getOneProject(this.projectId).subscribe(customer => {
        this.formUpdate.name = customer['name'];
        this.formUpdate.description = customer['description'];
        this.formUpdate.start_date = customer['start_date'];
        this.formUpdate.end_date = customer['end_date'];
        this.formUpdate.customer = customer['customer'];
        this.formUpdate.employee = customer['employee'];
        this.formUpdate.status = customer['status'];
        this.formUpdate.amount = customer['amount'];
    });

  }

  ngOnInit() {
  }

  updateProject() {
    this.projectService.updateProject(
      this.projectId,
      this.formUpdate.name,
      this.formUpdate.description,
      this.formUpdate.start_date,
      this.formUpdate.end_date,
      this.formUpdate.customer,
      this.formUpdate.employee,
      this.formUpdate.amount,
      this.formUpdate.status
    );
  }

}
