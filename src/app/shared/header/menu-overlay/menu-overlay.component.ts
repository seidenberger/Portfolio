import { Component, OnDestroy, OnInit, signal, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonTranslatedComponent } from '../../button-translated/button-translated.component';
import { TranslationService } from '../../../translation.service';

@Component({
  selector: 'app-menu-overlay',
    standalone: true,
  imports: [    CommonModule, ButtonTranslatedComponent ],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss'
})
export class MenuOverlayComponent 
 implements OnInit, OnDestroy{
  // activeLang = signal<'de' | 'en'>('de');

      about= '';
      skill= '';
      portfolio= '';
      private sub!: Subscription;

  // isDEActive = signal(false);

// constructor(public translationService: TranslationService) {
//      (translationService)
// }

  constructor(public translationService: TranslationService) {
    //  this.activeLang.set(this.translationService.getLanguage());
  }
  
    @Output() closed = new EventEmitter<void>();

  closeMenu() {
      console.log('closeMenu() in MenuOverlayComponent aufgerufen'); 
    this.closed.emit();  
  }



  ngOnInit(): void {
    this.updateTexts(); 
    this.sub = this.translationService.lang$.subscribe(() => {
      this.updateTexts(); 
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe(); 
  }

  updateTexts() {
    this.about = this.translationService.translate('about');
    this.skill = this.translationService.translate('skill');
    this.portfolio = this.translationService.translate('portfolio');
  }



  //   switchLang(lang: 'de' | 'en') {
  //   this.translationService.setLanguage(lang);
  //   this.activeLang.set(lang);
  //   console.log('Aktive Sprache:', this.activeLang()); 

  // }

  // isActive(lang: 'de' | 'en') {
  //   return this.activeLang() === lang;
  //   // console.log('Aktive Sprache war:', this.isActive());
  // }

}


