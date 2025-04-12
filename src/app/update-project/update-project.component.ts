import { Component } from '@angular/core';
import { ProjectService } from '../project/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectResponse } from '../project/project.response';
import { ProjectUpdate } from './update-project';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrl: './update-project.component.css'
})
export class UpdateProjectComponent {
  projectResponse: ProjectResponse = new ProjectResponse();
  projectUpdate: ProjectUpdate = new ProjectUpdate();
  dueDate!: Date;
  id!: string;

  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.projectService.getProjectById(this.id).subscribe(data => {
      this.projectResponse = data;
      let rawDate = new Date(this.projectResponse.project.dueAt);

      this.dueDate = rawDate;

      const formattedDate = rawDate.toISOString().split('T')[0];
      const dateInput = document.getElementById('dueAt') as HTMLInputElement;

      if (dateInput) {
        dateInput.value = formattedDate;
      }
      
    }, error => console.log(error));
  }

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private router: Router) { }

  updateProject() {
    this.projectUpdate.id = this.projectResponse.project.id;
    this.projectUpdate.title = this.projectResponse.project.title;
    this.projectUpdate.dueAt = new Date(this.dueDate).getTime();
    this.projectUpdate.progress = this.projectResponse.project.progress;
    
    this.projectService.updateProject(this.projectUpdate).subscribe(data => {
      this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/project']);
  }
}
