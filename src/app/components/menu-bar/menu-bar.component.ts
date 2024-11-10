import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
    @Input() logo: string = 'TI Informo';
}
