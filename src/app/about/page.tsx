'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    year: '1940',
    title: 'Chapel at Wattegedera',
    desc: 'Rev. Fr. Zacharius Dabrera (O.M.I.) established a small chapel in Wattegedera, close to the railway line, celebrating Mass once a month for the few Catholics in the area.',
  },
  {
    year: '1953',
    title: 'Mass at Teachers\' Training College',
    desc: 'Sunday Holy Mass began being celebrated in the chapel at the Teachers\' Training College in Maharagama.',
  },
  {
    year: '1955',
    title: 'First Parish Chapel',
    desc: 'Rev. Fr. Charles Raymen (O.M.I.) built the first Parish chapel in Maharagama. The annual Church feast of the Assumption was first celebrated and continues to this day.',
  },
  {
    year: '1981',
    title: 'Church Blessed',
    desc: 'The Church dedicated to Our Lady of the Assumption, the vision of Rev. Fr. Francis Fernando, was blessed by Auxiliary Bishop Rt. Rev. Dr Oswald Gomis on 16th August 1981.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Church History</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              St. Mary&apos;s Church, Maharagama: Our Lady of the Assumption Parish
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Church History</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-blue-100 md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="relative flex-shrink-0 z-10 w-16 flex justify-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-2xl flex flex-col items-center justify-center shadow-lg text-white">
                      <span className="text-xs font-semibold leading-none text-blue-200">AD</span>
                      <span className="text-sm font-bold leading-none">{item.year}</span>
                    </div>
                  </div>

                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                    }`}
                  >
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
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
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">Message from the Parish Priest</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 md:p-12"
          >
            <span className="text-7xl font-serif text-amber-400/40 leading-none block -mb-4">&ldquo;</span>
            <div className="space-y-4 text-blue-100 leading-relaxed">
              <p className="font-medium text-white">Dear Friends and Visitors,</p>
              <p>
                Our Lady of the Assumption Parish stands as a beacon of faith, hope, and love in the heart of Maharagama. For generations, this sacred community has been a spiritual home where families gather to worship, individuals find solace and guidance, and the love of Christ is shared through acts of service and fellowship.
              </p>
              <p>
                Under the loving patronage of Our Lady of the Assumption, we strive to be a welcoming community that embraces all who seek to deepen their relationship with God. Our parish is more than just a place of worship; it is a family where faith is nurtured, traditions are cherished, and every person is valued as a beloved child of God.
              </p>
              <p>
                We extend a warm welcome to all visitors and parishioners. Whether you&apos;re a long-time member or visiting for the first time, we hope you feel at home in our church family.
              </p>
              <p>Join us in prayer, worship, and community as we journey together in faith.</p>
              <p>
                May Our Lady of the Assumption continue to intercede for our parish community, and may you find in this website a source of inspiration and spiritual nourishment.
              </p>
              <p>I look forward to meeting you personally and welcoming you to our parish family.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-blue-200 text-sm mb-1">In Christ&apos;s love and Mary&apos;s care,</p>
              <p className="text-white font-bold text-xl">Rev. Fr. Sudath Gunetilleke</p>
              <p className="text-blue-300 text-sm mt-0.5">Parish Priest · St. Mary&apos;s Parish, Maharagama</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
