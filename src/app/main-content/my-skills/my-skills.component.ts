import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  iconsSkills: string[] = [
    'assets/img/skills/Property 1=html.png',
   'assets/img/skills/Property 1=css.png',
   'assets/img/skills/Property 1=JavScript.png',
   'assets/img/skills/Property 1=Typescript.png',
   'assets/img/skills/Property 1=Angular.png',
'assets/img/skills/Property 1=Firebase.png',
'assets/img/skills/Property 1=Git.png',
'assets/img/skills/Property 1=Api.png',
'assets/img/skills/Property 1=Scrum.png',
'assets/img/skills/Property 1=Material Design.png',
'assets/img/skills/Property 1=Continually learning.png',
  
  ]
}
