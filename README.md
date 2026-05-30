# St. Mary's Church Maharagama - Modern Website

A modern, responsive website for St. Mary's Church Maharagama built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Scroll-Aware Navigation**: Transparent nav overlaying the hero on the home page, becoming a frosted-glass white bar on scroll; animated active-link underline indicator
- **Full-Screen Hero**: Immersive church background image with multi-layer gradient overlay, amber eyebrow label, dual CTAs, and a bouncing scroll indicator
- **Two-Column Layout**: Church history and feature cards side by side with hover lift effects
- **Parish Priest Section**: Glassmorphism card with decorative quote mark, message, and priest photo
- **Timeline History**: Church history rendered as a visual timeline (1940 → 1981) on the About page
- **Language Chips**: Weekend mass cards display Sinhala / English / Bilingual pill badges
- **Church Zones Grid**: 16 parish zones displayed as numbered cards (replaced table layout)
- **Events Gallery**: Photo gallery page with expandable album grids and a full-screen lightbox viewer
- **Card-Based Contact**: Contact info, social media, and call-to-action as polished individual cards
- **Enhanced Footer**: 4-column layout with church logo, weekend mass quick-reference, and contact details
- **Church Logo**: Branded navigation with church logo
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
   - Hero Section: Full-screen church photo with layered gradient overlay, amber "Our Lady of the Assumption Parish" eyebrow, dual CTA buttons, and scroll indicator
   - About Our Church: Church history excerpt with animated feature cards (Worship, Invitation, Education)
   - Parish Priest Message: Glassmorphism dark-blue card with decorative quote mark and priest photo side-by-side

2. **About Page**:
   - Visual timeline of church history: 1940, 1953, 1955, 1981 — alternating left/right cards on a vertical line
   - Parish priest message in a full-width glassmorphism card

3. **Mass Schedules Page**:
   - Weekday Schedule: Cards with gradient top strip, large time display, and hover scale on icon
   - Weekend Masses: Cards with Sinhala / English / Bilingual language chips
   - Special Services: Left-bordered cards (New Year Mass, Eucharistic Adoration, Holy Days, Praise & Worship, Novenas)
   - Important Information: Deep-blue section with amber icon badges (Dress Code, Office Hours, Parking)

4. **Church Zones Page**:
   - 16 zones displayed as a 4-column card grid with numbered zone badges and coordinator details
   - Parish Secretary contact as a highlighted dark-blue panel
   - Community Engagement, Pastoral Care, Easy Communication highlight cards

5. **Events Gallery Page** (`/events`):
   - Two event albums: Good Friday 2026 (35 photos) and Holy Saturday 2026 (84 photos)
   - Each album shows a cover photo, date, title, and photo count
   - "View All Photos" expands an inline grid (lazy-loaded thumbnails)
   - Clicking any photo opens a full-screen lightbox with prev/next navigation and photo counter

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

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

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
- **Global Styles**: `src/app/globals.css`
- **Images**: Static assets in `public/`

### Images
- **Background**: `churchMaincomp.jpg` — hero section
- **Logo**: `logo2.png` — navigation and footer
- **Priest Photo**: `priest-message.jpg` — home and about pages
- **Event Photos**: `public/events/goodFriday_2026/` and `public/events/holySaturday_2026/` — Events Gallery page

### Adding New Events
To add a new event to the gallery, place the photos in `public/events/<folder-name>/` and add a new entry to the `events` array at the top of `src/app/events/page.tsx`, following the same structure as the existing entries.

## Content Structure

- **Church History**: Visual timeline from 1940–1981 (Fr. Dabrera, Fr. Raymen, Fr. Fernando)
- **Parish Priest**: Rev. Fr. Sudath Gunetilleke with personal welcome message
- **Feature Cards**: Worship, Our Invitation, and Education
- **Church Zones**: 16 parish zones (Church Garden, Highlevel Road, Temple Road, Dambahena, Pamunuwa, Janatha Mawatha, Pathiragoda, Navinna, Wattegedera, Alhena, Ambagahapura I & II, Ambillawatta, Godigamuwa, Arawwala I & II)
- **Mass Schedules**: Weekday, weekend (with language), special services, and important info
- **Contact**: Phone, address, office hours, Facebook, YouTube, and Google Maps
- **Events Gallery**: Good Friday 2026 (35 photos), Holy Saturday 2026 (84 photos)

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy the 'out' directory
```

### Other Platforms
The static export can be deployed to any hosting service.

## Contact

For questions about the website or church information:

- **Phone**: +94 112843561
- **Address**: St. Mary's Church, Church Garden's, Mahamegawatte, Maharagama, Sri Lanka
- **Facebook**: [St. Mary's Church Maharagama](https://web.facebook.com/profile.php?id=61577346539650)
- **YouTube**: [St. Mary's Church Maharagama](https://youtube.com/@st.maryschurchmaharagama?si=O9pld9_H5s1-RZO1)

## Recent Updates

### May 2026 — Full UI Modernisation
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

### May 2026 — Events Gallery
- **New page** at `/events`: photo gallery with expandable album grids and full-screen lightbox
- **Good Friday 2026** album: 35 photos
- **Holy Saturday 2026** album: 84 photos
- Event images sourced from `img/events/` and served via `public/events/`
- "Events Gallery" added to Navigation and Footer

## License

This project is created for St. Mary's Church Maharagama. All rights reserved.

---

Built voluntarily by [Jeremy Perera](https://personal-webiste-pi.vercel.app/) for the St. Mary's Church community.
