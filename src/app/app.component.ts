import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubscriptionCardComponent } from './components/subscription-card/subscription-card.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    SubscriptionCardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-app';
  sidebarVisible = false;
  largeSidebarVisible = true;
  toggleVisible = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Listen to the router's navigation events
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Check the current route to hide sidebar on `/news/:id`
        const currentRoute = this.router.url;
        if (currentRoute.includes('/news/')) {
          this.largeSidebarVisible = false;
          this.toggleVisible = false;
        } else {
          this.largeSidebarVisible = true;
          this.toggleVisible = true;
        }
      });
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
