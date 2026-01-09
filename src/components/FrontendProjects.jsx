import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft, MapPin, Building2, Layout } from 'lucide-react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { useMain } from '../contexts/MainContext';

const ProjectFrontend = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { fetchProjectById, getImageUrl, loading } = useMain();
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Add scroll to top effect when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const getAllImages = useCallback(() => {
    if (!project) return [];
    return [project.mainImage, ...project.otherImages].map(img => ({
      url: getImageUrl(img),
      alt: project.title
    }));
  }, [project, getImageUrl]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const nextLightboxImage = useCallback(() => {
    const images = getAllImages();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  }, [getAllImages]);

  const prevLightboxImage = useCallback(() => {
    const images = getAllImages();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [getAllImages]);

  const nextSlide = useCallback(() => {
    const images = getAllImages();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [getAllImages]);

  const prevSlide = useCallback(() => {
    const images = getAllImages();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [getAllImages]);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await fetchProjectById(id);
        if (data) {
          setProject(data);
          // Ensure we're at the top when project loads
          window.scrollTo(0, 0);
        }
      } catch (error) {
        console.error('Error loading project:', error);
      }
    };
    loadProject();
  }, [id, fetchProjectById]);

  useEffect(() => {
    if (!project || isLightboxOpen) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % getAllImages().length);
    }, 5000);

    return () => clearInterval(interval);
  }, [project, isLightboxOpen, getAllImages]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen, nextLightboxImage, prevLightboxImage, closeLightbox]);

  if (loading || !project) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  const images = getAllImages();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">


      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top- left-6 z-50 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
        aria-label="Go back"
      >
        <ArrowLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Image Slider */}
      <div className="relative w-full h-[80vh] overflow-hidden bg-gray-900">
        <div 
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full relative group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-all duration-300 backdrop-blur-sm group"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-all duration-300 backdrop-blur-sm group"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 
                ${index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

            {/* Navigation */}
            <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="text-sm font-medium">
          <ol className="flex items-center space-x-2">
            <li><Link to="/" className="text-[#829280] hover:text-blue-800 transition-colors">Home</Link></li>
            <li className="text-gray-500">/</li>
            <li><Link to="/projects" className="text-[#829280] hover:text-blue-800 transition-colors">Projects</Link></li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-800 capitalize">{project.title}</li>
          </ol>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 capitalize leading-tight">
              {project.title}
            </h1>
            <div className="w-24 h-1 bg-[#829280]"></div>
            
            {/* Project Details Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {/* Project Type Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <Layout className="w-5 h-5 text-[#829280]" />
                  <h3 className="text-sm font-semibold text-gray-600">Project Type</h3>
                </div>
                <p className="text-gray-800 capitalize">{project.projectType}</p>
              </div>

              {/* Project Area Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <Building2 className="w-5 h-5 text-[#829280]" />
                  <h3 className="text-sm font-semibold text-gray-600">Project Area</h3>
                </div>
                <p className="text-gray-800">{project.projectArea}</p>
              </div>

              {/* Project Location Card */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#829280]" />
                  <h3 className="text-sm font-semibold text-gray-600">Location</h3>
                </div>
                <p className="text-gray-800">{project.projectLocation}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="space-y-8 text-lg text-gray-600 text-justify leading-relaxed">
            <p>{project.description1}</p>
            <p>{project.description2}</p>
          </div>
        </div>
      </div>
      {/* New Image Grid Section */}
      <div className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="text-gray-600 font-semibold text-xs sm:text-sm tracking-[0.35em] uppercase mb-3">
              PROJECT GALLERY
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-16">
              Explore Project Details
            </h2>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-6 sm:grid-rows-6 gap-4 auto-rows-[300px] sm:h-[800px]">
            {/* First tall image */}
            {images[0] && (
              <div 
                className="sm:col-span-2 sm:row-span-6 relative group cursor-pointer overflow-hidden"
                onClick={() => openLightbox(0)}
              >
                <img 
                  src={images[0].url}
                  alt={images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-0 sm:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    View Image
                  </h3>
                </div>
              </div>
            )}

            {/* Second tall image */}
            {images[1] && (
              <div 
                className="sm:col-span-2 sm:row-span-6 sm:col-start-3 relative group cursor-pointer overflow-hidden"
                onClick={() => openLightbox(1)}
              >
                <img 
                  src={images[1].url}
                  alt={images[1].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-0 sm:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    View Image
                  </h3>
                </div>
              </div>
            )}

            {/* First short image */}
            {images[2] && (
              <div 
                className="sm:col-span-2 sm:row-span-3 sm:col-start-5 relative group cursor-pointer overflow-hidden"
                onClick={() => openLightbox(2)}
              >
                <img 
                  src={images[2].url}
                  alt={images[2].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-0 sm:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    View Image
                  </h3>
                </div>
              </div>
            )}

            {/* Second short image */}
            {images[3] && (
              <div 
                className="sm:col-span-2 sm:row-span-3 sm:col-start-5 sm:row-start-4 relative group cursor-pointer overflow-hidden"
                onClick={() => openLightbox(3)}
              >
                <img 
                  src={images[3].url}
                  alt={images[3].alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 sm:bg-opacity-0 sm:group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-2xl sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 px-4 text-center">
                    View Image
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>



      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div className="fixed top-8 right-8">
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="text-white/90 hover:text-white transition-colors duration-300 p-2 rounded-full"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <div className="fixed left-8 top-1/2 -translate-y-1/2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightboxImage();
              }}
              className="text-white/90 hover:text-white transition-colors duration-300 p-2 rounded-full"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
          </div>

          <div className="fixed right-8 top-1/2 -translate-y-1/2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightboxImage();
              }}
              className="text-white/90 hover:text-white transition-colors duration-300 p-2 rounded-full"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>

          <div 
            className="relative max-w-[80vw] max-h-[80vh]"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].alt}
              className="max-h-[80vh] max-w-[80vw] object-contain rounded-lg"
            />
            
            {/* Image counter */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/90 font-medium">
              {lightboxIndex + 1} of {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFrontend;