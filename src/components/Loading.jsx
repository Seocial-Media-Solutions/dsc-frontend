import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="border-t border-black" style={{top: `${i * 10}%`}} />
        ))}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute border-l border-black h-full" 
            style={{left: `${i * 10}%`}} 
          />
        ))}
      </div>

      {/* Central Loading Animation */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Architectural Loading Shape */}
        <div className="relative w-32 h-32">
          {/* Rotating Square */}
          <div className="absolute inset-0 border-2 border-black animate-[spin_3s_linear_infinite]" />
          
          {/* Inner Square */}
          <div className="absolute inset-4 border-2 border-black animate-[spin_3s_linear_infinite_reverse]" />
          
          {/* Central Square */}
          <div className="absolute inset-8 bg-black animate-pulse" />
        </div>

        {/* Loading Text */}
        <div className="mt-12 font-light tracking-[0.3em] uppercase text-lg">
          Loading
          <span className="animate-pulse">.</span>
          <span className="animate-pulse delay-300">.</span>
          <span className="animate-pulse delay-600">.</span>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm font-light tracking-wider">
        <div className="overflow-hidden">
          <div className="animate-slideUp">
            DESIGN
          </div>
        </div>
        <div className="overflow-hidden mt-1">
          <div className="animate-slideUp delay-300">
            ARCHITECTURE
          </div>
        </div>
        <div className="overflow-hidden mt-1">
          <div className="animate-slideUp delay-600">
            INNOVATION
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;