import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Construction, Flower2 } from 'lucide-react';

const ServiceCard = ({ title, subtitle, icon: Icon, description, imageSrc }) => {
  return (
    <motion.div
      className="relative p-8 border border-gray-200 group h-full flex flex-col"
      whileHover="hover"
      initial="initial"
    >
      {/* Animated borders */}
      <motion.div
        className="absolute inset-0 border-2 border-[#829280] opacity-0 pointer-events-none"
        variants={{
          initial: { opacity: 0, scale: 1 },
          hover: { opacity: 1, scale: 1.05 },
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex flex-col h-full space-y-6">
        {/* Icon in custom color circle */}
        <div className="bg-[#829280]/10 w-12 h-12 rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#829280]" />
        </div>

        {/* Title Section */}
        <div className="space-y-1">
          <h3 className="text-sm font-medium uppercase tracking-wider">{title}</h3>
          {subtitle && (
            <p className="text-sm uppercase tracking-wider">{subtitle}</p>
          )}
        </div>

        {/* Image */}
        <div className="flex-grow">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-64 object-cover"
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 text-justify leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: 'Architecture',
      subtitle: '& Design',
      icon: Sprout,
      description:
        'Our expertise in architecture ensures that every project, regardless of its size, is executed with dedication and passion, turning visions into reality.',
      imageSrc: 'images/architecture.jpg',
    },
    {
      title: 'Interior Design',
      icon: Construction,
      description:
        'We offer interior designs that blend innovation and comfort, creating spaces that reflect the client’s personality and functional needs.',
      imageSrc: 'images/interior-design.png',
    },
    {
      title: 'Landscape Design',
      subtitle: 'Maintenance',
      icon: Flower2,
      description:
        'We design landscapes that complement and enhance the surrounding architecture, creating harmonious environments that are both beautiful and sustainable.',
      imageSrc: 'images/landscape.avif',
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
         <h2 className="text-4xl text-center mb-16">Our <span className="text-[#829280] italic text-3xl sm:text-5xl font-serif" 
                 style={{ fontFamily: '"Instrument Serif", serif' }}>
                services
              </span></h2>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="flex"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
