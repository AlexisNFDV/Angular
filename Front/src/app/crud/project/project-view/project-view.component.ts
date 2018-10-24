import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  project;
  projectId;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe((params) => {
      this.projectId = params['id'];
    });

    this.projectService.getOneProject(this.projectId).subscribe(project => {
        this.project = project;
        console.log(project);
    });

  }

  ngOnInit() {
  }

}
