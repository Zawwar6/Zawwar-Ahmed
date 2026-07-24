import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../constants/links'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div
          className={`mx-4 md:mx-8 flex items-center justify-between px-5 md:px-7 py-3 rounded-full transition-all duration-500 ${
            scrolled ? 'glass' : ''
          }`}
        >
          <a
            href="#top"
            data-cursor="hover"
            className="font-display text-lg font-medium tracking-tight text-white"
          >
            ZA<span className="text-mist-500">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="hover"
                className={`font-secondary text-sm transition-colors duration-300 ${
                  active === link.href ? 'text-white' : 'text-mist-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            data-cursor="hover"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black font-secondary text-sm font-medium hover:bg-mist-200 transition-colors"
          >
            Hire Me
          </a>

          <button
            aria-label="Toggle menu"
            data-cursor="hover"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 w-8"
          >
            <span
              className={`h-px bg-white transition-transform duration-300 ${
                menuOpen ? 'translate-y-[3px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-px bg-white transition-transform duration-300 ${
                menuOpen ? '-translate-y-[3px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black md:hidden flex flex-col justify-center px-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="font-display text-4xl py-3 border-b border-white/10 text-white"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * NAV_LINKS.length, duration: 0.5 }}
              className="mt-8 inline-flex w-fit items-center px-6 py-3 rounded-full bg-white text-black font-secondary text-sm font-medium"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
