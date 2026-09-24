import { Component } from '@angular/core';
import { Hero } from './hero/hero';

@Component({
  imports: [Hero],
  selector: 'app-main-content',
  styleUrl: './main-content.scss',
  templateUrl: './main-content.html',
})
export class MainContent {}
