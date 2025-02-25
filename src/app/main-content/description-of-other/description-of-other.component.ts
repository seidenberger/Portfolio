import { Component } from '@angular/core';
import { DescriptionOneComponent } from './description-one/description-one.component';
import { DescriptionTwoComponent } from './description-two/description-two.component';
import { DescriptionThreeComponent } from './description-three/description-three.component';

@Component({
  selector: 'app-description-of-other',
  imports: [DescriptionOneComponent,
    DescriptionTwoComponent,
    DescriptionThreeComponent
  ],
  templateUrl: './description-of-other.component.html',
  styleUrl: './description-of-other.component.scss'
})
export class DescriptionOfOtherComponent {

}
