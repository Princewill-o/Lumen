# Lumen — The Future Runs on Lumen

Lumen designs practical AI systems around the way a business already works. The site is an enquiry-led studio experience for businesses looking to automate customer conversations, bookings, follow-ups, content, documents, and repetitive administration.

## What the site includes

- Light and dark themes using the Lumen bulb mark with transparent PNG assets.
- Floating navigation with scroll compression, pointer effects, hover states, and reduced-motion support.
- Clickable automation solution cards and a simple three-step delivery process.
- Industry examples, workflow comparisons, FAQs, and an interactive enquiry qualification demo.
- AI-generated product concept visuals for enquiries, bookings, and document workflows, each with play/pause/replay animation.
- Calendly booking CTA: `https://calendly.com/lumen_ai/lumen-project-booking`.
- Enquiry form delivery to `okubep@gmail.com` through a configurable endpoint, with a FormSubmit fallback for the initial setup.

The product visuals are explicitly labelled as concept visuals. The site does not invent client names, testimonials, results, partnerships, or project evidence.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Enquiry delivery

Copy `.env.example` to `.env.local` and set `VITE_ENQUIRY_ENDPOINT` to a server endpoint that accepts enquiry JSON via `POST`. The endpoint should validate and rate-limit submissions, save them durably, and send the notification email server-side. If the variable is empty, the site uses the FormSubmit AJAX endpoint for `okubep@gmail.com`; FormSubmit may ask for one-time activation on first use.

Payload fields include `type`, `name`, `business`, `email`, `website`, `industry`, `size`, `requirements`, `improvements`, and `notes`.

## Adding approved work

Add verified companies and projects in `src/data/portfolio.js`. Entries render only when they include the required evidence URL. Keep client claims, logos, screenshots, and outcomes grounded in approved source material.

## Visual system

- Midnight: `#080F1B`
- Electric blue: `#75B9FF`
- Amber: `#FFBF69`
- Cloud: `#F4F8FF`

Brand asset notes and generation prompts are in `BRAND-ASSETS.md`. Integration details are in `INTEGRATION.md`.
