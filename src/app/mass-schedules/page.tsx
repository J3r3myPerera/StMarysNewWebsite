'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, Users, Car } from 'lucide-react';

export default function MassSchedules() {
  const weekdaySchedules = [
    { 
      day: 'Tuesday', 
      time: '6:30 PM', 
      location: 'Boralessgamuwa Church',
      note: 'Mass will be held at Boralessgamuwa church'
    },
    { 
      day: 'Wednesday', 
      time: '5:00 PM', 
      location: 'St. Mary\'s Church',
      note: null
    },
    { 
      day: 'Thursday', 
      time: '6:00 AM', 
      location: 'Church Convent',
      note: 'Mass will be held at the Church convent'
    },
    { 
      day: 'Friday', 
      time: '5:30 PM', 
      location: 'St. Mary\'s Church',
      note: null
    },
  ];

  const weekendSchedules = [
    { 
      day: 'Saturday', 
      time: '7:30 AM', 
      language: 'Sinhala',
      location: 'St. Mary\'s Church'
    },
    { 
      day: 'Saturday', 
      time: '6:00 PM', 
      language: 'English',
      location: 'St. Mary\'s Church',
      note: 'Vigil Mass'
    },
    { 
      day: 'Sunday', 
      time: '7:30 AM', 
      language: 'Sinhala',
      location: 'St. Mary\'s Church'
    },
    { 
      day: 'Sunday', 
      time: '5:30 PM', 
      language: 'Bilingual',
      location: 'Boralessgamuwa Church',
      note: 'Mass will be held at Boralessgamuwa church'
    },
  ];

  const specialServices = [
    {
      title: 'New Year Mass',
      details: [
        '31st Night Mass: 11:15 PM*',
        '1st January Mass: 8:00 AM'
      ],
      note: '*Eucharistic Adoration followed by the mass'
    },
    {
      title: 'Eucharistic Adoration',
      details: ['Every first Friday after the mass'],
      note: null
    },
    {
      title: 'Holy Days of Obligation',
      details: ['Masses at 6:30 PM'],
      note: 'Please check with parish priest for specific dates'
    },
    {
      title: 'Praise and Worship',
      details: ['Monday: 6:30 PM - 8:00 PM'],
      note: 'Conducted by the Community of the Risen Lord'
    },
    {
      title: 'Novenas',
      details: ['Every Tuesday, Wednesday and Friday before the mass'],
      note: null
    },
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
              Mass Schedules
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join us for Holy Mass and spiritual nourishment throughout the week
            </p>
          </motion.div>
        </div>
      </section>

      {/* Weekday Schedule */}
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
              Weekday Schedule
            </h2>
            <p className="text-lg text-gray-600">
              Mass times for weekdays
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weekdaySchedules.map((schedule, index) => (
              <motion.div
                key={`${schedule.day}-${schedule.time}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{schedule.day}</h3>
                  <p className="text-blue-600 font-medium text-xl mb-2">{schedule.time}</p>
                  {schedule.note && (
                    <p className="text-sm text-gray-500 mt-2">{schedule.note}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekend Masses */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Weekend Masses
            </h2>
            <p className="text-lg text-gray-600">
              Saturday and Sunday Mass schedules
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weekendSchedules.map((schedule, index) => (
              <motion.div
                key={`${schedule.day}-${schedule.time}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{schedule.day}</h3>
                  <p className="text-sm text-gray-500 mb-2">({schedule.language})</p>
                  <p className="text-blue-700 font-medium text-xl mb-2">{schedule.time}</p>
                  {schedule.note && (
                    <p className="text-sm text-gray-500 mt-2">{schedule.note}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sunday School Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-blue-100 rounded-lg p-6 max-w-4xl mx-auto"
          >
            <p className="text-center text-blue-800 font-medium">
              <strong>Note:</strong> Sunday school will be held on Sunday mornings after the 7:30 AM mass and on Saturday evenings after the 6:00 PM mass.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Special Services */}
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
              Special Services
            </h2>
            <p className="text-lg text-gray-600">
              Special liturgical celebrations and devotions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <ul className="space-y-2 mb-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-blue-600 font-medium">{detail}</li>
                  ))}
                </ul>
                {service.note && (
                  <p className="text-sm text-gray-500 italic">{service.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Important Information
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Dress Code</h3>
                </div>
                <p className="text-gray-600">
                  We encourage modest and respectful attire for all services. Please dress appropriately for worship.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-blue-700 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Parish Priest Office</h3>
                </div>
                <p className="text-gray-600">
                  The parish priest office days are on <strong>Wednesday</strong> from <strong>9:00 AM to 5:00 PM</strong>.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <Car className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Parking</h3>
                </div>
                <p className="text-gray-600">
                  Free parking is available in the church parking lot.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-600 mb-4">
                For any changes to the Mass schedule or special announcements, please check our notice board or contact the parish office.
              </p>
              <p className="text-blue-600 font-medium">
                Phone: +94 112843561
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
