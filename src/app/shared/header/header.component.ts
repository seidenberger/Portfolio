import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

      about= "About me";
      skill= "Skills";
      portfolio= "portfolio";


  constructor(public translationService: TranslationService) {}

  switchLang(lang: 'de' | 'en') {
    this.translationService.setLanguage(lang);
  }
}