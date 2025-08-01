const InfoCardDark = ({ title, description, buttonText, onButtonClick, backgroundImage }) => {
  return (
    <div className="bg-[#2F4F4F] rounded-xl p-8 flex flex-col h-full relative overflow-hidden transform hover:scale-105 transition-all duration-500 border-2 border-transparent hover:border-[#009FE3] shadow-xl hover:shadow-2xl hover:shadow-[#009FE3]/20 group">
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
      
      {/* Imagen de fondo sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F4F4F] via-[#2F4F4F]/95 to-[#2F4F4F]/90 group-hover:from-[#2F4F4F]/80 group-hover:via-[#2F4F4F]/70 group-hover:to-[#2F4F4F]/60 transition-all duration-500"></div>
        <img 
          src={backgroundImage} 
          alt="Persona trabajando en cocina" 
          className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
        />
      </div>
      
      {/* Efecto de partículas brillantes */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#009FE3] rounded-full animate-ping"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#009FE3] rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-[#009FE3] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      </div>
      
             {/* Contenido */}
       <div className="relative z-10 flex flex-col h-full">
         {/* Contenido del texto */}
         <div className="relative z-20 flex flex-col h-full">
           <h3 className="text-white text-[24px] font-bold mb-4 leading-tight group-hover:text-white/95 transition-colors duration-300">
             {title}
           </h3>
           
           {/* Párrafo con fondo oscuro */}
           <div className="relative mb-8 flex-grow">
             {/* Fondo oscuro solo para el párrafo */}
             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 rounded-lg"></div>
             <p className="relative z-10 text-white text-[16px] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
               {description}
             </p>
           </div>
           
           <button 
             className="bg-[#009FE3] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#00B0F0] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-[#009FE3]/30 group-hover:animate-pulse"
             onClick={onButtonClick}
           >
             {buttonText}
           </button>
         </div>
       </div>
    </div>
  );
};

export default InfoCardDark; 