import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillsTop: Skill[] = [
    { name: 'Angular', icon: 'assets/icons/Angular.png' },
    { name: 'TypeScript', icon: 'assets/icons/TypeCript.png' },
    { name: 'JavaScript', icon: 'assets/icons/JavaScript.png' },
    { name: 'HTML', icon: 'assets/icons/html.png' },
    { name: 'CSS', icon: 'assets/icons/CSS.png' },
    { name: 'REST-API', icon: 'assets/icons/Api.png' },
  ];

  skillsBottom: Skill[] = [
    { name: 'Supabase', icon: 'assets/icons/Supabase.png' },
    { name: 'Git', icon: 'assets/icons/Git.png' },
    { name: 'Scrum', icon: 'assets/icons/scrum.png' },
    { name: 'Material design', icon: 'assets/icons/material.png' },
    { name: 'Challenge me', icon: 'assets/icons/ChallengeMe.png' },

  ];

  get allSkills() {
    return [...this.skillsTop, ...this.skillsBottom];
  }
}
