import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { FormsModule, NgForm } from '@angular/forms'; 




@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule



  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  showError = false; 

  contactData = {
    name: "",
    email: "",
    message: "",
     privacyAccepted: false
  }

//   onSubmit(ngForm: NgForm) {
//     if(ngForm.valid && ngForm.submitted){
//     console.log(this.contactData)
//   }
// }

  
logPrivacy() {
  console.log(this.contactData.privacyAccepted);
}



  mailTest = false;

  post = {
    endPoint: 'https://theodor-seidenberger.de/sendMail.php',
    // endPoint: 'https://deineDomain.de/sendMail.php',
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



//   onSubmit(form: NgForm) {
//   console.log("läuft");
//   console.log(this.contactData)

//   console.log(this.showPrivacyError)
//   if (!this.contactData.privacyAccepted) {
//     this.showPrivacyError = true;
//     return; // breche ab
//   } 

//   if (form.valid) {
//     this.showPrivacyError = false;
//     console.log('Formular erfolgreich gesendet', this.contactData);
//     // Weiterer Code hier ...
//   }
// }
} 
