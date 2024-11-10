import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-content-tag',
  standalone: true,
  imports: [],
  templateUrl: './content-tag.component.html',
  styleUrl: './content-tag.component.css'
})
export class ContentTagComponent {
    @Input() label: string = '';

}
