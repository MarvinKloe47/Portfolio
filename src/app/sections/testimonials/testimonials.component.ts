import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Testimonial {
  name: string;
  project: string;
  quote: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

   testimonials: Testimonial[] = [
    {
      name: 'Raul C',
      project: 'Project Join',
      quote:
        "Marvin had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.",
    },
    {
      name: 'Stefan Schad',
      project: 'Project Join',
      quote:
        'He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.',
    },
    {
      name: 'Kadir S',
      project: 'Project Join',
      quote:
        'He is a reliable and friendly person. Works in a structured way and writes clear code. I recommend him as a colleague.',
    },
  ];
}
