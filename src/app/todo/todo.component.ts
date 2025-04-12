import { Component, Input, OnInit } from '@angular/core';
import { ProjectResponse } from '../project/project.response';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  @Input()
  projectId!: string;

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.getProjectDetail();
  }

  projectResponse: ProjectResponse = new ProjectResponse();
  id!: string;
  // todos!: ToDo[];
  date!: Date;

  getProjectDetail() {
    this.id = this.route.snapshot.params['id'];
    this.projectService.getProjectById(this.id).subscribe(data => {
      this.projectResponse = data;
      // this.todos = this.projectResponse.todos;
    }, error => console.log(error));
  }

  addToDo() {
    this.router.navigate(['todo', 'add', this.projectResponse.project.id]);
  }

}
