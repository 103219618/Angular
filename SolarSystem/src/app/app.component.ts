import { Component } from '@angular/core';
import { Planet } from './planets/planet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Solar System';
}
