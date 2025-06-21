import { Component} from '@angular/core';
// import { TranslationService } from '../../translation.service';
// import { Subscription } from 'rxjs';
import { MenuOverlayComponent } from './menu-overlay/menu-overlay.component';

@Component({
  selector: 'app-header',
  imports: [MenuOverlayComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showMenu = false;  

  toggelMenu() {
  this.showMenu = !this.showMenu;
}


}