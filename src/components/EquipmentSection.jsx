import bajomostrador from '../assets/images/bajomostrador.PNG';
import cupula from '../assets/images/cupula.PNG';
import lavautensilios from '../assets/images/lavautensilios.PNG';
import cestas from '../assets/images/cestas.PNG';
import cinta from '../assets/images/cinta.PNG';

const EquipmentSection = () => {
  const equipmentData = [
    {
      title: "LAVAVAJILLAS BAJOMOSTRADOR",
      description: "Pequeña, versátil, fiable. La máquina lavavajillas de carga frontal es perfecta para cristalería, vajilla y cubiertos. Única para todo. Resultados y acabado perfectos.",
      image: bajomostrador,
      alt: "Lavavajillas bajomostrador Winterhalter"
    },
    {
      title: "LAVAVAJILLAS INDUSTRIAL DE CAPOTA",
      description: "Actividad intensa. Las canastillas llenas hasta el borde de platos sucios. Cúpula arriba, cúpula abajo. Todo funciona de maravilla. Los lavavajillas de cúpula de Winterhalter. Absolutamente confiable para todo.",
      image: cupula,
      alt: "Lavavajillas industrial de capota"
    },
    {
      title: "LAVAVAJILLAS LAVAUTENSILIOS",
      description: "Robusta tecnología de enjuague. Con mucha potencia para la suciedad fuerte y obstinada. Las máquinas lavautensilios de Winterhalter. Soluciones potentes para resultados completamente higiénicos.",
      image: lavautensilios,
      alt: "Lavavajillas lavautensilios"
    },
    {
      title: "LAVAVAJILLAS DE ARRASTRE DE CANASTILLAS Y CESTAS",
      description: "Potentes trenes de lavado de arrastre de canastillas para grandes cantidades. Máxima eficiencia y rendimiento para satisfacer las altas demandas de cocinas industriales y hoteles. Solución integral para operaciones de gran volumen.",
      image: cestas,
      alt: "Lavavajillas de arrastre de canastillas"
    },
    {
      title: "LAVAVAJILLAS CON TRANSPORTE DE CINTA",
      description: "De alto rendimiento. Modular. El flexible y reequipable tren lavavajillas con transporte de cinta. Para una máxima seguridad higiénica con elevada rentabilidad. Y todo marcha en orden.",
      image: cinta,
      alt: "Lavavajillas con transporte de cinta"
    }
  ];

  const handleButtonClick = (title) => {
    console.log(`Botón clickeado para: ${title}`);
    // Aquí puedes agregar la lógica específica para cada equipo
  };

  return (
    <section className="py-16 px-8 bg-gray-50 relative overflow-hidden">
             {/* Efectos de fondo */}
       <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
       
       {/* Líneas decorativas diagonales */}
       <div className="absolute inset-0 opacity-10">
         <div className="absolute top-0 left-0 w-full h-full" style={{
           backgroundImage: `linear-gradient(45deg, #009FE3 1px, transparent 1px), linear-gradient(-45deg, #009FE3 1px, transparent 1px)`,
           backgroundSize: '60px 60px'
         }}></div>
       </div>
       
       {/* Elementos geométricos */}
       <div className="absolute top-10 right-10 w-32 h-32 border-2 border-[#009FE3] rounded-full opacity-10 rotate-45"></div>
       <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#00B0F0] opacity-10 transform rotate-12"></div>
       <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#009FE3] opacity-15 transform -rotate-30"></div>
       
       {/* Efecto de ondas sutiles */}
       <div className="absolute inset-0 opacity-5">
         <div className="absolute top-0 left-0 w-full h-full" style={{
           backgroundImage: `radial-gradient(circle at 20% 80%, #009FE3 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00B0F0 0%, transparent 50%)`
         }}></div>
       </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#009FE3] text-[36px] font-bold mb-4">
            Equipos de lavado para todo tipo de cocina profesional
          </h2>
          <p className="text-[#525252] text-[18px] leading-relaxed max-w-4xl mx-auto">
            Contamos con el portafolio de lavavajillas industriales más completo para el sector HORECA: desde equipos bajomostrador ideales para bares y cafeterías, hasta avanzados trenes de lavado diseñados para cocinas de alta exigencia.
          </p>
        </div>
        
                 <div className="space-y-6">
           {equipmentData.map((equipment, index) => (
                           <div key={index} className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border-2 border-transparent hover:border-[#009FE3]/30 group relative overflow-hidden">
                {/* Efecto de brillo deslizante */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-700"></div>
               
               {/* Partículas decorativas */}
               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="absolute top-4 right-4 w-2 h-2 bg-[#009FE3] rounded-full animate-ping"></div>
                 <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#009FE3] rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                 <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-[#009FE3] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
               </div>
               
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
                 {/* Columna izquierda - Texto */}
                 <div className="lg:col-span-1">
                   <div className="mb-4">
                                           <h3 className="text-[#009FE3] text-[24px] font-bold leading-tight group-hover:tracking-wide transition-all duration-300">
                       {equipment.title}
                     </h3>
                     <div className="w-16 h-0.5 bg-gradient-to-r from-[#009FE3] to-[#00B0F0] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-x-150"></div>
                   </div>
                                       <p className="text-[#525252] text-[16px] leading-relaxed transition-all duration-300">
                     {equipment.description}
                   </p>
                 </div>
                 
                                   {/* Columna central - Imagen */}
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="relative overflow-hidden rounded-lg group-hover:shadow-2xl transition-all duration-500">
                      <img 
                        src={equipment.image} 
                        alt={equipment.alt}
                        className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay sutil en hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-opacity duration-500 rounded-lg"></div>
                    </div>
                  </div>
                 
                 {/* Columna derecha - Botón */}
                 <div className="lg:col-span-1 flex justify-center lg:justify-end">
                   <div className="relative">
                     <button 
                       className="bg-gradient-to-r from-[#009FE3] to-[#00B0F0] text-white font-semibold py-4 px-8 rounded-lg hover:from-[#0080C0] hover:to-[#009FE3] transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-[#009FE3]/30 group-hover:animate-pulse"
                       onClick={() => handleButtonClick(equipment.title)}
                     >
                       QUIERO SABER MÁS
                     </button>
                     {/* Efecto de brillo en el botón */}
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 rounded-lg"></div>
                   </div>
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </section>
  );
};

export default EquipmentSection; 