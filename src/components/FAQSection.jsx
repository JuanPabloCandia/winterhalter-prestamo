import React, { useState } from 'react';

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      id: 1,
      question: "¿Por qué confiar en Winterhalter?",
      answer: "Winterhalter es líder mundial en tecnología de lavado profesional con más de 70 años de experiencia. Nuestros equipos son reconocidos por su calidad, eficiencia y durabilidad, siendo la elección preferida de los mejores restaurantes del mundo."
    },
    {
      id: 2,
      question: "¿Dónde están disponibles los planes de arriendo?",
      answer: "Nuestros planes de arriendo están disponibles en todo el país a través de nuestra red de distribuidores autorizados. Contamos con presencia en las principales ciudades y estamos expandiendo nuestra cobertura para llegar a más regiones."
    },
    {
      id: 3,
      question: "¿Cómo sé qué equipo lavavajillas necesito?",
      answer: "Nuestro equipo técnico especializado evalúa tus necesidades específicas considerando el volumen de platos, tipo de cocina, espacio disponible y presupuesto. Te asesoramos para elegir la solución más adecuada para tu negocio."
    },
    {
      id: 4,
      question: "¿Hay Opción de Compra o Solo Arriendo?",
      answer: "Ofrecemos ambas opciones: planes de arriendo flexibles sin inversión inicial y opciones de compra directa. También disponemos de planes de arriendo con opción a compra al final del contrato, adaptándonos a tus necesidades financieras."
    },
    {
      id: 5,
      question: "¿Tienen Distribuidores y Servicio Técnico Autorizado en el país?",
      answer: "Sí, contamos con una red completa de distribuidores autorizados y servicio técnico especializado en todo el país. Nuestro equipo de soporte está disponible 24/7 para garantizar el funcionamiento continuo de tus equipos."
    },
    {
      id: 6,
      question: "¿Cuáles son las condiciones del Plan de Arriendo?",
      answer: "Nuestros planes de arriendo incluyen: sin inversión inicial, mantenimiento preventivo incluido, repuestos y soporte técnico 24/7, flexibilidad en duración del contrato y opción de renovación o compra al finalizar."
    },
    {
      id: 7,
      question: "¿Existe un Plan de Descuentos Por Referidos?",
      answer: "Sí, tenemos un programa de referidos donde tanto tú como tus contactos pueden beneficiarse. Al recomendar Winterhalter a otros negocios, ambos reciben descuentos especiales en nuestros servicios y equipos."
    },
    {
      id: 8,
      question: "¿Cuánto puede durar el proceso total de Arriendo?",
      answer: "El proceso completo desde la consulta inicial hasta la instalación puede tomar entre 7-15 días hábiles, dependiendo de la disponibilidad del equipo y la complejidad de la instalación. Nuestro equipo se compromete a mantenerte informado en cada paso."
    },
    {
      id: 9,
      question: "Términos y Condiciones de la Promoción",
      answer: "Los términos y condiciones aplican según el plan seleccionado. Incluyen duración del contrato, condiciones de renovación, responsabilidades de mantenimiento y políticas de cancelación. Consulta con nuestro equipo comercial para detalles específicos."
    }
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100 py-20 px-8 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#009FE3] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#00B0F0] rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#009FE3] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-[#009FE3] text-[42px] font-bold mb-4">
            Preguntas Frecuentes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#009FE3] to-[#00B0F0] mx-auto rounded-full"></div>
        </div>

        {/* Grid de FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-500 hover:shadow-xl transform hover:scale-105 ${
                openItem === item.id 
                  ? 'border-[#009FE3] shadow-2xl' 
                  : 'border-transparent hover:border-[#009FE3]/30'
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openItem === item.id 
                      ? 'bg-[#009FE3] text-white' 
                      : 'bg-gray-100 text-[#009FE3] group-hover:bg-[#009FE3] group-hover:text-white'
                  }`}>
                    <span className="text-xl font-bold">
                      {openItem === item.id ? '−' : '+'}
                    </span>
                  </div>
                  <h3 className={`font-semibold text-[18px] transition-colors duration-300 ${
                    openItem === item.id ? 'text-[#009FE3]' : 'text-gray-800'
                  }`}>
                    {item.question}
                  </h3>
                </div>
                
                <svg 
                  className={`w-6 h-6 transition-all duration-300 ${
                    openItem === item.id 
                      ? 'text-[#009FE3] rotate-180' 
                      : 'text-gray-400 group-hover:text-[#009FE3]'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openItem === item.id && (
                <div className="px-8 pb-6 animate-fadeIn">
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-gray-600 text-[16px] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQSection; 