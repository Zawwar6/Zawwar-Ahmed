/**
 * Infinite horizontal marquee. Duplicates children once so the CSS
 * keyframe animation (translateX -50%) can loop seamlessly.
 */
export default function Marquee({ items, reverse = false, className = '' }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap select-none ${className}`}>
      <div
        className={`inline-flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 font-display text-5xl md:text-7xl font-medium tracking-tightest text-transparent"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
