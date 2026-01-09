import React, { useState } from "react";
import { Check, ArrowRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const ResidentialInteriorDesign = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const projectImages = [
    { id: 1, src: "images/InteriorDesign/3.jpg", alt: "Modern bedroom with neutral tones", category: "Bedroom" },
    { id: 2, src: "images/InteriorDesign/4.jpg", alt: "Minimalist living room", category: "Living Room" },
    { id: 3, src: "images/InteriorDesign/5.jpg", alt: "Luxury bathroom design", category: "Bathroom" },
    { id: 4, src: "images/InteriorDesign/6.jpg", alt: "Modern meditation space", category: "Wellness" },
    { id: 5, src: "images/InteriorDesign/7.jpg", alt: "Contemporary kitchen design", category: "Kitchen" },
    { id: 6, src: "images/InteriorDesign/8.jpg", alt: "Modern dining area", category: "Dining" },
    { id: 7, src: "images/InteriorDesign/9.jpg", alt: "Open concept living space", category: "Living" },
    { id: 8, src: "images/InteriorDesign/10.jpg", alt: "Modern outdoor space", category: "Outdoor" },
    { id: 9, src: "images/InteriorDesign/11.jpg", alt: "Elegant staircase design", category: "Architecture" },
  ];

  const services = [
    "Modern, Minimalist & Aesthetic Designs",
    "Turnkey Home Interior Design",
    "Modular Kitchen Design",
    "Premium Bedroom Interior Design",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
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
                    <div className="absolute top-3 right-3">
                      <Eye className="text-white w-5 h-5 opacity-80" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 lg:pl-8">
            <div className="mb-6">
              <span className="text-amber-600 font-semibold text-sm tracking-wide uppercase mb-3 block">
                Project Type Interior Design
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-stone-800 mb-6 leading-tight">
                Residential Interior Design
              </h1>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Personalized designs that reflect comfort, lifestyle, and function for every corner of your home.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4 mb-10">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-amber-400 rounded-lg flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-200">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <span className="text-stone-700 font-medium group-hover:text-stone-900 transition-colors duration-200">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="group bg-amber-400 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-200 flex items-center justify-center gap-2"
              >
                Explore Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="bg-stone-700 hover:bg-stone-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* SEO & DSConcept Content */}
        <div className="mt-12 space-y-8">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            <a
              href="https://dsconcept.in/"
              className="text-yellow-600 hover:underline"
              target="_self"
              rel="noopener noreferrer"
            >
              DSConcept
            </a>: The Art of Residential Design, Perfected in Jaipur
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            For homeowners in Jaipur, creating a space that reflects the city's royal heritage while catering to modern life is a unique aspiration. <a href="https://dsconcept.in/" className="text-amber-600 hover:underline">DSConcept</a> has established itself as the leading residential interior design company in the Pink City by mastering this very balance.
          </p>

          <h3 className="text-2xl font-semibold text-stone-800">
            A Deeply Local Understanding
          </h3>
          <p className="text-stone-600 text-base leading-relaxed">
            What distinguishes DSConcept in Jaipur's design landscape is their innate grasp of local aesthetics. They skillfully interpret the city's architectural language—drawing from the grandeur of its palaces and the vibrancy of its culture. Their designs often feature subtle elements like contemporary jali patterns, textures reminiscent of sandstone, and a palette inspired by Rajasthan's rich artistry, all while ensuring spaces remain functional and contemporary.
          </p>

          <h3 className="text-2xl font-semibold text-stone-800">
            The Jaipur Home, Perfected
          </h3>
          <p className="text-stone-600 text-base leading-relaxed">
            Living in Jaipur means appreciating light, space, and craftsmanship. DSConcept excels in optimizing these elements. They design homes that are flooded with natural light, incorporate serene courtyards or balconies, and utilize space intelligently to create a sense of openness and tranquility. Their collaborations with local artisans ensure that every custom piece of furniture or decorative element carries a touch of authentic Rajasthani craftsmanship, making each home uniquely rooted in its environment.
          </p>

          <h3 className="text-2xl font-semibold text-stone-800">
            A Seamless Journey from Vision to Reality
          </h3>
          <p className="text-stone-600 text-base leading-relaxed">
            DSConcept offers a comprehensive, stress-free design experience for Jaipur residents. They manage the entire process, from initial concept to final furnishing, ensuring impeccable quality and adherence to timelines. Their deep local knowledge also means they navigate logistics and sourcing with expert efficiency.
          </p>

          <p className="text-stone-600 text-base leading-relaxed">
            For those in Jaipur seeking to create a home that is both a modern sanctuary and a nod to the city's glorious past, DSConcept is the definitive partner. They don’t just design interiors; they create personalized havens that celebrate the spirit of Jaipur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidentialInteriorDesign;
