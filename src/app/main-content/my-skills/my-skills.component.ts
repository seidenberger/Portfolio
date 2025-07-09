import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mySkills } from './my-skills-json';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent extends BaseTranslatedComponent{
  skills = mySkills;




  headSkills = '';
  allSkills = '';
  // pollo_loco_description = '';

  constructor(public override translationService: TranslationService) {
    super(translationService);
  }

  protected override updateTexts() {
    this.headSkills = this.translationService.translate('headSkills');
    // this.pollo_loco_description = this.translationService.translate('pollo_loco_description');
  }
}
