import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './project/project.component';
import { LoginComponent } from './login/login.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { TodoComponent } from './todo/todo.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'project/add', component: CreateProjectComponent},
  {path: 'project/:id', component: TodoComponent},
  {path: 'project/update/:id', component: UpdateProjectComponent},
  {path: 'todo/add/:projectId', component: CreateTodoComponent},
  {path: '', redirectTo: 'project', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
