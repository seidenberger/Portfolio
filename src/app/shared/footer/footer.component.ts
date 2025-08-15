import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { BaseTranslatedComponent } from '../../base-translated.component';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent extends BaseTranslatedComponent{
iconsLandingpage: string[] = [
  'assets/icons/Property 1=Default.png',
 'assets/icons/Property 1=Default (1).png',
 'assets/icons/Property 1=Default (2).png',

]

 constructor(public override translationService: TranslationService) {
    super(translationService)
  }

legelNotice= '';

updateTexts() {
  this.legelNotice = this.translationService.translate('legelNotice');
}

}
