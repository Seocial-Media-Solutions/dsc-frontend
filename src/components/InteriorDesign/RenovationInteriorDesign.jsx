import React, { useState } from "react";

import { Link } from "react-router-dom";

const RenovationInteriorDesign = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const projectImages = [
    { id: 1, src: "images/RenovationInterior/3.jpg", alt: "Modern bedroom with neutral tones", category: "Bedroom" },
    { id: 2, src: "images/RenovationInterior/4.jpg", alt: "Minimalist living room", category: "Living Room" },
    { id: 3, src: "images/RenovationInterior/5.jpg", alt: "Luxury bathroom design", category: "Bathroom" },
    { id: 4, src: "images/RenovationInterior/6.jpg", alt: "Modern meditation space", category: "Wellness" },
    { id: 5, src: "images/RenovationInterior/7.jpg", alt: "Contemporary kitchen design", category: "Kitchen" },
    { id: 6, src: "images/RenovationInterior/8.jpg", alt: "Modern dining area", category: "Dining" },
    { id: 7, src: "images/RenovationInterior/9.jpg", alt: "Open concept living space", category: "Living" },
    { id: 8, src: "images/RenovationInterior/2.jpg", alt: "Modern outdoor space", category: "Outdoor" },
    { id: 9, src: "images/RenovationInterior/1.jpg", alt: "Elegant staircase design", category: "Architecture" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50 pb-20" >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 gap-4 max-w-xl">
              {projectImages.map((image, index) => (
                <div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square bg-stone-200"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                      hoveredImage === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wide">
                  PROJECT TYPE INTERIOR DESIGN
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Renovation Interior Design
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                Revamp outdated spaces into beautiful, smart, and functional environments with expert design.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              {[
                "Modular Kitchen Renovation",
                "Home Renovation Interior Design",
                "Living Room Renovation",
                "Office Renovation Interior Design",
              ].map((service, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-3 group hover:bg-white hover:shadow-md p-3 rounded-lg transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                to="/projects"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-amber-600 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Explore Our Work
              </Link>

              <Link
                to="/contact"
                className="bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* DSConcept Renovation Content */}
        <div className="mt-12 text-gray-700 space-y-6">
          <h2 className="text-3xl font-bold text-stone-800">
            DSConcept: Mastering the Art of Home Renovation in Jaipur
          </h2>

          <p className="text-base leading-relaxed">
            For homeowners in Jaipur, renovating a space to reflect the city's royal heritage while integrating modern comforts is a specialized challenge. <a href="https://dsconcept.in/" className="text-yellow-600 hover:underline" target="_self" rel="noopener noreferrer">DSConcept</a> has established itself as the leading renovation interior design company in the Pink City by mastering the unique complexities of transforming existing structures.
          </p>

          <h3 className="text-2xl font-semibold text-stone-800">
            Respecting Jaipur's Heritage in Every Renovation
          </h3>
          <p className="text-base leading-relaxed">
            What distinguishes DSConcept in Jaipur's renovation landscape is their respectful approach to older properties. They skillfully honor the original architectural language—whether it's restoring traditional elements or reimagining them for contemporary life. Their renovation projects often feature careful updates like integrating modern functionality behind classic jali patterns, preserving original textures reminiscent of sandstone, and refreshing color palettes inspired by Rajasthan's rich artistry, all while enhancing structural integrity and flow.
          </p>

          <h3 className="text-2xl font-semibold text-stone-800">
            Transforming Existing Spaces with Light and Craftsmanship
          </h3>
          <p className="text-base leading-relaxed">
            Renovating in Jaipur means expertly reworking existing layouts to maximize light, space, and local craftsmanship. DSConcept excels in reconfiguring spaces to flood rooms with natural light, opening up closed areas to create serene balconies or courtyards, and utilizing intelligent storage solutions. Their collaborations with local artisans ensure that any new custom pieces, from built-in furniture to decorative elements, carry a touch of authentic Rajasthani craftsmanship, making the renovated home feel both new and deeply rooted in its environment.
          </p>

          <h3 className="text-2xl font-semibold text-stone-800">
            A Streamlined Renovation Experience
          </h3>
          <p className="text-base leading-relaxed">
            DSConcept offers a comprehensive, stress-free renovation experience. They manage the entire process, from structural assessment and design conceptualization to meticulous execution and final styling. Their deep local knowledge is crucial for navigating the specific challenges of renovating in Jaipur, ensuring that projects meet regulations, timelines, and quality standards seamlessly.
          </p>

          <p className="text-base leading-relaxed">
            For those in Jaipur seeking to transform their current residence into a modern sanctuary that honors the past, DSConcept is the definitive renovation partner. They don’t just redesign interiors; they breathe new life into existing spaces, creating personalized havens that celebrate the spirit of Jaipur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RenovationInteriorDesign;
