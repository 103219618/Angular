import { Injectable } from '@angular/core';
import { Planet } from '../planets/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetserviceService {

  
  planets: Planet[] = [
    new Planet("Mercury", "Zero", 57.91, '/assets/mercury.png'),
    new Planet("Venus", "Zero", 108.2, 'assets/venus.png'),
    new Planet("Earth", "One", 149.6, 'assets/earth.png'),
    new Planet("Mars", "Two", 227.9, 'assets/mars.png'),
    new Planet("Jupiter", "Seventy Nine", 778.5, 'assets/jupiter.png'),
    new Planet("Saturn", "Sixty Two", 1434, 'assets/saturn.png'),
    new Planet("Uranus", "Twenty Seven", 2871, 'assets/uranus.png'),
    new Planet("Neptune", "Fourteen", 4495, 'assets/neptune.png'),
  ]

  showPlanet: boolean = true;

  constructor() { }

  createPlanet(planet: Planet) {
    this.planets.push(planet);
  }
}
