import categoryImageOne from '../assets/produits_carrouselle01.jpg'
import categoryImageTwo from '../assets/produit_carousselle02.jpg'
import categoryImageThree from '../assets/produit_carousselle03.jpg'

const categories = [
  {
    title: 'Viennoiserie',
    image: categoryImageOne,
  },
  {
    title: "Gateaux d'anniversaire",
    image: categoryImageTwo,
  },
  {
    title: 'Douceurs',
    image: categoryImageThree,
  },
]

export default function CategoriesSection() {
  return (
    <section className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-black md:text-3xl">
          Nos catégories
        </h2>

        <div className="grid gap-5 sm:grid-cols-3 md:gap-6">
          {categories.map((category, index) => (
            <article
              key={category.title}
              className={`group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg ${index === 1 ? 'sm:-mt-2' : ''}`}
            >
              <div className="relative aspect-[4/6] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(250,92,92,0.28)] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left text-lg font-medium text-white drop-shadow-sm">
                  {category.title}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}