import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      initials: "SM",
      quote: "Winterhalter siempre nos apoya con su excelencia y la calidad de sus productos para el área de lavado",
      name: "Simone Mua",
      company: "Chef Storia D'amore"
    },
    {
      id: 2,
      initials: "EM",
      quote: "Desde la escuela conocí Winterhalter, ví que estaban en restaurantes de primera calidad. Cuando abrimos terraza Cha Cha Chá no escatimamos en su tecnología",
      name: "Emilio Morayta",
      company: "Director Terraza Cha Cha Chá"
    },
    {
      id: 3,
      initials: "RD",
      quote: "Winterhalter nos ayuda a cuidar el medio ambiente y tienen productos biodegradables. Esto es lo que más nos mueve para seguir con ellos",
      name: "Raúl Doncaster",
      company: "Restaurante La Picantería"
    },
    {
      id: 4,
      initials: "MG",
      quote: "La eficiencia de Winterhalter ha transformado completamente nuestro proceso de lavado. Ahora somos mucho más productivos",
      name: "María González",
      company: "Restaurante El Gourmet"
    },
    {
      id: 5,
      initials: "CR",
      quote: "Invertir en Winterhalter fue la mejor decisión para nuestro negocio. La calidad y el soporte son excepcionales",
      name: "Carlos Rodríguez",
      company: "Café Central"
    },
    {
      id: 6,
      initials: "AM",
      quote: "Winterhalter nos ha permitido optimizar nuestros costos y mejorar la calidad de nuestro servicio",
      name: "Ana Martínez",
      company: "La Trattoria"
    }
  ];

  // Función para obtener testimonios según el dispositivo
  const getDisplayTestimonials = () => {
    // En móvil y tablet, mostrar todos los testimonios
    if (window.innerWidth < 1024) {
      return testimonials;
    }
    
    // En desktop, mostrar solo 3 testimonios con carrusel
    let displayTestimonials = [];
    if (currentSlide + 3 <= testimonials.length) {
      // Caso normal: mostrar 3 testimonios consecutivos
      displayTestimonials = testimonials.slice(currentSlide, currentSlide + 3);
    } else {
      // Caso especial: cuando llegamos al final, completar con los primeros
      const remaining = testimonials.slice(currentSlide);
      const needed = 3 - remaining.length;
      displayTestimonials = [...remaining, ...testimonials.slice(0, needed)];
    }
    return displayTestimonials;
  };

  // Auto-rotación cada 15 segundos solo en desktop
  useEffect(() => {
    let interval = null;
    
    const startAutoRotation = () => {
      // Limpiar intervalo anterior
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
      
      // Solo iniciar en desktop y si no está pausado
      if (window.innerWidth >= 1024 && !isPaused) {
        interval = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 15000); // 15 segundos - mucho más lento
      }
    };
    
    // Iniciar inmediatamente
    startAutoRotation();
    
    // Manejar cambios de tamaño de ventana
    const handleResize = () => {
      startAutoRotation();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (interval) {
        clearInterval(interval);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [testimonials.length, isPaused]);

  return (
    <section className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Título y descripción */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[#00B0F0] text-[16px] sm:text-[18px] lg:text-[20px] font-medium mb-2">
            No lo decimos nosotros...
          </h2>
          <h1 className="text-[#00B0F0] text-[28px] sm:text-[34px] lg:text-[42px] font-bold mb-4 sm:mb-6 uppercase">
            ¡LO DICEN NUESTROS CLIENTES!
          </h1>
          <p className="text-gray-600 text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-4xl mx-auto">
            La satisfacción y testimonios reales de nuestros clientes son nuestra mejor carta de presentación
          </p>
        </div>

        {/* Carrusel de testimonios */}
        <div className="relative">
          {/* Flechas de navegación - Solo en desktop */}
          <button 
            onClick={() => {
              setIsPaused(true);
              setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              // Reanudar después de 5 segundos
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-[#00B0F0] text-[#00B0F0]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => {
              setIsPaused(true);
              setCurrentSlide((prev) => (prev + 1) % testimonials.length);
              // Reanudar después de 5 segundos
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border-2 border-[#00B0F0] text-[#00B0F0]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contenedor de testimonios */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl">
              {getDisplayTestimonials().map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-xl"
                >
                  {/* Avatar con iniciales */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#009FE3] to-[#00B0F0] flex items-center justify-center border-2 sm:border-3 lg:border-4 border-[#00B0F0]/20 shadow-lg text-white font-bold text-lg sm:text-xl lg:text-2xl">
                      {testimonial.initials}
                    </div>
                  </div>

                  {/* Testimonio */}
                  <blockquote className="text-gray-600 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed mb-4 sm:mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Nombre */}
                  <p className="text-gray-700 font-semibold text-[16px] sm:text-[17px] lg:text-[18px] mb-2">
                    {testimonial.name}
                  </p>

                  {/* Empresa */}
                  <p className="text-[#00B0F0] font-medium text-[14px] sm:text-[15px] lg:text-[16px]">
                    {testimonial.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

         {/* Video de Wistia */}
         <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
           <h3 className="text-[#00B0F0] text-[20px] sm:text-[24px] lg:text-[28px] font-bold mb-6 sm:mb-8">
             Conoce más sobre Winterhalter
           </h3>
           <div className="flex justify-center">
             <iframe 
               allowtransparency="true" 
               title="Wistia video player" 
               allowFullscreen 
               frameBorder="0" 
               scrolling="no" 
               className="wistia_embed rounded-lg shadow-xl w-full max-w-[800px]" 
               name="wistia_embed" 
               src="https://fast.wistia.net/embed/iframe/fzc2vqkh7s" 
               width="800" 
               height="450"
             />
           </div>
         </div>
       </div>
     </section>
  );
};

export default TestimonialsSection; 