# Kolonia Polonia Hair Studio — Website

A production-ready React + Vite website for Kolonia Polonia Hair Studio, built from the
provided UI mockups.

## Tech Stack
- React 19 + Vite
- React Router DOM (routing)
- Framer Motion (scroll reveal & UI animations)
- Lucide React (icons)
- React Helmet Async (per-page SEO)
- Plain CSS (design tokens in `src/index.css`, per-page CSS files)

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project Structure

```
src/
├── assets/images/        # logo.png, logo-white.png, unsplash.js (placeholder image URLs)
├── components/
│   ├── Header/            sticky header, glass-on-scroll, mobile menu
│   ├── Footer/             site footer with newsletter form
│   ├── Layout/             wraps every route (Header + <Outlet/> + Footer)
│   ├── Reveal/              Framer Motion scroll-reveal wrapper + stagger helpers
│   ├── ScrollToTop/         resets scroll position on route change
│   ├── BackToTop/           floating back-to-top button
│   └── SEO/                react-helmet-async wrapper (title/description/OG/Twitter/canonical)
├── pages/
│   ├── Home/Home.jsx + Home.css
│   ├── About/About.jsx + About.css
│   ├── Services/Services.jsx + Services.css
│   ├── Gallery/Gallery.jsx + Gallery.css     (filterable grid + lightbox + video row)
│   └── Contact/Contact.jsx + Contact.css     (validated form + map embed + branches)
├── App.jsx
└── main.jsx
```

## Before Going Live — Replace These
1. **Logo** — `src/assets/images/logo.png` and `logo-white.png` are placeholder marks generated
   for this build. Swap in the real Kolonia Polonia logo files (same filenames, or update the
   `import logo from ...` lines in `Header.jsx` / `Footer.jsx`).
2. **Images** — every photo is a temporary Unsplash placeholder, listed in
   `src/assets/images/unsplash.js`. Replace each URL with a final asset (or swap the whole file
   for local imports) once real photography is ready.
3. **Contact details** — phone number, email, address and branch details are dummy values found
   in `Header.jsx`, `Footer.jsx`, and the `About`, `Contact`, and `Home` pages.
4. **Google Map** — `Contact.jsx` embeds a generic "Alappuzha, Kerala" map. Replace the `src` on
   the `<iframe>` with the studio's exact Google Maps embed link.
5. **Social links** — Facebook, Instagram, and WhatsApp links are placeholders (`facebook.com`,
   `instagram.com`, `wa.me/919847221919`). Update with the real handles/number.
6. **Newsletter & contact form** — both forms are front-end only right now (client-side
   validation, no submission). Wire them to your email service / backend of choice before launch.
7. **SEO** — update `SITE_URL` in `src/components/SEO/SEO.jsx` to the live domain, and add a real
   `og-image.jpg`.

## Notes
- Every page renders its own dark hero banner, so the header is transparent over the hero and
  turns into a translucent glass bar once the page is scrolled — on every route.
- Reveal animations trigger once per element via `whileInView` (Framer Motion), respecting
  `prefers-reduced-motion`.
- The Gallery page's photo grid is filterable by category and opens a keyboard-accessible
  lightbox with next/prev navigation.
