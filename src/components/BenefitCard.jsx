const BenefitCard = ({ title, description, metric, metricDescription }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 h-full items-stretch lg:transform lg:hover:scale-102 transition-all duration-300 relative">
      
      {/* Caja de texto izquierda */}
      <div className="lg:col-span-8 bg-white rounded-xl shadow-xl p-4 md:p-6 lg:p-8 flex flex-col border-l-4 border-[#009FE3] border-2 border-gray-100 lg:border-0 lg:hover:shadow-2xl transition-all duration-300 relative overflow-hidden group h-full">
        {/* Efecto de fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#009FE3]/2 to-[#00B0F0]/5 group-hover:from-[#009FE3]/5 group-hover:to-[#00B0F0]/8 transition-all duration-300"></div>
        
        {/* Círculos decorativos */}
        <div className="absolute top-3 right-3 w-2 h-2 bg-[#009FE3]/15 rounded-full group-hover:bg-[#009FE3]/25 transition-all duration-300"></div>
        <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#00B0F0]/15 rounded-full group-hover:bg-[#00B0F0]/25 transition-all duration-300"></div>
        
        {/* Contenido */}
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center mb-3 md:mb-4">
            <div className="w-2 h-2 bg-[#009FE3] rounded-full mr-3 group-hover:scale-110 transition-transform duration-300"></div>
            <h3 className="text-[#009FE3] text-[16px] md:text-[18px] lg:text-[22px] font-bold group-hover:text-[#0080C0] transition-colors duration-300">{title}</h3>
          </div>
          <p className="text-[#525252] text-[13px] md:text-[14px] lg:text-[16px] leading-relaxed flex-grow group-hover:text-[#333] transition-colors duration-300" dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
        
        {/* Borde decorativo superior */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#009FE3]/30 to-[#00B0F0]/30 group-hover:from-[#009FE3]/50 group-hover:to-[#00B0F0]/50 transition-all duration-300"></div>
        
        {/* Borde decorativo inferior */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#009FE3]/20 to-transparent group-hover:via-[#009FE3]/35 transition-all duration-300"></div>
        
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Línea decorativa bajo el título - Ajustada para no tapar texto */}
        <div className="absolute top-20 left-8 w-12 h-0.5 bg-gradient-to-r from-[#009FE3] to-[#00B0F0] group-hover:w-16 transition-all duration-300"></div>
      </div>
      
      {/* Flecha - Visible en todas las versiones */}
      <div className="lg:col-span-1 flex items-center justify-center">
        <div className="bg-white rounded-full p-2 md:p-3 shadow-lg">
                      <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#009FE3]"
            >
              {/* Flecha hacia abajo para mobile */}
              <path 
                d="M12 5L12 19M12 19L5 12M12 19L19 12" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="lg:hidden"
              />
              {/* Flecha hacia la derecha para desktop */}
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="hidden lg:block"
              />
            </svg>
        </div>
      </div>
      
      {/* Caja de métrica derecha */}
      <div className="lg:col-span-3 bg-white rounded-xl shadow-2xl p-4 md:p-6 text-center flex flex-col justify-center border-2 border-[#009FE3]/20 border-gray-100 lg:border-[#009FE3]/20 lg:hover:shadow-3xl lg:hover:border-[#009FE3]/40 transition-all duration-300 relative overflow-hidden group h-full">
        {/* Efecto de fondo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#009FE3]/5 to-[#00B0F0]/10 group-hover:from-[#009FE3]/10 group-hover:to-[#00B0F0]/15 transition-all duration-300"></div>
        
        {/* Círculos decorativos */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-[#009FE3]/20 rounded-full group-hover:bg-[#009FE3]/30 transition-all duration-300"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#00B0F0]/20 rounded-full group-hover:bg-[#00B0F0]/30 transition-all duration-300"></div>
        
        {/* Contenido */}
        <div className="relative z-10">
          <div className="text-[#009FE3] text-[24px] md:text-[28px] lg:text-[36px] font-bold mb-2 drop-shadow-sm group-hover:text-[#0080C0] transition-colors duration-300">{metric}</div>
          <div className="text-gray-600 text-[11px] md:text-[12px] lg:text-[13px] font-medium group-hover:text-[#333] transition-colors duration-300">{metricDescription}</div>
        </div>
        
        {/* Borde decorativo superior */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#009FE3] to-[#00B0F0] group-hover:from-[#0080C0] group-hover:to-[#009FE3] transition-all duration-300"></div>
        
        {/* Borde decorativo inferior */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#009FE3]/30 to-transparent group-hover:via-[#009FE3]/50 transition-all duration-300"></div>
        
        {/* Efecto de brillo en hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default BenefitCard; 