import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root', //This is equivalent to provided in app.module.ts
})
export class EmployeeService {
  constructor(public http: HttpClient) {}

  loadEmployeeDetails(): Observable<Employee[]> {
    return this.http.get<Employee[]>('/assets/employee.json');
  }
}
