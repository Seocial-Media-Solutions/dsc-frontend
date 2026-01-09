import React from 'react';
import { PencilRuler, Hammer, Wrench } from 'lucide-react';

const ProjectsHeader = () => {
  return (
    <div className="relative bg-white">
      {/* Top Pattern Divider */}
      <div 
        className="w-full h-8 bg-repeat-x"
        style={{
          backgroundImage: `url("images/divider-dark.png")`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="bg-white py-8 sm:py-12 md:py-16 px-4 md:px-16 lg:px-32">
        {/* Icons Row */}
        <div className="flex justify-center space-x-8 sm:space-x-12 md:space-x-16 mb-8 sm:mb-12 md:mb-16">
          <PencilRuler 
            size={32} 
            className="text-[#829280] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
            strokeWidth={1.5}
          />
          <Hammer 
            size={32} 
            className="text-[#829280] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
            strokeWidth={1.5}
          />
          <Wrench 
            size={32} 
            className="text-[#829280] w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
            strokeWidth={1.5}
          />
        </div>

        {/* Text Content */}
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-justify leading-relaxed text-gray-800">
          Every great project starts with a vision. It's the dedication, skill, and passion that transform ideas into reality, shaping a better tomorrow through innovation and creativity.
          </p>
        </div>

        {/* Projects Title */}
        <div className="mt-12 sm:mt-16 md:mt-24 text-center">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black">
              PROJECTS
            </h2>
            <div className="mt-4 flex justify-center">
              <svg 
                width="48" 
                height="8" 
                viewBox="0 0 48 8" 
                fill="none" 
                className="text-black w-32 sm:w-36 md:w-48"
              >
                <path 
                  d="M0 4L48 4M44 1L47 4L44 7" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHeader;