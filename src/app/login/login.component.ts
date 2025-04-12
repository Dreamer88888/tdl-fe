import { Component, OnInit } from '@angular/core';
import { LoginRequest } from './login.request';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { LoginResponse } from './login.response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  ngOnInit(): void { }

  constructor(private loginService: LoginService, private router: Router) { }

  imagePath = "../../assets/login-image.png";

  loginRequest: LoginRequest = new LoginRequest();
  loginResponse!: LoginResponse;

  performLogin() {
    this.loginService.performLogin(this.loginRequest).subscribe(data => {
      console.log(data);
      this.loginResponse = data;
      localStorage.setItem("access_token", this.loginResponse.jwt);
      localStorage.setItem("user_name", this.loginResponse.name);
      localStorage.setItem("roles", JSON.stringify(this.loginResponse.roles));

      this.loginService.updateUsername(this.loginResponse.username);

      this.goToProjectList();
    },
    error => console.log(error));
  }

  goToProjectList() {
    this.router.navigate(['/project']);
  }

}
