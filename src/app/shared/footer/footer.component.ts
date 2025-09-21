import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { TranslationService } from '../../translation.service';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { ButtonImgComponent } from '../button-img/button-img.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule, ButtonImgComponent, RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent extends BaseTranslatedComponent{


 constructor(public override translationService: TranslationService) {
    super(translationService)
  }

legelNotice= '';

updateTexts() {
  this.legelNotice = this.translationService.translate('legelNotice');
}

}
