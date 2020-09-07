import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../contacts/contact';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.css']
})
export class ContactCreateComponent implements OnInit {

  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {
  }

  createContact(name: string) {
    if (name == "") {
      alert("Please Provide a Name!")
      return;
    }
    this.contactsService.createContact(new Contact(name, "Mr", "3 Queen Street, CBD", "https://placehold.it/200x200"));
  }

}
