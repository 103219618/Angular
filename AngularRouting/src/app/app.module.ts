import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { CatComponent } from './routes/cat/cat.component';
import { DogComponent } from './routes/dog/dog.component';

const routes: Routes = [
  { path: "cats", component: CatComponent},
  { path: "dogs", component: DogComponent},
]; // sets up routes constant where you define your routes

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // router module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
