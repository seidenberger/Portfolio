import { Component, OnDestroy } from '@angular/core';
import { PrivacyPolicyDeComponent } from './privacy-policy-de/privacy-policy-de.component';
import { PrivacyPolicyEnComponent } from './privacy-policy-en/privacy-policy-en.component';
import { TranslationService } from '../../translation.service';
import { CommonModule} from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  
  imports: [PrivacyPolicyDeComponent,
    PrivacyPolicyEnComponent,
    CommonModule,

  ],
  templateUrl: './privacy-policy.component.html',
    
  styleUrl: './../legal.scss'
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



