import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-why-me',
  styleUrl: './why-me.scss',
  templateUrl: './why-me.html',
})
export class WhyMe {}
