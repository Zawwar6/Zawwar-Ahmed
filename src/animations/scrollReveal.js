import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Fades and slides a batch of elements in as they enter the viewport.
 * @param {string} selector - CSS selector scoped inside `scope`.
 * @param {Element|Document} scope - context root for gsap.context.
 * @param {object} opts - override defaults (y, stagger, start).
 */
export function revealOnScroll(selector, scope, opts = {}) {
  const { y = 40, stagger = 0.12, start = 'top 85%' } = opts

  return gsap.context(() => {
    const targets = gsap.utils.toArray(selector)
    targets.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          delay: (i % 6) * (stagger / 2),
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, scope)
}

export { gsap, ScrollTrigger }
