import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticleEnvelope, ArticlesEnvelope, CreateAnonymousCommand } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles: Article[] = [];
  loading: boolean = false;
  loaded: boolean = false;

  private httpClient: HttpClient;
  constructor(httpClient: HttpClient){
    this.httpClient = httpClient;
  }
/**
 * go and get ArticlesEnvelope from the server ans store it locally
 */
  get() {
    let request = this.httpClient.get<ArticlesEnvelope>("https://swindev.me/articles"); //https://conduit.productionready.io/api/articles
    this.loading = true;
    this.loaded = false;
    request.subscribe((response) => {

      this.articles = response.articles;
      this.loading = false;
      this.loaded = true;
    },
    (error) => {
      console.log("Error from https://swindev.me/articles", error);
    }
    );
  }

  createAnonymous(username: string, article: Article) {
    let request = this.httpClient.post<ArticleEnvelope>("https://swindev.me/articles/anonymous", {
    username: username,
    article: article
    } as CreateAnonymousCommand);

    request.subscribe((response) => {
      // console.log(this.articles) //to see the articles in Console
      this.articles = [...this.articles, response.article]; //is a new arrat, with new value added
      // console.log(this.articles) // to see the articles in Console after adding to array from above
      //console.log(response);
      this.get();
    });



  }
}
