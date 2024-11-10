import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {MainTitleComponent} from './components/main-title/main-title.component';
import {MostRecentPostComponent} from './components/most-recent-post/most-recent-post.component';
import {RecentPostComponent} from './components/recent-post/recent-post.component';
import {PostCardComponent} from './components/post-card/post-card.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, MenuBarComponent, MainTitleComponent, MostRecentPostComponent, RecentPostComponent, PostCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-angular';
}
