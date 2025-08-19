'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, Users } from 'lucide-react';

export default function MassSchedules() {
  const massSchedules = [
    { 
      day: 'Sunday', 
      time: '6:00 AM, 8:00 AM, 6:00 PM', 
      language: 'Sinhala & English',
      description: 'Main Sunday Masses with full congregation'
    },
    { 
      day: 'Monday - Friday', 
      time: '6:00 AM', 
      language: 'Sinhala',
      description: 'Daily morning Mass for weekday devotion'
    },
    { 
      day: 'Saturday', 
      time: '6:00 AM, 6:00 PM', 
      language: 'Sinhala',
      description: 'Weekend Masses including vigil Mass'
    },
    { 
      day: 'First Friday', 
      time: '6:00 AM, 6:00 PM', 
      language: 'Special Devotion',
      description: 'Special devotion to the Sacred Heart of Jesus'
    },
  ];

  const specialEvents = [
    {
      title: 'Feast of the Assumption',
      date: 'August 15th',
      description: 'Annual church feast celebrating Our Lady of the Assumption'
    },
    {
      title: 'Christmas Masses',
      date: 'December 24th - 25th',
      description: 'Special Christmas Eve and Christmas Day Masses'
    },
    {
      title: 'Easter Services',
      date: 'Holy Week',
      description: 'Holy Thursday, Good Friday, and Easter Sunday services'
    }
  ];

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
              Mass Schedules
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join us for Holy Mass and spiritual nourishment throughout the week
            </p>
          </motion.div>
        </div>
      </section>

      {/* Regular Mass Schedules */}
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
              Weekly Mass Schedule
            </h2>
            <p className="text-lg text-gray-600">
              Regular Mass times and languages for each day of the week
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {massSchedules.map((schedule, index) => (
              <motion.div
                key={schedule.day}
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
                  <p className="text-blue-600 font-medium mb-2">{schedule.time}</p>
                  <p className="text-sm text-gray-600 mb-3">{schedule.language}</p>
                  <p className="text-xs text-gray-500">{schedule.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
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
              Special Events & Celebrations
            </h2>
            <p className="text-lg text-gray-600">
              Important liturgical celebrations and special Masses throughout the year
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                </div>
                <p className="text-blue-600 font-medium mb-3">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
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
              Important Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">For Visitors</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• All are welcome to attend Mass</li>
                  <li>• Modest dress is appreciated</li>
                  <li>• Please arrive 10-15 minutes early</li>
                  <li>• Children are welcome at all Masses</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Mass Duration</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li>• Sunday Mass: Approximately 1 hour</li>
                  <li>• Weekday Mass: Approximately 30 minutes</li>
                  <li>• Special celebrations may be longer</li>
                  <li>• Confession available before Mass</li>
                </ul>
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
