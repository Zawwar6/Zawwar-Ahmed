import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { EXPERIENCE } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-40 bg-black overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Experience"
          title="Where the work happened."
          align="center"
        />

        <div className="mt-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {EXPERIENCE.map((item, i) => {
              const fromLeft = i % 2 === 0
              return (
                <div
                  key={item.id}
                  className="md:grid md:grid-cols-2 md:gap-12 relative md:py-10"
                >
                  <span className="hidden md:block absolute left-1/2 top-12 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-black" />

                  <motion.div
                    initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className={`${fromLeft ? 'md:col-start-1 md:text-right md:pr-4' : 'md:col-start-2 md:pl-4'} glass rounded-2xl p-6 md:p-7`}
                  >
                    <p className="font-secondary text-xs uppercase tracking-[0.25em] text-mist-500">
                      {item.period}
                    </p>
                    <h3 className="font-display text-xl md:text-2xl text-white mt-2">
                      {item.role}
                    </h3>
                    <p className="text-mist-400 text-sm mt-1">{item.company}</p>
                    <p className="text-mist-400 text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                    <ul
                      className={`mt-4 space-y-1.5 ${fromLeft ? 'md:items-end md:flex md:flex-col' : ''}`}
                    >
                      {item.points.map((p) => (
                        <li key={p} className="text-xs text-mist-500 flex gap-2">
                          {!fromLeft && <span className="text-white/40">&mdash;</span>}
                          <span>{p}</span>
                          {fromLeft && <span className="text-white/40">&mdash;</span>}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
