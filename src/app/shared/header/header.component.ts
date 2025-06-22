import { Component} from '@angular/core';
// import { TranslationService } from '../../translation.service';
// import { Subscription } from 'rxjs';
import { MenuOverlayComponent } from './menu-overlay/menu-overlay.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
    standalone: true,
  imports: [MenuOverlayComponent, CommonModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu = false;  

  toggelMenu() {
  this.showMenu = !this.showMenu;
    console.log('showMenu ist jetzt:', this.showMenu);
}

  onOverlayClosed() {
    this.showMenu = false;
  }

}