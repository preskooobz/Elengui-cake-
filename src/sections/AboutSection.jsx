import aboutImage from '../assets/aboutsection.jpg'

export default function AboutSection() {
  return (
    <section id="about" className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2rem] brand-gradient-soft p-6 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-10">
        <div className="flex justify-center md:justify-start">
          <div className="h-44 w-44 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/5 md:h-56 md:w-56">
            <img src={aboutImage} alt="Elengui Cake" className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold tracking-tight text-black md:text-3xl">A propos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/65 md:mx-0 md:text-base">
            Elengui Cake imagine des pâtisseries élégantes, généreuses et gourmandes, avec une attention particulière portée aux détails.
            Chaque création est pensée pour transformer un moment simple en vraie signature visuelle et gustative.
          </p>

          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium !text-white transition hover:bg-black/90 hover:-translate-y-0.5"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
