import { IconArrowRight } from '../components/icons/Icons'
import { whatsappUrl } from '../content/landingContent'

export default function CallToActionSection() {
  return (
    <section id="contact" className="px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-[2rem] brand-gradient px-6 py-12 text-center text-white shadow-sm md:px-10 md:py-16">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60">Commander facilement</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-4xl">
            Une pâtisserie pensée pour vos plus beaux moments.
          </h2>

          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium !text-black transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              Commander maintenant
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
