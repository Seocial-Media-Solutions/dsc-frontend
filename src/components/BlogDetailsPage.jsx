import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const response = await fetch("/blogs.json");
        const data = await response.json();

        const post = data.find((item) => item.slug === slug);

        if (!post) {
          setError("Blog post not found");
          setLoading(false);
          return;
        }

        setBlog(post);

        // Find related posts (posts with similar tags)
        const related = data
          .filter(
            (item) =>
              item.id !== post.id &&
              item.tags.some((tag) => post.tags.includes(tag))
          )
          .slice(0, 3);

        setRelatedPosts(related);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Failed to load blog post");
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogPost();
      // Scroll to top when slug changes
      window.scrollTo(0, 0);
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F5F7F5]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-[#F5F7F5] flex flex-col justify-center items-center px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {error || "Blog post not found"}
        </h1>
        <p className="text-gray-600 mb-6">
          The blog post you're looking for might have been moved or deleted.
        </p>
        <Link
          to="/blog"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  // Create a properly formatted title with the company name
  const pageTitle = `${blog.title}`;

  return (
    <div className="bg-[#F5F7F5] min-h-screen mt-24">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.tags.join(", ")} />
        <link rel="canonical" href={`https://dsconcept.in/blog/${slug}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:url" content={`https://dsconcept.in/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta
          property="og:image"
          content={`https://dsconcept.in${blog.image}`}
        />
        <meta property="article:published_time" content={blog.date} />
        <meta property="article:author" content={blog.author} />
        {blog.tags.map((tag, index) => (
          <meta key={index} property="article:tag" content={tag} />
        ))}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dipanshu Chauhan" />
        <meta name="publisher" content="DSConcept" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-xs text-gray-600 mb-8">
          <ol className="list-none p-0 flex flex-wrap">
            <li className="flex items-center">
              <Link to="/" className="hover:text-green-600 transition-colors">
                Home
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link
                to="/blog"
                className="hover:text-green-600 transition-colors"
              >
                Blog
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mx-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="text-gray-400 truncate max-w-xs">{blog.heading}</li>
          </ol>
        </nav>

        <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-7xl mx-auto">
          {/* Featured image */}
          <div className="h-72 md:h-[450px] bg-gray-200 relative">
            <img
              src={blog.image || "/images/placeholder.jpg"}
              alt={blog.alt || blog.title}
              className="w-full h-full object-fit"
            />
          </div>

          {/* Blog header */}
          <div className="p-6 md:p-10">
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

            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {blog.heading}
            </h1>

            <div className="flex items-center text-sm text-gray-500 mb-10">
              <span>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="mx-2">•</span>
              <span>{blog.author}</span>
            </div>

            {/* Blog content with enhanced typography styling */}
            <div
              className="prose prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Social sharing */}
            <div className="mt-12 pt-6 border-t border-gray-100">
              <h3 className="text-lg text-gray-700 font-medium mb-3">
                Share this article
              </h3>
              <div className="flex space-x-4">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    `https://dsconcept.in/blog/${slug}`
                  )}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-400 transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    `https://dsconcept.in/blog/${slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://dsconcept.in/blog/${slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-700 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <img
                        src={post.image || "/images/placeholder.jpg"}
                        alt={post.alt || post.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  <div className="p-5">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>

                    <Link to={`/blog/${post.slug}`} className="block">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-green-600 transition-colors duration-200">
                        {post.heading}
                      </h3>
                    </Link>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium mt-2"
                    >
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog */}
        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all articles
          </Link>
        </div>
      </div>

      {/* CSS for blog content */}
      <style jsx global>{`
        .blog-content h1 {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-top: 2rem;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        .blog-content h2 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 2rem;
          margin-bottom: 1.25rem;
          color: #1f2937;
        }

        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          line-height: 1.4;
          margin-top: 1.75rem;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        .blog-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.5;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #1f2937;
        }

        .blog-content h5 {
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.5;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #1f2937;
        }

        .blog-content h6 {
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #1f2937;
        }

        .blog-content p {
          font-size: 1.125rem;
          line-height: 1.7;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          color: #4b5563;
        }

        .blog-content ul,
        .blog-content ol {
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          color: #4b5563;
        }

        .blog-content li {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 1.125rem;
          line-height: 1.6;
        }

        .blog-content ul li {
          list-style-type: disc;
        }

        .blog-content ol li {
          list-style-type: decimal;
        }

        .blog-content a {
          color: #059669;
          text-decoration: underline;
          text-underline-offset: 2px;
        }

        .blog-content a:hover {
          color: #047857;
        }

        .blog-content strong {
          font-weight: 600;
          color: #111827;
        }

        .blog-content blockquote {
          border-left: 4px solid #10b981;
          padding-left: 1rem;
          font-style: italic;
          margin-left: 0;
          margin-right: 0;
          color: #6b7280;
        }

        .blog-content code {
          background-color: #f3f4f6;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          color: #ef4444;
        }

        .blog-content pre {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.375rem;
          overflow-x: auto;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.375rem;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
};

export default BlogDetailPage;
