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

  protected override updateTexts() {
    this.headSkills = this.translationService.translate('headSkills');
    this.allSkills = this.translationService.translate('allSkills');
    this.otherSkills = this.translationService.translate('otherSkills');
    this.anotherSkill = this.translationService.translate('anotherSkill');
    this.enthusiasmSkills = this.translationService.translate('enthusiasmSkills');
  this.buttonSkill = this.translationService.translate('buttonSkill');
  }


onHover(index: number, truh: boolean) {
  if (truh) {
    this.hoverIndex = index;
    //  this.hoverImage = null;
  }    else {
    this.hoverIndex = null; 
    //  this.hoverImage = 'assets/img/placeholder.png';
  }
}

onLeave(index: number) {
  if (this.hoverIndex === index) {
    this.hoverIndex = null;
  }
    this.hoverImage = null;


}
  

}
