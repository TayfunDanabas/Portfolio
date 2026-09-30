import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [ReactiveFormsModule, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/),
    ]),
    message: new FormControl('', Validators.required),
    privacy: new FormControl(false, Validators.requiredTrue),
  });

  isInvalid(field: string) {
    const control = this.contactForm.get(field);
    return !!control && control.invalid && control.touched;
  }

  isValid(field: string) {
    const control = this.contactForm.get(field);
    return !!control && control.valid && control.touched;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactForm.reset();
    }
  }
}
