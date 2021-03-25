import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact.model';

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

  constructor(public router: Router) {}

  ngOnInit(): void {}

  submitUser() {
    //Make sure passwords match
    if (
      this.signupRef.get('password')?.value !=
      this.signupRef.get('confirmPassword')?.value
    ) {
      this.passwordMismatchError();
      return;
    }

    //Ensure username doesn't already exist
    if (this.checkUserExists(this.signupRef.get('username')?.value)) {
      this.userExistsError();
      return;
    }

    //Create the user, put it into localStorage, then return to login
    let user = {
      username: this.signupRef.get('username')?.value,
      password: this.signupRef.get('password')?.value,
    };
    console.log(user);
    localStorage.setItem(user.username, JSON.stringify(user));
    this.createUserContacts(user.username);
    this.navigateToLogin();
  }

  checkUserExists(username: string): boolean {
    if (sessionStorage.getItem(username) == null) return false;
    return true;
  }

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

  //Creates an entry in localStorage to store the contacts from the portfolio
  createUserContacts(username: string) {
    debugger;
    let savedContacts: Array<Contact> = new Array();
    let contactsDB = localStorage.getItem('contactsDB');
    //If the saved contacts database does not exist, create it, add the first user with
    //their new empty contacts list and save to local storage
    //Else, parse the retrieved database, add the new user with the new empty contacts
    //list and save back to local storage
    if (contactsDB == null) {
      debugger;
      let newDB: any = {};
      newDB[username] = savedContacts;
      localStorage.setItem('contactsDB', JSON.stringify(newDB));
    } else {
      let contactsDBParsed = JSON.parse(contactsDB);
      contactsDBParsed[username] = savedContacts;
      localStorage.setItem('contactsDB', JSON.stringify(contactsDB));
    }
  }

  navigateToLogin() {
    this.router.navigate(['']);
  }
}
