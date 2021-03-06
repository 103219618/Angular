import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticlesEnvelope, Article } from './article';
import { ArticlesService } from './articles.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularconduit2020';

  public articlesService: ArticlesService;
  constructor(articlesService: ArticlesService, private userService: UserService){
    this.articlesService = articlesService;
  }

  performLogin() {
    this.userService.login("string", "string");
  }

  create() {
    this.articlesService.createAnonymous("Syed", {
      title: "Study Angular",
      description: "Work Work Work",
      body: "Work on the Stuff",
  });
}

}
