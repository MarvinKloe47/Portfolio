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
    hero_name: 'Marvin Klösters',

    about_title: 'Why me',
    about_text:
      "Hi, I'm Marvin Klösters” a passionate Frontend Developer focused on building modern, user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I create responsive, high-performance, and visually appealing interfaces that truly engage users. I place great value on clean code, clear architecture, and intuitive UI/UX, aiming to build web experiences that stand out both technically and visually.",
    about_iAm: 'I am',
    about_location_value_1: 'located',
    about_location_value_2: 'in Kleve',
    about_relocate_value_1: 'open to',
    about_relocate_value_2: 'relocate',
    about_remote_value_1: 'open to',
    about_remote_value_2: 'work remote',

    cta_letsTalk: "Let's talk",

    skills_title: 'My Skills',
    skills_challenge: 'challenge',
    skills_text: 'I am always happy to learn new technologies, just tell me what you need.',
    skills_cta: "Let's talk",

    projects_title: 'My Projects',

    project_join_title: 'Join',
    project_join_stack: 'Angular, TypeScript, SCSS, Firebase',
    project_join_desc:
      'A social networking platform that allows users to connect, share content, and engage with a community through posts, comments, and likes.',

    project_el_title: 'City Fighters',
    project_el_stack: 'Angular, TypeScript, HTML, CSS, Firebase',
    project_el_desc:
      'Jump through the City, collect coins and avoid enemies in this cartoon-style game.',

    project_pokedex_title: 'Pokedex',
    project_pokedex_stack: 'JavaScript, HTML, CSS',
    project_pokedex_desc:
      'A responsive Pokédex web app that displays Pokémon as interactive cards with type-based colors and icons. Users can scroll through the list, search by name or ID, and switch between light and dark mode.',

    btn_github: 'GitHub',
    btn_liveTest: 'Live Test',

    testimonials_title: 'Need a teamplayer? Here what my colleagues said about me',

    testimonial_raul_name: 'Raul C',
    testimonial_raul_project: 'Project Join',
    testimonial_raul_quote:
      '“Marvin had to develop, format and deliver content in collaboration with the team members. He is a reliable and friendly person.”',

    testimonial_stefan_name: 'Stefan Schad',
    testimonial_stefan_project: 'Project Join',
    testimonial_stefan_quote:
      '“He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.”',

    testimonial_kadir_name: 'Kadir S',
    testimonial_kadir_project: 'Project Join',
    testimonial_kadir_quote:
      '“He is a reliable and friendly person. Works in a structured way and writes clear code.”',

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
    form_status_sending: 'Sending message...',
    form_status_success: 'Thanks! Your message has been sent.',
    form_status_error: 'Sorry, something went wrong. Please try again.',
    form_status_invalid: 'Please check your inputs and accept the privacy policy.',

    contact_error_name: 'Please enter your name.',
    contact_error_email: 'Please enter a valid email.',
    contact_error_message: 'Please enter a message (min. 10 characters).',
    contact_error_privacy: 'Please accept the privacy policy.',

    imprint_title: 'Legal Notice',
    imprint_heading: 'Imprint',
    imprint_project_heading: 'Exploring the Board',
    imprint_email: 'Email: marvin.kloesters[at]omexom.com',

    imprint_terms_title: 'Terms of Use',
    imprint_terms_text:
      'By accessing and using this portfolio, you agree to the following terms. If you do not agree, please discontinue use.',

    imprint_scope_title: 'Scope and Ownership',
    imprint_scope_text_1:
      'This portfolio was developed as part of a student project at Developer Akademie.',
    imprint_scope_text_2:
      'The design is owned by Developer Akademie GmbH. Unauthorized use, reproduction, or distribution is prohibited.',

    imprint_rights_title: 'Intellectual Property',
    imprint_rights_text:
      'All content, texts, and code are protected by copyright. Rights remain with the named students unless otherwise stated.',

    imprint_use_title: 'Permitted Use',
    imprint_use_text:
      'This portfolio may only be used for lawful purposes and may not be used to harm, mislead, or infringe the rights of others.',

    imprint_disclaimer_title: 'Disclaimer',
    imprint_disclaimer_text:
      'This portfolio is provided “as is” without warranties of any kind. We do not guarantee accuracy, completeness, or availability.',

    imprint_indemnity_title: 'Indemnity',
    imprint_indemnity_text:
      'You agree to indemnify and hold harmless the named students and Developer Akademie from claims arising from misuse of this portfolio.',

    imprint_contact_text:
      'For questions, notices, or rights inquiries, please contact us via email.',

    imprint_date: 'Date: July 26, 2025',

    privacy_title: 'Privacy Policy',
    privacy_intro:
      'This Privacy Policy explains how we handle your personal data when you use this portfolio website.',
    privacy_controller_title: 'Controller',
    privacy_controller_text:
      'Controller for data processing is Marvin Kloesters, Horlemannplatz 1, 47589 Uedem, Germany.',
    privacy_contact_title: 'Contact',
    privacy_contact_text:
      'If you have questions about data protection, contact: marvin.kloesters@gmail.com.',
    privacy_data_title: 'Data We Process',
    privacy_data_intro:
      'We process only the data you actively provide and the technical data required to operate the site.',
    privacy_data_form_title: 'Contact Form',
    privacy_data_form_text:
      'When you submit the contact form we process your name, email, and message to respond to your request.',
    privacy_data_logs_title: 'Server Logs',
    privacy_data_logs_text:
      'When you visit this site, basic access data (IP address, date/time, browser, requested page) may be stored in server logs for security and troubleshooting.',
    privacy_purpose_title: 'Purpose of Processing',
    privacy_purpose_text:
      'Responding to inquiries, communicating with you, and protecting the site from abuse.',
    privacy_legal_title: 'Legal Basis',
    privacy_legal_text:
      'Legal basis is your consent (Art. 6(1)(a) GDPR) and our legitimate interest in operating and securing the website (Art. 6(1)(f) GDPR).',
    privacy_recipients_title: 'Recipients',
    privacy_recipients_text:
      'Your data is not shared with third parties unless required to answer your request or by law. The email provider may receive the message as part of delivery.',
    privacy_storage_title: 'Storage Duration',
    privacy_storage_text:
      'We keep data only as long as necessary for the purpose or legal obligations.',
    privacy_rights_title: 'Your Rights',
    privacy_rights_text:
      'You have the following rights regarding your data:',
    privacy_rights_item_1: 'Access to your personal data.',
    privacy_rights_item_2: 'Rectification of inaccurate data.',
    privacy_rights_item_3: 'Erasure of your data, where applicable.',
    privacy_rights_item_4: 'Restriction of processing.',
    privacy_rights_item_5: 'Data portability.',
    privacy_rights_item_6:
      'Objection to processing and the right to lodge a complaint with a supervisory authority.',
    privacy_withdraw_title: 'Withdrawal of Consent',
    privacy_withdraw_text:
      'You can withdraw consent at any time with effect for the future by email.',
    privacy_security_title: 'Security',
    privacy_security_text:
      'We use appropriate technical and organizational measures to protect your data, but no system is 100% secure.',
    privacy_updates_title: 'Updates',
    privacy_updates_text:
      'We may update this policy; the current version is published on this page.',
    privacy_date: 'Last updated: February 5, 2026',

    footer_signature: '<MK>',
    footer_role: 'frontend developer',
    footer_copyright: '© Marvin Klösters 2025',
    footer_legal: 'legal notice',
    footer_github: 'GitHub',
    footer_mail: 'Mail',
    footer_linkedin: 'LinkedIn',
  },

  de: {
    nav_whyMe: 'Warum ich',
    nav_skills: 'Fähigkeiten',
    nav_projects: 'Projekte',
    nav_contact: 'Kontakt',

    hero_role: 'FRONTEND-ENTWICKLER',
    hero_name: 'Marvin Klösters',

    about_title: 'Warum ich',
    about_text:
      'Hallo, ich bin Marvin Klösters – ein leidenschaftlicher Frontend-Entwickler mit Fokus auf moderne, benutzerfreundliche Webanwendungen. Mit einer starken Basis in HTML, CSS und JavaScript entwickle ich responsive, performante Interfaces, die Nutzer wirklich abholen. Ich lege großen Wert auf sauberen Code, klare Architektur und ein intuitives UI/UX. Mein Ziel ist es, digitale Erlebnisse zu schaffen, die technisch überzeugen und sich gleichzeitig leicht und angenehm bedienen lassen.',
    about_iAm: 'Ich bin',
    about_location_value_1: 'ansässig',
    about_location_value_2: 'in Kleve',
    about_relocate_value_1: 'bereit',
    about_relocate_value_2: 'umzuziehen',
    about_remote_value_1: 'bereit für',
    about_remote_value_2: 'Remote-Arbeit',

    cta_letsTalk: 'Lass uns sprechen',

    skills_title: 'Meine Fähigkeiten',
    skills_challenge: 'Herausforderung',
    skills_text: 'Ich freue mich immer, neue Technologien zu lernen â€“ sag mir einfach, was du brauchst.',
    skills_cta: 'Lass uns sprechen',

    projects_title: 'Meine Projekte',

    project_join_title: 'Join',
    project_join_stack: 'Angular, TypeScript, SCSS, Firebase',
    project_join_desc:
      'Eine Social-Networking-Plattform zur Vernetzung und zum Austausch von Inhalten.',

    project_el_title: 'City Fighters',
    project_el_stack: 'Angular, TypeScript, HTML, CSS, Firebase',
    project_el_desc:
      'Springe durch die Stadt, sammle Münzen und weiche Gegnern aus.',

    project_pokedex_title: 'Pokedex',
    project_pokedex_stack: 'JavaScript, HTML, CSS',
    project_pokedex_desc:
      'Eine responsive Pokédex-Webanwendung mit interaktiven Karten.',

    btn_github: 'GitHub',
    btn_liveTest: 'Live Test',

    testimonials_title: 'Du suchst einen Teamplayer? Das sagen meine Kollegen über mich',

    testimonial_raul_name: 'Raul C',
    testimonial_raul_project: 'Projekt Join',
    testimonial_raul_quote:
      '„Marvin arbeitet zuverlässig, strukturiert und sehr teamorientiert.“',

    testimonial_stefan_name: 'Stefan Schad',
    testimonial_stefan_project: 'Projekt Join',
    testimonial_stefan_quote:
      '„Verlässlicher Teamplayer mit sauberem Code und Struktur.“',

    testimonial_kadir_name: 'Kadir S',
    testimonial_kadir_project: 'Projekt Join',
    testimonial_kadir_quote:
      '„Strukturiert, zuverlässig und freundlich. Sehr zu empfehlen.“',

    contact_title: 'Kontakt',
    contact_text: 'Ich bin offen für neue Projekte und spannende Teams. Wenn du Unterstützung im Frontend brauchst, schreib mir gerne.',

    contact_email_label: 'E-Mail: marvin.kloesters@gmail.com',
    contact_tel_label: 'Tel: +49 157 123 456 68',

    form_name: 'Dein Name',
    form_email: 'Deine E-Mail',
    form_message: 'Deine Nachricht',
    form_send: 'Senden',

    form_privacy_prefix: 'Ich habe die',
    form_privacy_link: 'DatenschutzerklÃ¤rung',
    form_privacy_suffix: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
    form_status_sending: 'Nachricht wird gesendet...',
    form_status_success: 'Danke! Deine Nachricht wurde gesendet.',
    form_status_error: 'Sorry, es ist ein Fehler aufgetreten. Bitte erneut versuchen.',
    form_status_invalid: 'Bitte pruefe deine Eingaben und akzeptiere die Datenschutzerklaerung.',

    contact_error_name: 'Bitte gib deinen Namen ein.',
    contact_error_email: 'Bitte gib eine gÃ¼ltige E-Mail-Adresse ein.',
    contact_error_message: 'Bitte gib eine Nachricht ein (mind. 10 Zeichen).',
    contact_error_privacy: 'Bitte akzeptiere die DatenschutzerklÃ¤rung.',

    imprint_title: 'Impressum',
    imprint_heading: 'Angaben gemäß § 5 TMG',
    imprint_project_heading: 'Projekt',
    imprint_email: 'E-Mail: marvin.kloesters[at]omexom.com',

    imprint_terms_title: 'Nutzungsbedingungen',
    imprint_terms_text:
      'Durch den Zugriff und die Nutzung dieses Portfolios erklärst du dich mit den folgenden Bedingungen einverstanden. Wenn du nicht einverstanden bist, nutze die Seite bitte nicht weiter.',

    imprint_scope_title: 'Geltungsbereich und Eigentum',
    imprint_scope_text_1:
      'Dieses Portfolio wurde im Rahmen eines Studentenprojekts an der Developer Akademie erstellt.',
    imprint_scope_text_2:
      'Das Design ist Eigentum der Developer Akademie GmbH. Eine unbefugte Nutzung, Vervielfältigung oder Weitergabe ist untersagt.',

    imprint_rights_title: 'Urheberrechte',
    imprint_rights_text:
      'Alle Inhalte, Texte und der Quellcode sind urheberrechtlich geschützt. Die Rechte liegen bei den genannten Studenten, sofern nicht anders angegeben.',

    imprint_use_title: 'Nutzung',
    imprint_use_text:
      'Die Nutzung ist ausschließlich für rechtmäßige Zwecke gestattet. Missbräuchliche, irreführende oder rechtsverletzende Nutzung ist untersagt.',

    imprint_disclaimer_title: 'Haftungsausschluss',
    imprint_disclaimer_text:
      'Dieses Portfolio wird ohne Gewähr bereitgestellt. Für die Aktualität, Richtigkeit und Verfügbarkeit übernehmen wir keine Haftung.',
    imprint_indemnity_title: 'Freistellung',
    imprint_indemnity_text:
      'Du stellst die Betreiber und die Developer Akademie von sämtlichen Ansprüchen frei, die aus einer missbräuchlichen Nutzung entstehen.',

    imprint_contact_text:
      'Für Fragen, Hinweise oder Rechteanfragen kontaktiere uns bitte per E-Mail.',

    imprint_date: 'Stand: 26. Juli 2025',

    privacy_title: 'Datenschutz',
    privacy_intro:
      'Diese Datenschutzerklaerung erklaert, wie wir deine personenbezogenen Daten verarbeiten, wenn du diese Portfolio-Website nutzt.',
    privacy_controller_title: 'Verantwortliche Stelle',
    privacy_controller_text:
      'Verantwortlich fuer die Datenverarbeitung ist Marvin Kloesters, Horlemannplatz 1, 47589 Uedem, Deutschland.',
    privacy_contact_title: 'Kontakt',
    privacy_contact_text:
      'Bei Fragen zum Datenschutz kontaktiere: marvin.kloesters@gmail.com.',
    privacy_data_title: 'Welche Daten wir verarbeiten',
    privacy_data_intro:
      'Wir verarbeiten nur Daten, die du aktiv angibst, sowie technische Daten, die fuer den Betrieb der Seite erforderlich sind.',
    privacy_data_form_title: 'Kontaktformular',
    privacy_data_form_text:
      'Wenn du das Kontaktformular sendest, verarbeiten wir deinen Namen, deine E-Mail-Adresse und deine Nachricht, um auf deine Anfrage zu antworten.',
    privacy_data_logs_title: 'Server-Logs',
    privacy_data_logs_text:
      'Beim Besuch der Website koennen grundlegende Zugriffsdaten (IP-Adresse, Datum/Uhrzeit, Browser, aufgerufene Seite) in Server-Logs gespeichert werden, um Sicherheit und Fehleranalyse zu gewaehrleisten.',
    privacy_purpose_title: 'Zwecke der Verarbeitung',
    privacy_purpose_text:
      'Beantwortung von Anfragen, Kommunikation mit dir und Schutz der Website vor Missbrauch.',
    privacy_legal_title: 'Rechtsgrundlage',
    privacy_legal_text:
      'Rechtsgrundlage ist deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sowie unser berechtigtes Interesse am Betrieb und der Sicherheit der Website (Art. 6 Abs. 1 lit. f DSGVO).',
    privacy_recipients_title: 'Empfaenger',
    privacy_recipients_text:
      'Deine Daten werden nicht an Dritte weitergegeben, ausser dies ist zur Beantwortung deiner Anfrage erforderlich oder gesetzlich vorgeschrieben. Der E-Mail-Provider erhaelt die Nachricht im Rahmen der Zustellung.',
    privacy_storage_title: 'Speicherdauer',
    privacy_storage_text:
      'Wir speichern Daten nur so lange, wie es fuer den Zweck erforderlich ist oder gesetzliche Pflichten bestehen.',
    privacy_rights_title: 'Deine Rechte',
    privacy_rights_text:
      'Du hast folgende Rechte bezueglich deiner Daten:',
    privacy_rights_item_1: 'Auskunft ueber deine personenbezogenen Daten.',
    privacy_rights_item_2: 'Berichtigung unrichtiger Daten.',
    privacy_rights_item_3: 'Loeschung deiner Daten, soweit anwendbar.',
    privacy_rights_item_4: 'Einschraenkung der Verarbeitung.',
    privacy_rights_item_5: 'Datenuebertragbarkeit.',
    privacy_rights_item_6:
      'Widerspruch gegen die Verarbeitung und Beschwerde bei einer Aufsichtsbehoerde.',
    privacy_withdraw_title: 'Widerruf der Einwilligung',
    privacy_withdraw_text:
      'Du kannst deine Einwilligung jederzeit mit Wirkung fuer die Zukunft per E-Mail widerrufen.',
    privacy_security_title: 'Sicherheit',
    privacy_security_text:
      'Wir setzen angemessene technische und organisatorische Massnahmen ein, dennoch ist keine Datenuebertragung vollstaendig sicher.',
    privacy_updates_title: 'Aktualisierungen',
    privacy_updates_text:
      'Wir koennen diese Erklaerung aktualisieren; die aktuelle Version ist auf dieser Seite veroeffentlicht.',
    privacy_date: 'Stand: 5. Februar 2026',

    footer_signature: '<MK>',
    footer_role: 'Frontend-Entwickler',
    footer_copyright: '© Marvin Klösters 2025',
    footer_legal: 'Impressum',
    footer_github: 'GitHub',
    footer_mail: 'Mail',
    footer_linkedin: 'LinkedIn',
  },
} as const;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly storageKey = 'portfolio.lang';
  private currentLang: Lang = 'en';

  constructor() {
    const saved = this.readStoredLang();
    if (saved) {
      this.currentLang = saved;
    }
  }

  setLang(lang: Lang): void {
    this.currentLang = lang;
    this.storeLang(lang);
  }

  getLang(): Lang {
    return this.currentLang;
  }

  t(key: TranslationKey): string {
    return TRANSLATIONS[this.currentLang][key] ?? key;
  }

  private readStoredLang(): Lang | null {
    if (typeof window === 'undefined') {
      return null;
    }

    try {
      const raw = window.localStorage.getItem(this.storageKey);
      return raw === 'de' || raw === 'en' ? raw : null;
    } catch {
      return null;
    }
  }

  private storeLang(lang: Lang): void {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.setItem(this.storageKey, lang);
    } catch {
      // ignore storage errors (e.g. blocked in privacy mode)
    }
  }
}

