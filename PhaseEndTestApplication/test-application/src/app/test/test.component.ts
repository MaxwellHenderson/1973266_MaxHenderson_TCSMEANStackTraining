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
  questionsList: any = [];
  result: any;
  formArray: FormArray = new FormArray([]);
  formRef: FormGroup = new FormGroup({
    formArray: this.formArray,
  });
  constructor(
    public questions: QuestionsService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit(): Promise<void> {
    console.log('Initing');
    this.formArray = this.formBuilder.array([]);

    //Build formGroups from saved data
    this.questions.getQuestions().subscribe((data) => {
      console.log(data);

      data.forEach((questionValue: { question: any }) => {
        this.formArray.push(this.addQuestion());
      });
    });
    this.questions.getQuestions().subscribe((data) => {
      this.questionsList = data;
      // this.buildFormArray(data.valueOf());
    });

    // this.intializeQuestionsList();
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

  addQuestion(): FormGroup {
    return this.formBuilder.group({
      question: new FormControl(),
      option1: new FormControl(),
      option2: new FormControl(),
      option3: new FormControl(),
      option4: new FormControl(),
      correctAnswer: new FormControl(),
    });
  }

  checkQuestions() {
    console.log('Checking');
    // console.log(this.formRef.value);
  }
}
