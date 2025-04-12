import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../todo/todo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoRequest } from '../todo/todo.request';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent implements OnInit {

  toDoRequest: ToDoRequest = new ToDoRequest();

  constructor(private todoService: ToDoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}

  addToDo() {
    this.toDoRequest.date = new Date().getTime();
    this.toDoRequest.projectId = this.route.snapshot.params['projectId'];
    this.todoService.addToDo(this.toDoRequest).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
  }

  // goToToDoList() {
  //   this.router.navigate(['/todo']);
  // }

}
