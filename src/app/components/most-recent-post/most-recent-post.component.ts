import {Component, Input} from '@angular/core';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {AuthorAndDateComponent} from '../author-and-date/author-and-date.component';
import {ContentTagComponent} from '../content-tag/content-tag.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-most-recent-post',
  standalone: true,
    imports: [
        NgOptimizedImage,
        AuthorAndDateComponent,
        ContentTagComponent,
        NgForOf,
        RouterLink
    ],
  templateUrl: './most-recent-post.component.html',
  styleUrls: ['./most-recent-post.component.css']
})
export class MostRecentPostComponent {
    @Input() imageSrc = '';
    @Input() altText = 'Bolsa Python';
    @Input() title: string = '';
    @Input() description: string = '';
    @Input() tags: string[] = [];
    @Input() path: string = '';

    @Input() author: string = 'Desconhecido';
    @Input() date: Date = new Date();
}
