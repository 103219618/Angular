export interface ArticlesEnvelope {
    articles: Article[];
    articlesCount: number;
}

export interface ArticleEnvelope {
    [x: string]: Article;
    articles: Article;
}

export class CreateAnonymousCommand {
    article: Article;
    username: string;

}

export interface Article {
    articleId?: number;
    title: string;
    description: string;
    body: string;
}