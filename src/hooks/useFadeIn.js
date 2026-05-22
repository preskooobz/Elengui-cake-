import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function useFadeIn(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      gsap.set(element, { clearProps: 'all' })
      return undefined
    }

    const animation = gsap.fromTo(
      element,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay,
      },
    )

    return () => animation.kill()
  }, [delay])

  return ref
}