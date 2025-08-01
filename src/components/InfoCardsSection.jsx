import InfoCard from './InfoCard';

const InfoCardsSection = () => {
  const cardsData = [
    {
      title: "Duración de 36 a 72 meses",
      description: "Ofrecemos planes flexibles con duración de 2 a 3 años, según la referencia del equipo"
    },
    {
      title: "Opción de renovación",
      description: "Al final de cada período tienes la opción de renovar con un atractivo descuento"
    },
    {
      title: "Químico de bienvenida gratis",
      description: "Te otorgamos detergentes y abrillantadores incluidos dentro del plan y sin costo adicional."
    },
    {
      title: "30% de descuento por 6 meses",
      description: "En tus primeros 6 meses con Winterhalter, tendrás un descuento en la mensualidad de tu arriendo de un 30%"
    }
  ];

  const handleButtonClick = (title) => {
    console.log(`Botón clickeado para: ${title}`);
    // Aquí puedes agregar la lógica específica para cada tarjeta
  };

  return (
    <section className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0 -top-10 -bottom-60">
        <img 
          src="https://experiencia.winterhalter.com/cl/wp-content/uploads/2024/02/2-1.webp" 
          alt="Persona trabajando en cocina industrial" 
          className="w-full h-full object-contain opacity-20 object-bottom"
        />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-[#525252] text-[20px] sm:text-[24px] lg:text-[28px] font-semibold leading-relaxed">
            Más que un servicio, somos el respaldo técnico y operativo que tu cocina necesita para seguir creciendo.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {cardsData.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              description={card.description}
              onButtonClick={() => handleButtonClick(card.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection; 