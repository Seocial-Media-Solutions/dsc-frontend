import React from "react";
import InteriorDesignHero from "./InteriorDesignHero";
import InteriorDesignServices from "./InteriorDesignServices";
import ResidentialInteriorDesign from "./ResidentialInteriorDesign";
import CommercialInteriorDesign from "./CommercialInteriorDesign";
import RenovationInteriorDesign from "./RenovationInteriorDesign";
import DesignConsultation from "./DesignConsultation";
import { Helmet } from "react-helmet-async";

export default function InteriorDesign() {
  return (
    <section
      style={{
        backgroundColor: "#829180",
        background:
          "linear-gradient(180deg, rgba(130, 145, 128, 0.69) 0%, rgba(130, 145, 128, 0.1) 10%, rgba(130, 145, 128, 0.2) 20%, rgba(130, 145, 128, 0.3) 30%, rgba(130, 145, 128, 0.4) 40%, rgba(130, 145, 128, 0.5) 50%, rgba(130, 145, 128, 0.6) 60%, rgba(130, 145, 128, 0.7) 70%, rgba(130, 145, 128, 0.8) 80%, rgba(130, 145, 128, 0.9) 90%, rgba(130, 145, 128, 1) 100%)",
      }}
    >
      <Helmet>
        <title>Interior Design Services in Jaipur | DSConcept</title>
        <meta
          name="description"
          content="Transform your spaces with DSConcept’s professional interior design services in Jaipur. We specialize in residential interiors, commercial spaces, renovations, and design consultation."
        />
        <meta
          name="keywords"
          content="Interior design Jaipur, residential interior design, commercial interiors, renovation services, design consultation, DSConcept interior design"
        />
        <link rel="canonical" href="https://dsconcept.in/interior-design" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Dipanshu Chauhan" />
        <meta name="publisher" content="DSConcept" />

        {/* Open Graph (Social Media Preview) */}
        <meta
          property="og:title"
          content="Interior Design Services in Jaipur | DSConcept"
        />
        <meta
          property="og:description"
          content="Explore DSConcept’s interior design expertise in Jaipur – residential interiors, commercial designs, renovations, and professional design consultation."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dsconcept.in/InteriorDesignSection"
        />
        <meta
          property="og:image"
          content="https://dsconcept.in/images/interior-design-preview.jpg"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Interior Design Services",
            provider: {
              "@type": "Organization",
              name: "DSConcept Studio",
              url: "https://dsconcept.in",
            },
            areaServed: {
              "@type": "Place",
              name: "Jaipur, India",
            },
            serviceType: [
              "Residential Interior Design",
              "Commercial Interior Design",
              "Renovation Services",
              "Design Consultation",
            ],
            description:
              "DSConcept provides creative and professional interior design solutions in Jaipur for homes, offices, commercial spaces, and renovations.",
          })}
        </script>
      </Helmet>

      <InteriorDesignHero />
      <InteriorDesignServices />
      <ResidentialInteriorDesign />
      <CommercialInteriorDesign />
      <RenovationInteriorDesign />
      <DesignConsultation />
    </section>
  );
}
