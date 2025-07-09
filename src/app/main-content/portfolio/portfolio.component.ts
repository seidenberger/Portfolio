import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { portfolio } from './portfolio-json';
import { translations } from '../../translations';
import { TranslationService } from '../../translation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  imports: [ 
            CommonModule
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit, OnDestroy {
  portfolio = portfolio;

  descriptionPortfoli= '';
  join_description= '';
  pollo_loco_description= '';

  currentLang: string = 'de';

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
     this.descriptionPortfoli = this.translationService.translate('descriptionPortfoli');
    this.join_description = this.translationService.translate('join_description');
    this.pollo_loco_description = this.translationService.translate('pollo_loco_description');
   
    
  }
  
  switchLang(lang: 'de' | 'en') {
    this.translationService.setLanguage(lang);
    console.log(lang);
  }

  getTranslation(key: string, lang: string): string {
    return translations[lang][key] || '';
  }
}
