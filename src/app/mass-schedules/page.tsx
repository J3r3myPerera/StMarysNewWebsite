"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  Users,
  Car,
  Info,
  Flag,
  Flame,
  Church,
  Cross,
  BookOpen,
  Gift,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type FeastDay = {
  date: string;
  title: string;
  icon: LucideIcon;
  featured?: boolean;
  times?: { time: string; label?: string }[];
  organizers?: string;
  theme?: string;
  reading?: string;
  gospel?: string;
  gospelLabel?: string;
  offerings?: string;
  celebrant?: { role: string; name: string };
};

const feastSchedule: FeastDay[] = [
  {
    date: "August 16",
    title: "Hoisting of the Flagstaff & First Novena",
    icon: Flag,
    times: [
      { time: "4:00 PM", label: "Hoisting of the Flagstaff" },
      { time: "6:00 PM", label: "Sunday Holy Mass and First Novena" },
    ],
    organizers: "Dambahena / Wattegedara / Elhena Zones",
    theme: "Do this in memory of me",
    gospel: "John 6:54-59",
    gospelLabel: "Gospel Reading for the Day",
    offerings: "Milk powder",
  },
  {
    date: "August 17",
    title: "Second Novena",
    icon: Calendar,
    organizers: "Nawinna / Abillawatta / Pathiragoda Zones",
    theme: "The Heavenly Mother on earth",
    reading: "Revelation 12:1-6",
    gospel: "John 2:1-11",
    offerings: "Wheat flour / String hopper flour / Noodles",
  },
  {
    date: "August 18",
    title: "Third Novena",
    icon: Calendar,
    organizers: "Church Garden / Temple Road / Janatha Mawatha Zones",
    theme: "Living Saints",
    reading: "2 Corinthians 5:14-19",
    gospel: "Luke 9:21-27",
    offerings: "Rice",
  },
  {
    date: "August 19",
    title: "Fourth Novena",
    icon: Calendar,
    organizers: "Godigamuwa / Ambagahapura I Zones",
    theme: "Sanctity of the Church",
    reading: "1 Corinthians 6:12-20",
    gospel: "John 2:13-22",
    offerings: "Tea leaves / Sugar",
  },
  {
    date: "August 20",
    title: "Fifth Novena",
    icon: Calendar,
    organizers: "High Level Road / Pamunuwa / Arawwala I Zones",
    theme: "The Grace that Kills Sin",
    reading: "1 John 1:5-10",
    gospel: "Luke 15:11-24",
    offerings: "Canned fish / Curry powder",
  },
  {
    date: "August 21",
    title: "Sixth Novena",
    icon: Calendar,
    organizers: "Ambagahapura II / Arawwala II Zones",
    theme: "The Beautiful Family",
    reading: "Ephesians 5:21-33",
    gospel: "Matthew 7:24-29",
    offerings: "Dhal / Soya",
  },
  {
    date: "August 22",
    title: "Vespers Service",
    icon: Flame,
    featured: true,
    times: [{ time: "7:00 PM" }],
    celebrant: {
      role: "Presiding Priest",
      name: "Rev. Fr. Daya Darshana – Rector, St. Sebastian's College, Moratuwa",
    },
  },
  {
    date: "August 23",
    title: "Feast Day Mass",
    icon: Church,
    featured: true,
    times: [{ time: "8:00 AM" }],
    celebrant: {
      role: "Main Celebrant",
      name: "Rev. Fr. Gihan Gunathilaka – National Director, Catholic Family Apostolate",
    },
  },
];

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

      <section
        id="annual-feast"
        className="scroll-mt-24 py-24 bg-gradient-to-b from-blue-50 via-white to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-amber-400" />
              <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">
                August 16 – 23
              </span>
              <span className="h-px w-8 bg-amber-400" />
            </div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-7 h-7 text-amber-500" />
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
                Annual Feast 2026
              </h2>
              <Sparkles className="w-7 h-7 text-amber-500" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Eight days of novenas, vespers and the Feast Day Mass at St.
              Mary&apos;s Church, Maharagama.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto"
          >
            <div className="flex items-start gap-4 bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">Holy Rosary</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Recited daily at{" "}
                  <span className="font-semibold text-blue-700">6:30 PM</span>{" "}
                  throughout the feast.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-blue-900 mb-1">Novena Preacher</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Rev. Fr. Ranga Shehan – Lecturer, Aquinas Higher Education
                  Institute
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {feastSchedule.map((day, i) => (
              <motion.div
                key={day.date}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1 }}
                viewport={{ once: true }}
                className={`group bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden border ${
                  day.featured ? "border-amber-200" : "border-gray-100"
                }`}
              >
                <div
                  className={`h-1.5 bg-gradient-to-r ${
                    day.featured
                      ? "from-amber-400 to-amber-600"
                      : "from-blue-700 to-blue-900"
                  }`}
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br ${
                        day.featured
                          ? "from-amber-400 to-amber-600"
                          : "from-blue-600 to-blue-900"
                      }`}
                    >
                      <day.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-semibold tracking-widest uppercase ${
                          day.featured ? "text-amber-600" : "text-blue-600"
                        }`}
                      >
                        {day.date}
                      </p>
                      <h3 className="text-lg font-bold text-blue-900 leading-snug">
                        {day.title}
                      </h3>
                    </div>
                  </div>

                  {day.times && (
                    <div className="space-y-2 mb-4">
                      {day.times.map((t) => (
                        <div key={t.time} className="flex items-baseline gap-3">
                          <span className="text-2xl font-bold text-blue-700 whitespace-nowrap">
                            {t.time}
                          </span>
                          {t.label && (
                            <span className="text-sm text-gray-600">
                              {t.label}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {day.celebrant && (
                    <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                      <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
                        {day.celebrant.role}
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {day.celebrant.name}
                      </p>
                    </div>
                  )}

                  {(day.organizers ||
                    day.theme ||
                    day.reading ||
                    day.gospel ||
                    day.offerings) && (
                    <dl className="space-y-3">
                      {day.organizers && (
                        <div className="flex items-start gap-3">
                          <Users className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                              Organizers
                            </dt>
                            <dd className="text-sm text-gray-700">
                              {day.organizers}
                            </dd>
                          </div>
                        </div>
                      )}
                      {day.theme && (
                        <div className="flex items-start gap-3">
                          <Cross className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                              Theme
                            </dt>
                            <dd className="text-sm font-semibold text-blue-800">
                              {day.theme}
                            </dd>
                          </div>
                        </div>
                      )}
                      {(day.reading || day.gospel) && (
                        <div className="flex items-start gap-3">
                          <BookOpen className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                              {day.gospelLabel ?? "Readings"}
                            </dt>
                            <dd className="text-sm text-gray-700">
                              {day.reading && <span>{day.reading}</span>}
                              {day.reading && day.gospel && (
                                <span className="text-gray-300 mx-2">|</span>
                              )}
                              {day.gospel && (
                                <span>
                                  {day.reading ? "Gospel: " : ""}
                                  {day.gospel}
                                </span>
                              )}
                            </dd>
                          </div>
                        </div>
                      )}
                      {day.offerings && (
                        <div className="flex items-start gap-3">
                          <Gift className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <dt className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                              Offerings
                            </dt>
                            <dd className="text-sm text-gray-700">
                              {day.offerings}
                            </dd>
                          </div>
                        </div>
                      )}
                    </dl>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl text-blue-900 italic leading-relaxed">
              &ldquo;Our Mother, Queen of Heaven and Earth, we forever remember
              the love of your immaculate heart.&rdquo;
            </p>
          </motion.div> */}
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
