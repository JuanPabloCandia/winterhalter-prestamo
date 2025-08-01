import InfoCardDark from './InfoCardDark';

const InfoCardsDarkSection = () => {
  const cardsData = [
    {
      title: "Transforma el Lavado Manual con Tecnología",
      description: "El lavado manual sigue siendo la norma en restaurantes de Chile y Latinoamérica. La tecnología aún no ha llegado al área de lavado, ¡hasta ahora!",
      buttonText: "QUIERO MÁS INFORMACIÓN",
      backgroundImage: "https://experiencia.winterhalter.com/cl/wp-content/uploads/2024/02/alquiler.webp"
    },
    {
      title: "Maximiza la eficiencia en la operación de tu cocina",
      description: "El lavado manual no solo es ineficiente, sino que también consume tiempo valioso. Nuestros equipos Winterhalter maximizan el ahorro y la eficiencia en tu cocina.",
      buttonText: "QUIERO SABER MÁS",
      backgroundImage: "https://experiencia.winterhalter.com/cl/wp-content/uploads/2024/02/alquiler16.webp"
    },
    {
      title: "Reduce la Rotación de Personal en tu cocina",
      description: "La rotación de personal es un problema común debido al desgaste del lavado de platos a mano. Nos encargamos del lavado para que tu personal se enfoque en el sabor de la comida.",
      buttonText: "DESCUBRIR CÓMO",
      backgroundImage: "https://experiencia.winterhalter.com/cl/wp-content/uploads/2024/02/alquiler-17-2.webp"
    }
  ];

  const handleButtonClick = (title) => {
    console.log(`Botón clickeado para: ${title}`);
    // Aquí puedes agregar la lógica específica para cada tarjeta
  };

  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <InfoCardDark
              key={index}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              backgroundImage={card.backgroundImage}
              onButtonClick={() => handleButtonClick(card.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsDarkSection; 