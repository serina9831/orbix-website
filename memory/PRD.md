# ORBIX Landing Page — PRD

## Original Problem Statement
One-page landing/portfolio site for ORBIX, an Albanian AI automation agency serving SMBs (dental clinics, beauty salons, restaurants, real estate, gyms, private schools). Shared directly via link for outreach. All content in Albanian, benefit-driven. Structure: Hero → Demo Video → Services (7) → How It Works (4 steps) → Niches (6) → Why ORBIX (4) → Contact (WhatsApp CTA + form) → Footer.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + lenis (smooth momentum scroll). All client-side, no backend dependency.
- Backend: untouched template (not used by the landing page).
- Key files: `frontend/src/App.js`, `frontend/src/components/{Navbar,Hero,Marquee,DemoVideo,Services,HowItWorks,Niches,WhyOrbix,Contact,Footer,Reveal}.jsx`, `frontend/src/lib/smooth.js` (lenis singleton), `frontend/src/index.css` (anthracite + emerald design system).

## User Personas
- SMB owner in Albania arriving from WhatsApp/Instagram DM link on mobile; needs to see proof (demo video) and value within first scrolls.

## Core Requirements (static)
- Albanian copy throughout, exact section order from brief
- Anthracite (#1A1D1E–#2B2F31) + emerald (#0F9D6E–#1FBF7A), no gold/black
- Syne display font w/ emerald gradient headlines, Plus Jakarta Sans body
- Gradient teksti i përditësuar (Qershor 2026): emerald→teal→white (#10B981 → #14B8A6 → #7DF0D4 → #FFF) me background-clip: text + fallback @supports (color: #10B981 për browsera të vjetër); aplikuar edhe te "X" e logos në Navbar/Footer
- Shimmer i lehtë mbi gradientin e titujve (Qershor 2026): animacion 7s ease-in-out i background-position, respekton prefers-reduced-motion
- OG meta tags (Qershor 2026): og:title/description/image + Twitter card në public/index.html; imazhi /public/og-image.jpg (1200x630, 47KB); URL absolute = preview URL — DUHET PËRDITËSUAR nëse lidhet domain i ri
- Numëruesi live dhe fotot reale të nisheve: SHTYRË me vendim të userit (s'ka klientë realë ende; kundër mesazhit "Demo Reale, Jo Premtime")
- Favicon (Qershor 2026): favicon.svg me "X" gradient smerald + favicon-32.png/favicon.ico/apple-touch-icon.png, të lidhura në index.html
- Butoni WhatsApp pluskues (Qershor 2026): WhatsAppFloat.jsx — shfaqet pas 500px scroll, wa.me/355696738308 me mesazh të paraplotësuar
- SEO bazik (Qershor 2026): keywords shqip, canonical, sitemap.xml, robots.txt, JSON-LD Organization schema — URL-të absolute = preview URL, duhen përditësuar me domain të ri
- FAQ seksion (Qershor 2026): Faq.jsx me 5 pyetje accordion (Chapter 06, Kontakt u bë 07); përgjigja e çmimit PA numër konkret sipas kërkesës — vetëm "varet nga nevojat, diskutohet në konsultën falas"
- Palet e sfondit të përditësuara (Qershor 2026): body/primary #1A1D1E → #1E2225, seksionet dytësore #212527 → #24282B, kartat #2A2E31/#282C2F (më të çelëta për thellësi); përditësuar edhe theme-color e favicon.svg
- Fix Vercel build (Qershor 2026): shtuar "ajv": "^8.12.0" në package.json (mismatch ajv-keywords/ajv me react-scripts); yarn build kalon me sukses (exit 0); verifikuar nga testing_agent 10/10; fix mobile overflow me overflow-x: clip në html
- Butoni Hero: "Shiko Demoin" → "Shiko Demon" (Qershor 2026)
- Domain final Vercel (Qershor 2026): https://orbix-website-eta.vercel.app — og:image/og:url, canonical, twitter:image, sitemap.xml, robots.txt, JSON-LD të gjitha të përditësuara me këtë domain
- FAQ schema (Qershor 2026): JSON-LD FAQPage me 5 pyetjet në index.html për rich results në Google
- Konfirmim pas dërgimit (Qershor 2026): Contact.jsx shfaq mesazh konfirmimi + link fallback wa.me nëse shfletuesi bllokon window.open
- Contact form opens wa.me/355696738308 with pre-filled message (no DB storage)

## Implemented (2026-07/08 cycle, current build)
- Kinetic hero: masked line-by-line headline reveal, parallax glow orbs, floating AI chat mockup with staged bubble animation
- Editorial slow marquee ribbon between hero and demo
- Demo video section: checks `/demo-video.mp4` in `frontend/public/` — plays it if present, otherwise shows branded placeholder with pulse play button
- 7 service cards, 4 numbered process steps, 6 niche cards, 4 why-ORBIX differentiators — all with scroll reveals + emerald hover glow
- Contact: large WhatsApp button + form that opens WhatsApp with pre-filled details (verified: correct wa.me URL with encoded text)
- Footer: ORBIX wordmark, Instagram (orbix.agency), WhatsApp +355 69 673 8308, info@orbix.al (placeholder), © 2026
- Numbered chapter labels (01–06), glass navbar w/ mobile hamburger, smooth-scroll anchors via lenis
- Verified: desktop + mobile (390px) screenshots, all data-testids present, form → WhatsApp popup flow

## Backlog / Next Tasks
- P0: ✅ DONE — Real demo video (173s, "AI AGENT Demo - ORBIX AGENCY") uploaded to `frontend/public/demo-video.mp4`, auto-activated in player
- P1: ✅ DONE — Email real vendosur: orbixagency.info@gmail.com në footer
- P1: Custom domain + OG/social share meta image for link previews in WhatsApp outreach
- P2: Meta/TikTok pixel for outreach retargeting
- P2: Kosovar/Albanian dialect micro-copy A/B variants

## Test Credentials
No auth in this app. See /app/memory/test_credentials.md.
