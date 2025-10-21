import { OnDestroy, OnInit, Directive } from '@angular/core';
import { TranslationService } from './translation.service';
import { Subscription } from 'rxjs';

@Directive() 
export abstract class BaseTranslatedComponent implements OnInit, OnDestroy {
  currentLang: string = 'de';
  protected sub!: Subscription;

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.updateTexts();
    this.sub = this.translationService.lang$.subscribe(() => {
      this.updateTexts(); 
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe(); 
    }
  }

  switchLang(lang: 'de' | 'en') {
    this.translationService.setLanguage(lang);
  }

  protected abstract updateTexts(): void;
}

