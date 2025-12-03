import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  techStack: string[];
  description: string;
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
  projects: Project[] = [
    { 
      title: 'Join',
      techStack: ['Angular', 'TypeScript', 'SCSS', 'Firebase'],
      description: 'A social networking platform that allows users to connect, share content, and engage with a community through posts, comments, and likes.',
      image: 'assets/projects/join.png',
      githubUrl: 'https://github.com/MarvinKloe47/Join-main',
      liveUrl: 'https://marvin-kloesters.developerakademie.net/Join-main-main%20%281%29/Join-main-main/index.html',
      reverse: false,
    },

    {
      title: 'EL Polo Loco',
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Jump through the Dessert, collect coins and avoid enemies in this cartoon-style game.',
      image: 'assets/projects/sharkie.png',
      githubUrl: 'https://github.com/MarvinKloe47/ElPoloLoco',
      liveUrl: 'https://marvin-kloesters.developerakademie.net/EL_POLLO_LOCO/EL_POLLO_LOCO/index.html',
      reverse: true,
    },
    {
      title: 'Pokedex',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A responsive Pokédex web app that displays Pokémon as interactive cards with type-based colors and icons. Users can scroll through the list, search by name or ID, and switch between light and dark mode. The project focuses on clean UI design, modular JavaScript for rendering and filtering the data, and reusable CSS components for the card layout and animations.',
      image: 'assets/projects/pollo-loco.png',
      githubUrl: 'https://github.com/dein-user/pollo-loco',
      liveUrl: 'https://marvin-kloesters.developerakademie.net/PokeDex_Final_UltraWideFixed/index.html',
      reverse: false,
    },

  ];

}
