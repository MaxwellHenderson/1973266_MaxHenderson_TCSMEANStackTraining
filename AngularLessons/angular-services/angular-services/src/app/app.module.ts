import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FakeService } from './fake.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDisplayComponent } from './employee-display/employee-display.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, EmployeeDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FakeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
