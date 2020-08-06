import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input()
  salute: string = "";

  @Input()
  name: string = "NO NAME";

  @Input()
  address: string = "1 Swinburne Rd, Melbourne"

  @Input()
  URL: string = "lego.png"

}
