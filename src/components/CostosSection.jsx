const CostosSection = () => {
  const handleButtonClick = () => {
    console.log('Botón ACTIVAR OFERTA clickeado');
    // Aquí puedes agregar la lógica específica para el botón
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#525252] rounded-xl p-4 sm:p-6 lg:p-12 relative overflow-hidden border-2 sm:border-4 border-dashed border-[#009FE3] shadow-2xl transform hover:scale-105 transition-all duration-500">
          {/* Efecto de brillo en las esquinas */}
          <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-[#009FE3] to-transparent opacity-60"></div>
          <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-bl from-[#009FE3] to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-tr from-[#009FE3] to-transparent opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-tl from-[#009FE3] to-transparent opacity-60"></div>
          
          {/* Línea decorativa azul */}
          <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 sm:border-4 border-[#009FE3] rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-2 sm:border-4 border-[#009FE3] rounded-full opacity-30 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          
          {/* Elementos decorativos tipo cupón */}
          <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#009FE3] rounded-full"></div>
          <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#009FE3] rounded-full"></div>
          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#009FE3] rounded-full"></div>
          <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 right-3 sm:right-4 lg:right-6 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#009FE3] rounded-full"></div>
          
          {/* Etiqueta de OFERTA ESPECIAL */}
          <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 bg-[#009FE3] text-white px-3 sm:px-4 lg:px-6 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
            ¡OFERTA ESPECIAL!
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10 mt-8 sm:mt-10 lg:mt-12">
            {/* Lado izquierdo - Texto y botón */}
            <div className="text-white text-center lg:text-left order-2 lg:order-1">
              <h2 className="text-[#009FE3] text-[20px] sm:text-[26px] lg:text-[36px] font-bold leading-tight mb-4 sm:mb-6">
                ¡Los Costos ya no serán problema con el Arriendo de Lavavajillas Industriales!
              </h2>
              <p className="text-gray-200 text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed mb-6 sm:mb-8">
                Nuestros nuevos planes de arriendo de lavavajillas industriales son una renovada apuesta para ofrecerte la oportunidad de elevar la calidad y eficiencia en tu cocina profesional, incorporando la mejor tecnología alemana <span className="font-bold text-white">sin comprometer tu presupuesto y minimizando los gastos.</span>
              </p>
              <button 
                className="bg-[#009FE3] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg hover:bg-[#00B0F0] transition-colors duration-300 transform hover:scale-105 shadow-lg text-[14px] sm:text-[16px] w-full sm:w-auto"
                onClick={handleButtonClick}
              >
                ACTIVAR OFERTA
              </button>
            </div>
            
            {/* Lado derecho - Imagen */}
            <div className="relative order-1 lg:order-2">
              <img 
                src="https://experiencia.winterhalter.com/cl/wp-content/uploads/2024/02/alquiler3.webp" 
                alt="Lavavajillas industriales Winterhalter" 
                className="w-full h-auto rounded-lg shadow-2xl max-w-[300px] sm:max-w-[400px] lg:max-w-none mx-auto lg:mx-0"
              />
              {/* Línea decorativa azul curva */}
              <div className="absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 sm:border-3 lg:border-4 border-[#009FE3] rounded-full opacity-60"></div>
              <div className="absolute top-4 sm:top-6 lg:top-8 -right-1 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-2 sm:border-3 border-[#009FE3] rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostosSection; 