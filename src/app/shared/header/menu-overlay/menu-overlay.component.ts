import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-overlay',
  imports: [],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss'
})
export class MenuOverlayComponent  implements OnInit, OnDestroy{


      about= '';
      skill= '';
      portfolio= '';
      private sub!: Subscription;

  constructor(public translationService: TranslationService) {}


  ngOnInit(): void {
    this.updateTexts(); // Initiale Texte
    this.sub = this.translationService.lang$.subscribe(() => {
      this.updateTexts(); // Reagiere auf Sprachwechsel
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe(); // Speicher aufräumen
  }

  updateTexts() {
    // debugger
    this.about = this.translationService.translate('about');
    this.skill = this.translationService.translate('skill');
    this.portfolio = this.translationService.translate('portfolio');
  }

  switchLang(lang: 'de' | 'en') {
    this.translationService.setLanguage(lang);
    console.log(lang);
  }
}
