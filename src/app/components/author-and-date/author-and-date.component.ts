import {Component, Input} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-author-and-date',
  standalone: true,
    imports: [
        DatePipe
    ],
  templateUrl: './author-and-date.component.html',
  styleUrl: './author-and-date.component.css'
})
export class AuthorAndDateComponent {
    @Input() author: string = 'Desconhecido';
    @Input() date: Date = new Date();
}
