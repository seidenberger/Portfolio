import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mySkills } from './my-skills-json';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { TranslationService } from '../../translation.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule, RouterLink ],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent extends BaseTranslatedComponent{
  skills = mySkills;

hoverIndex: number | null = null;
hoverImage: string | null = null;



headSkills = '';
allSkills = '';
otherSkills = '';
anotherSkill = '';
enthusiasmSkills = '';
buttonSkill = '';

  constructor(public override translationService: TranslationService) {
    super(translationService);
  }

    updateTexts() {
  Object.assign(this, this.translationService.translateMany([
'headSkills',
'allSkills',
'otherSkills',
'anotherSkill',
'enthusiasmSkills',
'buttonSkill',
  ]));
}


onHover(index: number, truh: boolean) {
  if (truh) {
    this.hoverIndex = index;
  }    else {
    this.hoverIndex = null; 
  }
}

onLeave(index: number) {
  if (this.hoverIndex === index) {
    this.hoverIndex = null;
  }
    this.hoverImage = null;
}
}
