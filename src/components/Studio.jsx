import React from "react";
import { Home } from "lucide-react";
import ApproachProcess from "./ApproachProcess";
import ServicesSection from "./ServicesSection";
import { Helmet } from "react-helmet-async";

const CustomBreadcrumb = () => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li className="flex items-center">
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </a>
        </li>
        <li className="flex items-center">
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-gray-900">Studio</span>
        </li>
      </ol>
    </nav>
  );
};

const Studio = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>DSC Concept Studio | About Our Architectural Design Firm</title>
        <meta
          name="description"
          content="DSC Concept Studio, led by Ar. Dipanshu Chauhan, specializes in innovative architecture, interior design, and landscape solutions. Discover our vision for transformative spaces."
        />
        <meta
          name="keywords"
          content="DSConcept Studio, Dipanshu Chauhan architect, architectural design firm, interior design, landscape design, sustainable architecture, modern architecture, Indian architects"
        />

        <link rel="canonical" href="https://dsconcept.in/studio" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dipanshu Chauhan" />
        <meta name="publisher" content="DSConcept" />
        <meta
          property="og:title"
          content="DSConcept Studio | Leading Architectural Design Firm"
        />
        <meta
          property="og:description"
          content="Experience innovative architectural design with DSC Concept Studio. Led by Ar. Dipanshu Chauhan, we create spaces that inspire and transform."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ArchitectureFirm",
            name: "DSC Concept Studio",
            founder: {
              "@type": "Person",
              name: "Dipanshu Chauhan",
              jobTitle: "Principal Architect",
            },
            description:
              "Innovative architectural design studio specializing in modern and sustainable architecture",
            areaServed: "India",
            serviceType: [
              "Architecture",
              "Interior Design",
              "Landscape Design",
            ],
            knowsAbout: [
              "Sustainable Architecture",
              "Modern Design",
              "Interior Design",
              "Landscape Architecture",
            ],
          })}
        </script>
      </Helmet>

      {/* Hidden SEO Content */}
      <div className="hidden" aria-hidden="true">
        <section>
          <h2>About DSC Concept Studio</h2>
          <p>
            Founded by Ar. Dipanshu Chauhan, DSC Concept Studio is a leading
            architectural firm specializing in:
          </p>
          <ul>
            <li>Contemporary architectural design</li>
            <li>Sustainable building solutions</li>
            <li>Innovative interior design</li>
            <li>Landscape architecture</li>
            <li>Urban planning and development</li>
          </ul>
          <h3>Our Expertise</h3>
          <p>
            With years of experience in architectural design, our team
            specializes in:
          </p>
          <ul>
            <li>
              Residential Architecture: Luxury homes and multi-family
              developments
            </li>
            <li>Commercial Projects: Office spaces and retail developments</li>
            <li>
              Institutional Buildings: Educational and healthcare facilities
            </li>
            <li>Sustainable Design: Green building and LEED certification</li>
          </ul>
          <h3>Awards and Recognition</h3>
          <p>
            DSC Concept Studio has been recognized for excellence in
            architectural design and innovation.
          </p>
        </section>
      </div>

      {/* Hero section remains the same */}
      <section className="bg-[#829280] h-[500px] flex flex-col justify-center px-4 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto w-full">
          <p className="text-white text-sm mb-4 font-inter">
            Delivering high-quality architectural excellence
          </p>
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-inter font-normal leading-tight max-w-4xl">
            Simplified design <br /> thinking for high living
          </h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-32 py-6">
        <CustomBreadcrumb />
      </div>

      {/* The Architect's Voice Section - Modified image height */}
      <section className="py-12 px-4 md:px-16 lg:px-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-inter mb-6">
                The Architect's Voice
              </h2>
              <p className="text-gray-800 mb-4 text-justify">
                DSC Concept Studio was founded by Ar. Dipanshu Chauhan with a
                vision to craft innovative and thoughtful spaces that resonate
                with creativity and functionality. From the outset, the studio
                has been dedicated to exploring new dimensions in design,
                ensuring that each project reflects a harmonious blend of art
                and purpose. Over the years, DSC Concept Studio has become known
                for its ability to transform ideas into architectural
                experiences that inspire and engage. The firm's expertise spans
                across architecture, interior design, and landscape design,
                leaving a lasting impression on every project it undertakes.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="images/architect.svg"
                alt="Architect Portrait"
                className="rounded-lg w-full h-[480px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <ServicesSection />
      </section>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center mb-16">
            Our Core{" "}
            <span
              className="text-[#829280] italic text-3xl sm:text-5xl font-serif"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              values
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design Excellence */}
            <div className="bg-[#829280] p-12 rounded-lg flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-none rounded">
                  <img src="images/ico-architecture.svg" alt="" />
                </div>
              </div>
              <h3 className="text-2xl text-white mb-4">Design Excellence</h3>
              <p className="text-white text-justify">
                We pursue excellence in every detail, combining aesthetics with
                functionality to create exceptional spaces that inspire.
              </p>
            </div>

            {/* Client Collaboration */}
            <div className="bg-[#829280] p-12 rounded-lg flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded">
                  <img src="images/ico-interior-design.svg" alt="" />
                </div>
              </div>
              <h3 className="text-2xl text-white mb-4">Client Partnership</h3>
              <p className="text-white text-justify">
                We build strong partnerships with our clients, ensuring their
                vision and needs are at the heart of every design decision.
              </p>
            </div>

            {/* Innovation & Sustainability */}
            <div className="bg-[#829280] p-12 rounded-lg flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded">
                  <img src="images/ico-landscape.svg" alt="" />
                </div>
              </div>
              <h3 className="text-2xl text-white mb-4">
                Future-Forward Design
              </h3>
              <p className="text-white text-justify">
                We embrace innovative technologies and sustainable practices to
                create spaces that stand the test of time.
              </p>
            </div>
          </div>
        </div>

        <section>
          <ApproachProcess />
        </section>

        {/* Our Vision Section */}
        <div className="max-w-7xl mx-auto mt-24">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="md:text-6xl text-4xl italic">
                Our{" "}
                <span
                  className="text-[#829280] italic"
                  style={{ fontFamily: '"Instrument Serif", serif' }}
                >
                  Vision
                </span>
              </h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-justify">
                At DSC Concept Studio, Ar. Dipanshu Chauhan and Ar. Manu Chauhan
                envision a world where architecture transcends beyond structures
                to create meaningful and transformative spaces. Guided by a deep
                passion for art, culture, and design, our mission is to innovate
                and inspire through designs that enhance the way people live and
                interact with their surroundings.
              </p>
              <p className="text-lg mt-10 text-justify">
                We believe that architecture has the power to shape society and
                improve lives. Each project is a pursuit of excellence, blending
                creativity with technical expertise to craft spaces that are
                functional, sustainable, and timeless. Our vision is to leave a
                lasting impact, creating designs that resonate with purpose and
                elevate the experience of living.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Studio;
