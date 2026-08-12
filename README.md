# St. Mary's Church Maharagama - Modern Website

A modern, responsive website for St. Mary's Church Maharagama built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Scroll-Aware Navigation**: Transparent nav overlaying the hero on the home page, becoming a frosted-glass white bar on scroll; animated active-link underline indicator
- **Full-Screen Hero**: Immersive church background image with multi-layer gradient overlay, amber eyebrow label, three CTAs, and a bouncing scroll indicator
- **Annual Feast Schedule**: Day-by-day feast programme on the Mass Schedules page, deep-linked from the home hero
- **Two-Column Layout**: Church history and feature cards side by side with hover lift effects
- **Parish Priest Section**: Glassmorphism card with decorative quote mark, message, and priest photo
- **Timeline History**: Church history rendered as a visual timeline (1940 → 1981) on the About page
- **Language Chips**: Weekend mass cards display Sinhala / English / Bilingual pill badges
- **Church Zones Grid**: 16 parish zones displayed as numbered cards (replaced table layout)
- **Events Gallery**: Photo gallery page with expandable album grids and a full-screen lightbox viewer with keyboard and touch/swipe navigation
- **Card-Based Contact**: Contact info, social media, and call-to-action as polished individual cards
- **Enhanced Footer**: 4-column layout with church logo, weekend mass quick-reference, and contact details
- **Church Logo & Favicon**: St. Mary's church logo displayed in navigation and as the browser tab favicon
- **Mobile-First**: Fully responsive across all devices with animated mobile menu (AnimatePresence)
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper metadata and structured content

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Pages & Sections

1. **Home Page**:
   - Hero Section: Full-screen church photo with layered gradient overlay, amber "Our Lady of the Assumption Parish" eyebrow, three CTA buttons (View Mass Schedules / Church Feast Schedule / About the Church), and scroll indicator
   - Church History: Church history excerpt with animated feature cards (Worship, Invitation, Education)
   - Parish Priest Message: Glassmorphism dark-blue card with decorative quote mark and priest photo side-by-side

2. **Church History Page**:
   - Visual timeline of church history: 1940, 1953, 1955, 1981, alternating left/right cards on a vertical line
   - Parish priest message in a full-width glassmorphism card

3. **Mass Schedules Page**:
   - Annual Feast (`#annual-feast`): Day-by-day programme for the parish feast, with standing-info cards (daily Holy Rosary, novena preacher), an 8-card grid covering August 16–23, amber-accented cards for the Vespers Service and Feast Day Mass, and the closing prayer
   - Weekday Schedule: Cards with gradient top strip, large time display, and hover scale on icon
   - Weekend Masses: Cards with Sinhala / English / Bilingual language chips
   - Special Services: Left-bordered cards (Eucharistic Adoration, Holy Days, Praise & Worship, Novenas)
   - Important Information: Deep-blue section with amber icon badges (Dress Code, Office Hours, Parking)

4. **Church Zones Page**:
   - 16 zones displayed as a 4-column card grid with numbered zone badges and coordinator details
   - Parish Secretary contact as a highlighted dark-blue panel
   - Community Engagement, Pastoral Care, Easy Communication highlight cards

5. **Events Gallery Page** (`/events`):
   - Four event albums: May Feast Procession 2026 (127 photos), May Feast Mass 2026 (71 photos), Good Friday 2026 (35 photos), and Holy Saturday 2026 (84 photos)
   - Each album shows a cover photo, date, title, and photo count
   - "View All Photos" expands an inline grid (lazy-loaded thumbnails)
   - Clicking any photo opens a full-screen lightbox with prev/next navigation, keyboard arrow keys, and touch/swipe gesture support

6. **Contact Page**:
   - Contact info (Phone, Address, Office Hours) as individual hover cards
   - Social media links (Facebook, YouTube) as styled CTA buttons with sub-text
   - Dedicated call CTA panel
   - Interactive Google Maps with "Open in Google Maps" link
   - First-Time Visitors and Getting Here info panels

7. **Footer**:
   - 4-column: Brand (logo + social icons) / Quick Links / Weekend Masses quick-reference / Contact
   - Amber gradient accent bar at top
   - Amber dot bullets on quick links; amber-coloured mass times

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd st-marys-church
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Customization

### Colors
The website uses a deep navy/blue primary palette (`blue-800` to `blue-950`) with amber/gold accents (`amber-300`–`amber-400`) for highlights, eyebrow labels, active nav indicators, and CTA buttons. Colors can be customized in `tailwind.config.ts`.

### Content
- **Home Page**: `src/app/page.tsx`
- **About Page**: `src/app/about/page.tsx`
- **Church Zones Page**: `src/app/church-zones/page.tsx`
- **Mass Schedules Page**: `src/app/mass-schedules/page.tsx`
- **Contact Page**: `src/app/contact/page.tsx`
- **Events Gallery Page**: `src/app/events/page.tsx`
- **Navigation**: `src/components/Navigation.tsx`
- **Footer**: `src/components/Footer.tsx`
- **Shared Nav Links**: `src/lib/nav.ts`, single source of truth for navigation items used by both the nav bar and footer
- **Global Styles**: `src/app/globals.css`
- **Images**: Static assets in `public/`

### Images
- **Background**: `churchMaincomp.jpg`, hero section
- **Logo & Favicon**: `logo2.png`, navigation, footer, and browser tab icon (`public/logo2.png`, `src/app/icon.png`)
- **Priest Photo**: `priest-message.jpg`, home and about pages
- **Event Photos**: `public/events/mayFeastProcession_2026/`, `public/events/mayFeastMass_2026/`, `public/events/goodFriday_2026/`, and `public/events/holySaturday_2026/`, used on the Events Gallery page

### Adding New Events
To add a new event to the gallery:

1. Place the source photos in `img/events/<folder-name>/`
2. Copy them to `public/events/<folder-name>/` for the site to serve
3. Add a new entry to the `events` array at the top of `src/app/events/page.tsx`, following the same structure as the existing entries
4. Add a matching entry to `img/events/manifest.json`

## Content Structure

- **Church History**: Visual timeline from 1940–1981 (Fr. Dabrera, Fr. Raymen, Fr. Fernando)
- **Parish Priest**: Rev. Fr. Sudath Gunetilleke with personal welcome message
- **Feature Cards**: Worship, Our Invitation, and Education
- **Church Zones**: 16 parish zones (Church Garden, Highlevel Road, Temple Road, Dambahena, Pamunuwa, Janatha Mawatha, Pathiragoda, Navinna, Wattegedera, Alhena, Ambagahapura I & II, Ambillawatta, Godigamuwa, Arawwala I & II)
- **Mass Schedules**: Annual feast programme, weekday, weekend (with language), special services, and important info
- **Annual Feast**: August 16–23 programme, six novenas with organizing zones, themes, readings and offerings, plus the Vespers Service and Feast Day Mass with their celebrants
- **Contact**: Phone, address, office hours, Facebook, YouTube, and Google Maps
- **Events Gallery**: May Feast Procession 2026 (127 photos), May Feast Mass 2026 (71 photos), Good Friday 2026 (35 photos), Holy Saturday 2026 (84 photos)

## Deployment

The site runs as a full Next.js application (server runtime, image optimisation enabled). It is hosted on **Vercel** at [stmarysmaharagama.org](https://stmarysmaharagama.org), connected to the `main` branch of this repository; every push to `main` triggers an automatic production deployment.

### Deploy to Vercel
Import the GitHub repository at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js and no additional configuration is required.

## Contact

For questions about the website or church information:

- **Phone**: +94 112843561
- **Address**: St. Mary's Church, Church Garden's, Mahamegawatte, Maharagama, Sri Lanka
- **Facebook**: [St. Mary's Church Maharagama](https://web.facebook.com/profile.php?id=61577346539650)
- **YouTube**: [St. Mary's Church Maharagama](https://youtube.com/@st.maryschurchmaharagama?si=O9pld9_H5s1-RZO1)

## Recent Updates

A full, dated history of every change is kept in [CHANGELOG.md](./CHANGELOG.md).

### August 2026: Feast Schedule Corrections and Hero CTA Label
- **Novena organizing zones** for August 19, 20 and 21 given the "Zones" suffix, so all six novena days read consistently
- **Celebrant details corrected**: Rev. Fr. Daya Darshana listed as Rector (not Director) of St. Sebastian's College, Moratuwa; Rev. Fr. Gihan Gunathilaka's affiliation shortened to "National Director, Catholic Family Apostolate"
- **Thursday weekday mass** corrected from 6:00 AM to 6:30 AM at the Church Convent
- **Home hero CTA** relabelled from "Learn About Us" to "About the Church"; it still links to `/about`

### August 2026: Annual Feast 2026 Schedule
- **New Annual Feast section** on the Mass Schedules page (`#annual-feast`), placed directly below the hero as the most time-sensitive content on the page
- **Feast programme data** in a typed `feastSchedule` array at the top of `src/app/mass-schedules/page.tsx`, so future years are a single-place edit
- **Standing-info cards**: daily Holy Rosary at 6:30 PM, and the novena preacher (Rev. Fr. Ranga Shehan)
- **Eight day cards** (August 16–23) showing organizing zones, theme, readings, and offerings, with icons mirroring the parish poster's own iconography
- **Featured styling** for August 22 (Vespers Service) and August 23 (Feast Day Mass): amber accent bar and icon, with the presiding priest / main celebrant in a highlighted panel
- **"Church Feast Schedule" CTA** added to the home hero, linking to `/mass-schedules#annual-feast`; the section carries `scroll-mt-24` so the heading clears the fixed nav bar on arrival

### July 2026: May Feast 2026 Albums
- **May Feast Procession 2026** album: 127 photos added to the Events Gallery
- **May Feast Mass 2026** album: 71 photos added to the Events Gallery
- Replaced the earlier "Coming Soon" May Feast placeholder with two live albums
- Event images sourced from `img/events/mayFeastProcession_2026/` and `img/events/mayFeastMass_2026/`, served via `public/events/`
- `img/events/manifest.json` updated with both new album entries

### June 2026: Image Optimisation & SEO
- **Next.js `<Image>` component**: Replaced every plain `<img>` tag (Navigation, Home, Events, Footer) with the Next.js `<Image>` component for automatic format conversion, srcset generation, and lazy loading
- **Responsive `sizes` props**: Added accurate `sizes` attributes on all images: event cover (`(max-width: 768px) 100vw, 280px`), gallery thumbnails (matching the 2→3→4→5-column grid breakpoints), and priest photo (`(max-width: 768px) 100vw, 50vw`)
- **Correct intrinsic dimensions**: Priest photo dimensions set to actual file size (`320×444`) rather than invented values
- **Per-page SEO metadata**: Added `layout.tsx` files with `title`, `description`, and OpenGraph tags for every route: Church History, Mass Schedules, Church Zones, Events Gallery, and Contact
- **Lightbox keyboard navigation**: Arrow-key (← →) and Escape key support added to the full-screen lightbox on the Events Gallery page
- **Lightbox touch/swipe navigation**: Swipe left/right on the image to navigate between photos on mobile (50 px threshold via `pointerdown`/`pointerup` delta)

### May 2026: Full UI Modernisation
- **Navigation**: Scroll-aware transparency (transparent on home hero, frosted-glass white on scroll); animated `layoutId` underline for active link; `AnimatePresence` slide-in mobile menu
- **Home Hero**: True full-screen (`h-screen`) with multi-layer gradient overlay, dot-grid pattern, amber eyebrow text, dual CTAs (filled + outline), animated scroll indicator
- **Home Feature Cards**: Redesigned as horizontal rows with gradient icon badges and hover lift
- **Home Priest Section**: Deep-blue glassmorphism card with decorative large quote mark; priest photo properly side-by-side with message
- **About Page**: Church history rebuilt as a visual alternating timeline
- **Mass Schedules**: Gradient top-strip cards; Sinhala / English / Bilingual language chips; special services as left-bordered cards; important info moved to a deep-blue section
- **Church Zones**: Table replaced with a 4-column numbered card grid
- **Contact**: Converted to a card-based layout with polished social buttons and a dedicated call CTA panel
- **Footer**: Expanded to 4 columns with logo, weekend mass quick-reference, amber accents, and attribution link
- **Footer Attribution**: Credit link to [Jeremy Perera](https://personal-webiste-pi.vercel.app/)
- **globals.css**: New utility classes (`card-modern`, `icon-badge`, `btn-primary`, `hero-dark`, `dot-overlay`, `text-shadow-lg`)
- **Copyright**: Updated to 2026
- **AI slop audit**: Removed invented timeline subtitles, redundant eyebrow labels, hollow filler subtitles, and unverified copy across all pages

### May 2026: Events Gallery
- **New page** at `/events`: photo gallery with expandable album grids and full-screen lightbox
- **Good Friday 2026** album: 35 photos
- **Holy Saturday 2026** album: 84 photos
- Event images sourced from `img/events/` and served via `public/events/`
- "Events Gallery" added to Navigation and Footer

### June 2026
- **Favicon**: Replaced default Next.js/Vercel favicon with the St. Mary's church logo (`logo2.png`) in `src/app/icon.png`, `src/app/favicon.ico`, and metadata (`icons` field in `layout.tsx`)
- **License**: Added proprietary `LICENSE` file; all rights reserved by Dinuka Perera & St. Mary's Church Maharagama
- **Migrated hosting to Vercel**: Removed `output: 'export'` static-export constraint; site now runs as a full Next.js app with native image optimisation on Vercel's free Hobby tier. Custom domain `stmarysmaharagama.org` DNS updated from Firebase to Vercel.
- **Code cleanup**: Removed ~90 narrating JSX comments, `note: null` padding fields in schedule data, redundant `Readonly<>` wrapper in `layout.tsx`, and a thin `openLightbox` one-liner wrapper in the events page. Extracted shared nav items to `src/lib/nav.ts` to eliminate the duplicate array that existed in both `Navigation.tsx` and `Footer.tsx`.
- **Renamed "About" to "Church History"**: Updated the nav label, home page section heading, and About page hero/section headings from "About Our Church" / "Our History" to "Church History" for clarity and consistency across the site.

## License

Copyright (c) 2026 Dinuka Perera & St. Mary's Church Maharagama. All rights reserved.

Viewing the source code is permitted for personal reference only. Copying, redistribution, commercial use, or creation of derivative works is strictly prohibited. See the [LICENSE](./LICENSE) file for full terms.

---

Built voluntarily by [Jeremy Perera](https://personal-webiste-pi.vercel.app/) for the St. Mary's Church community.
