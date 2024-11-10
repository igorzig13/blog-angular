import {Component, Input} from '@angular/core';
import {AuthorAndDateComponent} from "../author-and-date/author-and-date.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-recent-post',
  standalone: true,
    imports: [
        AuthorAndDateComponent,
        NgOptimizedImage
    ],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.css'
})
export class RecentPostComponent {
    @Input() altText: string = 'Recent Post';
    @Input() imageSrc: string = '';
    @Input() title: string = '';
    @Input() subtitle: string = '';

    @Input() author: string = '';
    @Input() date: Date = new Date();
}
