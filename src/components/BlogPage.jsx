import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/blogs.json');
        const data = await response.json();
        // Sort blogs by date (most recent first)
        const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogs(sortedBlogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F5F7F5]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F7F5] min-h-screen">
      <Helmet>
        <title>Blog - DSConcept Best Interior Design & Architecture in Jaipur</title>
        <meta name="description" content="Explore the latest articles on interior design, architecture, and home improvement from DSConcept, the leading design firm in Jaipur." />
        <meta name="keywords" content="interior design blog, architecture blog, home design, DSConcept, Jaipur" />
        <link rel="canonical" href={window.location.href} />
        <meta property="og:title" content="Blog - DSConcept Interior Design & Architecture" />
        <meta property="og:description" content="Explore the latest articles on interior design, architecture, and home improvement from DSConcept, the leading design firm in Jaipur." />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
         <meta name="robots" content="index, follow" />
        <meta name="author" content="Dipanshu Chauhan" />
        <meta name="publisher" content="DSConcept" />
      </Helmet>

      <div className="container mx-auto px-4 mt-24 py-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, trends, and inspiration from Jaipur's leading interior design and architecture firm
          </p>
        </header>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentBlogs.map((blog) => (
            <article 
              key={blog.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/blog/${blog.slug}`} className="block">
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <img
                    src={blog.image || '/images/placeholder.jpg'}
                    alt={blog.alt || blog.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.author}</span>
                </div>
                
                <Link to={`/blog/${blog.slug}`} className="block">
                  <h2 className="text-xl font-semibold text-gray-800 mb-3 hover:text-green-600 transition-colors duration-200">
                    {blog.heading}
                  </h2>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/blog/${blog.slug}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className={`px-3 py-2 rounded-md ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-300'
                } transition-colors duration-200`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                  {page === '...' ? (
                    <span className="px-3 py-2 text-gray-500">...</span>
                  ) : (
                    <button
                      onClick={() => goToPage(page)}
                      className={`px-3 py-2 rounded-md ${
                        currentPage === page
                          ? 'bg-green-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-300'
                      } transition-colors duration-200`}
                    >
                      {page}
                    </button>
                  )}
                </React.Fragment>
              ))}

              {/* Next Button */}
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 rounded-md ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600 border border-gray-300'
                } transition-colors duration-200`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Page Info */}
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, blogs.length)} of {blogs.length} articles
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;