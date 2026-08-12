# Changelog

All notable changes to the St. Mary's Church Maharagama website.

Entries are listed newest first, dated by the day the work was authored, with the author in
parentheses. Pull request numbers refer to this repository's GitHub PRs. Unless noted otherwise,
all changes were authored by Dinuka Perera and merged by Jeremy Perera.

---

## 2026-08-13 - Feast Schedule Corrections and Hero CTA Label (Dinuka Perera)

_Not yet committed. Working tree changes._

### Changed

- **Organizing zones** for the Fourth, Fifth, and Sixth Novenas (August 19, 20, 21) in the
  `feastSchedule` array of `src/app/mass-schedules/page.tsx` now carry the "Zones" suffix, matching
  the first three novena days
- **Vespers Service celebrant** (August 22) corrected: Rev. Fr. Daya Darshana is Rector of
  St. Sebastian's College, Moratuwa, not Director
- **Feast Day Mass celebrant** (August 23) affiliation corrected to "National Director, Catholic
  Family Apostolate", replacing "National Director, National Catholic Family Apostolate Service"
- **Thursday weekday mass** in `weekdaySchedules` moved from 6:00 AM to 6:30 AM at the Church
  Convent
- **Home hero third CTA** relabelled from "Learn About Us" to "About the Church"
  (`src/app/page.tsx`); its `/about` destination is unchanged

---

## 2026-08-12 - Annual Feast 2026 Schedule (Dinuka Perera)

_Committed to `feature/churchFeast` as `3cca3c57`. Not yet merged._

### Added

- **Annual Feast section** on the Mass Schedules page (`src/app/mass-schedules/page.tsx`), anchored
  at `#annual-feast` and placed directly below the page hero as the most time-sensitive content
- **Feast programme data** as a typed `feastSchedule` array at the top of the page module, alongside
  the existing schedule arrays, so future years are a single-place edit
- **Standing-info cards** for the details that hold across the whole feast: daily Holy Rosary at
  6:30 PM, and the novena preacher (Rev. Fr. Ranga Shehan, Lecturer, Aquinas Higher Education
  Institute)
- **Eight day cards** covering August 16 to 23, each showing the organizing zones, theme, readings,
  and offerings, with icons mirroring the parish poster's own iconography
- **Featured card styling** for August 22 (Vespers Service) and August 23 (Feast Day Mass): amber
  accent bar and icon in place of the standard blue, with the presiding priest and main celebrant in
  a highlighted panel
- **Closing prayer** from the poster footer, rendered below the day grid
- **"Church Feast Schedule" CTA** in the home page hero (`src/app/page.tsx`), between "View Mass
  Schedules" and "Learn About Us", linking to `/mass-schedules#annual-feast`

### Changed

- Home hero button row given `flex-wrap` so three buttons wrap cleanly at narrow desktop widths
- Feast section given `scroll-mt-24` so its heading clears the fixed navigation bar on anchor arrival
- README updated: Features, Pages & Sections, Content Structure, and a new Recent Updates entry

---

## 2026-07-16 - Mass Time Corrections (PR #21)

### Changed

- Corrected mass times across the Mass Schedules page, its SEO metadata, and the Footer quick-reference
- Removed em dashes site-wide from the About page, Events layout, Mass Schedules layout, Footer, and README

---

## 2026-07-02 - May Feast 2026 Albums (PR #20)

### Added

- **May Feast Procession 2026** album: 127 photos
- **May Feast Mass 2026** album: 71 photos
- Both albums registered in `img/events/manifest.json` and served from `public/events/`

### Removed

- The "Coming Soon" May Feast placeholder, replaced by the two live albums

---

## 2026-06-22 - Lightbox Touch and Swipe Support (PR #19)

### Added

- Swipe left and right to navigate photos in the full-screen lightbox on mobile, using a 50 px
  `pointerdown` / `pointerup` delta threshold

---

## 2026-06-22 - Scroll-to-Top Button (PR #18)

### Added

- `src/components/ScrollToTop.tsx`, mounted globally in `layout.tsx`

### Changed

- Mass Schedules page layout refinements

---

## 2026-06-21 - README Refresh (PR #17)

### Changed

- README brought in line with the then-current site: features, pages, content structure, and deployment

---

## 2026-06-20 - Image Optimisation (PR #16)

### Changed

- Every plain `<img>` tag replaced with the Next.js `<Image>` component in Navigation, Home, Events,
  and Footer, enabling automatic format conversion, srcset generation, and lazy loading
- Accurate `sizes` props added: event cover (`(max-width: 768px) 100vw, 280px`), gallery thumbnails
  matching the 2 to 5 column grid breakpoints, and priest photo (`(max-width: 768px) 100vw, 50vw`)

### Fixed

- Priest photo intrinsic dimensions set to the real file size (320x444) rather than invented values

---

## 2026-06-20 - SEO Metadata (PR #15)

### Added

- Per-route `layout.tsx` files carrying `title`, `description`, and OpenGraph tags for Church History,
  Mass Schedules, Church Zones, Events Gallery, and Contact

---

## 2026-06-19 - Lightbox Keyboard Navigation (PR #14)

### Added

- Arrow key (left and right) and Escape key support in the Events Gallery lightbox

---

## 2026-06-19 - UI Updates and Dependency Bumps (PR #8)

### Added

- "Coming Soon" placeholder for the May Feast album

### Changed

- Package updates across the dependency tree

---

## 2026-06-08 - Rename "About" to "Church History" (PR #7)

### Changed

- Navigation label, home page section heading, and About page hero and section headings renamed from
  "About Our Church" and "Our History" to "Church History" for consistency across the site
- GitHub Copilot enabled for the repository

---

## 2026-06-06 - Vercel Migration and Code Cleanup (PR #6)

### Changed

- **Migrated hosting to Vercel**: removed the `output: 'export'` static-export constraint; the site now
  runs as a full Next.js application with native image optimisation. Custom domain
  `stmarysmaharagama.org` DNS moved from Firebase to Vercel
- Mass Schedules page and README updated

### Removed

- ~90 narrating JSX comments, `note: null` padding fields in schedule data, a redundant `Readonly<>`
  wrapper in `layout.tsx`, and a thin `openLightbox` one-liner wrapper in the Events page
- Invented timeline subtitles, redundant eyebrow labels, and unverified filler copy across all pages
- Duplicate nav arrays in `Navigation.tsx` and `Footer.tsx`, extracted to `src/lib/nav.ts` as a single
  source of truth

---

## 2026-06-06 - Favicon and License (PRs #3, #4, #5)

### Added

- Proprietary `LICENSE` file; all rights reserved by Dinuka Perera and St. Mary's Church Maharagama

### Changed

- Default Next.js favicon replaced with the St. Mary's church logo across `src/app/icon.png`,
  `src/app/favicon.ico`, and the `icons` metadata field in `layout.tsx`
- README updated to cover both changes

---

## 2026-05-31 - CI Workflow (PR #2)

### Added

- GitHub Actions workflow for branch protection checks

---

## 2026-05-30 - Security and Repository Hygiene

### Security

- Bumped Next.js to 15.4.10 to patch a React Server Components CVE

### Removed

- `.next/` build output removed from version control and added to `.gitignore`

---

## 2026-05-30 - Full UI Modernisation and Events Gallery

### Added

- **Events Gallery page** at `/events`: expandable album grids with a full-screen lightbox
- **Good Friday 2026** album: 35 photos, sourced from `img/events/` and served via `public/events/`
- "Events Gallery" entry added to Navigation and Footer
- New utility classes in `globals.css`: `card-modern`, `icon-badge`, `btn-primary`, `hero-dark`,
  `dot-overlay`, `text-shadow-lg`

### Changed

- **Navigation**: scroll-aware transparency (transparent over the home hero, frosted-glass white on
  scroll), animated `layoutId` underline for the active link, and an `AnimatePresence` slide-in mobile menu
- **Home hero**: true full-screen (`h-screen`) with a multi-layer gradient overlay, dot-grid pattern,
  amber eyebrow text, dual CTAs, and an animated scroll indicator
- **Home feature cards**: redesigned as horizontal rows with gradient icon badges and hover lift
- **Home priest section**: deep-blue glassmorphism card with a decorative quote mark and the priest
  photo set side by side with the message
- **About page**: church history rebuilt as a visual alternating timeline
- **Mass Schedules**: gradient top-strip cards, Sinhala / English / Bilingual language chips, special
  services as left-bordered cards, important info moved to a deep-blue section
- **Church Zones**: table replaced with a four-column numbered card grid
- **Contact**: converted to a card-based layout with polished social buttons and a dedicated call CTA panel
- **Footer**: expanded to four columns with logo, weekend mass quick-reference, amber accents, and an
  attribution link to Jeremy Perera
- Copyright updated to 2026

---

## 2026-05-03 - Holy Saturday Album

### Added

- **Holy Saturday 2026** album: 84 photos

---

## 2025-12-29 - Colour and Mass Schedule Revisions

### Changed

- Mass Schedules page substantially rewritten with corrected service information
- Colour treatment revised across the About, Church Zones, Contact, Home, Footer, and Navigation components

---

## 2025-12-28 - Church Zones Page

### Added

- **Church Zones page** at `/church-zones` listing the 16 parish zones with coordinator details
- Zones entry added to Navigation and Footer

---

## 2025-08-24 - Home Page Redesign

### Added

- Church hero photograph, church logo, and priest photograph (`churchMaincomp.jpg`, `logo2.png`,
  `priest-message.jpg`)

### Changed

- Home page rebuilt around the new hero imagery
- Colour palette reworked in `tailwind.config.ts` and applied across the Home page and Navigation
- README updated to reflect the redesign

---

## 2025-08-20 - Initial Commit

### Added

- Next.js 15 App Router project scaffold with TypeScript, Tailwind CSS, and Framer Motion
- Home, About, Contact, and Mass Schedules pages; Navigation and Footer components; global styles

### Removed

- `node_modules/` removed from version control and added to `.gitignore`
