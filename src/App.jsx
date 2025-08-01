import { lazy, Suspense } from 'react';
import Header from './components/header';
import AnimatedSection from './components/AnimatedSection';
import SectionLoader from './components/SectionLoader';
import arriendos from './assets/images/arriendo.png';

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
    <main className='bg-gray-100'>
      <Header/>
      <section className="flex items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          {/* Gradiente radial de fondo */}
          <div className="absolute inset-0 bg-gradient-radial from-[#009FE3]/10 via-transparent to-transparent"></div>
          
          {/* Círculos decorativos flotantes */}
          <div className="absolute top-20 left-20 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#009FE3]/15 to-[#00B0F0]/15 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-[#00B0F0]/20 to-[#009FE3]/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-[#009FE3]/12 rounded-full blur-lg animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-[#00B0F0]/18 rounded-full blur-lg animate-pulse" style={{animationDelay: '2.5s'}}></div>
          
          {/* Partículas brillantes */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#009FE3] rounded-full animate-ping opacity-60"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-[#00B0F0] rounded-full animate-ping opacity-70" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-[#009FE3] rounded-full animate-ping opacity-80" style={{animationDelay: '1s'}}></div>
          
          {/* Ondas suaves */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 bg-white/80 backdrop-blur-sm p-8 sm:p-10 lg:p-16 rounded-2xl max-w-7xl shadow-2xl border border-white/50 relative z-10'>
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1 className="text-[#009FE3] text-[28px] sm:text-[36px] lg:text-[46px] font-bold leading-tight">Transforma tu cocina desde $9.500 CLP diarios*</h1>
            <h2 className="text-[#525252] font-semibold text-[18px] sm:text-[22px] lg:text-[25px] py-3 lg:py-5">Arriendo de Lavavajillas Industriales</h2>
            <p className="text-[#7A7A7A] text-[14px] sm:text-[16px] lg:text-[18px] pb-5 lg:pb-7">Menos trabajo manual, más platos impecables y una mayor eficiencia y ahorro en tu negocio con nuestros planes de arriendo de Lavavajillas Industriales <span className='font-bold'>TODO INCLUIDO</span></p>
            <button className='p-3 sm:p-4 bg-gradient-to-r from-[#00B0F0] to-[#009FE3] rounded-[25px] text-white font-semibold text-[14px] sm:text-[16px] hover:from-[#009FE3] hover:to-[#0080C0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#009FE3]/30 relative overflow-hidden group w-full sm:w-auto'>
              <span className="relative z-10">SOLICITAR AHORA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center order-first lg:order-last">
            <img className='w-full max-w-[400px] sm:max-w-[500px] lg:w-[550px] lg:h-[460px] object-contain' src="https://experiencia.winterhalter.com/cl/wp-content/uploads/2024/02/planes.webp" alt="Planes de arriendo" />
            <span className="text-center mt-4 text-[12px] sm:text-[14px] lg:text-[16px]">*Aplican terminos y condiciones. Disponibles también en venta.</span>
          </div>   
        </div>     
      </section>
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[#009FE3] text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">La revolución del lavado profesional, al alcance de tu cocina.</h2>
          <h3 className="text-[#009FE3] text-[20px] sm:text-[26px] lg:text-[32px] font-bold">¡Planes de Arriendo de Lavavajillas Industriales!</h3>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center order-first lg:order-last">
              <img className="rounded-lg shadow-lg w-full max-w-[400px] lg:max-w-none" src={ arriendos } alt="Planes de arriendo" />
            </div>
            <div className="space-y-4 sm:space-y-6 order-last lg:order-first">
              <p className="text-[#525252] text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
                En la industria gastronómica, donde cada minuto cuenta y los estándares de higiene son cada vez más exigentes, contar con equipos confiables y eficientes no es una opción, es una necesidad. Sin embargo, la inversión en maquinaria especializada puede representar un alto costo inicial y una carga operativa innecesaria.
              </p>
              <p className="text-[#525252] text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed">
                Por eso, nuestros planes de arriendo de lavavajillas industriales están diseñados para ofrecerte una solución integral, sin inversión inicial, sin preocupaciones por mantenimiento ni repuestos, y con beneficios exclusivos que acompañan tu crecimiento. Te ayudamos a optimizar tus procesos, reducir tiempos de lavado y garantizar una operación continua y eficiente, sin que tengas que salirte de tu presupuesto.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
  )
}

export default App
