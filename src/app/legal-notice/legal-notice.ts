import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-legal-notice',
  templateUrl: './legal-notice.html',
})
export class LegalNotice {
  sections = ['terms', 'scope', 'rights', 'use', 'disclaimer', 'indemnity'];
}
