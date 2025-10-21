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
  this.legelNotice = this.translationService.translate('legelNotice');
  this.responsible = this.translationService.translate('responsible');
  this.address = this.translationService.translate('address');
  this.contact = this.translationService.translate('contact');
  this.telephone = this.translationService.translate('telephone');
  this.noteWebsite = this.translationService.translate('noteWebsite');
  this.noteWebsiteTwo = this.translationService.translate('noteWebsiteTwo');
  this.created = this.translationService.translate('created');
  
}
    
}
