import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlassArticle } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'https://glass-guru-backend.onrender.com/api/article';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<GlassArticle[]> {
    return this.http.get<GlassArticle[]>(this.apiUrl);
  }
}
