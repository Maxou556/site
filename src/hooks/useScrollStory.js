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
      gsap.to('.hero__media img', {
        yPercent: 18,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero__content', {
        yPercent: 12,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.utils.toArray('.reveal-up').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        })
      })

      gsap.utils.toArray('.reveal-fade').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.97 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
          },
        )
      })

      gsap.set('.ardoise__item', { x: -18 })

      gsap.to('.ardoise__item', {
        opacity: 1,
        x: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ardoise__list',
          start: 'top 80%',
          once: true,
        },
      })

      gsap.set('.ambiance__item', { y: 40 })

      gsap.to('.ambiance__item', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ambiance__grid',
          start: 'top 82%',
          once: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])
}
