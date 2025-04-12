import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    console.log("NAVBAR INIT");
    this.loginService.currentUsername.subscribe((userName) => {
      this.userName = userName;
    })
  }

  constructor(private loginService: LoginService, private router: Router) {}

  imagePath = "../../assets/emma-icon.png";

  userName: string | null = null;

  logout(): void {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_name");
    localStorage.removeItem("roles");

    this.loginService.updateUsername(null);

    this.router.navigate(['/login']);
  }

}
