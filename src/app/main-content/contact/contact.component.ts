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

submitted = false;

onSubmit(ngForm: NgForm) {


  if (
    !this.contactData.name ||
    !this.contactData.email ||
    !this.contactData.message ||
    !this.contactData.privacyAccepted
  ) {

  this.submitted = true;
    
  setTimeout(() => {
    this.submitted = false;
  }, 5000);

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


//   onSubmit(ngForm: NgForm) {
//   console.log('SUBMIT wurde aufgerufen');
//   console.log('Formular gültig:', ngForm.form.valid);
//   console.log('Contact Data:', this.contactData);
  

//   if (ngForm.submitted && ngForm.form.valid) {

//     console.log('POST wird gesendet an:', this.post.endPoint);

//     this.http.post(
//       this.post.endPoint,
//       this.post.body(this.contactData),
//       {
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }
//     ).subscribe({
//       next: (response) => {
//         console.log('PHP Antwort:', response);
//         ngForm.resetForm();
//       },

//       error: (error) => {
//         console.error('POST FEHLER:', error);
//       },

//       complete: () => {
//         console.info('send post complete');
//  this. mailSent = true;
//           setTimeout(() => {
//     this. mailSent = false;
//   }, 5000);
  
//       }
//     });
//   } else {
//     console.log('POST NICHT gesendet – Formular ist ungültig');
//   }
// }


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

// sendMail() {
//   this.loading = true;

//   setTimeout(() => {
//     this.loading = false;
//     this.mailSent = true;
//   }, 1500);
// }
// sendEmail() {
//   this.emailService.sendEmail().subscribe({
//     complete: () => {
//       console.info('send post complete');
//       this.mailSent = true;
//     }
//   });
// }


} 
