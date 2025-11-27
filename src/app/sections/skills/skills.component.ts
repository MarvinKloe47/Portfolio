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
    { name: 'Angular', icon: 'assets/icons/angular.png' },
    { name: 'TypeScript', icon: 'assets/icons/typescript.png' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.png' },
    { name: 'HTML5', icon: 'assets/icons/html5.png' },
    { name: 'CSS3', icon: 'assets/icons/css.png' },
    { name: 'Restapi', icon: 'assets/icons/restapi.png' },
    
    
  ];

  skillsBottom: Skill[] = [
    {name: 'Firebase', icon: 'assets/icons/firebase.png' },
    {name: 'Git', icon: 'assets/icons/git.png' },
    {name: 'Scrum', icon: 'assets/icons/scrum.png' },
    {name: 'Materialdesign', icon: 'assets/icons/materialdesign.png' },
    {name: 'challenge', icon: 'assets/icons/challenge.png' },

  ];
}
