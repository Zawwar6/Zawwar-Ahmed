import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { CERTIFICATES } from '../data/testimonials'

export default function Certificates() {
  return (
    <section className="relative py-32 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Certificates" title="Formal proof of informal obsession." />
      </div>

      <div className="mt-14 pl-6 md:pl-10">
        <div className="flex gap-5 overflow-x-auto pb-6 pr-6 md:pr-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              data-cursor="hover"
              className="snap-start shrink-0 w-72 md:w-80 rounded-2xl border border-white/10 p-7 hover:border-white/30 transition-colors"
            >
              <p className="font-secondary text-xs uppercase tracking-[0.2em] text-mist-500">
                {cert.year}
              </p>
              <h3 className="font-display text-lg md:text-xl text-white mt-3 leading-snug">
                {cert.title}
              </h3>
              <p className="text-mist-400 text-sm mt-2">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
