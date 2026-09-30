import { HttpClient } from '@angular/common/http';
import { Component, inject, isDevMode, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [ReactiveFormsModule, TranslatePipe],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private http = inject(HttpClient);

  mailTest = isDevMode();
  isSending = signal(false);
  feedback = signal('');

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
    if (this.contactForm.invalid) {
      return;
    }
    if (this.mailTest) {
      this.onSuccess();
      return;
    }
    const { name, email, message } = this.contactForm.value;
    this.isSending.set(true);
    this.http
      .post('sendMail.php', JSON.stringify({ name, email, message }), {
        headers: { 'Content-Type': 'text/plain' },
        responseType: 'text',
      })
      .subscribe({
        next: () => this.onSuccess(),
        error: () => this.showFeedback('error'),
      });
  }

  onSuccess() {
    this.contactForm.reset();
    this.showFeedback('success');
  }

  showFeedback(type: string) {
    this.isSending.set(false);
    this.feedback.set(type);
    setTimeout(() => this.feedback.set(''), 4000);
  }
}
