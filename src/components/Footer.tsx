import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Youtube, Phone, MapPin, Clock } from 'lucide-react';
import { navItems } from '@/lib/nav';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo2.png" alt="St. Mary's Church Logo" width={48} height={48} className="h-12 w-auto opacity-90" />
              <div>
                <p className="text-white font-bold text-lg leading-tight">St. Mary&apos;s Church</p>
                <p className="text-gray-400 text-xs">Maharagama, Sri Lanka</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              Our Lady of the Assumption Parish, serving the Maharagama community since 1940.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://web.facebook.com/profile.php?id=61577346539650"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@st.maryschurchmaharagama?si=O9pld9_H5s1-RZO1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-red-700 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-amber-400 transition-colors" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-5">Weekend Masses</h4>
            <ul className="space-y-3 text-sm">
              {[
                { day: 'Saturday', time: '7:30 AM', lang: 'Sinhala' },
                { day: 'Saturday', time: '6:00 PM', lang: 'English (Vigil)' },
                { day: 'Sunday', time: '7:30 AM', lang: 'Sinhala' },
                { day: 'Sunday', time: '5:30 PM', lang: 'Bilingual', note: 'At Boralessgamuwa Church' },
              ].map((m) => (
                <li key={m.day + m.time} className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-gray-400">{m.day} · {m.lang}</span>
                    <span className="text-amber-400 font-semibold tabular-nums">{m.time}</span>
                  </div>
                  {m.note && (
                    <span className="text-gray-500 text-xs italic">{m.note}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+94112843561" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +94 112843561
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Church Garden&apos;s, Mahamegawatte,<br />Maharagama, Sri Lanka
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  Mon – Fri: 8 AM – 5 PM<br />Sat: 8 AM – 12 PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 St. Mary&apos;s Church Maharagama. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built voluntarily by{' '}
            <a
              href="https://personal-webiste-pi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors underline underline-offset-2"
            >
              Jeremy Perera
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
