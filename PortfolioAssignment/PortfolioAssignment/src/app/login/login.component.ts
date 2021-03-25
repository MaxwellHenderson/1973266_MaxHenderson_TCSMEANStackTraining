import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(public router: Router) {}

  ngOnInit(): void {}

  attemptLogin() {
    if (this.checkUser()) {
      this.login();
    } else {
      this.loginFail();
    }
  }

  checkUser(): boolean {
    let user = JSON.parse(
      localStorage.getItem(this.loginRef.get('username')!.value)!
    );
    if (user == null) return false;

    if (
      user.username != this.loginRef.get('username')?.value ||
      user.password != this.loginRef.get('password')?.value
    )
      return false;

    return true;
  }

  loginFail() {
    console.log('fail');

    this.alertMessage = 'Username or password is incorrect';
    document.getElementById('loginFailAlert')!.style.visibility = 'visible';
  }

  login() {
    sessionStorage.setItem('currentUser', this.loginRef.get('username')?.value);
    this.router.navigate(['portfolio']);
  }
  signup() {
    console.log('signup');
    this.router.navigate(['signup']);
  }
}
