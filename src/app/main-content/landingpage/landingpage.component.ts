import { Component } from '@angular/core';
import { HeaderComponent } from './../../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage',
  imports: [
    HeaderComponent, CommonModule
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent { 

iconsLandingpage: string[] = [
  'assets/icons/Property 1=Default.png',
 'assets/icons/Property 1=Default (1).png',
 'assets/icons/Property 1=Default (2).png',

]

}
