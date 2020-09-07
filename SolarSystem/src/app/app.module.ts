import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetListComponent } from './planet-list/planet-list.component';
import { PlanetCreateComponent } from './planet-create/planet-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetListComponent,
    PlanetCreateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
