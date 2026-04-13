<div align="center">
	<img src="./dist/favicon.svg" alt="FlowSync Logo" width="96" height="96" />
	<h1>FlowSync</h1>
	<p><strong>A modern, responsive SaaS-style landing page</strong></p>
	<p>
		<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB&amp;labelColor=0B0F16" alt="React 19" />
		<img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&amp;logo=vite&amp;logoColor=646CFF&amp;labelColor=0B0F16" alt="Vite 8" />
		<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&amp;logo=tailwindcss&amp;logoColor=06B6D4&amp;labelColor=0B0F16" alt="Tailwind CSS 4" />
		<img src="https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&amp;logo=eslint&amp;logoColor=4B32C3&amp;labelColor=0B0F16" alt="ESLint 9" />
	</p>
</div>

---

A modern, responsive SaaS-style landing page built with React, Vite, and Tailwind CSS.

This project showcases a complete single-page marketing layout with:

- Sticky smart header
- Theme switcher (light and dark)
- Hero section with product chart visuals
- Product showcase and feature cards
- Testimonial section
- Contact call-to-action
- Newsletter-style footer

## Preview Sections

- Header with auth actions and theme toggle
- Landing hero with branding strip
- App details showcase
- Feature highlights (3 cards)
- Customer review block
- Contact section
- Footer with policy links and email input

## Tech Stack

<p>
	<img src="https://skillicons.dev/icons?i=react,vite,tailwind,js" alt="Tech Logos" />
</p>

- React 19
- Vite 8
- Tailwind CSS 4
- ESLint 9

## Project Structure

```text
src/
	App.jsx
	main.jsx
	index.css
	assets/
	components/
		Header.jsx
		AuthButtons.jsx
		LandingPage.jsx
		Branding.jsx
		AppDetails.jsx
		FeatureDetails.jsx
		Reviews.jsx
		Contact.jsx
		Footer.jsx
	context/
		Context.jsx
		ContextProvider.jsx
		useTheme.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` starts Vite in development mode
- `npm run build` creates an optimized production build
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint checks

## Responsive Design

The UI is built mobile-first and scales across:

- Small phones
- Tablets
- Laptops
- Large desktop screens

## Theme Support

Theme state is managed with React context and persisted in local storage, so the selected theme is remembered after refresh.

## Author

Built by Maajid as part of a frontend assignment.
