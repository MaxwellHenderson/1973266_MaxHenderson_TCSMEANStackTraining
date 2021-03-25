import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactDbService } from '../contact-db.service';
import { Contact } from '../contact.model';
import { LoginDbService } from '../login-db.service';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl(),
  });

  alertMessage: string = 'fine';

  constructor(
    public router: Router,
    public userlist: UserListService,
    public loginDB: LoginDbService,
    public contactsDB: ContactDbService
  ) {}

  ngOnInit(): void {}

  //===========================================
  //  Event functions
  //===========================================

  submitUser() {
    let username = this.signupRef.get('username')?.value;
    let password = this.signupRef.get('password')?.value;
    let confirmPassword = this.signupRef.get('confirmPassword')?.value;

    //Make sure passwords match
    if (password != confirmPassword) {
      this.passwordMismatchError();
      return;
    }

    //Ensure username doesn't already exist
    if (this.checkUserExists(username)) {
      this.userExistsError();
      return;
    }

    //Add user to the loing database using the service
    this.loginDB.addUser(username, password);

    //Creates and adds empty contact list for users portfolio
    this.createUserContacts(username);
    this.navigateToLogin();
  }

  //===========================================
  //  Helper functions
  //===========================================

  //checks if the user already exists
  checkUserExists(username: string): boolean {
    return this.userlist.getUser(username);
  }

  //Creates an entry in localStorage to store the contacts from the portfolio
  createUserContacts(username: string) {
    let savedContacts: Array<Contact> = new Array();
    this.contactsDB.setContactList(username, savedContacts);
  }

  //calls the router
  navigateToLogin() {
    this.router.navigate(['']);
  }

  //===========================================
  //  Error message functions
  //===========================================

  passwordMismatchError() {
    this.alertMessage = 'The passwords do not match';
    document.getElementById('passwordMismatchAlert')!.style.visibility =
      'visible';
  }

  userExistsError() {
    this.alertMessage = 'That username is already in use';
    document.getElementById('passwordMismatchAlert')!.style.visibility =
      'visible';
  }
}
