'use client';

import { motion } from 'framer-motion';
import { Users, MapPin, Phone } from 'lucide-react';

export default function ChurchZones() {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Church Zones
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our parish is divided into different zones for better community organization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Zones Table Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-blue-900 to-blue-700">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Zone
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                      Coordinator
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {zones.map((item, index) => (
                    <motion.tr
                      key={item.zone}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="text-sm font-medium text-gray-900">{item.zone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Users className="w-5 h-5 text-blue-600 mr-2" />
                          <span className="text-sm text-gray-700">{item.coordinator}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">
                  For Further Clarifications
                </h3>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                For any further clarifications, contact the parish Secretary:
              </p>
              <p className="text-xl font-semibold text-blue-800 mb-2">
                Mrs. Priyanka Perera
              </p>
              <p className="text-lg text-gray-600">
                Parish Secretary
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Info Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Engagement
              </h3>
              <p className="text-gray-600">
                Each zone fosters strong community bonds through regular activities and gatherings
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Pastoral Care
              </h3>
              <p className="text-gray-600">
                Coordinators ensure that every member of the parish receives proper spiritual guidance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Easy Communication
              </h3>
              <p className="text-gray-600">
                Direct contact with zone coordinators makes it easy to stay connected with parish activities
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

