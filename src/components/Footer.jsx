import Marquee from './Marquee'
import { SOCIALS } from '../constants/links'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-10">
      <Marquee
        items={['Let\u2019s build something', 'Available for work', 'Say hello']}
        className="mb-16 opacity-70"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <h2 className="font-display text-4xl md:text-6xl text-white tracking-tightest">
              Zawwar Ahmed
            </h2>
            <p className="font-secondary text-mist-500 mt-3 max-w-sm text-sm">
              Software engineer building interfaces that feel as good as they
              look.
            </p>
          </div>

          <button
            onClick={scrollTop}
            data-cursor="hover"
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white/60 transition-colors shrink-0"
            aria-label="Back to top"
          >
            &#8593;
          </button>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <p className="font-secondary text-xs text-mist-600">
            &copy; {new Date().getFullYear()} Zawwar Ahmed. All rights reserved.
          </p>
          <div className="flex gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                data-cursor="hover"
                className="font-secondary text-xs uppercase tracking-[0.2em] text-mist-500 hover:text-white transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
