import { lazy, Suspense } from 'react'
import './App.css'

const Header = lazy(() => import('./sections/Header'))
const HeroSection = lazy(() => import('./sections/HeroSection'))
const CategoriesSection = lazy(() => import('./sections/CategoriesSection'))
const ProductsSection = lazy(() => import('./sections/ProductsSection'))
const AboutSection = lazy(() => import('./sections/AboutSection'))
const WhyChooseSection = lazy(() => import('./sections/WhyChooseSection'))
const CallToActionSection = lazy(() => import('./sections/CallToActionSection'))
const FooterSection = lazy(() => import('./sections/FooterSection'))
const FloatingWhatsApp = lazy(() => import('./sections/FloatingWhatsApp'))

function SectionFallback() {
  return <div className="px-4 py-10 text-center text-[#111827]">Chargement…</div>
}

function App() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <Suspense fallback={<SectionFallback />}>
        <Header />
      </Suspense>

      <main>
        <Suspense fallback={<SectionFallback />}>
          <HeroSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CategoriesSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ProductsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <WhyChooseSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <CallToActionSection />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback />}>
        <FooterSection />
      </Suspense>

      <Suspense fallback={null}>
        <FloatingWhatsApp />
      </Suspense>
    </div>
  )
}

export default App