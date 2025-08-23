'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Users, BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white h-screen flex items-center justify-center" style={{ backgroundImage: "url('/churchMaincomp.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to St. Mary's Church
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              A place of faith, community, and spiritual growth in Maharagama
            </p>
            <div className="flex justify-center">
              <Link
                href="/mass-schedules"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                View Mass Schedules
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About our church
              </h2>
              <div className="text-lg text-gray-600 space-y-6">
                <p>
                  The Church in Maharagama dedicated to Our Lady of the Assumption, was the brainchild of the late Rev. Fr. Francis Fernando, and was blessed by the Auxiliary Bishop Rt. Rev. Dr Oswald Gomis on 16.08.1981.
                </p>
                <p>
                  The origin of the Parish of Maharagama could be traced to the year 1940, when the late Rev. Fr. Zacharius Dabrera (O.M.I.) put up a small chapel in a small block of land belonging to the Church in Wattegedera, close to the railway line. There, he said Mass once a month, for the few Catholics in the area, and used the hall as a private English school for the poor children. After the block of land was sold by the Archbishop, due to its unsuitable location, Fr. Dabrera celebrated Holy Mass once a month in several Catholic homes in the locality. From 1953, Sunday Holy Mass was celebrated in the chapel at the Teachers' Training College in Maharagama.
                </p>
                <p>
                  The first Parish chapel in Maharagama was built by the late Rev. Fr. Charles Raymen (O.M.I.) in 1955. From that year the annual Church feast of the Assumption had been regularly celebrated.
                </p>
              </div>
            </motion.div>

            <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-blue-50"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Worship</h3>
              <p className="text-gray-600">Regular Mass services and special liturgical celebrations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-blue-50"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Invitation</h3>
              <p className="text-gray-600">Whether you are seeking a spiritual home, looking to deepen your faith, or simply curious about Catholic life, we extend a warm invitation to join us.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-blue-50"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">Weekly Sunday school both in Sinhala and English medium with regular Religious education programs conducted for all ages.</p>
            </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Parish Priest Message Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Parish Priest Message
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  Dear Friends and Visitors,
                </p>
                <p className="mb-6">
                  Our Lady of the Assumption Parish stands as a beacon of faith, hope, and love in the heart of Maharagama. For generations, this sacred community has been a spiritual home where families gather to worship, individuals find solace and guidance, and the love of Christ is shared through acts of service and fellowship.
                </p>
                <p className="mb-6">
                  Under the loving patronage of Our Lady of the Assumption, we strive to be a welcoming community that embraces all who seek to deepen their relationship with God. Our parish is more than just a place of worship—it is a family where faith is nurtured, traditions are cherished, and every person is valued as a beloved child of God.
                </p>
                <p className="mb-6">
                  We extend a warm welcome to all visitors and parishioners. Whether you're a long-time member or visiting for the first time, we hope you feel at home in our church family.
                </p>
                <p className="mb-6">
                  Join us in prayer, worship, and community as we journey together in faith.
                </p>
                <p className="mb-6">
                  May Our Lady of the Assumption continue to intercede for our parish community, and may you find in this website—and in our parish—a source of inspiration, information, and spiritual nourishment.
                </p>
                <p className="mb-6">
                  I look forward to meeting you personally and welcoming you to our parish family.
                </p>
                <p className="text-left text-gray-600 mt-8">
                In Christ's love and Mary's care,<br />
                  Rev. Fr. Sudath Gunetilleke<br />
                  Parish Priest<br />
                  Our Lady of the Assumption Parish, <br />
                  Maharagama
                </p>
              </div>
              
              <div className="flex justify-center items-center mt-44">
                <img 
                  src="/priest-message.jpg" 
                  alt="Parish Priest Message" 
                  className="rounded-lg shadow-md max-w-full h-auto object-cover"
                  style={{ maxHeight: '700px' }}
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
