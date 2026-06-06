'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Facebook, Youtube, ExternalLink } from 'lucide-react';

const contactCards = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 112843561',
    sub: 'Call us during office hours',
    href: 'tel:+94112843561',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: "St. Mary's Church, Church Garden's, Mahamegawatte, Maharagama",
    sub: 'Sri Lanka',
    href: null,
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon – Fri: 8:00 AM – 5:00 PM',
    sub: 'Sat: 8:00 AM – 12:00 PM · Closed Sun (except Mass)',
    href: null,
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              St. Mary&apos;s Church, Church Garden&apos;s, Mahamegawatte, Maharagama
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-blue-900 mb-8">St. Mary&apos;s Church</h2>

              <div className="space-y-5">
                {contactCards.map(({ icon: Icon, label, value, sub, href }) => (
                  <div
                    key={label}
                    className="flex items-start gap-5 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-blue-900 font-semibold hover:text-blue-600 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-blue-900 font-semibold">{value}</p>
                      )}
                      <p className="text-gray-500 text-sm mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Follow Us</h3>

                <div className="space-y-3">
                  <a
                    href="https://web.facebook.com/profile.php?id=61577346539650"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-blue-700 hover:bg-blue-800 rounded-2xl text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Follow on Facebook</p>
                      <p className="text-blue-200 text-xs">St. Mary&apos;s Church Maharagama</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors" />
                  </a>

                  <a
                    href="https://youtube.com/@st.maryschurchmaharagama?si=O9pld9_H5s1-RZO1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-red-600 hover:bg-red-700 rounded-2xl text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">Subscribe on YouTube</p>
                      <p className="text-red-200 text-xs">@st.maryschurchmaharagama</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-red-300 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-3xl p-7 text-white text-center">
                <Phone className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <p className="text-blue-200 text-sm mb-1">Questions? Give us a call</p>
                <p className="text-2xl font-bold mb-4">+94 112843561</p>
                <a
                  href="tel:+94112843561"
                  className="inline-block bg-amber-400 text-blue-950 px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-amber-300 transition-colors"
                >
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-900">Find Us</h2>
            <p className="text-gray-500 mt-3">Church Garden&apos;s, Mahamegawatte, Maharagama, Sri Lanka</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="w-full h-[450px]">
              <iframe
                src="https://www.google.com/maps?q=St.+Mary's+Church,+Church+Gardens,+Mahamegawatte,+Maharagama,+Sri+Lanka&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. Mary's Church Maharagama Location"
              />
            </div>
            <div className="p-5 bg-white flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <p className="text-gray-700 text-sm">
                  St. Mary&apos;s Church, Church Garden&apos;s, Mahamegawatte, Maharagama, Sri Lanka
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/St.+Mary's+Church+Maharagama+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-800 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-900">Visiting Our Church</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'For First-Time Visitors',
                items: [
                  'All are welcome regardless of faith background',
                  'Modest, respectful dress is appreciated',
                  'Please arrive 10–15 minutes before Mass',
                  'Feel free to ask questions after Mass',
                  'Children are welcome at all services',
                ],
              },
              {
                title: 'Getting Here',
                items: [
                  'Located in Maharagama, easily accessible by bus',
                  'Parking available on church premises',
                  'Wheelchair accessible entrance',
                  'Public transportation nearby',
                  'Clear signage from main roads',
                ],
              },
            ].map(({ title, items }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-blue-50 border border-blue-100 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-blue-900 mb-4">{title}</h3>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-gray-700 text-sm">
                      <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
