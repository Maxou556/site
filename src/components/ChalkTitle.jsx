import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ChalkTitle({ text = 'La carte du jour' }) {
  const wrapRef = useRef(null)

  useEffect(() => {
    const root = wrapRef.current
    if (!root) return

    const paths = root.querySelectorAll('.chalk-flourish path')
    const title = root.querySelector('.chalk-title-live')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      gsap.set(title, { opacity: 1, y: 0 })
      gsap.set(paths, { strokeDasharray: 'none', strokeDashoffset: 0 })
      return undefined
    }

    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        const length = path.getTotalLength()
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        })
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          once: true,
        },
      })

      tl.to(title, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
      }).to(
        paths,
        {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: 'power2.out',
          stagger: 0.15,
        },
        '-=0.35',
      )
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div className="chalk-title-wrap" ref={wrapRef}>
      <h2 className="chalk-title-live">{text}</h2>
      <svg
        className="chalk-flourish"
        viewBox="0 0 420 36"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M28 10 Q110 2 210 12 Q310 22 392 8" />
        <path d="M40 26 Q140 34 220 24 Q320 12 380 28" />
        <path d="M18 18 Q24 8 34 16" />
        <path d="M386 16 Q396 6 404 18" />
      </svg>
    </div>
  )
}
