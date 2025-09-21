import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-translated',
  imports: [CommonModule],
  templateUrl: './button-translated.component.html',
  styleUrl: './button-translated.component.scss'
})
export class ButtonTranslatedComponent implements OnInit, OnDestroy{
  activeLang = signal<'de' | 'en'>('de');
      private sub!: Subscription;
 isDEActive = signal(false);

  constructor(public translationService: TranslationService) {
     this.activeLang.set(this.translationService.getLanguage());
  }

      // @Output() closed = new EventEmitter<void>();


        ngOnInit(): void {
    this.updateTexts(); 
    this.sub = this.translationService.lang$.subscribe(() => {
      this.updateTexts(); 
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe(); 
  }
  updateTexts() {}
  
    switchLang(lang: 'de' | 'en') {
    this.translationService.setLanguage(lang);
    this.activeLang.set(lang);
    console.log('Aktive Sprache:', this.activeLang()); 

  }

  isActive(lang: 'de' | 'en') {
    return this.activeLang() === lang;
    // console.log('Aktive Sprache war:', this.isActive());
  }
}
