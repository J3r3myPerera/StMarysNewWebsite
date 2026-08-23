'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const STORAGE_KEY = 'feastGreetingSeen';
const DURATION_MS = 5000;

// Fixed sparkle positions so the server and client render the same markup.
const SPARKLES = [
  { left: '12%', top: '22%', size: 14, delay: 0.6 },
  { left: '84%', top: '18%', size: 18, delay: 1.1 },
  { left: '22%', top: '74%', size: 12, delay: 0.9 },
  { left: '72%', top: '78%', size: 16, delay: 1.4 },
  { left: '48%', top: '12%', size: 12, delay: 1.7 },
  { left: '92%', top: '52%', size: 13, delay: 0.4 },
  { left: '6%', top: '48%', size: 15, delay: 1.9 },
];

export default function FeastGreeting() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      // Storage unavailable (private mode) - just show the greeting.
    }
    if (seen) return;

    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore - the greeting still auto-dismisses below.
    }

    setVisible(true);
    const timer = setTimeout(() => setVisible(false), DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          onClick={() => setVisible(false)}
          role="dialog"
          aria-label="Feast day greeting"
          className="fixed inset-0 z-[100] flex items-center justify-center cursor-pointer bg-blue-950/95 backdrop-blur-md"
        >
          {/* Soft golden glow breathing behind the message */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute h-[34rem] w-[34rem] rounded-full bg-amber-400/25 blur-3xl"
          />

          {/* Drifting sparkles */}
          {SPARKLES.map((s, i) => (
            <motion.div
              key={i}
              aria-hidden
              className="absolute text-amber-300/70"
              style={{ left: s.left, top: s.top }}
              initial={{ opacity: 0, y: 10, scale: 0.6 }}
              animate={{ opacity: [0, 0.9, 0], y: [10, -14, -30], scale: [0.6, 1, 0.7] }}
              transition={{
                duration: 3.2,
                delay: s.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles size={s.size} />
            </motion.div>
          ))}

          <div className="relative px-6 text-center">
            {/* Thin gold rule that draws itself open */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mb-8 h-px w-40 origin-center bg-gradient-to-r from-transparent via-amber-300 to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-amber-300/90 sm:text-sm"
            >
              Our Lady of the Assumption Parish
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.45, ease: 'easeOut' }}
              className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-4xl font-bold leading-tight text-transparent drop-shadow-sm sm:text-6xl md:text-7xl"
            >
              Wish you a Blessed Feast!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-blue-100/90 sm:text-base"
            >
              May the grace and peace of Our Lady fill your home this feast season.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              className="mx-auto mt-8 h-px w-40 origin-center bg-gradient-to-r from-transparent via-amber-300 to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="mt-10 text-xs tracking-wide text-blue-200"
            >
              Tap anywhere to continue
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
