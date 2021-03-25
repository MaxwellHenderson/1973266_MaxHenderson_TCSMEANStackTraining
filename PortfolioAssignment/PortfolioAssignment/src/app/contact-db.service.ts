import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root',
})

//Holds an object of Contact arrays for each user, keyed to the username
export class ContactDbService {
  contactDB = {
    Frank: [],
  };
  constructor() {}

  //Called whenever contact array is updated, either to create or add new contacts
  setContactList(username: string, contactlist: Contact[]) {
    (this.contactDB as any)[username] = contactlist;
  }

  //Returns the Contact[] tied to the input username
  getContactList(username: string): Contact[] {
    return (this.contactDB as any)[username];
  }
}
