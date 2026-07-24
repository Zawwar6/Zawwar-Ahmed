import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'

const ROLES = [
  'MERN Stack Developer',
  'React Developer',
  'WordPress Developer',
  'Creative Frontend Engineer',
]

export default function Hero() {
  const spotlightRef = useRef(null)
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const el = spotlightRef.current
    const onMove = (e) => {
      if (!el) return
      el.style.setProperty('--x', `${e.clientX}px`)
      el.style.setProperty('--y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-black"
    >
      {/* Signature spotlight: a gallery-flashlight that follows the cursor across a black canvas */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          '--x': '50%',
          '--y': '40%',
          background:
            'radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,0.08), transparent 70%)',
        }}
      />

      {/* Ambient particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/25"
            style={{
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              left: `${(i * 41) % 100}%`,
              top: `${(i * 67) % 100}%`,
              animation: `float ${8 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.25; }
          50% { transform: translateY(-24px); opacity: 0.7; }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-32 pb-20 grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-secondary text-sm uppercase tracking-[0.35em] text-mist-400 mb-6"
          >
            Hi, I&rsquo;m
          </motion.p>

          <h1 className="font-display font-medium leading-[0.95] tracking-tightest">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white"
            >
              Zawwar Ahmed
            </motion.span>
          </h1>

          <div className="h-12 md:h-16 mt-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={ROLES[roleIndex]}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="font-secondary text-2xl md:text-3xl text-mist-300"
              >
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 max-w-lg text-mist-400 text-base md:text-lg leading-relaxed"
          >
            I design and build fast, considered web products &mdash; from
            first line of code to final pixel &mdash; for founders and teams
            who care about the details.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="https://github.com/Zawwar6">View Projects</MagneticButton>
            <MagneticButton href="https://drive.google.com/file/d/14CjsJ3B9RdRJCHMp4vqhlNPl0M5w_wjA/view?usp=drive_link" variant="outline">
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              Hire Me
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto md:mx-0 w-56 h-56 md:w-72 md:h-72"
        >
          <div
            className="absolute -inset-3 rounded-full opacity-70"
            style={{
              background:
                'conic-gradient(from 0deg, rgba(255,255,255,0.5), transparent 40%, rgba(255,255,255,0.5))',
              animation: 'spin 6s linear infinite',
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <div className="absolute inset-1 rounded-full bg-black" />
          <div
            className="relative w-full h-full rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #2a2a2a, #000 70%)',
              animation: 'floaty 5s ease-in-out infinite',
            }}
          >
            <span className="font-display text-6xl md:text-7xl text-white/90">ZA</span>
          </div>
          <style>{`
            @keyframes floaty {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-14px); }
            }
          `}</style>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        data-cursor="hover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-secondary text-xs uppercase tracking-[0.3em] text-mist-500">
          Scroll
        </span>
        <span className="w-px h-10 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.a>
    </section>
  )
}
