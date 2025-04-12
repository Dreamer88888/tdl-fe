import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectService } from './project.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjectRequest } from './project.request';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {
  projects!: Project[];
  projectRequest: ProjectRequest = new ProjectRequest();

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getProjects();
  }

  title = "PROJECT";

  progressClass(progress: string) {
    if (progress === "TO_DO") {
      return "todo";
    } else if (progress === "IN_PROGRESS") {
      return "in";
    } else {
      return "done";
    }
  }

  progressText(progress: string) {
    if (progress === "TO_DO") {
      return "TO DO";
    } else if (progress === "IN_PROGRESS") {
      return "IN PROGRESS";
    } else {
      return "DONE";
    }
  }

  public getProjects(): void {
    this.projectService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addProject() {
     this.router.navigate(['project', 'add']);
  }

  updateProject(id: string) {
    this.router.navigate(['project', 'update', id]);
  }

  projectById(id: string) {
    this.router.navigate(['project', id])
  }

  // addToDo() {
  //   this.router.navigate(['todo', 'add']);
  // }
}
