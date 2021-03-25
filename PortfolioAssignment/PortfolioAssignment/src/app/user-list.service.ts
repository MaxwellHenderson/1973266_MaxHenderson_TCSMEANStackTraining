import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//Holds simple list of usernames to check for existance of user
export class UserListService {
  userlist: Array<string> = ['Frank'];
  constructor() {}

  getUser(username: string): boolean {
    return this.userlist.includes(username);
  }

  addUser(username: string): void {
    this.userlist.push(username);
  }
}
