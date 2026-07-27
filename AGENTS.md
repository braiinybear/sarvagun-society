# Sarvagun Society NGO — Project Guidelines & Architecture

## Development & Commands

- **Start Dev Server (Background)**:
  ```bash
  npx astro dev --background
  ```
  Manage dev server: `npx astro dev status`, `npx astro dev stop`, `npx astro dev logs`.

- **Production Build**:
  ```bash
  npm run build
  ```
  *(Outputs static site assets to `dist/` directory)*.

- **Deploy to Cloudflare Pages**:
  ```bash
  npx wrangler pages deploy dist --branch=main
  ```

## Tech Stack & Architecture

- **Framework**: Astro v7 (Static output with `ClientRouter` View Transitions)
- **Styling**: Tailwind v4 with `@theme` tokens in `src/styles/global.css`
- **Typography**: Google Fonts (`Plus Jakarta Sans` body & heading font)
- **Serverless Form Handling**: Cloudflare Pages Function at `functions/submit-form.js` using Resend API for transactional email notifications
- **Deployment Target**: Cloudflare Pages (`wrangler.toml` configured)

## Design System Tokens (`global.css`)

- `--color-primary`: `#2C5E48` (Soft Sage Green)
- `--color-primary-hover`: `#1E4334` (Deep Forest Sage)
- `--color-primary-soft`: `#EBF4F0` (Gentle Soft Mint)
- `--color-secondary`: `#E07A5F` (Warm Soft Terracotta)
- `--color-festive`: `#E05252` (Soft Coral Red CTA)
- `--color-bg`: `#FAFAFA` (Soft Snow White)
- `--color-text`: `#1C1917` (Dark Warm Stone)

## Environment Variables (`.env.example`)

Set these in Cloudflare Pages Dashboard under **Settings → Environment Variables**:
- `EMAIL_TO`: Recipient email for form submissions (`mail@sarvagunsociety.org`)
- `RESEND_API_KEY`: Resend API key for sending transactional emails
- `FROM_DOMAIN`: Verified domain name (`sarvagunsociety.org`)

## Documentation & Reference

- [Astro Routing Guide](https://docs.astro.build/en/guides/routing/)
- [Astro Components Guide](https://docs.astro.build/en/basics/astro-components/)
- [Astro Styling & Tailwind](https://docs.astro.build/en/guides/styling/)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/platform/functions/)
