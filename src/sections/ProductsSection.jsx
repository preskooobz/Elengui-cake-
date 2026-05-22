import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'motion/react'
import { IconArrowRight } from '../components/icons/Icons'
import { products } from '../content/landingContent'
import { useFadeIn } from '../hooks/useFadeIn'

export default function ProductsSection() {
  const productsRef = useFadeIn(0.1)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    dragFree: true,
  })
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return

    const update = () => setActiveIndex(emblaApi.selectedScrollSnap())

    update()
    emblaApi.on('select', update)
    emblaApi.on('reInit', update)

    return () => {
      emblaApi.off('select', update)
      emblaApi.off('reInit', update)
    }
  }, [emblaApi])

  React.useEffect(() => {
    if (!emblaApi) return undefined

    const interval = window.setInterval(() => {
      emblaApi.scrollNext()
    }, 4500)

    return () => window.clearInterval(interval)
  }, [emblaApi])

  return (
    <section ref={productsRef} id="produits" className="bg-[rgba(251,239,118,0.10)] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-black md:text-3xl">Nos produits</h2>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y touch-pinch-zoom gap-5">
            {products.map((product, index) => {
              const isActive = index === activeIndex

              return (
                <motion.article
                  key={product.title}
                  className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] xl:flex-[0_0_32%]"
                  initial={false}
                  animate={{ scale: isActive ? 1 : 0.96, opacity: isActive ? 1 : 0.7 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                >
                  <div className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative aspect-4/3 overflow-hidden">
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
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-black' : 'w-2 bg-black/20'}`}
              aria-label={`Aller au produit ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black/90"
          >
            Voir plus
            <IconArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
