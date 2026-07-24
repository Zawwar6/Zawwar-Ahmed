import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { TECH_STACK } from '../data/techstack'

export default function TechStack() {
  return (
    <section id="stack" className="relative py-32 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Tech Stack"
          title="The tools I reach for, in no particular hurry."
          description="A working set built up over years of shipping &mdash; kept lean on purpose."
        />

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {TECH_STACK.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 10) * 0.04 }}
              whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.4)' }}
              data-cursor="hover"
              className="group aspect-square rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-2 px-3 text-center transition-colors"
            >
              <span className="font-secondary text-[10px] uppercase tracking-[0.2em] text-mist-600 group-hover:text-mist-400 transition-colors">
                {tech.group}
              </span>
              <span className="font-display text-sm md:text-base text-mist-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
