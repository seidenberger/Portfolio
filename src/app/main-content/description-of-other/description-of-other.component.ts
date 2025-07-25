import { Component } from '@angular/core';
// import { carousel } from './description-jaso';
// import { descriptionItems } from './description-json;
import { descriptionItems } from './description-json';
import { CommonModule } from '@angular/common';
import { DescriptionOneComponent } from './description-one/description-one.component';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { TranslationService } from '../../translation.service';
import { TranslationKey } from '../../translations';


@Component({
  selector: 'app-description-of-other',
  imports: [
    CommonModule, DescriptionOneComponent
  ],
  templateUrl: './description-of-other.component.html',
  styleUrl: './description-of-other.component.scss'
})

export class DescriptionOfOtherComponent extends BaseTranslatedComponent{


  items =  descriptionItems;
  currentText ='';
  uebung = '';

  currentIndex = 0;

  constructor(public override translationService: TranslationService){
    super(translationService)
  }


    updateTexts() {
  const key = this.currentItem.textKey as TranslationKey;
  this.currentText = this.translationService.translate(key);
  console.log('updateTexts  Aktives Bild:', this.currentIndex, 'Key:', key, 'Text:', this.currentText);
}

  get currentItem() {
    return this.items[this.currentIndex];
  }
  
  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      this.updateTexts();
    }
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateTexts();
    } 
  }

}
