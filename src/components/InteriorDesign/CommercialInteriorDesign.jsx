import React from "react";

const CommercialInteriorDesign = () => {
  const services = [
    "Office Interior Design",
    "Retail Showroom Design",
    "Hospitality Spaces (Hotels, Cafes, Restaurants)",
    "Healthcare Interiors (Hospitals, Clinics)",
  ];

  const portfolioImages = [
    { id: 1, alt: "Modern office reception area with wooden slat walls", src: "/images/CommercialInterior/1.jpg" },
    { id: 2, alt: "Contemporary office lounge with neutral tones", src: "/images/CommercialInterior/2.jpg" },
    { id: 3, alt: "Glass-walled conference room with modern furniture", src: "/images/CommercialInterior/3.jpg" },
    { id: 4, alt: "Open plan office space with wooden accents", src: "/images/CommercialInterior/4.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-amber-600 font-medium text-sm tracking-wider uppercase">
                Project Type Interior Design
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Commercial Interior Design
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform workspaces with functional, modern designs that enhance productivity and client experience.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-500 rounded-sm flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg">{service}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Explore Our Work
              </button>
              <button className="px-8 py-3 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Right Portfolio Grid */}
          <div className="grid grid-cols-2 gap-4">
            {portfolioImages.map((image) => (
              <div
                key={image.id}
                className="aspect-square rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DSConcept SEO Content */}
        <div className="mt-12 space-y-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            DSConcept: Elevating Business Spaces with Premier Commercial Interior Design in Jaipur
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            In Jaipur's competitive business landscape, a workspace must be more than just functional—it should reflect your brand's identity while inspiring productivity and growth. <a href="https://dsconcept.in/" className="text-amber-600 hover:underline">DSConcept</a> has established itself as the leading commercial interior design company in the Pink City, specializing in creating environments that perfectly balance aesthetic appeal with operational efficiency.
          </p>

          <h3 className="text-2xl font-semibold text-stone-800">Blending Jaipur's Heritage with Modern Business Needs</h3>
          <p className="text-stone-600 text-base leading-relaxed">
            DSConcept brings a unique understanding of Jaipur's architectural heritage to commercial spaces. They skillfully incorporate elements of Rajasthani design—such as contemporary jali work, traditional patterns, and local craftsmanship—into modern offices, retail spaces, and hospitality venues. This approach creates commercial environments that are both culturally rooted and professionally sophisticated, helping businesses make a memorable impression on clients and employees alike.
          </p>

          <h3 className="text-2xl font-semibold text-stone-800">Designing for Productivity and Brand Identity</h3>
          <p className="text-stone-600 text-base leading-relaxed">
            Every commercial project by DSConcept is tailored to enhance workflow, team collaboration, and brand representation. They specialize in space optimization, ensuring that layouts promote efficiency while maintaining visual appeal. Whether designing corporate offices that foster innovation, retail spaces that drive customer engagement, or hospitality venues that offer unique experiences, DSConcept focuses on creating environments that support business objectives and strengthen brand presence.
          </p>

          <h3 className="text-2xl font-semibold text-stone-800">End-to-End Commercial Project Excellence</h3>
          <p className="text-stone-600 text-base leading-relaxed">
            DSConcept manages commercial projects with precision and professionalism, handling everything from initial concept development to final execution. Their comprehensive service includes space planning, material selection, contractor coordination, and timely project delivery—all while minimizing business disruption. Their expertise in local regulations and sourcing ensures seamless implementation tailored to Jaipur's commercial landscape.
          </p>

          <p className="text-stone-600 text-base leading-relaxed">
            For businesses in Jaipur seeking to transform their commercial spaces into powerful assets that drive success, DSConcept offers the perfect partnership. They create work environments that not only impress but also inspire performance, establishing new standards for commercial interior design in the Pink City.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommercialInteriorDesign;
