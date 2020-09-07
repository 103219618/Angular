import { Component, OnInit } from '@angular/core';
import { PlanetserviceService } from '../services/planetservice.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  constructor(public planetserviceService: PlanetserviceService) { }

  ngOnInit(): void {
  }

}
