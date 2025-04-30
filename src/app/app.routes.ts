import { Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news/:id', component: ArticleComponent },
  { path: 'news', component: ArticleListComponent },
];
