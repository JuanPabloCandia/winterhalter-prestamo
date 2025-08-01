const InfoCard = ({ title, description, buttonText = "Solicitar", onButtonClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 flex flex-col transform hover:scale-102 transition-all duration-300 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl relative overflow-hidden hover:bg-gradient-to-br hover:from-white hover:via-blue-50/20 hover:to-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-blue-50/20 to-blue-50/40 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-3 sm:mb-5">
          <h3 className="text-[#009FE3] text-[18px] sm:text-[20px] lg:text-[24px] font-bold mb-2 sm:mb-3 leading-tight">{title}</h3>
          <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-gradient-to-r from-[#00B0F0] to-[#009FE3] rounded-full"></div>
        </div>
        <p className="text-[#525252] text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed mb-4 sm:mb-6 flex-grow">
          {description}
        </p>
        <button 
          className="bg-gradient-to-r from-[#00B0F0] to-[#009FE3] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:from-[#009FE3] hover:to-[#0080C0] transition-all duration-300 transform hover:scale-102 shadow-md hover:shadow-lg text-[14px] sm:text-[15px] lg:text-[16px]"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default InfoCard; 