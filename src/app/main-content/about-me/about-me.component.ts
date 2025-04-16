import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, OnDestroy{

  about= '';
  way= '';
  place= '';
  enthusiasm= '';
  solutions= '';
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
    
    this.way = this.translationService.translate('way');
    this.place = this.translationService.translate('place');
    this.enthusiasm = this.translationService.translate('enthusiasm');
    this.solutions = this.translationService.translate('solutions');
  }
  
  switchLang(lang: 'de' | 'en') {
    this.translationService.setLanguage(lang);
    console.log(lang);
  }
}
