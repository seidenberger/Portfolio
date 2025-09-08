import { Component } from '@angular/core';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-impressum',
  imports: [],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent extends BaseTranslatedComponent {

  legelNotice= '';

    constructor(public override translationService: TranslationService) {
      super(translationService)
    }

updateTexts() {
  // debugger
  this.legelNotice = this.translationService.translate('legelNotice');
  // this.talk = this.translationService.translate('talk');
  // this.scroll = this.translationService.translate('scroll');
  
}
    
}
