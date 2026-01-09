import React, { useState } from 'react';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '+919116972001';
  const email = 'studio.dsconcept@gmail.com';
  const instagramUsername = 'studio_dsconcept';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramUsername}`, '_blank');
  };

  const ActionButton = ({ onClick, icon, label, bgColor }) => (
    <div className="group relative">
      <button
        onClick={onClick}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${bgColor}`}
      >
        {icon}
      </button>
      <span className="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm whitespace-nowrap">
        {label}
      </span>
    </div>
  );

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="relative">
        <div
          className={`flex flex-col gap-3 items-center mb-3 transition-all duration-300 transform ${
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        >
          <ActionButton
            onClick={handleInstagramClick}
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white fill-current"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            }
            label="Follow on Instagram"
            bgColor="bg-[#E1306C] hover:bg-[#cd2a61]"
          />
          <ActionButton
            onClick={handleEmailClick}
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white fill-current"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            }
            label="Send Email"
            bgColor="bg-[#EA4335] hover:bg-[#d63a2d]"
          />
          <ActionButton
            onClick={handleCallClick}
            icon={
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white fill-current"
              >
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            }
            label="Call Us"
            bgColor="bg-[#0077FF] hover:bg-[#0066dd]"
          />
        </div>

        <div className="relative">
          <div className="absolute -inset-0.5 bg-[#829280] rounded-full blur-sm opacity-75" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 bg-gradient-to-br from-[#829280] to-[#6b7a69]"
          >
            <div
              className={`text-white transform transition-transform duration-300 ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            >
              {isOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingContact;