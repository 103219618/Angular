export interface ArticlesEnvelope {
    articles: Article[];
    articlesCount: number;
}

export interface ArticleEnvelope {
    articles: Article;
}

export interface CreateAnonymousCommand {
    article: Article;
    username: string;

}

export interface Article {
    articleId?: number;
    title: string;
    description: string;
    body: string;
}