import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { BaseTranslatedComponent } from '../../../base-translated.component';
import { TranslationService } from '../../../translation.service';


@Component({
  selector: 'app-el-pollo-loco',
  imports: [CommonModule],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './../portfolio.component.scss'
})
export class ElPolloLocoComponent extends BaseTranslatedComponent{
@Input() reverse: boolean = false;

  pollo_loco_description = '';
  
    constructor(public override translationService: TranslationService) {
      super(translationService);
    }
  
    protected override updateTexts() {
    this.pollo_loco_description = this.translationService.translate('pollo_loco_description');
    }

}
