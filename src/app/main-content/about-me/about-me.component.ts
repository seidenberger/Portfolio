import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { BaseTranslatedComponent } from '../../base-translated.component';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent extends BaseTranslatedComponent{

  about= '';
  way= '';
  place= '';
  enthusiasm= '';
  solutions= '';

  constructor(public override translationService: TranslationService) {
    super(translationService)
  }

  updateTexts() {
  Object.assign(this, this.translationService.translateMany([
  'about',
  'way',
  'place',
  'enthusiasm',
  'solutions'
  ]));
}
  

}
