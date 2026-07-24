import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { TESTIMONIALS } from '../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (dir) => {
    setDirection(dir)
    setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  const t = TESTIMONIALS[index]

  return (
    <section className="relative py-32 md:py-40 bg-black">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Testimonials" title="Kind words from clients." align="center" />

        <div className="mt-16 relative">
          <div className="glass-strong rounded-3xl p-10 md:p-14 min-h-[280px] flex items-center overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.name}
                custom={direction}
                initial={{ opacity: 0, x: 60 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 * direction }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full text-center"
              >
                <p className="font-display text-xl md:text-3xl leading-snug text-white">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-8 font-secondary text-sm text-mist-300">{t.name}</p>
                <p className="font-secondary text-xs uppercase tracking-[0.2em] text-mist-500 mt-1">
                  {t.role}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              data-cursor="hover"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-white/20 text-white hover:border-white/60 transition-colors"
            >
              &#8592;
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    i === index ? 'bg-white' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
            <button
              data-cursor="hover"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-white/20 text-white hover:border-white/60 transition-colors"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
