import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

export class Planet {
    name: string;
    moons: number;
    distancefromSun: number;
    imageUrl: string;

    constructor(name: string, moons: number, distancefromSun: number, imageUrl: string) {
        this.name = name;
        this.moons = moons;
        this.distancefromSun = distancefromSun;
        this.imageUrl = imageUrl;
    }
}