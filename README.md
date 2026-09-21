# Eli's Cleaning and Lawn Services

Marketing site for Eli's Cleaning and Lawn Services, built with Next.js (App Router) + Tailwind CSS, deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

## Placeholders to fill in before launch

Search the codebase for these and replace with real values:

- `[PHONE]` — business phone number (`app/page.tsx`, `components/Nav.tsx`)
- `[EMAIL]` — contact email (`app/page.tsx`, `app/api/quote/route.ts` default)
- `[ABN]` — business ABN (`app/page.tsx`)
- `[REVIEW SOURCE]` — where the reviews are verified from, e.g. Google, Hipages (`app/page.tsx`)
- `[PHOTO OF ALDA]` — replace the placeholder box in the About section with a real photo
- `[OTHER OUTDOOR SERVICES]` — additional outdoor/lawn services copy (`app/page.tsx`)
- Instagram / Facebook URLs — currently placeholder links to `instagram.com` / `facebook.com`
- Service areas / suburbs served — add to the About or footer copy, and to the LocalBusiness JSON-LD `address`

## Quote form emails

The quote form posts to `/api/quote`, which sends an email via [Resend](https://resend.com).

Set these environment variables (in Vercel project settings or `.env.local`):

- `RESEND_API_KEY` — your Resend API key
- `QUOTE_TO_EMAIL` — the inbox that should receive quote requests

Without `RESEND_API_KEY` set, submissions are logged to the server console instead of sent (useful for local development).

## Images

Images in `public/images` are temporary, low-resolution crops. Swap them for final photos using the same filenames:

- `living.jpg`, `bathroom.jpg`, `floor.jpg`, `bedroom.jpg`, `bedroom2.jpg`, `lawn.jpg`
