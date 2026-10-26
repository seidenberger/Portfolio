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

   nameTouched = false;
  emailTouched = false;
  messageTouched = false;
  privacyTouched = false;

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

emailErrorMessage = '';

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

private checkRequiredFields(ngForm: NgForm): boolean {
  this.resetErrors();

  let valid = true;
  
  if (!this.contactData.name.trim()) {
    this.showNameError = true;
    valid = false;
  }

  if (!this.contactData.message.trim()) {
    this.showMessageError = true;
    valid = false;
  }

  if (!this.contactData.privacyAccepted) {
    this.showPrivacyError = true;
    valid = false;  
  }

  if (!valid) {
    ngForm.form.markAllAsTouched();
  }

  return valid && ngForm.form.valid;
}

checkEmail(): void {
  const email = this.contactData.email.trim();

  if (!email) {
    this.showEmailError = true;
    this.emailErrorMessage = 'Bitte gib deine E-Mail-Adresse ein.';
    return;
  }

  if (/\s/.test(email)) {
    this.showEmailError = true;
    this.emailErrorMessage =
      'Die E-Mail-Adresse darf keine Leerzeichen enthalten.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    this.showEmailError = true;
    this.emailErrorMessage =
      'Bitte gib eine gültige E-Mail-Adresse ein.';
    return;
  }

  this.showEmailError = false;
  this.emailErrorMessage = '';
}



private resetErrors(): void {
  this.showNameError = false;
  this.showEmailError = false;
  this.showMessageError = false;
  this.showPrivacyError = false;
}

private hideErrorsAfterDelay(): void {
  setTimeout(() => this.resetErrors(), 5000);
}


onSubmit(ngForm: NgForm) {
  if (!this.checkRequiredFields(ngForm)) {
    return;
  }

    this.contactData.name = this.contactData.name.trim();
  this.contactData.email = this.contactData.email.trim();
  this.contactData.message = this.contactData.message.trim();

  this.http.post(
    this.post.endPoint,
    this.post.body(this.contactData),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).subscribe({
    next: () => {
      ngForm.resetForm();
      this.resetErrors();
      this.submitted = false;
      this.mailSent = true;

      setTimeout(() => {
        this.mailSent = false;
      }, 5000);
    },
    error: (error) => {
      console.error('Fehler beim Senden der Nachricht:', error);

     
    }
  });

  // if (ngForm.form.valid) {
  //   this.http.post(
  //     this.post.endPoint,
  //     this.post.body(this.contactData),
  //     {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }
  //   ).subscribe({
  //     next: (response) => {
  //       ngForm.resetForm();
  //       this.submitted = false;
  //     }, 
  //     complete: () => {
  //       this.mailSent = true;
  //       setTimeout(() => {
  //         this.mailSent = false;
  //       }, 5000);
  //     }
  //   });

  // } 
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

loading = false;

}
