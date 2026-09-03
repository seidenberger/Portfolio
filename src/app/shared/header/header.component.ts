import { Component} from '@angular/core';
import { MenuOverlayComponent } from './menu-overlay/menu-overlay.component';

import { RouterLink } from '@angular/router';
import { BaseTranslatedComponent } from '../../base-translated.component';

@Component({
  selector: 'app-header',
    standalone: true,
  imports: [MenuOverlayComponent, RouterLink], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent extends BaseTranslatedComponent{
  showMenu = false;  

  toggelMenu() {
  this.showMenu = !this.showMenu;
    console.log('showMenu ist jetzt:', this.showMenu);
}

  onOverlayClosed() {
    this.showMenu = false;
    console.log('showMenu :', )
  }

  updateTexts() {}

}