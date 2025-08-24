import { Component, Input } from '@angular/core';
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
  @Input() show = false; // standardmäßig aus
  // buttonImgs = buttonImgs;
// show = true;''

isExternal(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

}  
