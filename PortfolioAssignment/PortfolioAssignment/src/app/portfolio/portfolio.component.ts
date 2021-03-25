import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactDbService } from '../contact-db.service';
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

  constructor(public router: Router, public contactDB: ContactDbService) {}

  ngOnInit(): void {
    this.username = sessionStorage.getItem('loginToken')!;
    //Retrieves the saved contact list
    this.contacts = this.contactDB.getContactList(this.username);
  }

  //===========================================
  //  Event functions
  //===========================================

  addContactInfo() {
    let name: string = this.contactRef.get('contactName')?.value;
    let phoneNo: string = this.contactRef.get('phoneNo')?.value;

    this.contacts.push(new Contact(name, phoneNo));
    this.saveContactInfo();
  }

  //===========================================
  //  Helper functions
  //===========================================

  saveContactInfo() {
    this.contactDB.setContactList(this.username, this.contacts);
  }

  //===========================================
  //  Router functions
  //===========================================

  logout() {
    console.log('logged out');
    this.router.navigate(['']);
  }
}
