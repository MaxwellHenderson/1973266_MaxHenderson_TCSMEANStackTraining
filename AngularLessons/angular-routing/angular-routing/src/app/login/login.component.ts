import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  homePage() {
    //Want to get a unique token
    //Session ID or JWT (JSON web token)
    sessionStorage.setItem('token', '123');
    this.router.navigate(['home']);
  }
}
