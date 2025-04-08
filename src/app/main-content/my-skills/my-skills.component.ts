import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { mySkills } from './my-skills-json';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills = mySkills;

}
