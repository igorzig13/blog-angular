import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        NgClass
    ],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
    @Input() logo: string = 'TI Informo';
    isMenuOpen: boolean = false;

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }
}
