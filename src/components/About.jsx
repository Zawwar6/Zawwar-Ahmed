import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import SectionHeading from './SectionHeading'

const STATS = [
  { label: 'Projects Completed', value: 10 },
  { label: 'Happy Clients', value: 10 },
  { label: 'Years Experience', value: 2 },
  { label: 'Technologies', value: 22 },
]

function Counter({ value }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 1.4, bounce: 0 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(Math.floor(v)))
    return () => unsub()
  }, [spring])

  return (
    <span ref={ref} className="font-display text-5xl md:text-6xl text-white">
      {display}+
    </span>
  )
}

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="About"
          title="Two years of turning careful thinking into shipped interfaces."
        />

        <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-mist-300 text-base md:text-lg leading-relaxed font-body"
          >
            <p>
              I started out building static pages during my first internship,
              curious about how a design in a Figma file becomes something a
              person can actually click. That curiosity turned into a career
              spent mostly at the intersection of engineering and craft.
            </p>
            <p>
              Today I work as a frontend-leaning full-stack developer, moving
              comfortably between MERN applications, WordPress builds, and the
              kind of motion-heavy interfaces that make a product feel
              considered. I care about the same things whether the client is a
              two-person startup or an established brand: clarity, speed, and
              a good eye for detail.
            </p>
            <p>
              Outside of client work, I spend time refining my own process
              &mdash; component libraries, animation utilities, and small
              tools that make the next project faster to build well.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <h3 className="font-secondary text-sm uppercase tracking-[0.3em] text-mist-400 mb-6">
              Career Journey
            </h3>
            <ul className="space-y-5">
              {[
                ['2024', 'First internship, learning the fundamentals'],
                ['2024', 'WordPress & frontend developer at an agency'],
                ['2025', 'MERN stack developer, first full-stack products'],
                ['2025', 'Went independent, took on international clients'],
                ['Now', 'Senior frontend engineer & creative developer'],
              ].map(([year, text]) => (
                <li key={year} className="flex gap-4 items-baseline border-b border-white/8 pb-4">
                  <span className="font-display text-lg text-white w-14 shrink-0">{year}</span>
                  <span className="text-mist-400 text-sm md:text-base">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <Counter value={stat.value} />
              <p className="mt-2 font-secondary text-xs md:text-sm uppercase tracking-[0.2em] text-mist-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
