import { Component } from '@angular/core';
import { PrivacyPolicyDeComponent } from './privacy-policy-de/privacy-policy-de.component';
import { PrivacyPolicyEnComponent } from './privacy-policy-en/privacy-policy-en.component';
import { TranslationService } from '../../translation.service';
import { CommonModule} from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  imports: [PrivacyPolicyDeComponent,
    PrivacyPolicyEnComponent,
    CommonModule,

  ],
  templateUrl: './privacy-policy.component.html',
  
  // styleUrl: './privacy-policy.component.scss'
  styleUrl: './../impressum/impressum.component.scss'
})
export class PrivacyPolicyComponent {

  lang$: Observable<'de' | 'en'>;

  constructor(private translationService: TranslationService) {
    this.lang$ = this.translationService.lang$;
  }
}
