import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms'; 
import { BaseTranslatedComponent } from '../../base-translated.component';
import { TranslationService } from '../../translation.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent extends BaseTranslatedComponent{

  http = inject(HttpClient);

  showError = false; 
  mailTest = false;

  constructor(public override translationService: TranslationService) {
    super(translationService)
  }

  contactData = {
    name: "",
    email: "",
    message: "",
     privacyAccepted: false
  }

  contact= '';
  solve= '';
  reinforcement= '';
  wayMessage= '';
  entertain= '';
yourName= '';
  pleaseName= '';
  yourMail= '';
  pleaseEmail= '';
  yourMassage= '';
  pleaseMassage= '';
  pleaseAccept= '';
  policyRead= '';
  policyPolicy= ''; 
  policyAgree= '';
 sendMessage= '';


logPrivacy() {
  console.log(this.contactData.privacyAccepted);
}

updateTexts() {
  this.contact = this.translationService.translate('contact');
  this.solve = this.translationService.translate('solve');
  this.reinforcement = this.translationService.translate('reinforcement');
  this.wayMessage = this.translationService.translate('wayMessage');
  this.entertain = this.translationService.translate('entertain');
  this.yourName = this.translationService.translate('yourName');
  this.pleaseName = this.translationService.translate('pleaseName');
  this.yourMail = this.translationService.translate('yourMail');
  this.pleaseEmail = this.translationService.translate('pleaseEmail');
  this.yourMassage = this.translationService.translate('yourMassage');
  this.pleaseMassage = this.translationService.translate('pleaseMassage');
  this.pleaseAccept = this.translationService.translate('pleaseAccept');
  this.policyRead = this.translationService.translate('policyRead');
  this.policyPolicy = this.translationService.translate('policyPolicy');
  this.policyAgree = this.translationService.translate('policyAgree');
  this.sendMessage = this.translationService.translate('sendMessage');
  
}


  post = {
    endPoint: 'https://theodor-seidenberger.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    console.log(this.contactData.privacyAccepted);
     console.log(this.contactData);

    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }

  }




} 
