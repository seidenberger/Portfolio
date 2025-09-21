import { Component, OnDestroy } from '@angular/core';
import { PrivacyPolicyDeComponent } from './privacy-policy-de/privacy-policy-de.component';
import { PrivacyPolicyEnComponent } from './privacy-policy-en/privacy-policy-en.component';
import { TranslationService } from '../../translation.service';
import { CommonModule} from '@angular/common';
import { Subscription } from 'rxjs';
// import { BaseTranslatedComponent } from '../../base-translated.component';

@Component({
  selector: 'app-privacy-policy',
  
  imports: [PrivacyPolicyDeComponent,
    PrivacyPolicyEnComponent,
    CommonModule,

  ],
  templateUrl: './privacy-policy.component.html',
    
  styleUrl: './../impressum/impressum.component.scss'
})

export class PrivacyPolicyComponent implements OnDestroy {
  currentLang: 'de' | 'en' = 'de';
  private sub!: Subscription;

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getLanguage();
      console.log('Sprache beim Erstellen (Konstruktor):', this.currentLang);
    this.sub = this.translationService.lang$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }




}




  // lang$: Observable<'de' | 'en'>;

  // constructor(private translationService: TranslationService) {
  //   this.lang$ = this.translationService.lang$;

  //     const savedLang = sessionStorage.getItem('lang') as 'de' | 'en' | null;
  // if (savedLang) {
  //   this.translationService.setLanguage(savedLang); // Setzt die gespeicherte Sprache
  // }
  // }