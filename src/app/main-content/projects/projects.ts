import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-projects',
  styleUrl: './projects.scss',
  templateUrl: './projects.html',
})
export class Projects {
  projects = [
    {
      name: 'Join',
      technologies: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'projects.join',
      image: '',
      github: '',
      live: '',
    },
    {
      name: 'El Pollo Loco',
      technologies: 'JavaScript | HTML | CSS',
      description: 'projects.elPolloLoco',
      image: 'el-pollo-loco.jpg',
      github: 'https://github.com/TayfunDanabas/El_Pollo_Loco',
      live: 'https://tayfundanabas.developerakademie.net/El_Pollo_Loco/',
    },
    {
      name: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS',
      description: 'projects.pokedex',
      image: 'pokedex.jpg',
      github: 'https://github.com/TayfunDanabas/Pokedex',
      live: 'https://tayfundanabas.developerakademie.net/Pokedex/',
    },
  ];
}
