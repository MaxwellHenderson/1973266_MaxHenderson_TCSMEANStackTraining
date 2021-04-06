import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { QuestionsGetterService } from '../questions-getter.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  // This stores the FormGroups and FormControls used in the HTML.
  // See the HTML document for the hierarchy of these objects
  questions!: FormArray;
  //Just holds the questions FormArray
  formHolder!: FormGroup;
  score: string = '';

  //Array of objects representing the test questions.
  questionsList: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private questionsGetter: QuestionsGetterService
  ) {}

  ngOnInit(): void {
    //Creates the formHolder FormGroup, and adds a new
    //FormArray to it.
    this.formHolder = this.formBuilder.group({
      questions: this.formBuilder.array([]),
    });

    let questionsObservable = this.questionsGetter.getQuestions();
    questionsObservable.subscribe((data) => {
      //Adds each question object from the external JSON file to the questions array
      data.forEach((value) => this.questionsList.push(value));
      this.addAllQuestions();
      console.log('questions');
      console.log(this.questions.controls[0]);
    });
    console.log('Questions list');
    console.log(this.questionsList);
  }

  //For each question in the object array, creates a FormGroup with a
  //FormControl, and adds it to the FormArray holder
  addAllQuestions(): void {
    this.questionsList.forEach((_value: any, index: number) =>
      this.addItem(index)
    );
  }

  //These are a couple of helper functions for adding questions to the FormArray
  //with their functionalities seperated out for ease of use.
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

  //Currently, this function uses a hard coded value for the users
  //chosen answer, as the FormControl elements are not changing their
  //state.
  //When working, it will loop through the FormArray, grabbing the
  //chosen radio button and comparing that choice to the correct
  //choice from the object array. It then changes the related span to
  //indicate correct and incorrect choices, and tracks the score.
  //I had this working at one point, but is one of the things that
  //broke for no reason I can see.
  //There is a debugger line that can be used to see the HTML being marked
  //correctly, before all the spans are reset to their initial blank state
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

    //Using this debugger line, it is possible to see the page after checking all
    //the scores, but then the HTML seems to reset, but the score is still correct.
    debugger;
    this.score = totalScore + '/' + maxScore;
  }
}
