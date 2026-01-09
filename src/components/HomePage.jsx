import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);
  const [videoSource, setVideoSource] = useState("");
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const backgroundVideoRef = useRef(null);
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth <= 768;
      const newVideoSource = mobile
        ? "video/dsc-intro-mobile.mp4"
        : "video/dsc-intro.mp4";

      if (newVideoSource !== videoSource) {
        setVideoSource(newVideoSource);
      }
    };

    const debouncedResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(checkDevice, 250);
    };

    checkDevice();
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [videoSource]);

  const handleIntroEnd = () => {
    setShowIntro(false);
    if (backgroundVideoRef.current) {
      requestAnimationFrame(() => {
        backgroundVideoRef.current.play().catch((error) => {
          // Handle error silently
        });
      });
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const handleVideoError = (error) => {
    // Handle error silently and ensure loading state is updated
    setIsVideoLoaded(true);
  };

  const metaTags = {
    title:
      "DSConcept | Leading Architectural Design Studio | Modern & Sustainable Architecture",
    description:
      "DSConcept - Award-winning architectural studio specializing in sustainable modern design, luxury homes, commercial spaces, and innovative urban planning solutions.",
    keywords:
      "DSConcept, architecture firm, sustainable architecture, modern design, architectural studio, innovative buildings",
  };

  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href="https://dsconcept.in/" />
        <meta
          property="og:title"
          content="DSC Concept | Premium Architectural Design Studio"
        />
        <meta
          property="og:description"
          content="Transform your vision into reality with DSC Concept's innovative architectural designs."
        />
        <meta
          property="og:image"
          content="https://dsconcept.in/images/og-home.jpg"
        />
        <meta property="og:url" content="https://dsconcept.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DSC Concept | Premium Architectural Design Studio"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dipanshu Chauhan" />
        <meta name="publisher" content="DSConcept" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="twitter:description"
          content="Transform your vision into reality with DSC Concept's innovative architectural designs."
        />
      </Helmet>

      <div className="sr-only">
        <h2>Premium Architectural Services by DSC Concept</h2>
        <p>
          Welcome to DSC Concept, where architectural innovation meets
          sustainable design. Our services include:
        </p>
        <ul>
          <li>
            Residential Architecture - Custom homes and luxury residential
            projects
          </li>
          <li>
            Commercial Architecture - Office spaces, retail, and mixed-use
            developments
          </li>
          <li>
            Sustainable Design - Green building solutions and LEED certification
          </li>
          <li>Interior Design - Modern and functional interior spaces</li>
          <li>Urban Planning - Community development and master planning</li>
          <li>
            3D Visualization - Photorealistic renderings and virtual tours
          </li>
        </ul>
      </div>

      {showIntro && videoSource && (
        <div className="fixed inset-0 z-50 bg-[#829280]">
          <video
            key={videoSource}
            autoPlay
            muted
            playsInline
            className="h-screen w-screen object-cover"
            onEnded={handleIntroEnd}
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            preload="auto"
          >
            <source src={videoSource} type="video/mp4" />
            <track kind="captions" />
          </video>
        </div>
      )}

      <div
        className={`relative h-screen w-full overflow-hidden ${
          showIntro ? "hidden" : ""
        }`}
        style={{ visibility: isVideoLoaded ? "visible" : "hidden" }}
      >
        <img
          src="images/DSC-logo.png"
          alt="DSC Concept Architecture Studio Logo"
          className="absolute top-6 left-6 z-20 h-24 w-auto md:h-24 lg:h-[9rem]"
          loading="eager"
          width="112"
          height="112"
          fetchPriority="high"
        />

        <video
          ref={backgroundVideoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-h-full min-w-full object-cover"
          poster="/api/placeholder/1920/1080"
          preload="auto"
          aria-hidden="true"
        >
          <source src="video/dsc_hero.mp4" type="video/mp4" />
          <track kind="captions" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-lg font-bold leading-relaxed text-white sm:text-2xl md:text-3xl lg:text-4xl">
              Welcome to DSConcept, where architectural innovation meets
              sustainable design.
            </h1>

            <div className="relative  mt-2">
              <img
                onClick={handleNavigate}
                src="images/box.png"
                alt="Featured Architectural Project"
                className="mx-auto cursor-pointer box  h-44 w-auto rounded-lg object-cover  sm:h-50 md:h-64"
                loading="eager"
                width="400"
                height="300"
              />

              <button
                onClick={handleNavigate}
                className="group absolute right-14 bottom-[-16px] md:bottom-[-18px] md:right-[17rem] flex cursor-pointer items-center gap-2 rounded-md  px-4 py-2 pb-4 transition-all hover:bg-white/20"
                aria-label="Experience our projects"
              >
                <span className="text-2xl font-medium text-white sm:text-4xl">
                  Experience
                </span>
                <ArrowRight
                  className="h-6 w-6 text-white transition-transform group-hover:translate-x-1 sm:h-8 sm:w-8"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>

        <address className="sr-only">
          DSConcept Sunny Mart, G-33 & 34, New Aatish Market, Mansarovar Sector
          3, Jaipur, Rajasthan 302019 Phone: +919116972001 Email:
          studio.dsconcept@gmail.com
        </address>
      </div>
    </>
  );
};

export default HomePage;
