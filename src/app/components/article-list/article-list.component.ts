import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlassArticle } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles: GlassArticle[] = [];
  liked: boolean = true;

  constructor(private articleService: ArticleService, private router: Router) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe((data) => {
      this.articles = data.slice(0, 5); // show only first 5 articles
    });
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString();
  }

  showArticle(id: string) {
    console.log('handled click');
    this.router.navigate(['/news', id]);
  }
}
