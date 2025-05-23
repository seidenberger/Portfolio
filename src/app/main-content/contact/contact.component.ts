import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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


  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted){
    console.log(this.contactData)
  }}
} 
