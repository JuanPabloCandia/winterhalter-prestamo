import React from 'react';

const FinalSection = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Contenido principal */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-[#009FE3] text-[20px] sm:text-[26px] lg:text-[32px] font-bold mb-4">
            Alquiler de Lavavajillas Industriales - Transforma tu Cocina Profesional Hoy
          </h1>
          <h2 className="text-[#009FE3] text-[24px] sm:text-[32px] lg:text-[42px] font-bold mb-6 sm:mb-8">
            ¡DEL TRABAJO SUCIO NOS ENCARGAMOS NOSOTROS!
          </h2>
          <p className="text-gray-600 text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-4xl mx-auto mb-8 sm:mb-12">
            No esperes más para dar el paso hacia la eficiencia y la higiene. Contáctanos ahora para conocer más sobre nuestros planes de alquiler con equipos personalizados según las necesidades de tu negocio. Descubre los beneficios de un lavavajillas industrial y comprueba por qué con Winterhalter.
          </p>
          
          {/* Botón principal */}
          <div className="mb-6 sm:mb-8">
            <button className="bg-[#009FE3] text-white font-bold text-[16px] sm:text-[18px] lg:text-[20px] px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#00B0F0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto">
              #JuntosSomosImpecables
            </button>
          </div>
          
          {/* Flecha hacia arriba */}
          <div className="flex justify-center">
            <button className="text-[#009FE3] hover:text-[#00B0F0] transition-colors duration-300">
              <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
          <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-12">
            {/* Columna 1 - Información de contacto */}
            <div className="text-center sm:text-left border-b sm:border-b-0 pb-6 sm:pb-0 border-gray-200">
              <h3 className="text-[#009FE3] text-[18px] sm:text-[20px] font-bold mb-4 sm:mb-6">
                Winterhalter Andina SAS
              </h3>
              <div className="space-y-3 sm:space-y-2 lg:space-y-3 text-gray-600">
                <p className="text-[14px] sm:text-[15px] lg:text-[16px]">Calle 98A # 58-31</p>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px]">Bogotá D.C.</p>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px]">Tel: +57 1 381 9272</p>
                <p className="text-[14px] sm:text-[15px] lg:text-[16px]">info@winterhalter.co</p>
              </div>
            </div>

            {/* Columna 2 - Aspectos legales */}
            <div className="text-center sm:text-left border-b sm:border-b-0 pb-6 sm:pb-0 border-gray-200">
              <h3 className="text-[#009FE3] text-[18px] sm:text-[20px] font-bold mb-4 sm:mb-6">
                Aspectos Legales
              </h3>
              <div className="space-y-3 sm:space-y-2 lg:space-y-3">
                <a href="#" className="block text-[#009FE3] text-[14px] sm:text-[15px] lg:text-[16px] hover:text-[#00B0F0] transition-colors duration-300 py-1">
                  Aviso Legal
                </a>
                <a href="#" className="block text-[#009FE3] text-[14px] sm:text-[15px] lg:text-[16px] hover:text-[#00B0F0] transition-colors duration-300 py-1">
                  Aviso de Privacidad
                </a>
                <a href="#" className="block text-[#009FE3] text-[14px] sm:text-[15px] lg:text-[16px] hover:text-[#00B0F0] transition-colors duration-300 py-1">
                  Política de tratamiento de Datos
                </a>
              </div>
            </div>

            {/* Columna 3 - Redes sociales */}
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h3 className="text-[#009FE3] text-[18px] sm:text-[20px] font-bold mb-4 sm:mb-6">
                ¡Síguenos en Redes Sociales!
              </h3>
              <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-3 lg:space-x-4">
                {/* Facebook */}
                <a href="#" className="w-12 h-12 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#009FE3] rounded-full flex items-center justify-center text-white hover:bg-[#00B0F0] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <span className="font-bold text-[18px] sm:text-[16px] lg:text-[18px]">f</span>
                </a>
                
                {/* Instagram */}
                <a href="#" className="w-12 h-12 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#009FE3] rounded-full flex items-center justify-center text-white hover:bg-[#00B0F0] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <svg className="w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a href="#" className="w-12 h-12 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#009FE3] rounded-full flex items-center justify-center text-white hover:bg-[#00B0F0] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <span className="font-bold text-[16px] sm:text-[14px] lg:text-[16px]">in</span>
                </a>
                
                {/* YouTube */}
                <a href="#" className="w-12 h-12 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-[#009FE3] rounded-full flex items-center justify-center text-white hover:bg-[#00B0F0] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                  <svg className="w-6 h-6 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default FinalSection; 