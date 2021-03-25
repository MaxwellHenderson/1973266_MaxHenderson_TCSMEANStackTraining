import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root',
})
export class LoginDbService {
  loginDB = {
    Frank: 'fridge',
  };
  constructor() {}

  //Checks username and password against databasae, returning true if they exist
  verifyUser(username: string, password: string): boolean {
    if (username in this.loginDB && (this.loginDB as any)[username] == password)
      return true;
    return false;
  }

  //Adds new user info to the database
  addUser(username: string, password: string) {
    (this.loginDB as any)[username] = password;
  }
}
