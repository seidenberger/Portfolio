import { Component } from '@angular/core';
import { carousel } from './description-jaso';
import { CommonModule } from '@angular/common';
import { DescriptionOneComponent } from './description-one/description-one.component';


@Component({
  selector: 'app-description-of-other',
  imports: [
    CommonModule, DescriptionOneComponent
  ],
  templateUrl: './description-of-other.component.html',
  styleUrl: './description-of-other.component.scss'
})

export class DescriptionOfOtherComponent {

  carousel = carousel;

  currentIndex = 0;

  get currentItem() {
    return this.carousel[this.currentIndex];
  }
  
  next() {
    if (this.currentIndex < this.carousel.length - 1) {
      this.currentIndex++;
    }
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

}
