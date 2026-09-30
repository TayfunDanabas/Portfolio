import { Component } from '@angular/core';
import { Contact } from './contact/contact';
import { Hero } from './hero/hero';
import { Projects } from './projects/projects';
import { Skills } from './skills/skills';
import { WhyMe } from './why-me/why-me';

@Component({
  imports: [Hero, WhyMe, Skills, Projects, Contact],
  selector: 'app-main-content',
  styleUrl: './main-content.scss',
  templateUrl: './main-content.html',
})
export class MainContent {}
