'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Church
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover the rich history and spiritual journey of St. Mary's Church Maharagama
            </p>
          </motion.div>
        </div>
      </section>

      {/* Church History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our History
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                The Church in Maharagama dedicated to Our Lady of the Assumption, was the brainchild of the late Rev. Fr. Francis Fernando, and was blessed by the Auxiliary Bishop Rt. Rev. Dr Oswald Gomis on 16.08.1981.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The origin of the Parish of Maharagama could be traced to the year 1940, when the late Rev. Fr. Zacharius Dabrera (O.M.I.) put up a small chapel in a small block of land belonging to the Church in Wattegedera, close to the railway line. There, he said Mass once a month, for the few Catholics in the area, and used the hall as a private English school for the poor children.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                After the block of land was sold by the Archbishop, due to its unsuitable location, Fr. Dabrera celebrated Holy Mass once a month in several Catholic homes in the locality. From 1953, Sunday Holy Mass was celebrated in the chapel at the Teachers' Training College in Maharagama.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The first Parish chapel in Maharagama was built by the late Rev. Fr. Charles Raymen (O.M.I.) in 1955. From that year the annual Church feast of the Assumption had been regularly celebrated.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parish Priest Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-2xl p-8 md:p-12"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Parish Priest Message</h3>
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4">Dear Friends and Visitors,</h4>
                <p className="text-lg leading-relaxed mb-4">
                  Our Lady of the Assumption Parish stands as a beacon of faith, hope, and love in the heart of Maharagama. For generations, this sacred community has been a spiritual home where families gather to worship, individuals find solace and guidance, and the love of Christ is shared through acts of service and fellowship.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Under the loving patronage of Our Lady of the Assumption, we strive to be a welcoming community that embraces all who seek to deepen their relationship with God. Our parish is more than just a place of worship—it is a family where faith is nurtured, traditions are cherished, and every person is valued as a beloved child of God.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  We extend a warm welcome to all visitors and parishioners. Whether you're a long-time member or visiting for the first time, we hope you feel at home in our church family.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Join us in prayer, worship, and community as we journey together in faith.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  May Our Lady of the Assumption continue to intercede for our parish community, and may you find in this website—and in our parish—a source of inspiration, information, and spiritual nourishment.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  I look forward to meeting you personally and welcoming you to our parish family.
                </p>
                <div className="mt-8">
                  <p className="text-lg font-semibold">In Christ's love and Mary's care,</p>
                  <p className="text-xl font-bold mt-2">Rev. Fr. Sudath Gunetilleke</p>
                  <p className="text-lg mt-1">Parish Priest</p>
                  <p className="text-lg mt-1">Our Lady of the Assumption Parish, Maharagama</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services & Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer various spiritual and educational programs to serve our community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Worship Services</h3>
              <p className="text-gray-600">
                Regular Mass services and special liturgical celebrations throughout the week, including Sunday Masses in both Sinhala and English.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Religious Education</h3>
              <p className="text-gray-600">
                Weekly Sunday school both in Sinhala and English medium with regular Religious education programs conducted for all ages.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Fellowship</h3>
              <p className="text-gray-600">
                Various community activities, prayer groups, and social events that bring our parish family together in faith and friendship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
