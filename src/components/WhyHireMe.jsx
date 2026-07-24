import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { WHY_HIRE_ME } from '../data/services'

export default function WhyHireMe() {
  return (
    <section className="relative py-32 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Why Hire Me" title="Reasons teams keep coming back." />

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {WHY_HIRE_ME.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              whileHover={{ y: -4 }}
              data-cursor="hover"
              className="rounded-2xl border border-white/10 p-6 hover:border-white/25 transition-colors duration-300"
            >
              <h3 className="font-display text-lg text-white">{item.title}</h3>
              <p className="text-mist-400 text-sm mt-2 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
