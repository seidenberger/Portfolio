import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
iconsLandingpage: string[] = [
  'assets/icons/Property 1=Default.png',
 'assets/icons/Property 1=Default (1).png',
 'assets/icons/Property 1=Default (2).png',

]
}
