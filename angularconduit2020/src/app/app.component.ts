import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticlesEnvelope } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularconduit2020';

  private art: any[];
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient){
    this.httpClient = httpClient;
  }

  login() {
    let request = this.httpClient.get<ArticlesEnvelope>("https://swindev.me/articles");
    request.subscribe((response) => {
      console.log(response);
      this.art = response.articles;
    })
  }

}
