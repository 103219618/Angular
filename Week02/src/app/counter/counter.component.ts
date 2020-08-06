import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Output()
  counted: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  title: string = "Default Counter"
  active: boolean = false;

  counter: number = 0;
  sal: string = "Mr";

  constructor() { }

  ngOnInit(): void {
  }

  onComponentClick(value: any) {
    value.preventDefault();
    this.counter += 1;
    this.counted.emit(1);
    if (this.counter >= 10) {
      this.active = true;
    }
  }
}
