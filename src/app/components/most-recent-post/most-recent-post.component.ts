import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {AuthorAndDateComponent} from '../author-and-date/author-and-date.component';

@Component({
  selector: 'app-most-recent-post',
  standalone: true,
    imports: [
        NgOptimizedImage,
        AuthorAndDateComponent
    ],
  templateUrl: './most-recent-post.component.html',
  styleUrls: ['./most-recent-post.component.css']
})
export class MostRecentPostComponent {
    imageUrl = 'images/python.jpg';
    altText = 'Bolsa Python';
}
