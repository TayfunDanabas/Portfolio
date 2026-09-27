import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { WhyMe } from './why-me/why-me';

@Component({
  imports: [Hero, WhyMe, Skills],
  selector: 'app-main-content',
  styleUrl: './main-content.scss',
  templateUrl: './main-content.html',
})
export class MainContent {}
