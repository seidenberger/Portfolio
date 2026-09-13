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
    RouterLink,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent extends BaseTranslatedComponent{

  http = inject(HttpClient);

  showError = false; 
  mailTest = false;
  mailSent = false;

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
  messageSend= '';
  submitted = false;
  showNameError = false;
  showEmailError = false;
showMessageError = false;
showPrivacyError = false;


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
  this.messageSend = this.translationService.translate('messageSend');
  
}




private checkRequiredFields(): boolean {

  this.showNameError = false;
  this.showEmailError = false;
  this.showMessageError = false;
  this.showPrivacyError = false;

  let valid = true;

    if (!this.contactData.name) {
    this.showNameError = true;
    valid = false;
  }

   if (!this.contactData.email) {
    this.showEmailError = true;
    valid = false;
  }

  if (!this.contactData.message) {
    this.showMessageError = true;
    valid = false;
  }

  if (!this.contactData.privacyAccepted) {
    this.showPrivacyError = true;
    valid = false;
  }

    if (!valid) {
    setTimeout(() => {
      this.showNameError = false;
            this.showEmailError = false;
      this.showMessageError = false;
      this.showPrivacyError = false;
          }, 5000);
  }

  return valid;
}



onSubmit(ngForm: NgForm) {
  if (!this.checkRequiredFields()) {
    return;
  }






  if (ngForm.form.valid) {

    console.log('POST wird gesendet an:', this.post.endPoint);

    this.http.post(
      this.post.endPoint,
      this.post.body(this.contactData),
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).subscribe({
      next: (response) => {
        console.log('PHP Antwort:', response);
        ngForm.resetForm();
        this.submitted = false;
      },

   

      complete: () => {
        console.info('send post complete');

        this.mailSent = true;

        setTimeout(() => {
          this.mailSent = false;
        }, 5000);
      }
    });

  } 
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


    imageSrc = 'assets/icons/go_up_button_default.svg';

onHover() {
  this.imageSrc = 'assets/icons/go_up_button_hover.svg';
}

onLeave() {
  this.imageSrc = 'assets/icons/go_up_button_default.svg';
}


logName(nameField: any) {
  console.log(nameField.valid);
}

// 
loading = false;




} 
