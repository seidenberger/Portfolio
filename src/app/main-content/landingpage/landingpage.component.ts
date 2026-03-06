import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../translation.service';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { ButtonImgComponent } from '../../shared/button-img/button-img.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  imports: [
     CommonModule, ButtonImgComponent,RouterLink
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent extends BaseTranslatedComponent{ 

  rotate= '';
  talk= '';
  scroll= '';
  

  constructor(public override translationService: TranslationService) {
    super(translationService)
  }


updateTexts() {
  this.rotate = this.translationService.translate('rotate');
  this.talk = this.translationService.translate('talk');
  this.scroll = this.translationService.translate('scroll');
  
}
}
