import { Component, OnInit, Input } from '@angular/core';
import { PlanetserviceService } from '../services/planetservice.service';
import { Planet } from './planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {​​

@Input()
planet: Planet;

editing: boolean = false;

showinput = true;

  constructor(public planetserviceService: PlanetserviceService) {​​ }​​

  ngOnInit(): void {​​
    this.planetserviceService.sortDistanceFromSun();
  }​​

  startEditing(){​​
    this.editing = true;
    this.showinput = false;
    
  }​​

  stopEditing(name: string, moons: number, distancefromSun: number){​​
    this.editing = false;
    this.planet.name = name;
    this.planet.moons = moons;
    this.planet.distancefromSun = distancefromSun;
    this.showinput = true;
    this.planetserviceService.sortDistanceFromSun();
    
  }​​

  public deletePlanet(name: string){​​
    for (let i=0; i < this.planetserviceService.planets.length; i++){​​
      if(this.planetserviceService.planets[i]["name"] == name){​​
        this.planetserviceService.planets.splice(i, 1);
      }​​
    }​​
  }​​

}​​