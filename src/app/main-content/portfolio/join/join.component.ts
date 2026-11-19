import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../translation.service';
import { BaseTranslatedComponent } from '../../../base-translated.component';

@Component({
  selector: 'app-join',
  imports: [CommonModule],
  templateUrl: './join.component.html',
  styleUrl: './../portfolio.component.scss'
})
export class JoinComponent extends BaseTranslatedComponent{

join_description = '';

  constructor(public override translationService: TranslationService) {
    super(translationService);
  }

  updateTexts() {
    Object.assign(this, this.translationService.translateMany([
    'join_description',
    ]));
}

}
