'use client';

import { motion } from 'framer-motion';
import { Users, MapPin, Phone, MessageCircle } from 'lucide-react';

const zones = [
  { zone: 'Church Garden', coordinator: 'Mr. Rohitha Rupasinghe' },
  { zone: 'Highlevel Road', coordinator: 'Mrs. Rashanthi Perera' },
  { zone: 'Temple Road', coordinator: 'Mrs. Nilanthi Dias' },
  { zone: 'Dambahena', coordinator: 'Mrs. Dilanthi van Cuylenburg' },
  { zone: 'Pamunuwa', coordinator: 'Mrs. Anusha Senevirathne' },
  { zone: 'Janatha Mawatha', coordinator: 'Mrs. Padmini De Silva' },
  { zone: 'Pathiragoda', coordinator: 'Mrs. Sriyani Illangakoon' },
  { zone: 'Navinna', coordinator: 'Mr. Anton Rathnasiri' },
  { zone: 'Wattegedera', coordinator: 'Mrs. Caryl Rajapaksha' },
  { zone: 'Alhena', coordinator: 'Mrs. Ranjani Abeyratne' },
  { zone: 'Ambagahapura I', coordinator: 'Mrs. Renuka Dassanayake' },
  { zone: 'Ambagahapura II', coordinator: 'Mrs. Neluka Panadura' },
  { zone: 'Ambillawatta', coordinator: 'Mr. Asoka Hettiarachchi' },
  { zone: 'Godigamuwa', coordinator: 'Mrs. Theresa Surangi' },
  { zone: 'Arawwala I', coordinator: 'Mr. Prasanga Kariyawasam' },
  { zone: 'Arawwala II', coordinator: 'Mr. Damian Senanayake' },
];

const highlights = [
  {
    icon: Users,
    title: 'Community Engagement',
    desc: 'Each zone fosters strong community bonds through regular activities and gatherings.',
  },
  {
    icon: MapPin,
    title: 'Pastoral Care',
    desc: 'Coordinators ensure every member of the parish receives proper spiritual guidance.',
  },
  {
    icon: MessageCircle,
    title: 'Easy Communication',
    desc: 'Direct contact with zone coordinators keeps you connected with parish activities.',
  },
];

export default function ChurchZones() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Parish Organisation</span>
              <span className="h-px w-8 bg-amber-400" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Church Zones</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our parish is organised into 16 zones for better community engagement and pastoral care
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Zone Cards Grid ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">16 Zones</span>
              <span className="h-px w-8 bg-amber-400" />
            </div>
            <h2 className="text-4xl font-bold text-blue-900">Parish Zones &amp; Coordinators</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {zones.map((item, index) => (
              <motion.div
                key={item.zone}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Coloured top strip */}
                <div className="h-1.5 bg-gradient-to-r from-blue-700 to-blue-900" />
                <div className="p-5">
                  {/* Zone number badge */}
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-bold text-blue-400 bg-blue-50 px-2 py-0.5 rounded-md">
                      Zone {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Zone name */}
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <h3 className="font-bold text-blue-900 text-base leading-tight">{item.zone}</h3>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-3.5 h-3.5 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">Coordinator</p>
                        <p className="text-sm text-gray-700 font-medium leading-tight">{item.coordinator}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Secretary Contact ── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 rounded-3xl p-8 md:p-10 text-white text-center"
          >
            <div className="w-14 h-14 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Phone className="w-7 h-7 text-amber-300" />
            </div>
            <h3 className="text-2xl font-bold mb-2">For Further Clarifications</h3>
            <p className="text-blue-200 mb-5">Please contact the Parish Secretary:</p>
            <p className="text-2xl font-bold text-amber-300">Mrs. Priyanka Perera</p>
            <p className="text-blue-300 text-sm mt-1">Parish Secretary · St. Mary&apos;s Church, Maharagama</p>
          </motion.div>
        </div>
      </section>

      {/* ── Highlight Cards ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
