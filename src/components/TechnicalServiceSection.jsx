const TechnicalServiceSection = () => {
  return (
    <section className="bg-[#009FE3] py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título y descripción */}
        <div className="text-center mb-16">
          <h2 className="text-white text-[36px] font-bold mb-6">
            Servicio Técnico Garantizado
          </h2>
          <p className="text-white text-[18px] leading-relaxed max-w-4xl mx-auto">
            El mejor lavavajillas de arriendo merece el mejor soporte técnico. Winterhalter te ofrece tecnología de punta y Soporte y Asistencia Técnica 24/7 para garantizar la operación continua y el respaldo que tu negocio necesita.
          </p>
        </div>
        
                 {/* Tarjeta con contenido */}
         <div className="bg-gray-700 rounded-xl shadow-2xl p-12 relative overflow-hidden transform hover:scale-105 transition-all duration-500 hover:shadow-3xl group">
           {/* Efectos de fondo */}
           <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900"></div>
           
           {/* Patrón de líneas diagonales sutiles */}
           <div className="absolute inset-0 opacity-5">
             <div className="absolute top-0 left-0 w-full h-full" style={{
               backgroundImage: `linear-gradient(45deg, #009FE3 1px, transparent 1px), linear-gradient(-45deg, #009FE3 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}></div>
           </div>
           
           {/* Círculos decorativos con gradientes */}
           <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-[#009FE3] to-[#00B0F0] rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-500 blur-sm"></div>
           <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-[#00B0F0] to-[#009FE3] rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-500 blur-sm"></div>
           <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-[#009FE3] to-transparent rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
           
           {/* Efecto de ondas radiales */}
           <div className="absolute inset-0 opacity-3">
             <div className="absolute top-0 left-0 w-full h-full" style={{
               backgroundImage: `radial-gradient(circle at 20% 80%, #009FE3 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00B0F0 0%, transparent 50%)`
             }}></div>
           </div>
           
           {/* Efecto de brillo en hover */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
           
           {/* Borde luminoso sutil */}
           <div className="absolute inset-0 rounded-xl border border-[#009FE3]/20 group-hover:border-[#009FE3]/40 transition-colors duration-500"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lado izquierdo - Foto del equipo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://experiencia.winterhalter.com/co/wp-content/uploads/2024/02/recurso-56-1.webp"
                  alt="Equipo técnico Winterhalter"
                  className="w-full max-w-md h-auto rounded-lg shadow-xl rotate-4"
                />
                                 {/* Borde blanco decorativo */}
                 <div className="absolute inset-0 border-4 border-white rounded-lg transform rotate-3 opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Lado derecho - Testimonio */}
            <div className="text-white">
              <h3 className="text-[28px] font-bold mb-6 leading-tight group-hover:tracking-wide transition-all duration-300">
                Tu Satisfacción es Nuestro Compromiso
              </h3>
              
              <div className="space-y-4 mb-6">
                <p className="text-gray-200 text-[16px] leading-relaxed group-hover:text-white transition-colors duration-300">
                  Winterhalter proporciona a sus tiendas autorizadas repuestos, insumos y soporte técnico para sus máquinas, asegurándote que no tengas que preocuparte por fallas o interrupciones en tu operación.
                </p>
                <p className="text-gray-200 text-[16px] leading-relaxed group-hover:text-white transition-colors duration-300">
                  Contamos con la red de servicio técnico autorizado más grande del país, disponible para atender tus solicitudes en cualquier momento.
                </p>
              </div>
              
              {/* Calificación con estrellas */}
              <div className="flex items-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Firma */}
              <div className="border-l-4 border-[#009FE3] pl-4 group-hover:border-white transition-colors duration-300">
                <p className="text-white font-bold text-[18px] group-hover:tracking-wide transition-all duration-300">
                  JACQUELINE REBOLLEDO
                </p>
                <p className="text-gray-300 text-[14px] group-hover:text-white transition-colors duration-300">
                  Coordinadora de Servicio Post Venta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalServiceSection; 