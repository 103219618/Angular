import { Component, OnInit, Input } from '@angular/core';
import { Contact } from "./contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input()
  contact: Contact;

  constructor() { }

  ngOnInit(): void {
  }
  
}
