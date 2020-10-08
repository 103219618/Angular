import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article, ArticlesEnvelope } from './article';

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
    });
  }

  createAnonymous(username: string, article: Article) {
    let request = this.httpClient.post("https://swindev.me/articles/anonymous", );
    this.loading = true;
    this.loaded = false;
    request.subscribe((response) => {
      
      this.articles = response.articles;
      this.loading = false;
      this.loaded = true;
    });
  }
}
