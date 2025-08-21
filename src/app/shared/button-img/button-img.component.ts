import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { buttonImgs } from './button-img-json';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-img',
  imports: [ CommonModule, RouterModule],
  templateUrl: './button-img.component.html',
  styleUrl: './button-img.component.scss'
})
export class ButtonImgComponent {

buttonImgs = buttonImgs;

// iconsLandingpage: string[] = [
//   'assets/icons/Property 1=Default.png',
//  'assets/icons/Property 1=Default (1).png',
//  'assets/icons/Property 1=Default (2).png',

// ]
isExternal(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

}  
