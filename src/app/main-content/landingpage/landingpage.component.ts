import { Component } from '@angular/core';

import { TranslationService } from '../../translation.service';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { ButtonImgComponent } from '../../shared/button-img/button-img.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  imports: [
    ButtonImgComponent,
    RouterLink
],
  templateUrl: './landingpage.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingpageComponent extends BaseTranslatedComponent{ 

  rotate= '';
  talk= '';
  scroll= '';  
  

  constructor(public override translationService: TranslationService) {
    super(translationService)
  }


  updateTexts() {
  Object.assign(this, this.translationService.translateMany([
  'rotate',
  'talk',
  'scroll',
  ]));
}


}
