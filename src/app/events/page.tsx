'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Images, ChevronDown, ChevronUp, X, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    folder: 'goodFriday_2026',
    title: 'Good Friday 2026',
    date: 'Friday, 3 April 2026',
    cover: 'DSC_2136.JPG',
    images: [
      'DSC_2119.JPG','DSC_2120.JPG','DSC_2123.JPG','DSC_2124.JPG','DSC_2125.JPG',
      'DSC_2128.JPG','DSC_2129.JPG','DSC_2131.JPG','DSC_2133.JPG','DSC_2134.JPG',
      'DSC_2135.JPG','DSC_2136.JPG','DSC_2137.JPG','DSC_2138.JPG','DSC_2139.JPG',
      'DSC_2140.JPG','DSC_2143.JPG','DSC_2144.JPG','DSC_2145.JPG','DSC_2146.JPG',
      'DSC_2152.JPG','DSC_2153.JPG','DSC_2156.JPG','DSC_2157.JPG','DSC_2159.JPG',
      'DSC_2160.JPG','DSC_2161.JPG','DSC_2162.JPG','DSC_2166.JPG','DSC_2167.JPG',
      'DSC_2168.JPG','DSC_2169.JPG','DSC_2172.JPG','DSC_2173.JPG','DSC_2174.JPG',
    ],
  },
  {
    folder: 'holySaturday_2026',
    title: 'Holy Saturday 2026',
    date: 'Saturday, 4 April 2026',
    cover: 'DSC_2587.JPG',
    images: [
      'DSC_2587.JPG','DSC_2588.JPG','DSC_2589.JPG','DSC_2591.JPG','DSC_2592.JPG',
      'DSC_2595.JPG','DSC_2599.JPG','DSC_2600.JPG','DSC_2601.JPG','DSC_2602.JPG',
      'DSC_2603.JPG','DSC_2605.JPG','DSC_2606.JPG','DSC_2607.JPG','DSC_2608.JPG',
      'DSC_2609.JPG','DSC_2611.JPG','DSC_2612.JPG','DSC_2615.JPG','DSC_2616.JPG',
      'DSC_2617.JPG','DSC_2618.JPG','DSC_2619.JPG','DSC_2620.JPG','DSC_2621.JPG',
      'DSC_2622.JPG','DSC_2623.JPG','DSC_2624.JPG','DSC_2625.JPG','DSC_2626.JPG',
      'DSC_2627.JPG','DSC_2628.JPG','DSC_2629.JPG','DSC_2631.JPG','DSC_2633.JPG',
      'DSC_2634.JPG','DSC_2635.JPG','DSC_2636.JPG','DSC_2637.JPG','DSC_2638.JPG',
      'DSC_2639.JPG','DSC_2640.JPG','DSC_2641.JPG','DSC_2642.JPG','DSC_2643.JPG',
      'DSC_2644.JPG','DSC_2645.JPG','DSC_2646.JPG','DSC_2647.JPG','DSC_2648.JPG',
      'DSC_2649.JPG','DSC_2650.JPG','DSC_2652.JPG','DSC_2654.JPG','DSC_2655.JPG',
      'DSC_2657.JPG','DSC_2658.JPG','DSC_2659.JPG','DSC_2661.JPG','DSC_2662.JPG',
      'DSC_2663.JPG','DSC_2664.JPG','DSC_2665.JPG','DSC_2666.JPG','DSC_2667.JPG',
      'DSC_2668.JPG','DSC_2669.JPG','DSC_2670.JPG','DSC_2671.JPG','DSC_2672.JPG',
      'DSC_2673.JPG','DSC_2674.JPG','DSC_2675.JPG','DSC_2676.JPG','DSC_2679.JPG',
      'DSC_2682.JPG','DSC_2684.JPG','DSC_2688.JPG','DSC_2689.JPG','DSC_2691.JPG',
      'DSC_2694.JPG','DSC_2697.JPG',
    ],
  },
];

type LightboxState = { eventIdx: number; imgIdx: number } | null;

export default function EventsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const closeLightbox = () => setLightbox(null);

  const lightboxPrev = () => {
    if (!lightbox) return;
    const total = events[lightbox.eventIdx].images.length;
    setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx - 1 + total) % total });
  };

  const lightboxNext = () => {
    if (!lightbox) return;
    const total = events[lightbox.eventIdx].images.length;
    setLightbox({ ...lightbox, imgIdx: (lightbox.imgIdx + 1) % total });
  };

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Events Gallery</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Photos from recent parish functions and liturgical celebrations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {events.map((event, eventIdx) => (
              <motion.div
                key={event.folder}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: eventIdx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <div className="grid md:grid-cols-[280px_1fr] gap-0">
                  <div className="relative h-56 md:h-auto overflow-hidden">
                    <img
                      src={`/events/${event.folder}/${event.cover}`}
                      alt={`${event.title} cover`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 md:bg-gradient-to-b md:from-transparent md:to-black/30" />
                  </div>

                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-amber-600 text-sm font-semibold tracking-widest uppercase mb-2">
                        {event.date}
                      </p>
                      <h2 className="text-3xl font-bold text-blue-900 mb-3">{event.title}</h2>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Images className="w-4 h-4" />
                        <span>{event.images.length} photos</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpanded(expanded === eventIdx ? null : eventIdx)}
                      className="mt-6 self-start flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                    >
                      {expanded === eventIdx ? (
                        <>Hide Photos <ChevronUp className="w-4 h-4" /></>
                      ) : (
                        <>View All Photos <ChevronDown className="w-4 h-4" /></>
                      )}
                    </button>
                  </div>
                </div>

                <AnimatePresence>
                  {expanded === eventIdx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-gray-100"
                    >
                      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
                        {event.images.map((img, imgIdx) => (
                          <button
                            key={img}
                            onClick={() => setLightbox({ eventIdx, imgIdx })}
                            className="relative aspect-square overflow-hidden rounded-xl group focus:outline-none focus:ring-2 focus:ring-blue-600"
                          >
                            <img
                              src={`/events/${event.folder}/${img}`}
                              alt={img}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
              {lightbox.imgIdx + 1} / {events[lightbox.eventIdx].images.length}
            </div>

            <button
              className="absolute left-3 md:left-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); lightboxPrev(); }}
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.img
              key={`${lightbox.eventIdx}-${lightbox.imgIdx}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              src={`/events/${events[lightbox.eventIdx].folder}/${events[lightbox.eventIdx].images[lightbox.imgIdx]}`}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-3 md:right-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={(e) => { e.stopPropagation(); lightboxNext(); }}
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm">
              {events[lightbox.eventIdx].title}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
