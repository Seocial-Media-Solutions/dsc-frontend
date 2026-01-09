import React from 'react';

const InteriorDesignServices = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4V5z" />
        </svg>
      ),
      title: "Designing",
      description: "Our Interior designing process include:",
      features: [
        "Space planning & Furniture layout plan",
        "High Quality 3D images for better visualization",
        "2D Working Drawings"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "Designing & Consultancy",
      description: "Our designing and consultancy process include:",
      features: [
        "Complete Designing process",
        "Site Visits",
        "Site Supervision",
        "Material Selections",
        "Brand Selections"
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Turnkey Execution & Completion",
      description: "Our Interior designing execution and completion process include:",
      features: [
        "Complete Designing process",
        "Complete Consultancy process"
      ],
      additionalText: "The project work will be executed by our team including material & labor on a turnkey basis."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 relative">
      {/* Header */}
      <div className="text-center py-16 px-4">
        <div className="text-yellow-600 font-medium text-sm tracking-wider mb-4">
          DSConcept DESIGN SERVICES
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
         Interior Design Services For Every Space
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          End-to-end interior solutions for residential, commercial, and renovation spaces.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 mx-auto">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Additional Text */}
              {service.additionalText && (
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {service.additionalText}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Book Consultation Button at the Bottom */}
        <div className="mt-12 text-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-4 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={scrollToTop}
          className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-200 to-transparent rounded-full opacity-30 -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-orange-200 to-transparent rounded-full opacity-30 translate-y-24 -translate-x-24"></div>
    </div>
  );
};

export default InteriorDesignServices;
