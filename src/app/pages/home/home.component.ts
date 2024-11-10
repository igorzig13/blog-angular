import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {MainTitleComponent} from "../../components/main-title/main-title.component";
import {MenuBarComponent} from "../../components/menu-bar/menu-bar.component";
import {MostRecentPostComponent} from "../../components/most-recent-post/most-recent-post.component";
import {PostCardComponent} from "../../components/post-card/post-card.component";
import {RecentPostComponent} from "../../components/recent-post/recent-post.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        FooterComponent,
        MainTitleComponent,
        MenuBarComponent,
        MostRecentPostComponent,
        PostCardComponent,
        RecentPostComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
