import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects;

  constructor(private projectService: ProjectService) {

    this.projectService.getProjects().subscribe(projects => {
        this.projects = projects;
        console.log(projects);
    });

  }

  ngOnInit() {
  }

  deleteProject(id) {
    this.projectService.delete(id).subscribe(res => {
        window.location.reload();
    });
  }

}
