import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';
import { BaseTranslatedComponent } from '../../base-translated.component';

@Component({
  selector: 'app-landingpage',
  imports: [
     CommonModule
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent extends BaseTranslatedComponent{ 

  rotate= '';
  talk= '';
  scroll= '';
  
  // private sub!: Subscription;

  constructor(public override translationService: TranslationService) {
    super(translationService)
  }

iconsLandingpage: string[] = [
  'assets/icons/Property 1=Default.png',
 'assets/icons/Property 1=Default (1).png',
 'assets/icons/Property 1=Default (2).png',

]

// ngOnInit(): void {
//   this.updateTexts(); // Initiale Texte
//   this.sub = this.translationService.lang$.subscribe(() => {
//     this.updateTexts(); // Reagiere auf Sprachwechsel
//   });
// }

// ngOnDestroy(): void {
//   this.sub.unsubscribe(); // Speicher aufräumen
// }

updateTexts() {
  // debugger
  this.rotate = this.translationService.translate('rotate');
  this.talk = this.translationService.translate('talk');
  this.scroll = this.translationService.translate('scroll');
  
}

// switchLang(lang: 'de' | 'en') {
//   this.translationService.setLanguage(lang);
//   console.log(lang);
// }

}
