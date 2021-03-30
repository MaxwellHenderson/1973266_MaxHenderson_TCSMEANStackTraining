import { Injectable } from '@angular/core';
import { Question } from './question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  questionsList: Array<Object> = new Array();

  constructor(public http: HttpClient) {}

  addQuestion(question: Question) {
    this.questionsList.push(question);
  }

  getQuestions() {
    console.log('getting questions');
    return this.http.get<[]>('http://localhost:3000/questions');
    //   .subscribe((data) => (this.questionsList = data));
    // console.log(this.questionsList)
    // return this.questionsList;
  }

  // intializeQuestions(): void {
  //   console.log('Initializing questions');
  //   this.http.get('http://localhost:3000/questions').subscribe(
  //     (result) => (this.questionsList = result),
  //     (error) => console.log(error)
  //   );
  // }
}
