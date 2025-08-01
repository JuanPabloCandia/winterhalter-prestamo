import React from 'react';
import arriendos from '../assets/images/arriendo.png';

const IntroSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-[#009FE3] text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">La revolución del lavado profesional, al alcance de tu cocina.</h2>
        <h3 className="text-[#009FE3] text-[20px] sm:text-[26px] lg:text-[32px] font-bold">¡Planes de Arriendo de Lavavajillas Industriales!</h3>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center order-first lg:order-last">
            <img className="rounded-lg shadow-lg w-full max-w-[400px] lg:max-w-none" src={arriendos} alt="Planes de arriendo de lavavajillas industriales Winterhalter" />
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
  );
};

export default IntroSection; 