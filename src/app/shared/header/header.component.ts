import { Component} from '@angular/core';
// import { TranslationService } from '../../translation.service';
// import { Subscription } from 'rxjs';
import { MenuOverlayComponent } from './menu-overlay/menu-overlay.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BaseTranslatedComponent } from '../../base-translated.component';

@Component({
  selector: 'app-header',
    standalone: true,
  imports: [MenuOverlayComponent, CommonModule,     RouterLink], 
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