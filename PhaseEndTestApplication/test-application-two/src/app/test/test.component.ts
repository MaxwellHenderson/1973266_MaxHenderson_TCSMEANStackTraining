import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { QuestionsGetterService } from '../questions-getter.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  questions!: FormArray;
  formHolder!: FormGroup;
  score: string = '';

  questionsList: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private questionsGetter: QuestionsGetterService
  ) {}

  ngOnInit(): void {
    this.formHolder = this.formBuilder.group({
      questions: this.formBuilder.array([]),
    });

    let questionsObservable = this.questionsGetter.getQuestions();
    questionsObservable.subscribe((data) => {
      data.forEach((value) => this.questionsList.push(value));
      this.addAllQuestions();
      console.log('questions');
      console.log(this.questions.controls[0]);
    });
    console.log('Questions list');
    console.log(this.questionsList);
  }

  addAllQuestions(): void {
    this.questionsList.forEach((_value: any, index: number) =>
      this.addItem(index)
    );
  }

  addItem(index: number): void {
    this.questions = this.formHolder?.get('questions') as FormArray;
    this.questions.push(this.createQuestion(index));
  }

  createQuestion(index: number): FormGroup {
    let questionTitle = 'question' + index;
    return this.formBuilder.group({
      [questionTitle]: [''],
    });
  }

  checkAnswers() {
    let totalScore = 0;
    let maxScore = 0;
    this.questions.controls.forEach((control, index) => {
      let chosenAnswer = 'option1';
      // let chosenAnswer = control.value.question;
      let correctAnswer = this.questionsList[index].correctAnswer;

      if (chosenAnswer == correctAnswer) {
        //Tag correct answer
        let element: HTMLElement = document.getElementById(
          'question' + index + correctAnswer
        ) as HTMLElement;
        element.innerText = 'Picked the correct answer';
        element.style.color = 'green';
        totalScore++;
      } else {
        let correctElement: HTMLElement = document.getElementById(
          'question' + index + correctAnswer
        ) as HTMLElement;
        let incorrectElement: HTMLElement = document.getElementById(
          'question' + index + chosenAnswer
        ) as HTMLElement;

        correctElement.innerText = 'This is the correct answer';
        correctElement.style.color = 'green';

        incorrectElement.innerText = 'This is not the correct answer';
        incorrectElement.style.color = 'red';
      }
      maxScore++;
      console.log('Given answer ' + control.value.question);
      console.log('Correct Answer ' + this.questionsList[index].correctAnswer);
    });
    debugger;
    this.score = totalScore + '/' + maxScore;
  }
}
