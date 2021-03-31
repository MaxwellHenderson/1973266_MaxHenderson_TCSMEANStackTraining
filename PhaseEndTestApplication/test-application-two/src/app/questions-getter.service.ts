import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsGetterService {
  constructor(public http: HttpClient) {}

  getQuestions(): Observable<Object[]> {
    console.log('getting questions');
    let questionsObject = this.http.get<Object[]>(
      'http://localhost:3000/questions'
    );
    return questionsObject;
    // let questionsData: any[] = [];
    // questionsObject.subscribe((data) => {
    //   data.forEach((value) => questionsData.push(value));
    // });
    // console.log(questionsData);
    // return questionsData;
    // return questionsData;
    // return questionsArray;
    // return this.http.get<[]>('http://localhost:3000/questions');
    //   .subscribe((data) => (this.questionsList = data));
    // console.log(this.questionsList)
    // return this.questionsList;
  }
}
