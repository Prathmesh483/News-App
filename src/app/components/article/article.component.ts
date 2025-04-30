import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GlassArticle } from 'src/app/models/article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  article?: GlassArticle;
  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.articleService.getArticles().subscribe((data) => {
      this.article = data.find((x) => x._id == id);
      console.log(this.article);
    });
  }

  formatDate(dateStr: string | undefined): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString();
  }
}
