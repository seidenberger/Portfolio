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
  this.contact = this.translationService.translate('contact');
  this.solve = this.translationService.translate('solve');
  this.reinforcement = this.translationService.translate('reinforcement');
  this.wayMessage = this.translationService.translate('wayMessage');
  this.entertain = this.translationService.translate('entertain');
  this.yourName = this.translationService.translate('yourName');
  this.pleaseName = this.translationService.translate('pleaseName');
  this.yourMail = this.translationService.translate('yourMail');
  this.pleaseEmail = this.translationService.translate('pleaseEmail');
  this.pleaseEmail = this.translationService.translate('teachingSignEmail');
  this.pleaseEmail = this.translationService.translate('validEmail');  
  this.yourMassage = this.translationService.translate('yourMassage');
  this.pleaseMassage = this.translationService.translate('pleaseMassage');
  this.pleaseAccept = this.translationService.translate('pleaseAccept');
  this.policyRead = this.translationService.translate('policyRead');
  this.policyPolicy = this.translationService.translate('policyPolicy');
  this.policyAgree = this.translationService.translate('policyAgree');
  this.sendMessage = this.translationService.translate('sendMessage');
  this.messageSend = this.translationService.translate('messageSend');  
  this.messegeSenbError = this.translationService.translate('messegeSenbError');
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

  return  this.validateName() &&
         this.validateMessage() &&
         this.validatePrivacy() &&
         !this.showEmailError;
}

private validateName(): boolean {
  if (!this.contactData.name.trim()) {
    this.showNameError = true;
    return false;
  }

  return true;
}

private validateMessage(): boolean {
  if (!this.contactData.message.trim()) {
    this.showMessageError = true;
    return false;
  }

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

  if (!email) {
    this.showEmailError = true;

    this.emailErrorMessage = this.translationService.translate('pleaseEmail');
    return;
  }

  if (/\s/.test(email)) {
    this.showEmailError = true;

    this.emailErrorMessage = this.translationService.translate('teachingSignEmail');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    this.showEmailError = true;

    this.emailErrorMessage = this.translationService.translate('validEmail');
    return;
  }

  this.showEmailError = false;
  this.emailErrorMessage = '';
    this.emailIsValide = !this.showEmailError; 
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

checkMessageWhitespace(): void {
  this.showMessageError = !this.contactData.message.trim();
  this.messageIsValid = !this.showMessageError;
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

// this.messageIsValid = false;
// this.showMessageError = false;

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
