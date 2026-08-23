"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  Users,
  Car,
  Info,
} from "lucide-react";

const weekdaySchedules = [
  {
    day: "Tuesday",
    time: "6:30 PM",
    location: "Boralessgamuwa Church",
    note: "Held at Boralessgamuwa Church",
  },
  { day: "Wednesday", time: "5:00 PM", location: "St. Mary's Church" },
  {
    day: "Thursday",
    time: "6:30 AM",
    location: "Church Convent",
    note: "Held at the Church convent",
  },
  { day: "Friday", time: "5:30 PM", location: "St. Mary's Church" },
];

const weekendSchedules = [
  { day: "Saturday", time: "7:30 AM", language: "Sinhala" },
  { day: "Saturday", time: "6:00 PM", language: "English", note: "Vigil Mass" },
  { day: "Sunday", time: "7:30 AM", language: "Sinhala" },
  {
    day: "Sunday",
    time: "5:30 PM",
    language: "Bilingual",
    note: "At Boralessgamuwa Church",
  },
];

const specialServices = [
  {
    title: "Eucharistic Adoration",
    icon: Clock,
    details: ["Every first Friday after the mass"],
  },
  {
    title: "Holy Days of Obligation",
    icon: Calendar,
    details: ["Masses at 6:30 PM"],
    note: "Please check with parish priest for specific dates",
  },
  {
    title: "Praise and Worship",
    icon: Users,
    details: ["Monday: 6:30 PM – 8:00 PM"],
    note: "Conducted by the Community of the Risen Lord",
  },
  {
    title: "Novenas",
    icon: Clock,
    details: ["Every Tuesday, Wednesday and Friday before the mass"],
  },
];

const langColor: Record<string, string> = {
  Sinhala: "bg-blue-100 text-blue-800",
  English: "bg-amber-100 text-amber-800",
  Bilingual: "bg-emerald-100 text-emerald-800",
};

export default function MassSchedules() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Mass Schedules
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Mass times for St. Mary&apos;s Church, Maharagama
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
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
              <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                Mon – Fri
              </span>
              <span className="h-px w-8 bg-amber-400" />
            </div>
            <h2 className="text-4xl font-bold text-blue-900">
              Weekday Schedule
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weekdaySchedules.map((s, i) => (
              <motion.div
                key={s.day + s.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-700 to-blue-900" />
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-1">
                    {s.day}
                  </h3>
                  <p className="text-3xl font-bold text-blue-700 mb-2">
                    {s.time}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    {s.location}
                  </p>
                  {s.note && (
                    <p className="text-xs text-gray-400 mt-2 italic">
                      {s.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
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
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                Sat & Sun
              </span>
              <span className="h-px w-8 bg-amber-400" />
            </div>
            <h2 className="text-4xl font-bold text-blue-900">Weekend Masses</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weekendSchedules.map((s, i) => (
              <motion.div
                key={s.day + s.time}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-blue-800 to-blue-950" />
                <div className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-950 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-1">
                    {s.day}
                  </h3>
                  <p className="text-3xl font-bold text-blue-700 mb-3">
                    {s.time}
                  </p>
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${langColor[s.language]}`}
                  >
                    {s.language}
                  </span>
                  {s.note && (
                    <p className="text-xs text-gray-400 mt-2 italic">
                      {s.note}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Sunday School:</strong> Held on Sunday mornings in
                Sinhala after the 7:30 AM Mass and on Saturday evenings in
                English after the 6:00 PM Mass.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl font-bold text-blue-900">
              Special Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 border-l-4 border-l-blue-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center shadow-sm">
                    <s.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900">{s.title}</h3>
                </div>
                <ul className="space-y-1.5 mb-3">
                  {s.details.map((d, idx) => (
                    <li
                      key={idx}
                      className="text-blue-700 font-semibold text-sm"
                    >
                      {d}
                    </li>
                  ))}
                </ul>
                {s.note && (
                  <p className="text-xs text-gray-500 italic">{s.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
                Good to Know
              </span>
              <span className="h-px w-8 bg-amber-400" />
            </div>
            <h2 className="text-4xl font-bold text-white">
              Important Information
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: Users,
                title: "Dress Code",
                body: "We encourage modest and respectful attire for all services. Please dress appropriately for worship.",
              },
              {
                icon: Clock,
                title: "Parish Priest Office",
                body: "Office days are on Wednesday from 9:00 AM to 5:00 PM.",
              },
              {
                icon: Car,
                title: "Parking",
                body: "Free parking is available in the church parking lot.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 text-white"
              >
                <div className="w-10 h-10 bg-amber-400/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-blue-200 mb-3 text-sm">
              For any changes to the schedule or special announcements, please
              check our notice board or contact the parish office.
            </p>
            <a
              href="tel:+94112843561"
              className="inline-flex items-center gap-2 bg-amber-400 text-blue-950 px-6 py-3 rounded-xl font-bold text-sm hover:bg-amber-300 transition-colors shadow-lg"
            >
              <Clock className="w-4 h-4" />
              +94 112843561
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
