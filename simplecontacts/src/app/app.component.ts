import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Favourite Contacts';

  contacts: string[] = [
    "Syed Razvi",
    "Chris Hemsworth",
    "Jack Sparrow",
    "Beyonce"
  ];

  showContacts: boolean = true;

  onToggleContacts() {
    this.showContacts = !this.showContacts;
  }

}
