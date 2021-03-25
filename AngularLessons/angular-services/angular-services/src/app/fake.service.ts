import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable() //This class object creation is taken care of by Angular
export class FakeService {
  constructor(public http: HttpClient) {}

  sayHello(): string {
    return 'Welcome to UserDefined service WITH DI';
  }

  loadFakeData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/')
      .subscribe((data) => console.log(data));
  }
}
