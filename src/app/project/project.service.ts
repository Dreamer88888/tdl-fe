import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Project } from "./project";
import { Injectable } from "@angular/core";
import { ProjectRequest } from "./project.request";
import { ProjectResponse } from "./project.response";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private apiServerUrl = 'http://localhost:8080/api/project';

    constructor(private http: HttpClient) {}

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(`${this.apiServerUrl}`);
    }

    addProject(project: ProjectRequest): Observable<Object> {
        return this.http.post(`${this.apiServerUrl}`, project);
    }

    getProjectById(id: string) : Observable<ProjectResponse> {
        return this.http.get<ProjectResponse>(`${this.apiServerUrl}/${id}`);
    }

    updateProject(project: ProjectRequest): Observable<Object> {
        return this.http.put<ProjectRequest>(`${this.apiServerUrl}`, project);
    }
}