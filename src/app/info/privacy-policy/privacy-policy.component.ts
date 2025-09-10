import { Component } from '@angular/core';
import { PrivacyPolicyDeComponent } from './privacy-policy-de/privacy-policy-de.component';
import { PrivacyPolicyEnComponent } from './privacy-policy-en/privacy-policy-en.component';
import { BaseTranslatedComponent } from '../../base-translated.component';
import { TranslationService } from '../../translation.service';
import { CommonModule, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [PrivacyPolicyDeComponent,
    PrivacyPolicyEnComponent,
    CommonModule,
    NgSwitch, NgSwitchCase

  ],
  templateUrl: './privacy-policy.component.html',
  
  // styleUrl: './privacy-policy.component.scss'
  styleUrl: './../impressum/impressum.component.scss'
})
export class PrivacyPolicyComponent extends BaseTranslatedComponent{
    constructor(public override translationService: TranslationService) {
      super(translationService)
    }
  
      
  updateTexts() {
    debugger
  }
}
