import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslationService, TranslationKey } from '../../services/translation/translation.service';

interface Testimonial {
  nameKey: TranslationKey;
  projectKey: TranslationKey;
  quoteKey: TranslationKey;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  constructor(public translate: TranslationService) {}

  testimonials: Testimonial[] = [
    {
      nameKey: 'testimonial_raul_name',
      projectKey: 'testimonial_raul_project',
      quoteKey: 'testimonial_raul_quote',
    },
    {
      nameKey: 'testimonial_stefan_name',
      projectKey: 'testimonial_stefan_project',
      quoteKey: 'testimonial_stefan_quote',
    },
    {
      nameKey: 'testimonial_kadir_name',
      projectKey: 'testimonial_kadir_project',
      quoteKey: 'testimonial_kadir_quote',
    },
  ];
}
