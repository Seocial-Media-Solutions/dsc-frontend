import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
const InteriorDesignHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2387&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
  ];

  return (
    <div className="min-h-auto   text-white overflow-hidden">
      {/* Background Slideshow */}
      <div className="   absolute inset-0 ">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === activeSlide ? "opacity-60" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#829180]/50 via-[#829180]/20 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            {/* Main Heading */}
            <h1
              className={`text-5xl md:text-7xl font-bold leading-tight  mt-20 transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Interior Design Services
              <span className="block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Crafted For You
              </span>
            </h1>

            {/* Description */}
            <p
              className={`text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Discover how DSConcept transforms homes and businesses with
              innovative, stylish, and functional designs that reflect your
              unique personality.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16 transform transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-400/25 transition-all transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  Explore Our Work
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </span>
              </Link>
              <Link to='/studio' className="border-2 border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all transform hover:scale-105">
                View Design Packages
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteriorDesignHero;
