import { Component, OnDestroy, OnInit, signal, Input, Output, EventEmitter } from '@angular/core';
import { TranslationService } from '../../../translation.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { log } from 'node:console';

@Component({
  selector: 'app-menu-overlay',
    standalone: true,
  imports: [    CommonModule],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss'
})
export class MenuOverlayComponent  implements OnInit, OnDestroy{
  activeLang = signal<'de' | 'en'>('de');
  
// showMenu = true; 

      about= '';
      skill= '';
      portfolio= '';
      private sub!: Subscription;

  isDEActive = signal(false);

  constructor(public translationService: TranslationService) {}

  // @Input() show = f''alse;  // bekommt den Wert vom Parent

  
    @Output() closed = new EventEmitter<void>();

  closeMenu() {
      console.log('closeMenu() in MenuOverlayComponent aufgerufen'); 
    this.closed.emit();
  }


  // handleClose() {
  //    // Damit Header reagieren kann
  // }

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
    this.about = this.translationService.translate('about');
    this.skill = this.translationService.translate('skill');
    this.portfolio = this.translationService.translate('portfolio');
  }



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


