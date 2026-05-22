import { useEffect, useState } from 'react'
import { IconArrowRight, IconSparkles } from '../components/icons/Icons'
import { heroSlides, whatsappUrl } from '../content/landingContent'
import TextType from './TextType'
import { useFadeIn } from '../hooks/useFadeIn'

export default function HeroSection() {
  const heroRef = useFadeIn(0.05)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section ref={heroRef} id="accueil" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(250,92,92,0.20),transparent_28%),radial-gradient(circle_at_top_right,rgba(251,239,118,0.22),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,247,241,0.92)_42%,rgba(255,255,255,1)_100%)]" />
      <div className="absolute left-1/2 top-10 -z-10 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(253,138,107,0.18),transparent_68%)] blur-3xl" />
      <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(254,194,136,0.18),transparent_68%)] blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:py-24">
        <div className="max-w-xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium tracking-wide text-black/70">
            <IconSparkles className="h-4 w-4" />
            Votre satisfaction notre joie
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl">
            <TextType
              text={['Elengui Cake']}
              texts={['Elengui Cake']}
              typingSpeed={105}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={120}
              variableSpeedEnabled={false}
              variableSpeedMin={100}
              variableSpeedMax={120}
              cursorBlinkDuration={1}
              className="inline-block"
            />
          </h1>

          <p className="mt-4 text-base leading-8 text-black/65 sm:text-lg">
            Votre pâtisserie à portée de main.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full brand-gradient px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:brightness-105"
            >
              Commander maintenant
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative isolate overflow-hidden rounded-[2rem] shadow-[0_18px_60px_rgba(36,23,21,0.12)] ring-1 ring-black/5">
          <div className="relative h-112 sm:h-128 md:h-152">
            {heroSlides.map((src, index) => (
              <img
                key={src}
                src={src}
                alt="Ambiance Elengui Cake"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                  index === activeSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                loading="lazy"
              />
            ))}

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,23,21,0.10)_0%,rgba(36,23,21,0.12)_100%),linear-gradient(135deg,rgba(250,92,92,0.20),rgba(253,138,107,0.10),rgba(254,194,136,0.08),rgba(251,239,118,0.16))]" />

            <div className="absolute inset-0 flex items-end justify-between p-4 sm:p-6">
              <button
                type="button"
                onClick={() => setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-black shadow-sm backdrop-blur-sm transition hover:scale-105"
                aria-label="Image précédente"
              >
                ‹
              </button>

              <div className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 backdrop-blur-sm">
                {heroSlides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-black' : 'w-2 bg-black/20'}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveSlide((current) => (current + 1) % heroSlides.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-black shadow-sm backdrop-blur-sm transition hover:scale-105"
                aria-label="Image suivante"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
