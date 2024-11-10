import {Component, Input} from '@angular/core';
import {AuthorAndDateComponent} from "../author-and-date/author-and-date.component";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {ContentTagComponent} from '../content-tag/content-tag.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-recent-post',
  standalone: true,
    imports: [
        AuthorAndDateComponent,
        NgOptimizedImage,
        ContentTagComponent,
        NgForOf,
        RouterLink
    ],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.css'
})
export class RecentPostComponent {
    @Input() altText: string = 'Recent Post';
    @Input() imageSrc: string = '';
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() tags: string[] = [];
    @Input() path: string = '';

    @Input() author: string = 'Desconhecido';
    @Input() date: Date = new Date();
}
