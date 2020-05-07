import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.sass']
})

export class ContactInfoComponent {
  constructor() { }
  onSubmitForm(form: NgForm) {
    console.log('submited');
  }
}
