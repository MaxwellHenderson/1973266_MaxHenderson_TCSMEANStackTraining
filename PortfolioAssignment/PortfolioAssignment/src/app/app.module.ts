import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactDbService } from './contact-db.service';
import { LoginAuthGuard } from './login-auth-guard';
import { LoginDbService } from './login-db.service';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignupComponent } from './signup/signup.component';
import { UserListService } from './user-list.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortfolioComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    LoginDbService,
    UserListService,
    ContactDbService,
    LoginAuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
