import { Component, OnDestroy, OnInit, signal, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonTranslatedComponent } from '../../button-translated/button-translated.component';
import { TranslationService } from '../../../translation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-overlay',
    standalone: true,
  imports: [    CommonModule, ButtonTranslatedComponent, RouterLink ],
  templateUrl: './menu-overlay.component.html',
  styleUrl: './menu-overlay.component.scss'
})
export class MenuOverlayComponent 
 implements OnInit, OnDestroy{
  activeLang = signal<'de' | 'en'>('de');

      about= '';
      skill= '';
      portfolio= '';
      private sub!: Subscription;


  constructor(public translationService: TranslationService) {
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


}


