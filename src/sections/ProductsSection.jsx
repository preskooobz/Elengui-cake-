import { products } from '../content/landingContent'

export default function ProductsSection() {
  return (
    <section id="produits" className="bg-[rgba(251,239,118,0.10)] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-black md:text-3xl">Nos produits</h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="space-y-2 p-5 text-left">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base font-medium text-black">{product.title}</h3>
                </div>
                <p className="text-sm leading-6 text-black/60">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
