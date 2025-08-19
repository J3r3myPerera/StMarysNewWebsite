'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react';

export default function Contact() {
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
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with us or visit our church. We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              We're here to help and answer any questions you may have
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">St. Mary's Church</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+94 112843561</p>
                    <p className="text-sm text-gray-500">Call us during office hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">
                      St. Mary's Church, Church Garden's, Mahamegawatte, Maharagama, Sri Lanka
                    </p>
                    <p className="text-sm text-gray-500">Located in the heart of Maharagama</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Office Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                    <p className="text-sm text-gray-500">Closed on Sundays (except for Mass)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@stmarysmaharagama.org" className="text-blue-600 hover:text-blue-800">
                      info@stmarysmaharagama.org
                    </a>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <p className="text-gray-600 mb-6">
                Connect with us on social media for updates, announcements, and community news.
              </p>
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-3 p-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors">
                  <Facebook className="w-6 h-6" />
                  <span>Follow us on Facebook</span>
                </a>
                <a href="#" className="flex items-center space-x-3 p-3 bg-pink-600 rounded-lg text-white hover:bg-pink-700 transition-colors">
                  <Instagram className="w-6 h-6" />
                  <span>Follow us on Instagram</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Visit our church located in the beautiful area of Maharagama
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Interactive Map Coming Soon</p>
                <p className="text-sm text-gray-500">
                  St. Mary's Church, Church Garden's, Mahamegawatte, Maharagama, Sri Lanka
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
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
              Visiting Our Church
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">For First-Time Visitors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• All are welcome regardless of faith background</li>
                  <li>• Modest, respectful dress is appreciated</li>
                  <li>• Please arrive 10-15 minutes before Mass</li>
                  <li>• Feel free to ask questions after Mass</li>
                  <li>• Children are welcome at all services</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Here</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Located in Maharagama, easily accessible by bus</li>
                  <li>• Parking available on church premises</li>
                  <li>• Wheelchair accessible entrance</li>
                  <li>• Public transportation nearby</li>
                  <li>• Clear signage from main roads</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600 mb-4">
                We look forward to welcoming you to our parish family. If you have any questions or need assistance, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+94112843561" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Call Us Now
                </a>
                <a href="mailto:info@stmarysmaharagama.org" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                  Send Email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
