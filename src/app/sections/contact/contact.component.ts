import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, HttpClientModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  private readonly mailEndpoint = 'http://marvin-kloesters.de/sendMail.php';
  submitStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  submitMessageKey:
    | 'form_status_sending'
    | 'form_status_success'
    | 'form_status_error'
    | 'form_status_invalid'
    | null = null;
  private statusTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public translate: TranslationService
  ) {
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
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.setStatus('error', 'form_status_invalid');
      return;
    }

    const { name, email, message } = this.contactForm.value;
    this.setStatus('sending', 'form_status_sending');

    this.http
      .post(
        this.mailEndpoint,
        { name, email, message },
        { responseType: 'text' }
      )
      .subscribe({
          next: () => {
            this.contactForm.reset({ privacy: false });
            this.setStatus('success', 'form_status_success');
          },
          error: () => {
            this.setStatus('error', 'form_status_error');
          }
      });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private setStatus(
    status: 'idle' | 'sending' | 'success' | 'error',
    messageKey: 'form_status_sending' | 'form_status_success' | 'form_status_error' | 'form_status_invalid' | null
  ): void {
    this.submitStatus = status;
    this.submitMessageKey = messageKey;

    if (this.statusTimer) {
      clearTimeout(this.statusTimer);
      this.statusTimer = null;
    }

    if (status === 'success' || status === 'error') {
      this.statusTimer = setTimeout(() => {
        this.submitStatus = 'idle';
        this.submitMessageKey = null;
      }, 6000);
    }
  }
}
