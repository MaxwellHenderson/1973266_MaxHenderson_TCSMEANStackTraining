import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(public http: HttpClient) {}

  //Post method to insert w/json server
  //Post method takes 2 parameters
  //1st Parameter url
  //2nd parameter is json data
  storeEmployee(login: any) {
    this.http.post('http://localhost:3000/employees', login).subscribe(
      (result) => console.log(result),
      (error) => console.log(error)
    );
  }
}
