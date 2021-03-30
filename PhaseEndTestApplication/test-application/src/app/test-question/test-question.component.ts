import { Component, OnInit, Query } from '@angular/core';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.css'],
})
export class TestQuestionComponent implements OnInit {
  question: Question = {
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctAnswer: '8',
  };
  constructor(public questionService: QuestionsService) {}

  ngOnInit(): void {}

  intializeForm() {}
}
