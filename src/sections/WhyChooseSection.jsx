import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown, Sparkles, ShieldCheck, Truck } from 'lucide-react'
import { useFadeIn } from '../hooks/useFadeIn'

const items = [
  {
    title: 'Des créations soignées',
    icon: Sparkles,
    content:
      'Chaque gâteau et chaque douceur sont pensés avec une finition élégante, des détails précis et une présentation raffinée.',
  },
  {
    title: 'Une expérience fiable',
    icon: ShieldCheck,
    content:
      'Nous privilégions une commande simple, un suivi clair et un service de confiance pour tous vos événements.',
  },
  {
    title: 'Livraison pratique',
    icon: Truck,
    content:
      'Vos commandes peuvent être préparées et livrées avec soin pour vous faire gagner du temps sans compromis sur la qualité.',
  },
]

export default function WhyChooseSection() {
  const whyRef = useFadeIn(0.1)

  return (
    <section ref={whyRef} className="bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-black/3 p-6 shadow-sm md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full brand-gradient-soft px-4 py-2 text-xs font-medium text-black/75 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Pourquoi choisir Elengui Cake
          </div>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-black md:text-3xl">
            Une pâtisserie pensée pour être belle, simple et mémorable.
          </h2>
          <p className="mt-4 text-sm leading-7 text-black/65 md:text-base">
            Chez Elengui Cake, nous croyons que chaque gâteau doit être une œuvre d'art qui éveille les sens. Notre engagement envers la qualité, la fiabilité et la commodité fait de nous le choix idéal pour tous vos besoins en pâtisserie. Que vous planifiez une fête d'anniversaire, un mariage ou simplement une envie sucrée, nous sommes là pour rendre chaque moment délicieux et mémorable.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <Disclosure key={item.title} defaultOpen={index === 0}>
                {({ open }) => (
                  <div className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md">
                    <DisclosureButton className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-black/2 md:px-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full brand-gradient text-white shadow-sm">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-medium text-black md:text-base">{item.title}</span>
                      </div>

                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-black/45 transition duration-300 ${open ? 'rotate-180' : ''}`}
                      />
                    </DisclosureButton>

                    <DisclosurePanel className="px-5 pb-5 text-sm leading-7 text-black/65 md:px-6 md:text-base">
                      {item.content}
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
