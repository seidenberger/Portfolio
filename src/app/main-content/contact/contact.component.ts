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
  formSubmitted = false;

  constructor(public override translationService: TranslationService) {
    super(translationService)
  }
  
  contactData = {
    name: "",
    email: "",
    message: '',
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
  teachingSignEmail = '';
  validEmail= '';
  pleaseAccept= '';
  policyRead= '';
  policyPolicy= ''; 
  policyAgree= '';
  sendMessage= '';
  messageSend= '';
  messegeSenbError= '';
  submitted = false;
  showNameError = false;
  showEmailError = false;
  showMessageError = false;
  showPrivacyError = false;
  MessegeError = false;
  mailSendError = false;
  messageIsValid = false;
  nameIsValide = false;
  emailIsValide = false;


updateTexts() {
  Object.assign(this, this.translationService.translateMany([
    'contact',
    'solve',
  'reinforcement',
  'wayMessage',
  'entertain',
  'yourName',
  'pleaseName',
  'yourMail',
  'pleaseEmail',
  'yourMassage',
  'pleaseMassage',
  'teachingSignEmail',
  'validEmail',
  'pleaseAccept',
  'policyRead',
  'policyPolicy',
  'policyAgree',
  'sendMessage',
  'messageSend',
  'messegeSenbError'
  ]));
}

private checkRequiredFields(ngForm: NgForm): boolean {


    const fieldsValid = this.validateRequiredFields();
  if (!fieldsValid) {
    this.markFormAsTouched(ngForm);
  }

    return fieldsValid && ngForm.form.valid;
}

private validateRequiredFields(): boolean {
  this.checkEmail();

  const nameValid = this.validateName();
  const messageValid = this.validateMessage();
  const privacyValid = this.validatePrivacy();
  const emailValid = !this.showEmailError;

  return nameValid && messageValid && privacyValid && emailValid;
}

private validateName(): boolean {
  if (!this.contactData.name.trim()) {
    this.showNameError = true;
    return false;
  }

  return true;
}

private validateMessage(): boolean {
  const message = this.contactData.message.trim();

  if (message.length < 2) {
    this.showMessageError = true;
    return false;
  }

  this.showMessageError = false;
  return true;
}

private validatePrivacy(): boolean {
  if (!this.contactData.privacyAccepted) {
    this.showPrivacyError = true;
    return false;
  }

  return true;
}

private markFormAsTouched(ngForm: NgForm): void {
  ngForm.form.markAllAsTouched();
}


checkEmail(): void {
  const email = this.contactData.email.trim();

  const error = this.validateEmail(email);

  this.showEmailError = !!error;
  this.emailErrorMessage = error ?? '';
  this.emailIsValide = !error;
}

private validateEmail(email: string): string | null {
  return (
    this.checkEmailEmpty(email) ??
    this.checkEmailWhitespace(email) ??
    this.checkEmailFormat(email)
  );
}

private checkEmailEmpty(email: string): string | null {
  if (!email) {
    return this.translationService.translate('pleaseEmail');
  }

  return null;
}

private checkEmailWhitespace(email: string): string | null {
  if (/\s/.test(email)) {
    return this.translationService.translate('teachingSignEmail');
  }

  return null;
}

private checkEmailFormat(email: string): string | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return this.translationService.translate('validEmail');
  }

  return null;
}

private resetErrors(): void {
  this.showNameError = false;
  this.showEmailError = false;
  this.showMessageError = false;
  this.showPrivacyError = false;
  this.messageIsValid = false;
  this.nameIsValide = false;
  this.emailIsValide = false;
}

checkNameWhitespace(): void {
  this.showNameError = !this.contactData.name.trim();
  this.nameIsValide = !this.showNameError; 
}

checkMessage(): void {
  const message = this.contactData.message.trim();
  this.showMessageError = message.length < 2;
    this.messageIsValid = message.length >= 2;
}

onSubmit(ngForm: NgForm) {
  if (!this.checkRequiredFields(ngForm)) {
    return;
  }

  if (ngForm.form.valid) {
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
         this.mailSent = true;
        ngForm.resetForm();
        this.submitted = false;
        setTimeout(() => {
          this.mailSent = false;
           
        }, 5000);
         this.resetErrors();
      },
      
      error: () => {
        this.mailSendError = true;

        setTimeout(() => {
          this.mailSendError = false;
        }, 5000);

        console.error('Fehler beim Senden der E-Mail:', );
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

loading = false;

}
