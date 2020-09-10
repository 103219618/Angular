import { Component, OnInit } from '@angular/core';
import { PlanetserviceService } from '../services/planetservice.service';
import { Planet } from '../planets/planet';

@Component({
  selector: 'app-planet-create',
  templateUrl: './planet-create.component.html',
  styleUrls: ['./planet-create.component.css']
})
export class PlanetCreateComponent implements OnInit {

  constructor(public planetserviceService: PlanetserviceService) { }

  ngOnInit(): void {
  }

  createPlanet(name: string, moons: string, distancefromSun: number, imageUrl: string) {
    if (name == "" || moons == "" || distancefromSun == 0 || imageUrl == "") {
      alert("Please Provide Details!")
      return;
    }
    this.planetserviceService.createPlanet(new Planet(name, moons, distancefromSun, imageUrl));
  }

}
