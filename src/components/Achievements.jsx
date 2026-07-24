import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const ACHIEVEMENTS = [
  { label: 'Projects Shipped', value: 10, suffix: '+' },
  { label: 'Clients Served', value: 10, suffix: '+' },
  { label: 'Git Commits', value: 6200, suffix: '+' },
  { label: 'Technologies Used', value: 22, suffix: '' },
  { label: 'Cups of Coffee', value: 1840, suffix: '+' },
  { label: 'Years of Craft', value: 2, suffix: '' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: 1.6, bounce: 0 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  useEffect(() => {
    const unsub = spring.on('change', (v) => setDisplay(Math.floor(v)))
    return () => unsub()
  }, [spring])

  return (
    <span ref={ref} className="font-display text-6xl md:text-7xl text-black">
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

/**
 * A deliberate inversion: this single band flips to a white background
 * so the achievement numbers read like a stamp of proof, not another
 * dark panel.
 */
export default function Achievements() {
  return (
    <section className="relative py-28 md:py-36 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
          {ACHIEVEMENTS.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <Counter value={item.value} suffix={item.suffix} />
              <p className="mt-3 font-secondary text-xs md:text-sm uppercase tracking-[0.2em] text-black/50">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
