import { Injectable } from '@angular/core';
import {Contact} from '../contacts/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    new Contact("Syed Razvi", "Mr", "1 Swinburne Rd, Melbourne", '/assets/lego.png'),
    new Contact("Chris Hemsworth", "Mr", "123 King Street, Melbourne", '/assets/chris.jpg'),
    new Contact("Jack Sparrow", "Mr", "1 Black Pearl, Atlantic Ocean", '/assets/jack.jpg'),
    new Contact("Beyonce", "Ms", "10 Queen Street, Hollywood", '/assets/beyonce.jpg'),
  ];

  showContacts: boolean = true;

  constructor() { }

  createContact(contact: Contact) {
    this.contacts.push(contact);
  }
}
