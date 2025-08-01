import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  const benefitsData = [
    {
      title: "Ahorro De Agua:",
      description: "Reduce el consumo de agua hasta un 83% en comparación con el lavado manual. Contribuye al cuidado del medio ambiente mientras optimizas tus operaciones.",
      metric: "600",
      metricDescription: "Clientes satisfechos en Cono Sur"
    },
    {
      title: "Menor Consumo En Detergentes",
      description: "Experimenta un ahorro del 60% en detergentes y químicos gracias a la concentración excepcional de los productos Winterhalter y su <span className='font-bold'>dosificación precisa</span>",
      metric: "82",
      metricDescription: "Ahorro en agua frente al lavado manual"
    },
    {
      title: "Higiene Y Desinfección Garantizada",
      description: "La termodesinfección a través de temperaturas superiores a 80°C asegura la eliminación de bacterias, virus y suciedad. Brinda la mayor seguridad alimentaria a tus clientes.",
      metric: "60%",
      metricDescription: "Ahorro en detergente frente al lavado manual"
    },
    {
      title: "Reducción En Tiempos De Lavado",
      description: "Nuestros equipos pueden lavar y secar hasta 22 platos en 2 minutos. Reduciendo hasta un 70% en los tiempos que llevaría realizar esta misma operación con el lavado manual. <span className='font-bold'>Maximiza la eficiencia en la operación de tu cocina.</span>",
      metric: "x4",
      metricDescription: "Aumento en la eficiencia de la Zona de Lavado"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#009FE3] relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#009FE3] via-[#00B0F0] to-[#0080C0] opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-white text-[24px] sm:text-[30px] lg:text-[36px] font-bold mb-4">
            ¿Por qué elegir un lavavajillas Winterhalter?
          </h2>
          <p className="text-white text-[16px] sm:text-[17px] lg:text-[18px] leading-relaxed max-w-3xl mx-auto">
            Descubre los beneficios que hacen de Winterhalter la elección preferida para cocinas profesionales en todo el Cono Sur.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-4">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="relative">
              <BenefitCard
                title={benefit.title}
                description={benefit.description}
                metric={benefit.metric}
                metricDescription={benefit.metricDescription}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 