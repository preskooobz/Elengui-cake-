import { useFadeIn } from '../hooks/useFadeIn'

export default function FooterSection() {
  const footerRef = useFadeIn(0.05)

  return (
    <footer ref={footerRef} className="relative bg-white px-4 pb-8 pt-2 md:px-8">
      <div className="mx-auto max-w-6xl border-t border-black/5 pt-6 text-center">
        <p className="text-xs text-black/70">Elengui Cake tout droit réservé</p>
        <p className="mt-1 text-[11px] text-black/45">Made by versatile studio design.</p>
      </div>
    </footer>
  )
}
