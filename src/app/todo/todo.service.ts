import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ToDo } from "./todo";
import { ToDoRequest } from "./todo.request";
import { ToDoResponse } from "./todo.response";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ToDoService {

    constructor(private http: HttpClient) {}

    private apiServerUrl = 'http://localhost:8080/api/todo';

    getToDos(): Observable<ToDo[]> {
        return this.http.get<ToDo[]>(`${this.apiServerUrl}`);
    }

    addToDo(todo: ToDoRequest): Observable<Object> {
        return this.http.post(`${this.apiServerUrl}`, todo);
    }

    getToDoById(id: string): Observable<ToDoResponse> {
        return this.http.get<ToDoResponse>(`${this.apiServerUrl}/${id}`);
    }

    updateToDo(todo: ToDoRequest): Observable<Object> {
        return this.http.put<ToDoRequest>(`${this.apiServerUrl}`, todo);
    }

}