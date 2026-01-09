import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c5ebda74-888d-4a7d-b090-3cffa604beb6',
          ...formData
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-gradient-to-b from-gray-50 to-white">
    <Helmet>
      <title>Contact DSConcept | Best Architectural Design Consultation in Jaipur</title>
      <meta
        name="description"
        content="Get in touch with DSConcept's architectural team for your next project. Schedule a consultation, discuss your vision, or explore career opportunities with us."
      />
      <meta 
        name="keywords" 
        content="contact architect, architectural consultation, DSC Concept contact, architecture firm Jaipur, design consultation, architectural services contact, hire architect" 
      />
      <link rel="canonical" href="https://dsconcept.in/contact" />
      <meta property="og:title" content="Contact DSConcept | Leading Architectural Firm in Jaipur" />
      <meta property="og:description" content="Connect with DSC Concept for innovative architectural solutions. Visit our studio in Jaipur or reach out online for consultations and collaborations." />
      <meta property="og:type" content="website" />
       <meta name="robots" content="index, follow" />
        <meta name="author" content="Dipanshu Chauhan" />
        <meta name="publisher" content="DSConcept" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "DSC Concept Contact Information",
          "description": "Contact details and consultation booking for DSC Concept architectural services",
          "provider": {
            "@type": "ArchitectureFirm",
            "name": "DSConcept",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sunny Mart, G-33 & 34, New Aatish Market",
              "addressLocality": "Mansarovar",
              "addressRegion": "Jaipur",
              "postalCode": "302019",
              "addressCountry": "IN"
            },
            "telephone": ["+919116972001", "+918700032936"],
            "email": "studio.dsconcept@gmail.com"
          }
        })}
      </script>
    </Helmet>

    {/* Hidden SEO Content */}
    <div className="hidden" aria-hidden="true">
      <section>
        <h2>Contact DSC Concept - Leading Architectural Design Studio in Jaipur</h2>
        <p>Welcome to DSC Concept's contact page. We're here to help bring your architectural vision to life:</p>
        <ul>
          <li>Professional Architectural Consultation Services</li>
          <li>Residential and Commercial Project Planning</li>
          <li>Interior Design Consultation</li>
          <li>Sustainable Architecture Solutions</li>
        </ul>
        
        <h3>Why Choose DSC Concept</h3>
        <p>Connect with us for:</p>
        <ul>
          <li>Expert Architectural Design Consultation</li>
          <li>Innovative Space Planning Solutions</li>
          <li>Sustainable Building Design</li>
          <li>Professional Project Management</li>
          <li>Client-Focused Approach</li>
        </ul>
        
        <h3>Our Services Include</h3>
        <ul>
          <li>Architectural Design Consultation</li>
          <li>3D Visualization Services</li>
          <li>Interior Design Planning</li>
          <li>Green Building Solutions</li>
          <li>Project Cost Estimation</li>
        </ul>
        
        <h3>Visit Our Studio</h3>
        <p>Located in the heart of Jaipur, our studio welcomes clients for in-person consultations and project discussions. Experience our design process firsthand and explore how we can transform your space.</p>
      </section>
    </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-[#829280] bg-opacity-60">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-inter font-normal leading-tight mb-6">
                Let's Create Your <br />
                <span className="text-[#829280] font-inter"> Dream Space</span>
              </h1>
              <p className="text-lg  text-sm mb-4 font-inter text-white mb-8">
                Transform your vision into reality with our award-winning architectural expertise
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Creative Contact Info Section */}
        <motion.div 
          variants={itemVariants}
          className="relative -mt-32 mb-24 z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Contact */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#829280] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>
              <div className="relative z-10">
                <Phone className="w-8 h-8 mb-4 text-[#829280] group-hover:text-white transition-colors duration-500" />
                <p className="text-gray-600 group-hover:text-white transition-colors  duration-500">Ready to discuss your project?</p>
                <div className="flex flex-col">
                  <a 
                    href="tel:+919116972001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold mt-2 group-hover:text-white transition-colors duration-500 hover:underline"
                  >
                    +91 9116972001
                  </a>
                  <a 
                    href="tel:+918700032936" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-bold mt-1 group-hover:text-white transition-colors duration-500 hover:underline"
                  >
                    +91 8700032936
                  </a>
                </div>
                <ArrowRight className="w-6 h-6 mt-4 transform group-hover:translate-x-2 transition-transform duration-300 text-[#829280] group-hover:text-white" />
              </div>
            </motion.div>

            {/* Email Contact */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#829280] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>
              <div className="relative z-10">
                <Mail className="w-8 h-8 mb-4 text-[#829280] group-hover:text-white transition-colors duration-500" />
                <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Drop us a line anytime at</p>
                <a 
                  href="mailto:studio.dsconcept@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-bold mt-2 block group-hover:text-white transition-colors duration-500 hover:underline"
                >
                  studio.dsconcept@gmail.com
                </a>
                <ArrowRight className="w-6 h-6 mt-4 transform group-hover:translate-x-2 transition-transform duration-300 text-[#829280] group-hover:text-white" />
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group relative bg-white/90 backdrop-blur-lg p-8 rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#829280] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"/>
              <div className="relative z-10">
                <MapPin className="w-8 h-8 mb-4 text-[#829280] group-hover:text-white transition-colors duration-500" />
                <p className="text-gray-600 group-hover:text-white transition-colors duration-500">Visit our studio at</p>
                <a 
                  href="https://maps.google.com/?q=Sunny+Mart,+G-33+%26+34,+New+Aatish+Market,+Mansarovar+Sector+3,+Jaipur,+Rajasthan+302019" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl font-bold mt-2 block group-hover:text-white transition-colors duration-500 hover:underline"
                >
                  Sunny Mart, G-33 & 34, New Aatish Market, Mansarovar Sector 3, Jaipur, Rajasthan 302019
                </a>
                <ArrowRight className="w-6 h-6 mt-4 transform group-hover:translate-x-2 transition-transform duration-300 text-[#829280] group-hover:text-white" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          variants={itemVariants}
          className="mb-16 rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.792777125168!2d75.75974939999996!3d26.878324099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4f86fffffff%3A0xb9930188c9295439!2sG-33-34%2C%20SUNNY%20MART!5e0!3m2!1sen!2sin!4v1736494887227!5m2!1sen!2sin" 
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Office Location Map"
          />
        </motion.div>

        {/* Contact Form Section */}
        <motion.div 
          variants={itemVariants}
          className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#829280] opacity-10 transform -skew-x-12"/>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#829280] mb-8 text-center">
              Start Your Project
            </h2>
            <p className="text-gray-600 mb-12 text-center max-w-2xl mx-auto">
              Share your vision with us, and let's bring your architectural dreams to life. Our team is ready to create something extraordinary together.
            </p>
            
            {success && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl text-center">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl text-center">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#829280] transition-all"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }} className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="YOUR EMAIL"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#829280] transition-all"
                    required
                  />
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="CONTACT NUMBER"
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#829280] transition-all"
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="SUBJECT"
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#829280] transition-all"
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="YOUR MESSAGE"
                  rows={6}
                  className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-[#829280] transition-all resize-none"
                />
              </motion.div>
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(130,146,128,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-[#829280] text-white px-12 py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-all mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div 
  variants={itemVariants}
  className="mt-16 mb-16 relative overflow-hidden"
>
  <div className="bg-gradient-to-r from-[#829280] to-[#96a694] rounded-2xl p-12 md:p-16 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute transform rotate-45 -right-1/4 -top-1/4 w-2/3 h-2/3 bg-white/20 rounded-full" />
      <div className="absolute transform -rotate-45 -left-1/4 -bottom-1/4 w-2/3 h-2/3 bg-white/20 rounded-full" />
    </div>
    
    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-center md:text-left max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Explore Our Product Store
        </h2>
        <p className="text-lg text-white/90 text-justify mb-6">
        Discover our complete collection of  stone chemicals,  and waterproofing solutions to enhance and protect your surfaces. Our expert stone consultancy helps you choose the right stones and treatments, while our advanced chemicals ensure durability, shine, and protection. With cutting-edge waterproofing solutions, we safeguard your spaces from moisture and damage.
        </p>
        <motion.a
          href="https://dscimpexindia.com/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center space-x-3 bg-white text-[#829280] px-8 py-4 rounded-xl hover:bg-opacity-90 transition-all group"
        >
          <span className="font-semibold">Visit Our Store</span>
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </div>
      
      <div className="relative w-full md:w-1/3 aspect-square max-w-sm">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-6" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform -rotate-3" />
        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center text-[#829280]">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-16 h-16 mb-4"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
            />
          </svg>
          <h3 className="text-xl font-bold mb-2">DSC Impex India</h3>
          <p className="text-center text-sm text-[#829280]/80">
            Quality Products for Your Every Need
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>


        {/* Careers Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-16 relative overflow-hidden"
        >
          <div className="bg-[#829280] rounded-2xl p-12 md:p-16">
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Join Our Creative Team
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Are you passionate about architecture and design? We're always looking for talented individuals.
              </p>
              <motion.a
                href="mailto:studio.dsconcept@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-2 bg-white text-[#829280] px-8 py-3 rounded-xl hover:bg-opacity-90 transition-all"
              >
                <span>studio.dsconcept@gmail.com</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactPage;