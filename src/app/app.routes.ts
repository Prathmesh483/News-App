import { Routes } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { HealthComponent } from './components/health/health.component';
import { LifestyleComponent } from './components/lifestyle/lifestyle.component';
import { AutosComponent } from './components/autos/autos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news/:id', component: ArticleComponent },
  { path: 'news', component: ArticleListComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'health', component: HealthComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'autos', component: AutosComponent },
];
