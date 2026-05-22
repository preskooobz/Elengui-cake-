import { useEffect, useState } from 'react'
import { Progress } from '../components/animate-ui/components/radix/progress'
import { IconCakeSlice, IconMenu, IconX } from '../components/icons/Icons'
import { navItems } from '../content/landingContent'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Header() {
  const headerRef = useFadeIn(0.05)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeHash, setActiveHash] = useState('#accueil')

  useEffect(() => {
    const updateHash = () => {
      setActiveHash(window.location.hash || '#accueil')
    }

    updateHash()
    window.addEventListener('hashchange', updateHash)

    return () => window.removeEventListener('hashchange', updateHash)
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0

      setScrollProgress(Math.min(100, Math.max(0, nextProgress)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#accueil" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-white shadow-sm">
            <IconCakeSlice className="h-5 w-5" />
          </span>
          <span className="text-sm font-semibold tracking-[0.25em] uppercase text-black/90">Elengui Cake</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`group rounded-full px-4 py-2 text-sm transition ${
                activeHash === item.href
                  ? ' text-black'
                  : 'text-black/70 hover:text-black'
              }`}
            >
              <span className="relative inline-flex items-center pb-1">
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 w-full origin-left rounded-full bg-black transition-transform duration-300 ${
                    activeHash === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </span>
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/80 md:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-black/5 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  activeHash === item.href
                    ? 'text-black'
                    : 'text-black/70 hover:text-black'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      <Progress value={scrollProgress} className="h-1 rounded-none bg-black/5" />
    </header>
  )
}
