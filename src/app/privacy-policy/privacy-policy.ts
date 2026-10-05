import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {
  sections = [
    'general',
    'hosting',
    'ssl',
    'contactForm',
    'storage',
    'fonts',
    'links',
    'rights',
    'complaint',
  ];
}
