import { Component } from '@angular/core';
// import { DescriptionOneComponent } from './description-one/description-one.component';
// import { DescriptionTwoComponent } from './description-two/description-two.component';
// import { DescriptionThreeComponent } from './description-three/description-three.component';
// import { RouterLink } from '@angular/router';
import { carousel } from './description-jaso';
import { CommonModule } from '@angular/common';
// import {
//   CarouselComponent,
//   CarouselControlComponent,
//   CarouselIndicatorsComponent,
//   CarouselInnerComponent,
//   CarouselItemComponent
// } from '@coreui/angular';

@Component({
  selector: 'app-description-of-other',
  imports: [
    CommonModule
    // RouterLink,
    // DescriptionOneComponent,
    // DescriptionTwoComponent,
    // DescriptionThreeComponent
    
    
    // CarouselComponent,
    // CarouselIndicatorsComponent,
    // CarouselInnerComponent,
    // CarouselItemComponent,
    // CarouselControlComponent,
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
