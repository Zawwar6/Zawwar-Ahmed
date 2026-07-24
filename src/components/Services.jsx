import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { SERVICES } from '../data/services'

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Services"
          title="What I can take off your plate."
          description="From a single landing page to a full product build."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              data-cursor="hover"
              className="group bg-black p-7 md:p-9 hover:bg-white/[0.03] transition-colors duration-500"
            >
              <span className="font-secondary text-xs text-mist-600">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl md:text-2xl text-white mt-4 group-hover:translate-x-1 transition-transform duration-500">
                {service.title}
              </h3>
              <p className="text-mist-400 text-sm mt-3 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
