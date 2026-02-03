import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, public translate: TranslationService) {
    this.contactForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(10)]],
        privacy: [false, [Validators.requiredTrue]],
      },
      { updateOn: 'blur' }
    );
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get privacy() { return this.contactForm.get('privacy'); }

  onSubmit(): void {
    if (this.contactForm.invalid) return;
    console.log('Kontaktformular:', this.contactForm.value);
    this.contactForm.reset();
  }
  scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

}
