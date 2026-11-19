import { Component } from '@angular/core';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './../legal.scss'
})
export class ImpressumComponent extends BaseTranslatedComponent {

  legelNotice= '';
  responsible= '';
      address= '';
      contact= '';
      telephone= '';
      noteWebsite= '';
      noteWebsiteOne= '';
      noteWebsiteTwo= '';
      created= '';
      privacyPolicy= '';
      responsibleDSGVO= '';

    constructor(public override translationService: TranslationService) {
      super(translationService)
    }

  updateTexts() {
  Object.assign(this, this.translationService.translateMany([
  'legelNotice',
  'responsible',
  'address',
  'contact',
  'telephone',
  'noteWebsite',
  'noteWebsiteOne',
  'noteWebsiteTwo',
  'created',
  ]));
}
    
}
