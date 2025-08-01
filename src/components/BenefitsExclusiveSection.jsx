import lavavajillas from '../assets/images/lavavajillas.jpg';
import mantenimiento from '../assets/images/mantenimiento.jpg';
import descuentos from '../assets/images/descuentos.jpg';

const BenefitsExclusiveSection = () => {
  const benefitsData = [
    {
      title: "Instalación Gratuita",
      description: "Con Winterhalter, tu lavavajillas llega listo para usar. Instalación incluida, cero estrés, cero cargos sorpresa.",
      image: lavavajillas,
      alt: "Lavavajillas industrial Winterhalter"
    },
    {
      title: "Mantenimiento Incluido",
      description: "Protege tu inversión con nuestro mantenimiento trimestral: mayor rendimiento, mayor durabilidad y la tranquilidad de contar con expertos a tu lado.",
      image: mantenimiento,
      alt: "Herramientas de mantenimiento"
    },
    {
      title: "Descuentos En Tienda Online",
      description: "Compra o arrienda tu lavavajillas y recibe un código de descuento para que ahorres en insumos y mantenimiento en nuestra Tienda Online.",
      image: descuentos,
      alt: "Tienda online con descuentos"
    }
  ];

  return (
    <section className="py-16 px-8 bg-[#00B0F0] relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00B0F0] via-[#009FE3] to-[#0080C0] opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-[36px] font-bold mb-4">
            Beneficios Exclusivos de Nuestros Planes de Arriendo de Lavavajillas Industriales
          </h2>
          <p className="text-white text-[18px] leading-relaxed max-w-3xl mx-auto">
            Descubre por qué elegir Winterhalter significa optimizar la eficiencia operativa y maximizar el ahorro de recursos en tu cocina profesional.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl border-2 border-transparent hover:border-[#009FE3]/30 group relative overflow-hidden">
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
              
              {/* Imagen con efectos */}
              <div className="mb-6 relative overflow-hidden rounded-lg">
                <img 
                  src={benefit.image} 
                  alt={benefit.alt}
                  className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay sutil en hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 rounded-lg"></div>
              </div>
              
                             {/* Contenido del texto */}
               <div className="relative z-10">
                 <h3 className="text-[#009FE3] text-[22px] font-bold mb-4 leading-tight transition-all duration-300 group-hover:tracking-wide">
                   {benefit.title}
                 </h3>
                 <p className="text-[#525252] text-[16px] leading-relaxed transition-all duration-300">
                   {benefit.description}
                 </p>
               </div>
              
              {/* Efecto de partículas brillantes */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#009FE3] rounded-full animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-[#009FE3] rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 left-4 w-1.5 h-1.5 bg-[#009FE3] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsExclusiveSection; 