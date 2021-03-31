import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url: string = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }
  storeTask(task: Task): void {
    console.log(this.url);
    this.http.post(this.url, task).subscribe(
      (data) => console.log(data),
      (data) => console.log(data)
    );
  }
  removeTask(task: Task): void {
    this.http.delete(this.url + task.id).subscribe(
      (data) => console.log(data),
      (data) => console.log(data)
    );
  }
}
