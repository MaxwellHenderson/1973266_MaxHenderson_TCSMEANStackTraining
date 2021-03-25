import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(public router: Router) {}

  //Checks if there is a loginToken. If so, proceed to login. Currently doesn't actually confirm valid credentials
  canActivate() {
    let obj = sessionStorage.getItem('loginToken');
    if (obj != null) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
