import React from "react";
import { Home } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useMain } from "../contexts/MainContext";
import ImageSlider from "./ImageSlider";
import ProjectsHeader from "./ProjectHeader";
import ProjectShowcase from "./ProjectShowcase";

const CustomBreadcrumb = () => (
  <nav aria-label="Breadcrumb" className="mb-8">
    <ol className="flex items-center space-x-2">
      <li className="flex items-center">
        <a
          href="/"
          className="text-gray-600 hover:text-black flex items-center group"
        >
          <Home className="h-5 w-5 mr-2" />
          <span className="text-sm uppercase tracking-wider">Home</span>
        </a>
      </li>
      <li className="flex items-center">
        <span className="text-gray-400 mx-2">/</span>
        <span className="text-black text-sm uppercase tracking-wider">
          Projects
        </span>
      </li>
    </ol>
  </nav>
);

const Projects = () => {
  const { loading, error } = useMain();

  return (
    <div className="w-full bg-[#f5f5f5]">
      <Helmet>
        <title>Best Architecture Projects in Jaipur | DSConcept</title>
        <meta
          name="description"
          content="Explore DSConcept's diverse portfolio of architectural projects. From luxury residences to commercial spaces, discover our innovative designs and sustainable solutions."
        />
        <meta
          name="keywords"
          content="DSConcept projects, architectural portfolio, building projects, modern architecture, sustainable design, residential projects, commercial architecture, interior design projects"
        />
        <link rel="canonical" href="https://dsconcept.in/projects" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dipanshu Chauhan" />
        <meta name="publisher" content="DSConcept" />
        <meta
          property="og:title"
          content="DSConcept Projects | Innovative Architectural Designs"
        />
        <meta
          property="og:description"
          content="Browse through our collection of architectural projects showcasing modern design, sustainability, and innovative solutions."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "DSConcept Architectural Projects",
            description:
              "Portfolio of architectural projects by DSConcept Studio",
            provider: {
              "@type": "ArchitectureFirm",
              name: "DSConcept Studio",
              sameAs: "https://dsconcept.in",
            },
            about: {
              "@type": "Thing",
              name: "Architecture and Design Projects",
            },
          })}
        </script>
      </Helmet>

      {/* Hidden SEO Content */}
      <div className="hidden" aria-hidden="true">
        <section>
          <h2>DSConcept</h2>
          <h1>DSConcept Architectural Portfolio</h1>
          <p>
            Welcome to DSConcept's comprehensive project portfolio, showcasing
            our architectural excellence across various domains:
          </p>
          <ul>
            <li>
              Residential Projects: Luxury homes, apartments, and housing
              complexes
            </li>
            <li>
              Commercial Projects: Office buildings, retail spaces, and
              mixed-use developments
            </li>
            <li>
              Institutional Projects: Educational facilities, healthcare
              centers, and public buildings
            </li>
            <li>
              Sustainable Developments: Green buildings and eco-friendly
              architecture
            </li>
          </ul>

          <h3>Our Project Expertise</h3>
          <p>Each project in our portfolio demonstrates our commitment to:</p>
          <ul>
            <li>Innovative Design Solutions</li>
            <li>Sustainable Architecture</li>
            <li>Client-Focused Approach</li>
            <li>Quality Construction</li>
            <li>Timely Delivery</li>
          </ul>

          <h3>Project Categories</h3>
          <ul>
            <li>Modern Residential Architecture</li>
            <li>Contemporary Commercial Spaces</li>
            <li>Sustainable Building Design</li>
            <li>Interior Design Projects</li>
            <li>Landscape Architecture</li>
          </ul>
        </section>
      </div>

      {/* Regular content sections */}
      <ImageSlider />
      <ProjectsHeader />

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 md:px-16 lg:px-32 py-16">
        <CustomBreadcrumb />

        {loading && (
          <div className="flex justify-center items-center h-96">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-black border-t-transparent"></div>
          </div>
        )}

        {error && (
          <div className="text-red-600 p-4 text-center text-xl">
            <p>{error}</p>
          </div>
        )}

        <ProjectShowcase />
      </div>
    </div>
  );
};

export default Projects;
