# Portfolio

Personal portfolio built with Angular. It includes multiple sections (hero, about, skills, projects, testimonials, contact) and bilingual content (DE/EN).

## Features
- Multi-section landing page with header and footer
- Bilingual content (DE/EN) with toggle
- Contact form with validation and status feedback
- Imprint and privacy pages via router

## Tech Stack
- Angular (standalone components)
- TypeScript
- SCSS

## Getting Started
1) Install dependencies
	 - `npm install`
2) Run the dev server
	 - `npm start`
3) Open the app
	 - Default: http://localhost:4200/

## Configuration
- Contact form endpoint: update `mailEndpoint` in
	[src/app/sections/contact/contact.component.ts](src/app/sections/contact/contact.component.ts)
- Translations: update text in
	[src/app/services/translation/translation.service.ts](src/app/services/translation/translation.service.ts)
- Routes (imprint/privacy): see
	[src/app/app.routes.ts](src/app/app.routes.ts)

## Project Structure (high level)
- Sections: [src/app/sections](src/app/sections)
- Pages (imprint/privacy): [src/app/pages](src/app/pages)
- Core components (header/footer): [src/app/core/components](src/app/core/components)

## Scripts
- `npm start` - run dev server
- `npm test` - run tests

