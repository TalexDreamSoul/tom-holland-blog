import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function initScrollMotion() {
  if (prefersReducedMotion())
    return () => {}

  const contexts: gsap.Context[] = []
  const root = document.querySelector('.site-shell')

  const context = gsap.context(() => {
    gsap.to('.scroll-progress', {
      ease: 'none',
      scaleX: 1,
      scrollTrigger: {
        end: 'bottom bottom',
        scrub: 0.35,
        start: 'top top',
      },
    })

    const hero = document.querySelectorAll<HTMLElement>('[data-motion="hero"]')
    const heroCard = document.querySelectorAll<HTMLElement>('[data-motion="hero-card"]')

    if (hero.length) {
      gsap.from(hero, {
        autoAlpha: 0,
        duration: 0.95,
        ease: 'power3.out',
        y: 34,
      })
    }

    if (heroCard.length) {
      gsap.from(heroCard, {
        autoAlpha: 0,
        delay: 0.18,
        duration: 1,
        ease: 'power3.out',
        rotateX: -5,
        transformOrigin: '50% 100%',
        y: 46,
      })
    }

    gsap.utils.toArray<HTMLElement>('[data-motion="section"]').forEach((section) => {
      const heading = section.querySelectorAll<HTMLElement>('[data-motion="section-heading"]')
      const cards = section.querySelectorAll<HTMLElement>('[data-motion="card"]')
      const stats = section.querySelectorAll<HTMLElement>('[data-motion="stat"]')

      const timeline = gsap.timeline({
        scrollTrigger: {
          end: 'bottom 45%',
          once: true,
          start: 'top 78%',
          trigger: section,
        },
      })

      if (heading.length) {
        timeline.from(heading, {
          autoAlpha: 0,
          duration: 0.7,
          ease: 'power3.out',
          y: 28,
        })
      }

      if (cards.length) {
        timeline.from(cards, {
          autoAlpha: 0,
          duration: 0.74,
          ease: 'power3.out',
          stagger: 0.1,
          y: 34,
        }, heading.length ? '-=0.28' : 0)
      }

      if (stats.length) {
        timeline.from(stats, {
          autoAlpha: 0,
          duration: 0.62,
          ease: 'power3.out',
          stagger: 0.08,
          y: 18,
        }, '-=0.36')
      }
    })
  }, root ?? document.body)

  contexts.push(context)
  ScrollTrigger.refresh()

  return () => {
    contexts.forEach(item => item.revert())
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
}
