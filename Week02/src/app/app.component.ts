import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Week02';
  total: number = 0;

  onCounted(value: number) {
    this.total += value;
  }
}
