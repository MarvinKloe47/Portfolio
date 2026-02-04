import { Injectable } from '@angular/core';

export type Lang = 'de' | 'en';

type Translations = typeof TRANSLATIONS.en;
export type TranslationKey = keyof Translations;

const TRANSLATIONS = {
  en: {
    nav_whyMe: 'Why me',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_contact: 'Contact',

    hero_role: 'FRONTEND DEVELOPER',
    hero_name: 'Marvin KlÃ¶sters',

    about_title: 'Why me',
    about_text:
      "Hi, I'm Marvin KlÃ¶sters â€” a passionate Frontend Developer focused on building modern, user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I create responsive, high-performance, and visually appealing interfaces that truly engage users. I place great value on clean code, clear architecture, and intuitive UI/UX, aiming to build web experiences that stand out both technically and visually.",

    about_iAm: 'I am',
    about_location_value_1: 'located',
    about_location_value_2: 'in Kleve',
    about_relocate_value_1: 'open to',
    about_relocate_value_2: 'relocate',
    about_remote_value_1: 'open to',
    about_remote_value_2: 'work remote',

    cta_letsTalk: "Letâ€™s talk",

    skills_title: 'My Skills',
    skills_challenge: 'challenge',
    skills_text: 'I am always happy to learn new technologies, just tell me what you need.',
    skills_cta: "Letâ€™s talk",

    projects_title: 'My Projects',

    project_join_title: 'Join',
    project_join_stack: 'Angular, TypeScript, SCSS, Firebase',
    project_join_desc:
      'A social networking platform that allows users to connect, share content, and engage with a community through posts, comments, and likes.',

    project_el_title: 'EL Polo Loco',
    project_el_stack: 'Angular, TypeScript, HTML, CSS, Firebase',
    project_el_desc:
      'Jump through the Dessert, collect coins and avoid enemies in this cartoon-style game.',

    project_pokedex_title: 'Pokedex',
    project_pokedex_stack: 'JavaScript, HTML, CSS',
    project_pokedex_desc:
      'A responsive PokÃ©dex web app that displays PokÃ©mon as interactive cards with type-based colors and icons. Users can scroll through the list, search by name or ID, and switch between light and dark mode.',

    btn_github: 'GitHub',
    btn_liveTest: 'Live Test',

    testimonials_title: 'Need a teamplayer? Here what my colleagues said about me',

    testimonial_raul_name: 'Raul C',
    testimonial_raul_project: 'Project Join',
    testimonial_raul_quote:
      'â€œMarvin had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.â€',

    testimonial_stefan_name: 'Stefan Schad',
    testimonial_stefan_project: 'Project Join',
    testimonial_stefan_quote:
      'â€œHe is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.â€',

    testimonial_kadir_name: 'Kadir S',
    testimonial_kadir_project: 'Project Join',
    testimonial_kadir_quote:
      'â€œHe is a reliable and friendly person. Works in a structured way and writes clear code.â€',

    contact_title: 'Contact me',
    contact_text:
      "I'm open for freelance or full-time opportunities. If you have a project in mind or need frontend support, feel free to drop a message.",

    contact_email_label: 'E-mail: marvin.kloesters@gmail.com',
    contact_tel_label: 'Tel: +49 157 123 456 68',

    form_name: 'Your Name',
    form_email: 'Your Email',
    form_message: 'Your Message',
    form_send: 'Send',

    form_privacy_prefix: "I've read the",
    form_privacy_link: 'privacy policy',
    form_privacy_suffix: 'and agree to the processing of my data as outlined.',

    contact_error_name: 'Please enter your name.',
    contact_error_email: 'Please enter a valid email.',
    contact_error_message: 'Please enter a message (min. 10 characters).',
    contact_error_privacy: 'Please accept the privacy policy.',

    imprint_title: 'Legal Notice',
    imprint_heading: 'Imprint',
    imprint_project_heading: 'Exploring the Board',
    imprint_email: 'Email: marvin.kloesters[at]omexom.com',

    imprint_terms_title: 'Acceptance of terms',
    imprint_terms_text:
      'By accessing and using this Portfolio, you acknowledge and agree to the following terms and conditions.',

    imprint_scope_title: 'Scope and ownership of the product',
    imprint_scope_text_1:
      'This Portfolio was developed as part of a student project at the Developer Akademie.',
    imprint_scope_text_2:
      'The design is owned by the Developer Akademie GmbH. Unauthorized use is prohibited.',

    imprint_rights_title: 'Proprietary rights',
    imprint_rights_text:
      'All proprietary rights remain with the listed students except the design.',

    imprint_use_title: 'Use of the product',
    imprint_use_text:
      'The Portfolio may only be used for lawful purposes in accordance with applicable laws.',

    imprint_disclaimer_title: 'Disclaimer of warranties',
    imprint_disclaimer_text:
      'This Portfolio is provided â€œas isâ€ without warranty of any kind.',

    imprint_indemnity_title: 'Indemnity',
    imprint_indemnity_text:
      'You agree to indemnify and hold harmless the listed students and the Developer Akademie.',

    imprint_contact_text:
      'For any questions or notices, please contact us via email.',

    imprint_date: 'Date: July 26, 2025',

    footer_signature: '<MK>',
    footer_role: 'frontend developer',
    footer_copyright: 'Â© Marvin KlÃ¶sters 2025',
    footer_legal: 'legal notice',
    footer_github: 'GitHub',
    footer_mail: 'Mail',
    footer_linkedin: 'LinkedIn',
  },

  de: {
    nav_whyMe: 'Warum ich',
    nav_skills: 'Skills',
    nav_projects: 'Projekte',
    nav_contact: 'Kontakt',

    hero_role: 'FRONTEND-ENTWICKLER',
    hero_name: 'Marvin KlÃ¶sters',

    about_title: 'Warum ich',
    about_text:
      'Hallo, ich bin Marvin KlÃ¶sters â€“ ein leidenschaftlicher Frontend-Entwickler mit Fokus auf moderne, benutzerfreundliche Webanwendungen.',

    about_iAm: 'Ich bin',
    about_location_value_1: 'ansÃ¤ssig',
    about_location_value_2: 'in Kleve',
    about_relocate_value_1: 'bereit',
    about_relocate_value_2: 'umzuziehen',
    about_remote_value_1: 'bereit fÃ¼r',
    about_remote_value_2: 'Remote-Arbeit',

    cta_letsTalk: 'Lass uns sprechen',

    skills_title: 'Meine FÃ¤higkeiten',
    skills_challenge: 'Herausforderung',
    skills_text: 'Ich freue mich immer, neue Technologien zu lernen â€“ sag mir einfach, was du brauchst.',
    skills_cta: 'Lass uns sprechen',

    projects_title: 'Meine Projekte',

    project_join_title: 'Join',
    project_join_stack: 'Angular, TypeScript, SCSS, Firebase',
    project_join_desc:
      'Eine Social-Networking-Plattform zur Vernetzung und zum Austausch von Inhalten.',

    project_el_title: 'EL Polo Loco',
    project_el_stack: 'Angular, TypeScript, HTML, CSS, Firebase',
    project_el_desc:
      'Springe durch die WÃ¼ste, sammle MÃ¼nzen und weiche Gegnern aus.',

    project_pokedex_title: 'Pokedex',
    project_pokedex_stack: 'JavaScript, HTML, CSS',
    project_pokedex_desc:
      'Eine responsive PokÃ©dex-Webanwendung mit interaktiven Karten.',

    btn_github: 'GitHub',
    btn_liveTest: 'Live Test',

    testimonials_title: 'Du suchst einen Teamplayer? Das sagen meine Kollegen Ã¼ber mich',

    testimonial_raul_name: 'Raul C',
    testimonial_raul_project: 'Projekt Join',
    testimonial_raul_quote:
      'â€žMarvin arbeitet zuverlÃ¤ssig, strukturiert und sehr teamorientiert.â€œ',

    testimonial_stefan_name: 'Stefan Schad',
    testimonial_stefan_project: 'Projekt Join',
    testimonial_stefan_quote:
      'â€žVerlÃ¤sslicher Teamplayer mit sauberem Code und Struktur.â€œ',

    testimonial_kadir_name: 'Kadir S',
    testimonial_kadir_project: 'Projekt Join',
    testimonial_kadir_quote:
      'â€žStrukturiert, zuverlÃ¤ssig und freundlich. Sehr zu empfehlen.â€œ',

    contact_title: 'Kontakt',
    contact_text: 'Ich bin offen f\u00fcr neue Projekte und spannende Teams. Wenn du Unterst\u00fctzung im Frontend brauchst, schreib mir gerne.',

    contact_email_label: 'E-Mail: marvin.kloesters@gmail.com',
    contact_tel_label: 'Tel: +49 157 123 456 68',

    form_name: 'Dein Name',
    form_email: 'Deine E-Mail',
    form_message: 'Deine Nachricht',
    form_send: 'Senden',

    form_privacy_prefix: 'Ich habe die',
    form_privacy_link: 'DatenschutzerklÃ¤rung',
    form_privacy_suffix: 'gelesen und stimme der Verarbeitung meiner Daten zu.',

    contact_error_name: 'Bitte gib deinen Namen ein.',
    contact_error_email: 'Bitte gib eine gÃ¼ltige E-Mail-Adresse ein.',
    contact_error_message: 'Bitte gib eine Nachricht ein (mind. 10 Zeichen).',
    contact_error_privacy: 'Bitte akzeptiere die DatenschutzerklÃ¤rung.',

    imprint_title: 'Impressum',
    imprint_heading: 'Angaben gemÃ¤ÃŸ Â§ 5 TMG',
    imprint_project_heading: 'Projekt',
    imprint_email: 'E-Mail: marvin.kloesters[at]omexom.com',

    imprint_terms_title: 'Nutzungsbedingungen',
    imprint_terms_text:
      'Durch die Nutzung dieses Portfolios erklÃ¤rst du dich mit den Bedingungen einverstanden.',

    imprint_scope_title: 'Geltungsbereich',
    imprint_scope_text_1:
      'Dieses Portfolio wurde im Rahmen eines Studentenprojekts entwickelt.',
    imprint_scope_text_2:
      'Das Design ist Eigentum der Developer Akademie GmbH.',

    imprint_rights_title: 'Urheberrechte',
    imprint_rights_text:
      'Alle Rechte liegen bei den genannten Studenten, sofern nicht anders angegeben.',

    imprint_use_title: 'Nutzung',
    imprint_use_text:
      'Die Nutzung ist ausschlieÃŸlich fÃ¼r legale Zwecke gestattet.',

    imprint_disclaimer_title: 'Haftungsausschluss',
    imprint_disclaimer_text:
      'Dieses Portfolio wird ohne GewÃ¤hr bereitgestellt.',

    imprint_indemnity_title: 'Freistellung',
    imprint_indemnity_text:
      'Du stellst die Betreiber von sÃ¤mtlichen AnsprÃ¼chen frei.',

    imprint_contact_text: 'Ich bin offen f\u00fcr neue Projekte und spannende Teams. Wenn du Unterst\u00fctzung im Frontend brauchst, schreib mir gerne.',

    imprint_date: 'Stand: 26. Juli 2025',

    footer_signature: '<MK>',
    footer_role: 'Frontend-Entwickler',
    footer_copyright: 'Â© Marvin KlÃ¶sters 2025',
    footer_legal: 'Impressum',
    footer_github: 'GitHub',
    footer_mail: 'Mail',
    footer_linkedin: 'LinkedIn',
  },
} as const;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private currentLang: Lang = 'en';

  setLang(lang: Lang): void {
    this.currentLang = lang;
  }

  getLang(): Lang {
    return this.currentLang;
  }

  t(key: TranslationKey): string {
    return TRANSLATIONS[this.currentLang][key] ?? key;
  }
}

