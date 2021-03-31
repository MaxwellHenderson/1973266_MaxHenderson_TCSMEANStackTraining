import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Question } from '../question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  questionJSON = {
    questions: [
      {
        question: 'What color is the sky?',
        option1: 'Red',
        option2: 'Blue',
        option3: 'Green',
        option4: 'Pink',
        correctAnswer: 'option1',
      },
      {
        question: 'What color is the ocean?',
        option1: 'Red',
        option2: 'Blue',
        option3: 'Green',
        option4: 'Pink',
        correctAnswer: 'option2',
      },
    ],
  };
  isLoaded: boolean = false;
  questionsList: any = [];
  result: any;
  formArray: FormArray = new FormArray([]);
  formRef: FormGroup = new FormGroup({});
  constructor(
    public questions: QuestionsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    debugger;
    this.formRef = this.formBuilder.group({
      questions: this.formBuilder.array([this.addQuestion()]),
    });

    this.addAllQuestions();

    // this.formArray = this.formRef.get('questions') as FormArray;
    // this.questionJSON.questions.forEach(() => {
    //   this.addQuestion();
    // });

    console.log('Initing');
    // let groupArray: FormGroup[] = new Array();
    debugger;
  }

  buildFormArray(questionsArray: any) {
    questionsArray.forEach((questionValue: { question: any }) => {
      this.formArray.push(new FormControl(questionValue.question));
      // question_template.question: new FormControl(),
    });
  }

  intializeQuestionsList() {
    this.questions.getQuestions().subscribe((data) => {
      this.questionsList = data;
      // this.buildFormArray(data.valueOf());
    });
  }

  addAllQuestions(): void {
    this.formArray = this.formRef.get('questions') as FormArray;
    this.questionJSON.questions.forEach(() => {
      (<FormArray>this.formRef.get('questions')).push(this.addQuestion());
    });
  }

  addQuestion(): FormGroup {
    return this.formBuilder.group({
      question: new FormControl(''),
      option1: new FormControl(''),
      option2: new FormControl(''),
      option3: new FormControl(''),
      option4: new FormControl(''),
      correctAnswer: new FormControl(''),
    });
    // const group = new FormGroup({
    //   question: new FormControl(''),
    //   option1: new FormControl(''),
    //   option2: new FormControl(''),
    //   option3: new FormControl(''),
    //   option4: new FormControl(''),
    //   correctAnswer: new FormControl(''),
    // });
    // // return this.formBuilder.group({
    // // });
    // this.formArray.push(group);
    // return group;
  }

  checkQuestions() {
    console.log('Checking');
    // console.log(this.formRef.value);
  }
}
