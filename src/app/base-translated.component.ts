import { OnDestroy, OnInit, Directive } from '@angular/core';
import { TranslationService } from './translation.service';
import { Subscription } from 'rxjs';

@Directive() // Damit Angular diese abstrakte Komponente nicht als eigenständige Komponente behandelt
export abstract class BaseTranslatedComponent implements OnInit, OnDestroy {
  currentLang: string = 'de';
  protected sub!: Subscription;

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.updateTexts(); // Initiale Texte laden
    this.sub = this.translationService.lang$.subscribe(() => {
      this.updateTexts(); // Bei Sprachwechsel aktualisieren
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe(); // Speicher aufräumen
    }
  }

  switchLang(lang: 'de' | 'en') {
    this.translationService.setLanguage(lang);
  }

  protected abstract updateTexts(): void;
}

