import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsService } from './questions.service';
import { TestQuestionComponent } from './test-question/test-question.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestQuestionComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
