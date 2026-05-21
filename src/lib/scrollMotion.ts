import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getSectionMotionElements(section: HTMLElement, selector: string) {
  return Array.from(section.querySelectorAll<HTMLElement>(selector))
    .filter(element => element.closest<HTMLElement>('[data-motion="section"]') === section)
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
      const heading = getSectionMotionElements(section, '[data-motion="section-heading"]')
      const cards = getSectionMotionElements(section, '[data-motion="card"]')
      const media = getSectionMotionElements(section, '[data-motion="media"]')
      const rows = getSectionMotionElements(section, '[data-motion="row"]')
      const text = getSectionMotionElements(section, '[data-motion="text"]')

      const timeline = gsap.timeline({
        scrollTrigger: {
          end: 'bottom 45%',
          once: true,
          start: 'top 78%',
          trigger: section,
        },
      })

      if (heading.length && !section.matches('[data-motion-skip-heading="true"]')) {
        timeline.from(heading, {
          autoAlpha: 0,
          duration: 0.72,
          ease: 'power3.out',
          y: 30,
        })
      }

      if (text.length) {
        timeline.from(text, {
          autoAlpha: 0,
          duration: 0.64,
          ease: 'power3.out',
          stagger: 0.08,
          y: 22,
        }, heading.length ? '-=0.3' : 0)
      }

      if (media.length) {
        timeline.from(media, {
          autoAlpha: 0,
          clipPath: 'inset(10% 0% 10% 0% round 8px)',
          duration: 0.9,
          ease: 'power3.out',
          scale: 0.96,
          y: 26,
        }, heading.length || text.length ? '-=0.22' : 0)
      }

      if (cards.length) {
        timeline.from(cards, {
          autoAlpha: 0,
          duration: 0.74,
          ease: 'power3.out',
          stagger: cards.length > 10 ? 0.035 : 0.1,
          y: 34,
        }, heading.length || text.length || media.length ? '-=0.24' : 0)
      }

      if (rows.length) {
        timeline.from(rows, {
          autoAlpha: 0,
          duration: 0.58,
          ease: 'power2.out',
          stagger: rows.length > 14 ? 0.025 : 0.055,
          x: -18,
        }, cards.length ? '-=0.22' : '-=0.12')
      }
    })

    gsap.utils.toArray<HTMLElement>('[data-motion="parallax"]').forEach((element) => {
      gsap.to(element, {
        ease: 'none',
        scrollTrigger: {
          end: 'bottom top',
          scrub: 0.8,
          start: 'top bottom',
          trigger: element,
        },
        yPercent: -10,
      })
    })

    gsap.utils.toArray<HTMLElement>('[data-motion="standalone"]').forEach((element) => {
      gsap.from(element, {
        autoAlpha: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          once: true,
          start: 'top 90%',
          trigger: element,
        },
        y: 24,
      })
    })
  }, root ?? document.body)

  contexts.push(context)
  ScrollTrigger.refresh()

  return () => {
    contexts.forEach(item => item.revert())
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }
}
