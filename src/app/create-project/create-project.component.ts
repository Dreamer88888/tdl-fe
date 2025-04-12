import { Component, OnInit } from '@angular/core';
import { ProjectRequest } from '../project/project.request';
import { ProjectService } from '../project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent implements OnInit {

  projectRequest: ProjectRequest = new ProjectRequest();
  dueDate!: Date;

  ngOnInit(): void { }

  constructor(private projectService: ProjectService, private router: Router) { }

  addProject() {
    console.log("epen");
    this.projectRequest.dueAt = new Date(this.dueDate).getTime();
    this.projectService.addProject(this.projectRequest).subscribe(data => {
      console.log(data);
      this.goToProjectList();
    },
    error => console.log(error));
  }

  goToProjectList() {
    this.router.navigate(['/project']);
  }

}
