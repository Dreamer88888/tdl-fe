import { Component, OnInit } from '@angular/core';
import { ProjectResponse } from '../project/project.response';
import { ToDo } from '../todo/todo';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project/project.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjectDetail();
  }

  projectResponse: ProjectResponse = new ProjectResponse();
  id!: string;
  todos!: ToDo[];
  date!: Date;

  getProjectDetail() {
    this.id = this.route.snapshot.params['id'];
    this.projectService.getProjectById(this.id).subscribe(data => {
      this.projectResponse = data;
      this.todos = this.projectResponse.toDos;
      console.log(this.projectResponse);
    }, error => console.log(error));
  }

}
