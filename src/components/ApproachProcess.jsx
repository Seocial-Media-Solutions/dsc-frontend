import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProcessCard = ({ number, title, content, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-4">
      <motion.button
        className="w-full px-4 sm:px-6 py-4 flex items-center justify-between"
        onClick={onClick}
        whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-gray-400 text-sm sm:text-base">{number}/</span>
          <span className={`text-lg sm:text-xl ${isOpen ? 'text-[#829280]' : 'text-black'}`}>
            {title}
          </span>
        </div>
        {isOpen ? (
          <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
        ) : (
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
        )}
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-6 pb-4">
              <p className="text-gray-600 text-sm sm:text-base text-justify">{content}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ApproachProcess = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const processData = [
    {
      number: "1",
      title: "Survey",
      content: "Our team conducts a thorough analysis of your space and requirements. We gather all necessary information about the project scope, your preferences, and specific needs to ensure we have a comprehensive understanding of your vision."
    },
    {
      number: "2",
      title: "Design",
      content: "After surveying and obtaining the necessary information, we will create a preliminary design including technical drawings, 3D images of the interior and provide a 3D VR experience to help customers get a visual view of their project."
    },
    {
      number: "3",
      title: "Implement",
      content: "Once the design is approved, our expert team begins the implementation phase. We carefully execute every detail according to the approved plans, ensuring quality craftsmanship and attention to detail throughout the construction process."
    },
    {
      number: "4",
      title: "Handover",
      content: "The final phase involves a thorough quality check and handover of your completed space. We walk you through all the features and ensure everything meets our high standards before finalizing the project."
    }
  ];

  // Using placeholder images since we can't load external images
  const processImages = {
    Survey: "images/survey.png",
    Design: "images/interior-design.png",
    Implement: "images/implement.png",
    Handover: "images/handover.png"
  };

  return (
    <section className="py-8 sm:py-16 px-4 sm:px-8 lg:px-16 mt-6 sm:mt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Left side - Process List */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <h2 className="text-3xl sm:text-4xl">Our Approach</h2>
              <p className="text-[#829280] italic text-3xl sm:text-5xl font-serif" 
                 style={{ fontFamily: '"Instrument Serif", serif' }}>
                process
              </p>
            </div>
            
            <div className="space-y-4">
              {processData.map((process, index) => (
                <ProcessCard
                  key={process.number}
                  {...process}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(index === openIndex ? null : index)}
                />
              ))}
            </div>
            <Link to={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 sm:mt-8 px-4 sm:px-6 py-3 bg-[#829280] text-white rounded-lg flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
            >
              Get A Free Quote
              <span className="text-xl">→</span>
            </motion.button>
            </Link>
          </div>

          {/* Right side - Interactive Images */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
              {processData.map((process, index) => (
                <AnimatePresence key={process.title}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={processImages[process.title]}
                        alt={process.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute bottom-4 right-4 bg-white px-3 py-2 rounded shadow-sm">
                        <p className="text-base sm:text-xl">{process.title}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachProcess;