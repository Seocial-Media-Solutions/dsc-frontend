import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'images/slide1.jpg',
    smallText: 'WE MAKE SURE',
    mainText: ['Classic', '& Modern'],
    description: 'Creating timeless designs for modern spaces',
    buttonText: 'MORE ABOUT'
  },
  {
    id: 2,
    image: 'images/slide2.jpg',
    smallText: 'WE DESIGN',
    mainText: ['Innovative', '& Bold'],
    description: 'Pushing boundaries in architectural excellence',
    buttonText: 'DISCOVER'
  },
  {
    id: 3,
    image: 'images/slide3.jpg',
    smallText: 'WE CREATE',
    mainText: ['Unique', '& Lasting'],
    description: 'Building tomorrow\'s landmarks today',
    buttonText: 'EXPLORE'
  }
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('right');

  const changeSlide = useCallback((index, dir) => {
    if (!isAnimating) {
      setDirection(dir);
      setIsAnimating(true);
      setCurrentSlide(index);
    }
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    changeSlide(nextIndex, 'right');
  }, [currentSlide, changeSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(prevIndex, 'left');
  }, [currentSlide, changeSlide]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const autoSlideTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlideTimer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen mt-20 overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const wasActive = index === (currentSlide - 1 + slides.length) % slides.length;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isActive
                ? 'opacity-100 translate-x-0 scale-100'
                : direction === 'right'
                ? wasActive
                  ? 'opacity-0 -translate-x-full scale-95'
                  : 'opacity-0 translate-x-full scale-105'
                : wasActive
                ? 'opacity-0 translate-x-full scale-105'
                : 'opacity-0 -translate-x-full scale-95'
            }`}
          >
            {/* Background Image with Zoom Effect */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`Slide ${slide.id}`}
                className={`w-full h-full object-cover transition-transform duration-10000 ease-out ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            </div>

            {/* Large Number - Moved to top right */}
            <div className={`absolute top-8 right-4 sm:right-8 md:right-16 lg:right-32 text-8xl sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-white/10 transition-all duration-1000 leading-none ${
              isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}>
              0{slide.id}
            </div>

            {/* Content */}
            <div className="relative h-full max-w-8xl mx-auto px-4 sm:px-6 md:px-16 lg:px-32 flex items-center">
              <div className="max-w-3xl">
                {/* Text Content */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <p className={`text-[#829280] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-xs sm:text-sm font-medium transition-all duration-700 delay-300 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {slide.smallText}
                  </p>
                  <h2 className="text-white space-y-2 sm:space-y-4">
                    {slide.mainText.map((line, i) => (
                      <div
                        key={i}
                        className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-none transition-all duration-700 ${
                          isActive 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-16'
                        }`}
                        style={{ transitionDelay: `${500 + i * 200}ms` }}
                      >
                        {line}
                      </div>
                    ))}
                  </h2>
                  <p className={`text-gray-300 text-base sm:text-lg md:text-xl max-w-xl transition-all duration-700 delay-700 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {slide.description}
                  </p>
                  <div className={`pt-4 sm:pt-6 md:pt-8 transition-all duration-700 delay-1000 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    <button className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 bg-[#829280] hover:bg-[#829280] transition-colors duration-300">
                      <span className="relative z-10 text-black text-xs sm:text-sm tracking-[0.2em] font-medium">
                        {slide.buttonText}
                      </span>
                      <div className="absolute inset-0 w-0 bg-white transition-all duration-300 group-hover:w-full" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 sm:bottom-12 right-4 sm:right-8 md:right-16 lg:right-32 flex space-x-4 sm:space-x-6">
        <button
          onClick={prevSlide}
          className="p-2 sm:p-3 text-white hover:text-[#829280] transition-colors relative group"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:-translate-x-1" />
          <div className="absolute inset-0 border border-white/20 transition-all group-hover:border-[#829280]" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 sm:p-3 text-white hover:text-[#829280] transition-colors relative group"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 border border-white/20 transition-all group-hover:border-[#829280]" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-8 md:left-16 lg:left-32 flex space-x-3 sm:space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => !isAnimating && changeSlide(index, index > currentSlide ? 'right' : 'left')}
            className="group relative h-8 sm:h-12 flex items-center"
          >
            <div className={`w-8 sm:w-12 h-0.5 transition-all duration-300 ${
              index === currentSlide ? 'bg-[#829280] w-12 sm:w-16' : 'bg-white/30 group-hover:bg-white/50'
            }`} />
            <span className={`absolute -top-6 text-xs sm:text-sm text-white opacity-0 transition-opacity duration-300 ${
              index === currentSlide ? 'opacity-100' : 'group-hover:opacity-100'
            }`}>
             
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;