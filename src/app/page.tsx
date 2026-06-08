'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Users, BookOpen, ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center justify-center -mt-20"
        style={{ backgroundImage: "url('/churchMaincomp.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-black/50 to-black/20" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-amber-300 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4"
            >
              Our Lady of the Assumption Parish
            </motion.p>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Welcome to{' '}
              <span className="block text-amber-300 mt-1">St. Mary&apos;s Church</span>
            </h1>

            <p className="text-lg md:text-xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              A place of faith, community and spiritual growth in the heart of Maharagama, Sri Lanka
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/mass-schedules"
                className="bg-amber-400 text-blue-950 px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:bg-amber-300 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View Mass Schedules
              </Link>
              <Link
                href="/about"
                className="border-2 border-white/70 text-white px-8 py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                 Church History
              </h2>

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  The Church in Maharagama dedicated to Our Lady of the Assumption, was the brainchild of the late Rev. Fr. Francis Fernando, and was blessed by the Auxiliary Bishop Rt. Rev. Dr Oswald Gomis on 16.08.1981.
                </p>
                <p>
                  The origin of the Parish of Maharagama could be traced to the year 1940, when the late Rev. Fr. Zacharius Dabrera (O.M.I.) put up a small chapel in a small block of land belonging to the Church in Wattegedera, close to the railway line.
                </p>
                <p>
                  The first Parish chapel in Maharagama was built by the late Rev. Fr. Charles Raymen (O.M.I.) in 1955. From that year the annual Church feast of the Assumption had been regularly celebrated.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center mt-8 text-blue-700 font-semibold hover:text-blue-900 transition-colors group"
              >
                Read church full history
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </motion.div>

            <div className="space-y-5">
              {[
                {
                  icon: Heart,
                  title: 'Worship',
                  desc: 'Regular Mass services and special liturgical celebrations throughout the week.',
                  delay: 0.1,
                  gradient: 'from-blue-600 to-blue-800',
                },
                {
                  icon: Users,
                  title: 'Our Invitation',
                  desc: 'Whether seeking a spiritual home or curious about Catholic life, we extend a warm invitation to join us.',
                  delay: 0.2,
                  gradient: 'from-blue-700 to-blue-900',
                },
                {
                  icon: BookOpen,
                  title: 'Education',
                  desc: 'Weekly Sunday school in Sinhala and English with regular religious education programs for all ages.',
                  delay: 0.3,
                  gradient: 'from-blue-800 to-blue-950',
                },
              ].map(({ icon: Icon, title, desc, delay, gradient }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Parish Priest Message
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 text-white">
                <span className="text-8xl font-serif text-amber-400/40 leading-none block -mb-6">&ldquo;</span>
                <div className="space-y-4 text-blue-100 leading-relaxed text-[0.95rem]">
                  <p>Dear Friends and Visitors,</p>
                  <p>
                    Our Lady of the Assumption Parish stands as a beacon of faith, hope, and love in the heart of Maharagama. For generations, this sacred community has been a spiritual home where families gather to worship, individuals find solace and guidance, and the love of Christ is shared through acts of service and fellowship.
                  </p>
                  <p>
                    Under the loving patronage of Our Lady of the Assumption, we strive to be a welcoming community that embraces all who seek to deepen their relationship with God.
                  </p>
                  <p>
                    We extend a warm welcome to all visitors and parishioners. Whether you&apos;re a long-time member or visiting for the first time, we hope you feel at home in our church family.
                  </p>
                  <p>Join us in prayer, worship, and community as we journey together in faith.</p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-blue-200 text-sm mb-1">In Christ&apos;s love and Mary&apos;s care,</p>
                  <p className="text-white font-bold text-lg">Rev. Fr. Sudath Gunetilleke</p>
                  <p className="text-blue-300 text-sm">Parish Priest · St. Mary&apos;s Parish, Maharagama</p>
                </div>
              </div>

              <div className="flex items-center justify-center p-8 md:p-10 bg-white/5">
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-br from-amber-400/30 to-transparent rounded-2xl" />
                  <img
                    src="/priest-message.jpg"
                    alt="Rev. Fr. Sudath Gunetilleke"
                    className="relative rounded-2xl shadow-2xl max-h-[500px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
