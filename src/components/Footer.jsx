import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#829280] text-white py-20 pt-6 md:py-20 sm:py-20  px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Logo and About Section */}
        <div className="md:col-span-1">
          <img 
            src="/images/DSC-logo.png" 
            alt="dsc Logo" 
            className="h-[119px] w-[auto] mb-4"
          />
          <p className="text-white text-base leading-relaxed text-justify max-w-xs">
            
          Ar. Dipanshu Chauhan and Ar. Manu Chauhan have led DSC Concept Studio to remarkable growth by embracing every challenge with passion and innovation. Their journey began with the successful design of high-rises in Jaipur, the studio's home base.  
          </p>
        </div>

        {/* Office Section */}
        <div className="md:col-span-1">
          <h3 className="font-semibold text-xl mb-6">Office</h3>
          <h3 className="font-semibold text-xl mb-2">Studio DSConcept</h3>
          <address className="not-italic text-base  text-white mb-6">
          Sunny Mart, G-33 & 34, New Aatish Market, Mansarovar Sector 3, Jaipur, Rajasthan 302019
          </address>
          <div className="text-base text-white space-y-2">
            <p>
              <a href="mailto:studio.dsconcept@gmail.com" className="hover:underline">Email.  <span className='hover:text-[black]'>studio.dsconcept@gmail.com </span></a>
            </p>
           
            <p>
              <a href="tel:+919116972001" className="hover:underline ">Contact. <span className='hover:text-black'> +919116972001 </span></a>
            </p>
            <span>
              <a href="tel:+918700032936" className="hover:underline hover:text-black pl-16">+918700032936</a>
            </span>
           
          </div>
        </div>

        {/* Sitemap Section */}
        <div className="md:col-span-1">
          <h3 className="font-semibold text-xl mb-6">Sitemap</h3>
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-base text-white hover:underline">Home</Link>
            <Link to="/studio" className="text-base text-white hover:underline">Studio</Link>
            <Link to="/projects" className="text-base text-white hover:underline">Projects</Link>
            <Link to="/blog" className="text-base text-white hover:underline">Blogs</Link>
            <Link to="/contact" className="text-base text-white hover:underline">Contact</Link>

          </nav>
        </div>

        {/* Follow Section */}
        <div className="md:col-span-1">
          <h3 className="font-semibold text-xl mb-6">Follow</h3>
          <nav className="flex flex-col space-y-3">
            <a href="/projects" className="text-base text-white hover:underline">Facebook</a>
            <a href="https://www.instagram.com/studio_dsconcept?igsh=MXA0cXdkem5oc2J2MQ%3D%3D" target='_blank' rel="noreferrer" className="text-base text-white hover:underline">Instagram</a>
            <a href="/projects" className="text-base text-white hover:underline">LinkedIn</a>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-20 text-center">
        <p className="text-base text-white">
          Copyright © {new Date().getFullYear()} <a href="https://www.seocialmedia.in" target='_blank' rel="noreferrer" className="text-white hover:underline">SEOcial Media Solutions</a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
