import React, { useEffect, useState } from 'react';
import { ArrowRight, Plus, ChevronLeft, ChevronRight, MapPin, Building2, Layout } from 'lucide-react';
import { useMain } from '../contexts/MainContext';
import { useNavigate, useLocation } from 'react-router-dom';

const ArchitecturalProjects = () => {
  const { projects, loading, error, fetchProjects, getImageUrl } = useMain();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const truncateText = (text, wordCount) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...';
    }
    return text;
  };

  const handleViewProject = (projectId) => {
    navigate(`/projects/${projectId}`);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects?.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil((projects?.length || 0) / projectsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">Error loading projects: {error}</div>
      </div>
    );
  }


  return (
    <div className="w-full min-h-screen bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-40">
          {currentProjects?.map((project, index) => (
            <div key={project._id || index} className="relative group">
              <div className="relative">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      className="group/image relative cursor-pointer"
                      onClick={() => handleViewProject(project._id)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          handleViewProject(project._id);
                        }
                      }}
                      aria-label={`View details for ${project.title}`}
                    >
                      <div className="absolute inset-0 z-10">
                        <div className="absolute top-0 left-0 h-0 w-0 border-t-2 border-l-2 border-amber-500 group-hover/image:h-16 group-hover/image:w-16 transition-all duration-500"></div>
                        <div className="absolute top-0 right-0 h-0 w-0 border-t-2 border-r-2 border-amber-500 group-hover/image:h-16 group-hover/image:w-16 transition-all duration-500"></div>
                        <div className="absolute bottom-0 left-0 h-0 w-0 border-b-2 border-l-2 border-amber-500 group-hover/image:h-16 group-hover/image:w-16 transition-all duration-500"></div>
                        <div className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-r-2 border-amber-500 group-hover/image:h-16 group-hover/image:w-16 transition-all duration-500"></div>
                      </div>

                      <div className="aspect-w-16 aspect-h-12 relative overflow-hidden">
                        <img
                          src={getImageUrl(project.mainImage)}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-all duration-500 flex items-center justify-center">
                          <div className="relative flex items-center justify-center">
                            <div className="w-24 h-24 border border-white/50 rounded-full flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-500">
                              <Plus className="w-12 h-12 text-white transform rotate-0 group-hover/image:rotate-90 transition-all duration-500" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
                    {/* Project Number - Hidden on mobile, visible from sm breakpoint */}
                    <div className="absolute hidden sm:block -top-32 lg:-top-28">
                      <span className="font-serif italic font-bold text-[160px] lg:text-[140px] text-gray-100/80">
                        {String(indexOfFirstProject + index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="p-8 lg:p-0 relative mt-8 lg:mt-12">
                      <span className="text-amber-500 font-medium text-sm tracking-wider uppercase mb-4 block">
                        Project {String(indexOfFirstProject + index + 1).padStart(2, '0')}
                      </span>
                      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light mb-8 capitalize tracking-tight">
                        {project.title}
                      </h2>

                      {/* Project Metadata */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                        <div className="flex items-center space-x-2">
                          <Layout className="w-4 h-4 text-amber-500" />
                          <span className="text-sm text-gray-600">{project.projectType || 'Other'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4 text-amber-500" />
                          <span className="text-sm text-gray-600">{project.projectArea || 'Not specified'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-amber-500" />
                          <span className="text-sm text-gray-600">{project.projectLocation || 'Not specified'}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-10 text-justify leading-relaxed text-base lg:text-lg">
                        {truncateText(project.description1, 30)}
                      </p>
                      <button 
                        onClick={() => handleViewProject(project._id)}
                        className="group/btn inline-flex items-center space-x-4 text-black hover:text-amber-500 transition-colors duration-300"
                      >
                        <span className="uppercase tracking-wider text-sm font-medium">
                          View Project
                        </span>
                        <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="w-full flex justify-center items-center mt-40">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-amber-500 hover:bg-amber-50'
                }`}
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`relative w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all duration-200 ${
                      pageNum === currentPage
                        ? 'text-white bg-amber-500 hover:bg-amber-600'
                        : 'text-gray-600 hover:text-amber-500 hover:bg-amber-50'
                    }`}
                    aria-label={`Page ${pageNum}`}
                    aria-current={pageNum === currentPage ? 'page' : undefined}
                  >
                    {pageNum}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:text-amber-500 hover:bg-amber-50'
                }`}
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArchitecturalProjects;