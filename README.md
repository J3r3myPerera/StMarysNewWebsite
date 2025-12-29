# St. Mary's Church Maharagama - Modern Website

A modern, responsive website for St. Mary's Church Maharagama built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations
- **Full-Screen Hero**: Immersive church background image with welcome message
- **Two-Column Layout**: Church history and feature cards side by side
- **Parish Priest Section**: Personal message with priest's photo
- **Church Zones Page**: Complete list of 16 parish zones with coordinators
- **Church Logo**: Branded navigation with church logo
- **Mobile-First**: Fully responsive across all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper metadata and structured content
- **Accessible**: WCAG compliant design
- **Interactive**: Smooth scroll navigation and hover effects
- **Modern Tech Stack**: TypeScript, Tailwind CSS, Framer Motion

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Font**: Inter (Google Fonts)

## 📱 Pages & Sections

1. **Home Page**:
   - Hero Section: Full-screen welcome message with church background image and call-to-action
   - About Our Church: Comprehensive church history from 1940-1981 with feature cards
   - Parish Priest Message: Personal welcome message with priest's photo

2. **About Page**: Church history and parish priest message

3. **Mass Schedules Page**: Detailed weekly mass schedules including:
   - Weekday Schedule (Tuesday-Friday with specific locations)
   - Weekend Masses (Saturday and Sunday in multiple languages)
   - Special Services (New Year Mass, Eucharistic Adoration, Holy Days, Praise and Worship, Novenas)
   - Important Information (Dress Code, Parish Priest Office Hours, Parking)

4. **Church Zones Page**: Complete list of 16 parish zones with coordinators

5. **Contact Page**: 
   - Contact Information (Phone, Address, Office Hours)
   - Social Media Links (Facebook and YouTube)
   - Interactive Google Maps for location
   - Visitor Information

6. **Footer**: Quick links and social media icons

## 🚀 Getting Started

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

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The website uses a cohesive blue color scheme throughout, with shades ranging from light blue (blue-50) to dark blue (blue-900), creating a professional and harmonious design. Colors can be customized in the Tailwind configuration.

### Content
- **Home Page**: Main content in `src/app/page.tsx`
- **About Page**: Church history and information in `src/app/about/page.tsx`
- **Church Zones Page**: Parish zones and coordinators in `src/app/church-zones/page.tsx`
- **Mass Schedules Page**: Weekly mass timings in `src/app/mass-schedules/page.tsx`
- **Contact Page**: Contact information and form in `src/app/contact/page.tsx`
- **Navigation**: Logo and menu in `src/components/Navigation.tsx`
- **Footer**: Footer component in `src/components/Footer.tsx`
- **Images**: Static assets in `public/` folder

### Styling
Custom styles are defined in `src/app/globals.css` using Tailwind's layer system.

### Images
- **Background**: `churchMaincomp.jpg` for hero section
- **Logo**: `logo2.png` for navigation
- **Priest Photo**: `priest-message.jpg` for parish priest section

## 📄 Content Structure

The website includes comprehensive content about St. Mary's Church:

- **Church History**: Complete timeline from 1940-1981, including Fr. Dabrera, Fr. Raymen, and Fr. Fernando
- **Parish Priest**: Rev. Fr. Sudath Gunetilleke with personal welcome message
- **Church Background**: Beautiful church image as hero section background
- **Feature Cards**: Worship, Our Invitation, and Education services
- **Church Zones**: 16 parish zones with coordinators for better community organization (Church Garden, Highlevel Road, Temple Road, Dambahena, Pamunuwa, Janatha Mawatha, Pathiragoda, Navinna, Wattegedera, Alhena, Ambagahapura I & II, Ambillawatta, Godigamuwa, Arawwala I & II)
- **Mass Schedules**: Comprehensive schedule including weekday masses, weekend masses, special services, and important information
- **Contact Information**: Phone, address, office hours, and social media links (Facebook and YouTube)
- **Interactive Map**: Google Maps integration for easy navigation to the church
- **Branding**: Church logo in navigation bar

## 🌐 Deployment

The website can be deployed to various platforms:

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

## 📞 Contact

For questions about the website or church information:

- **Phone**: +94 112843561
- **Address**: St. Mary's Church, Church Garden's, Mahamegawatte, Maharagama, Sri Lanka
- **Social Media**: 
  - **Facebook**: [St. Mary's Church Maharagama](https://web.facebook.com/profile.php?id=61577346539650)
  - **YouTube**: [St. Mary's Church Maharagama](https://youtube.com/@st.maryschurchmaharagama?si=O9pld9_H5s1-RZO1)

## 🔄 Recent Updates

### Latest Changes
- ✅ **New Church Zones Page**: Added dedicated page showcasing all 16 parish zones with their coordinators
- ✅ **Navigation Updates**: Updated navigation menu order (Mass Schedules before Church Zones) with improved active page highlighting
- ✅ **Social Media Updates**: 
  - Added YouTube link to Contact page and Footer
  - Updated Facebook links to official profile
  - Removed all Instagram links and logos
  - Removed email contact information
- ✅ **Mass Schedules Page**: Complete redesign with detailed weekday/weekend schedules, special services, and important information
- ✅ **Contact Page Enhancements**: 
  - Added interactive Google Maps with church location
  - Updated social media section with Facebook and YouTube
  - Removed email contact information
- ✅ **About Page**: Removed "Our Services & Programs" section for cleaner layout
- ✅ **Color Scheme**: Unified design using shades of blue throughout (removed gold, purple, and brown accents)
- ✅ **Enhanced Organization**: Better structure for parish community engagement information

## 📄 License

This project is created for St. Mary's Church Maharagama. All rights reserved.

---

**Built with ❤️ for the St. Mary's Church community**
