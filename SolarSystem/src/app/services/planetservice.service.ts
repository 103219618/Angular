import { Injectable } from '@angular/core';
import { Planet } from '../planets/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetserviceService {

  
  planets: Planet[] = [
    //new Planet("Mercury", "0", 57.91, '/assets/mercury.png'),
    new Planet("Venus", 0, 108.2, 'assets/venus.png'),
    new Planet("Earth", 1, 149.6, 'assets/earth.png'),
    new Planet("Mars", 2, 227.9, 'assets/mars.png'),
    new Planet("Jupiter", 79, 778.5, 'assets/jupiter.png'),
    new Planet("Saturn", 62, 1434, 'assets/saturn.png'),
    new Planet("Uranus", 27, 2871, 'assets/uranus.png'),
    new Planet("Neptune", 14, 4495, 'assets/neptune.png'),
    new Planet("Mercury", 0, 57.91, '/assets/mercury.png'),
  ]

  showPlanet: boolean = true;

  constructor() { }

  createPlanet(planet: Planet) {
    this.planets.push(planet);
  }

  public sortDistanceFromSun (){​​
    this.planets.sort((a,b) => {​​
      if(a.distancefromSun == b.distancefromSun)
      return 0;
      else
      {​​
        if(a.distancefromSun > b.distancefromSun)
        return 1;
        else if (a.distancefromSun < b.distancefromSun)
        return -1;
      }
    })
  }
}
