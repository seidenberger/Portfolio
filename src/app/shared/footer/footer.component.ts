import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { TranslationService } from '../../translation.service';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { ButtonImgComponent } from '../button-img/button-img.component';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule, ButtonImgComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent extends BaseTranslatedComponent{
// iconsLandingpage: string[] = [
//   'assets/icons/Property 1=Default.png',
//  'assets/icons/Property 1=Default (1).png',
//  'assets/icons/Property 1=Default (2).png',

// ]

// @Input() show = true;

 constructor(public override translationService: TranslationService) {
    super(translationService)
  }

legelNotice= '';

updateTexts() {
  this.legelNotice = this.translationService.translate('legelNotice');
}

}
