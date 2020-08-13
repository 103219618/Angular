import { Component } from '@angular/core';
import { Contact } from './contacts/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favourite Contacts';

  contacts: Contact[] = [
    new Contact("Syed Razvi", "Mr", "1 Swinburne Rd, Melbourne", "src/assets/lego.png"),
    new Contact("Chris Hemsworth", "Mr", "123 King Street, Melbourne", "src/assets/chris.jpg"),
    new Contact("Jack Sparrow", "Mr", "1 Black Pearl, Atlantic Ocean", "src/assets/jack.jpg"),
    new Contact("Beyonce", "Ms", "10 Queen Street, Hollywood", "src/assets/beyonce.jpg"),
  ];

  showContacts: boolean = true;

  onToggleContacts() {
    this.showContacts = !this.showContacts;
  }

}
