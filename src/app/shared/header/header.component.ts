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

  //     about= '';
  //     skill= '';
  //     portfolio= '';
  //     private sub!: Subscription;

  // constructor(public translationService: TranslationService) {}

  // switchLang(lang: 'de' | 'en') {
  //   this.translationService.setLanguage(lang);
  //   console.log(lang)
  // }
  toggelMenu() {
  this.showMenu = !this.showMenu;
}

  // ngOnInit(): void {
  //   this.updateTexts(); // Initiale Texte
  //   this.sub = this.translationService.lang$.subscribe(() => {
  //     this.updateTexts(); // Reagiere auf Sprachwechsel
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.sub.unsubscribe(); // Speicher aufräumen
  // }

  // updateTexts() {
  //   // debugger
  //   this.about = this.translationService.translate('about');
  //   this.skill = this.translationService.translate('skill');
  //   this.portfolio = this.translationService.translate('portfolio');
  // }

  // switchLang(lang: 'de' | 'en') {
  //   this.translationService.setLanguage(lang);
  //   console.log(lang);
  // }

}