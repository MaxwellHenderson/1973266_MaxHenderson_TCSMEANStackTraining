import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fake } from './fake.model';

@Injectable() //This class object creation is taken care of by Angular
export class FakeService {
  constructor(public http: HttpClient) {}

  fakeData: Array<Fake> = [];

  sayHello(): string {
    return 'Welcome to UserDefined service WITH DI';
  }

  // loadFakeData() {
  //   this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe(
  //     (data) => console.log(data),
  //     (error) => console.log('Error generated ' + error),
  //     () => console.log('completed')
  //   );
  // }

  loadFakeData(): Observable<Fake[]> {
    return this.http.get<Fake[]>('https://jsonplaceholder.typicode.com/todos/');
  }
}
