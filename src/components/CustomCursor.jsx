import { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Two-part custom cursor: a small dot that tracks instantly, and a
 * larger ring that trails with easing. Expands over any element
 * carrying data-cursor="hover".
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    const dot = dotRef.current
    const ring = ringRef.current
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...pos }

    const onMove = (e) => {
      pos.x = e.clientX
      pos.y = e.clientY
      gsap.set(dot, { x: pos.x, y: pos.y })
    }
    window.addEventListener('mousemove', onMove)

    gsap.ticker.add(() => {
      ringPos.x += (pos.x - ringPos.x) * 0.18
      ringPos.y += (pos.y - ringPos.y) * 0.18
      gsap.set(ring, { x: ringPos.x, y: ringPos.y })
    })

    const hoverEls = () => document.querySelectorAll('[data-cursor="hover"]')
    const addHover = () => ring.classList.add('is-hovering')
    const removeHover = () => ring.classList.remove('is-hovering')

    const attach = () => {
      hoverEls().forEach((el) => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }
    attach()

    // Re-attach periodically since content mounts async (sections reveal on scroll)
    const interval = setInterval(attach, 1500)

    return () => {
      window.removeEventListener('mousemove', onMove)
      clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
