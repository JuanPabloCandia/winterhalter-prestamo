import { lazy, Suspense } from 'react';
import Header from './components/header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import AnimatedSection from './components/AnimatedSection';
import SectionLoader from './components/SectionLoader';

// Lazy loading de componentes
const InfoCardsSection = lazy(() => import('./components/InfoCardsSection'));
const CostosSection = lazy(() => import('./components/CostosSection'));
const BenefitsSection = lazy(() => import('./components/BenefitsSection'));
const InfoCardsDarkSection = lazy(() => import('./components/InfoCardsDarkSection'));
const BenefitsExclusiveSection = lazy(() => import('./components/BenefitsExclusiveSection'));
const EquipmentSection = lazy(() => import('./components/EquipmentSection'));
const TechnicalServiceSection = lazy(() => import('./components/TechnicalServiceSection'));
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'));
const FAQSection = lazy(() => import('./components/FAQSection'));
const FinalSection = lazy(() => import('./components/FinalSection'));

function App() {

  return (
    <>
      <Header/>
      <main className='bg-gray-100'>
        <article>
          {/* Hero Section */}
          <HeroSection />

          {/* Introducción Section */}
          <IntroSection />
        </article>
        
        <Suspense fallback={
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#009FE3]"></div>
              <p className="text-[#009FE3] text-lg font-medium animate-pulse">Cargando contenido...</p>
            </div>
          </div>
        }>
          <AnimatedSection>
            <Suspense fallback={<SectionLoader />}>
              <InfoCardsSection />
            </Suspense>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Suspense fallback={<SectionLoader />}>
              <CostosSection />
            </Suspense>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <Suspense fallback={<SectionLoader />}>
              <BenefitsSection />
            </Suspense>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Suspense fallback={<SectionLoader />}>
              <InfoCardsDarkSection />
            </Suspense>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <Suspense fallback={<SectionLoader />}>
              <BenefitsExclusiveSection />
            </Suspense>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Suspense fallback={<SectionLoader />}>
              <EquipmentSection />
            </Suspense>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <Suspense fallback={<SectionLoader />}>
              <TechnicalServiceSection />
            </Suspense>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Suspense fallback={<SectionLoader />}>
              <TestimonialsSection />
            </Suspense>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <Suspense fallback={<SectionLoader />}>
              <FAQSection />
            </Suspense>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <Suspense fallback={<SectionLoader />}>
              <FinalSection />
            </Suspense>
          </AnimatedSection>
        </Suspense>
      </main>
    </>
  )
}

export default App
