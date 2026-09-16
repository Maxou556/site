import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function useScrollStory() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax — "on vous emmène en terrasse"
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

      // Soft section reveals
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

      // Ardoise dishes cascade
      gsap.from('.ardoise__item', {
        opacity: 0,
        x: -18,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ardoise__list',
          start: 'top 80%',
          once: true,
        },
      })

      // Gallery stagger
      gsap.from('.ambiance__item', {
        opacity: 0,
        y: 40,
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
