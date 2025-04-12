import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { LoginRequest } from "./login.request";
import { LoginResponse } from "./login.response";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private apiServerUrl = 'http://localhost:8080/api/auth';

    private usernameSource = new BehaviorSubject<string | null>(localStorage.getItem("user_name"));
    currentUsername = this.usernameSource.asObservable();

    constructor(private http: HttpClient) {}

    performLogin(loginRequest: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>(`${this.apiServerUrl}/login`, loginRequest);
    }

    updateUsername(username: string | null): void {
        if (username) {
          localStorage.setItem('user_name', username);
        } else {
          localStorage.removeItem('user_name');
        }
        this.usernameSource.next(username);
    }
}