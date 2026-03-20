import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService, TranslationKey } from '../../services/translation/translation.service';

interface Project {
  titleKey: TranslationKey;
  descKey: TranslationKey;
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  reverse?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  constructor(public translate: TranslationService) {}

  projects: Project[] = [
    {
      titleKey: 'project_join_title',
      descKey: 'project_join_desc',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'Firebase'],
      image: 'assets/projects/join.png',
      githubUrl: 'https://github.com/MarvinKloe47/Join-main',
      liveUrl: 'https://marvin-kloesters.developerakademie.net/Join-main-main%20%281%29/Join-main-main/index.html',
      reverse: false,
    },
    {
      titleKey: 'project_el_title',
      descKey: 'project_el_desc',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      image: 'assets/projects/sharkie.png',
      githubUrl: 'https://github.com/MarvinKloe47/Stranger-Things',
      liveUrl: 'https://marvin-kloesters.developerakademie.net/Stranger%20Things/index.html',
      reverse: true,
    },
    {
      titleKey: 'project_pokedex_title',
      descKey: 'project_pokedex_desc',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      image: 'assets/projects/pollo-loco.png',
      githubUrl: 'https://github.com/dein-user/pollo-loco',
      liveUrl: 'https://marvin-kloesters.developerakademie.net/PokeDex_Final_UltraWideFixed/index.html',
      reverse: false,
    }
  ];
}
