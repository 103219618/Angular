import { Component, OnInit, Input } from '@angular/core';
import { Planet } from "./planet";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  @Input()
  planet: Planet;
  constructor() { }

  ngOnInit(): void {
  }

}
