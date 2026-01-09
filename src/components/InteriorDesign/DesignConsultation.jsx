import React, { useState } from "react";
import { Link } from "react-router-dom";

const DesignConsultation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=" relative min-h-screen overflow-hidden 
"
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f5f5f4;stop-opacity:1" /><stop offset="100%" style="stop-color:%23e7e5e4;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23bg)"/><g opacity="0.1"><rect x="50" y="100" width="200" height="300" fill="%23a8a29e" rx="10"/><rect x="300" y="150" width="150" height="200" fill="%23a8a29e" rx="8"/><rect x="500" y="120" width="180" height="250" fill="%23a8a29e" rx="12"/><rect x="750" y="180" width="120" height="180" fill="%23a8a29e" rx="6"/><circle cx="950" cy="200" r="80" fill="%23a8a29e"/><rect x="100" y="450" width="300" height="40" fill="%23a8a29e" rx="20"/><rect x="450" y="480" width="200" height="35" fill="%23a8a29e" rx="17"/><rect x="700" y="460" width="250" height="45" fill="%23a8a29e" rx="22"/></g></svg>')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#829180]/90 via-[#829180]/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* Header Tag */}
        <div className="mb-8 animate-fade-in">
          <span className="inline-block px-6 py-2 text-sm font-semibold tracking-widest text-amber-400 uppercase bg-amber-400/10 rounded-full border border-amber-400/20 backdrop-blur-sm">
            Let's Talk Design
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slide-up">
          Start Your Home Journey With A{" "}
          <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Free Design
          </span>
          <br />
          Consultation
        </h1>

        {/* Subheading */}
        <div className="mb-4 animate-slide-up delay-300">
          <p className="text-xl md:text-2xl text-stone-200 font-light">
            No pressure. No obligations — just expert guidance.
          </p>
        </div>

        {/* Description */}
        <div className="mb-12 animate-slide-up delay-500">
          <p className="max-w-4xl text-lg md:text-xl text-stone-300 leading-relaxed">
            Book your session with our interior design specialists and begin
            transforming your space with
            <br />
            personalized advice tailored to your vision and lifestyle.
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-slide-up delay-700">
          <button
            className={`
              relative px-12 py-4 text-lg font-semibold text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 
              rounded-full transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-2xl 
              hover:shadow-amber-500/25 group overflow-hidden
              ${
                isHovered
                  ? "shadow-2xl shadow-amber-500/30"
                  : "shadow-lg shadow-amber-500/20"
              }
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Button Content */}
            <Link to='/contact' className="relative z-10 flex items-center gap-3">
              Book Free Consultation
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? "translate-x-1" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 animate-fade-in delay-1000">
          <div className="flex flex-wrap justify-center items-center gap-8 text-stone-800 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Expert Designers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>100% Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-amber-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Flexible Scheduling</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-700 {
          animation-delay: 0.7s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default DesignConsultation;
