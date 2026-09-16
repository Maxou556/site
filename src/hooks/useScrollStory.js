import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function useScrollStory() {
  useEffect(() => {
    if (prefersReducedMotion()) {
      gsap.set('.reveal-up, .reveal-fade, .ardoise__item, .ambiance__item, .chalk-title-live', {
        clearProps: 'all',
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      })
      return undefined
    }

    const ctx = gsap.context(() => {
      // One-shot reveals only — no scrub/parallax (évite le scroll qui « continue »)
      gsap.utils.toArray('.reveal-up').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.utils.toArray('.reveal-fade').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true,
            toggleActions: 'play none none none',
          },
        })
      })

      gsap.set('.ardoise__item', { x: -14 })

      gsap.to('.ardoise__item', {
        opacity: 1,
        x: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ardoise__list',
          start: 'top 85%',
          once: true,
          toggleActions: 'play none none none',
        },
      })

      gsap.set('.ambiance__item', { y: 28 })

      gsap.to('.ambiance__item', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ambiance__grid',
          start: 'top 85%',
          once: true,
          toggleActions: 'play none none none',
        },
      })
    })

    return () => ctx.revert()
  }, [])
}
