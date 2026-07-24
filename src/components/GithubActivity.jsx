import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

// Deterministic pseudo-contribution intensities (0-4) for a 52-week x 7-day grid.
function generateGrid() {
  const weeks = 52
  const days = 7
  const grid = []
  let seed = 7
  for (let w = 0; w < weeks; w++) {
    const col = []
    for (let d = 0; d < days; d++) {
      seed = (seed * 9301 + 49297) % 233280
      const rand = seed / 233280
      col.push(Math.floor(rand * 5))
    }
    grid.push(col)
  }
  return grid
}

const GRID = generateGrid()
const LEVEL_OPACITY = [0.06, 0.25, 0.45, 0.7, 1]

const REPOS = [
  { name: 'offersinn-marketplace', desc: 'Full-stack deals marketplace, MERN.', lang: 'JavaScript' },
  { name: 'portfolio-v4', desc: 'This site \u2014 React, Tailwind, GSAP.', lang: 'JavaScript' },
  { name: 'masjidconnect-app', desc: 'Flutter app for prayer times & community.', lang: 'Dart' },
  { name: 'ui-motion-kit', desc: 'Reusable Framer Motion + GSAP primitives.', lang: 'TypeScript' },
]

export default function GithubActivity() {
  return (
    <section className="relative py-32 md:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="GitHub" title="Where the commits actually happen." />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 glass rounded-3xl p-6 md:p-8 overflow-x-auto"
        >
          <div className="flex gap-[3px] w-fit">
            {GRID.map((col, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {col.map((level, di) => (
                  <span
                    key={di}
                    className="w-[10px] h-[10px] rounded-[2px] bg-white"
                    style={{ opacity: LEVEL_OPACITY[level] }}
                  />
                ))}
              </div>
            ))}
          </div>
          <p className="font-secondary text-xs text-mist-500 mt-4">
            ~1,900 contributions in the last year
          </p>
        </motion.div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REPOS.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              data-cursor="hover"
              className="rounded-2xl border border-white/10 p-6 hover:border-white/30 transition-colors"
            >
              <h3 className="font-secondary text-sm text-white">{repo.name}</h3>
              <p className="text-mist-400 text-xs mt-2 leading-relaxed">{repo.desc}</p>
              <span className="inline-flex items-center gap-1.5 mt-4 text-[11px] text-mist-500">
                <span className="w-2 h-2 rounded-full bg-white/40" />
                {repo.lang}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
