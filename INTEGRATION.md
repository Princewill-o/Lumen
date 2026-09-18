# Lumen website

Run `npm install` and `npm run dev`. Production: `npm run build`.

The rebuilt site follows the supplied Nexus Studio template's typography, grid, service cards, process, FAQ and enquiry-led structure. Original supplied PNGs are used for each theme. Existing education-era source files remain unreferenced so previous work is recoverable.

## Enquiry delivery
Copy `.env.example` to `.env.local` and set `VITE_ENQUIRY_ENDPOINT` to your backend endpoint, then restart or rebuild. Both enquiry forms POST JSON. Return a successful HTTP status only after the enquiry is durably saved. Payload fields: type (demo or enquiry), name, business, email, website, industry, size, requirements, improvements (array), notes. Demo requests include only identity fields and type.

The endpoint needs server-side validation, abuse protection, appropriate CORS, and persistent storage. Add email notification from the server after saving the enquiry. Never put private service keys in VITE variables. No backend credentials were supplied, so database storage and email delivery are not connected. The UI explicitly reports that no submission occurred when no endpoint is configured.

## Demo and analytics
The chat is a local, guided example, clearly labelled. It does not send or retain the visitor's answers. A live LLM integration requires a server-side API and business knowledge configuration. Analytics is not connected. No invented clients, results, pricing or social profiles are shown.

## Brand and motion update
Palette: Midnight #080F1B, Electric blue #75B9FF (light-mode blue #166BD3), Amber #FFBF69, Cloud #F4F8FF. Tokens live in src/index.css. Fine pointers get a lightweight animation-frame cursor follower; native cursors remain available. Touch and reduced-motion users receive no pointer decoration. Scroll reveals use IntersectionObserver with cleanup and a visible-content fallback.

Portfolio entries are in src/data/portfolio.js. Supply approved client names, logos and evidence URLs, and real project images, summaries, status and proof URLs. Entries missing evidence are not rendered. The initial visible entry is the site's actual guided enquiry prototype, explicitly identified as an internal prototype. No external customers or deployments have been invented.

Brand imagery was created with built-in ImageGen. Connected glass nodes are conceptual artwork, not project evidence. Transparent logos are derived from the supplied assets. Image generation prompts are in BRAND-ASSETS.md.

## Product concepts
The product explorations section includes three AI-generated mockups (Enquiries, Bookings and Documents) and click-to-play, three-step workflow animations. The images are concept visuals, not evidence of completed client work. Play/pause/replay controls run local state only; no backend actions occur. Reduced-motion settings suppress image movement while the workflow steps remain available. There are no video files or claims of recorded software demos.
