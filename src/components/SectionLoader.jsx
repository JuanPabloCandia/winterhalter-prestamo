import React from 'react';

const SectionLoader = () => {
  return (
    <div className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="max-w-6xl mx-auto">
        {/* Skeleton para el título */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="h-6 sm:h-8 bg-gray-200 rounded-lg w-3/4 mx-auto mb-4"></div>
          <div className="h-8 sm:h-12 bg-gray-200 rounded-lg w-1/2 mx-auto mb-4 sm:mb-6"></div>
          <div className="h-3 sm:h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
        </div>
        
        {/* Skeleton para el contenido */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
              <div className="h-4 sm:h-6 bg-gray-200 rounded mb-3 sm:mb-4"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 sm:h-4 bg-gray-200 rounded w-3/4 mb-4 sm:mb-6"></div>
              <div className="h-8 sm:h-10 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionLoader; 