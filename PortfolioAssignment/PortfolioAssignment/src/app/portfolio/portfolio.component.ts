import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  contactRef = new FormGroup({
    contactName: new FormControl(),
    phoneNo: new FormControl(),
  });

  username: string = '';

  contacts: Array<Contact> = new Array();

  constructor(public router: Router) {}

  ngOnInit(): void {
    debugger;
    this.username = sessionStorage.getItem('currentUser')!;
    //Retrieves the saved contact list
    let storage: string = localStorage.getItem('contactsDB')!;
    let parsed = JSON.parse(storage);
    this.contacts = parsed[this.username];
  }

  addContactInfo() {
    let name: string = this.contactRef.get('contactName')?.value;
    let phoneNo: string = this.contactRef.get('phoneNo')?.value;

    this.contacts.push(new Contact(name, phoneNo));
    this.saveContactInfo();
  }

  saveContactInfo() {
    let contactsDB = JSON.parse(localStorage.getItem('contactsDB')!);
    contactsDB[this.username] = this.contacts;
    localStorage.setItem('contactsDB', JSON.stringify(contactsDB));
  }

  logout() {
    console.log('logged out');
    this.router.navigate(['']);
  }
}
