import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDbService } from '../login-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  alertMessage: string = '';

  constructor(public router: Router, public loginService: LoginDbService) {}

  ngOnInit(): void {}

  //===========================================
  //  Event functions
  //===========================================

  attemptLogin() {
    if (this.checkUser()) {
      this.login();
    } else {
      this.loginFail();
    }
  }

  //===========================================
  //  Helper functions
  //===========================================

  checkUser(): boolean {
    let username: string = this.loginRef.get('username')!.value;
    let password: string = this.loginRef.get('password')!.value;
    return this.loginService.verifyUser(username, password);
  }

  //===========================================
  //  Router functions
  //===========================================

  login() {
    sessionStorage.setItem('loginToken', this.loginRef.get('username')?.value);
    this.router.navigate(['portfolio']);
  }
  signup() {
    this.router.navigate(['signup']);
  }

  //===========================================
  //  Error message functions
  //===========================================

  loginFail() {
    console.log('fail');
    this.alertMessage = 'Username or password is incorrect';
    document.getElementById('loginFailAlert')!.style.visibility = 'visible';
  }
}
