import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const location = useLocation();

  // Handle scroll behavior with throttling
  useEffect(() => {
    let lastScrollTime = 0;
    const throttleTime = 100;

    const handleScroll = () => {
      const now = Date.now();

      if (now - lastScrollTime >= throttleTime) {
        const currentScrollPos = window.scrollY;
        const isScrollingUp = prevScrollPos > currentScrollPos;
        const isAtTop = currentScrollPos < 10;

        setIsVisible(isScrollingUp || isAtTop);
        setPrevScrollPos(currentScrollPos);

        lastScrollTime = now;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Studio", href: "/studio" },
    { name: "Project", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 hidden h-auto w-full md:block bg-[#829280]   transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full flex items-center justify-between p-4">
          {/* Enhanced Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/images/DSC-logo.png"
              alt="Logo"
              className="h-[6rem] w-[auto] transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Menu Items - Adjusted spacing for larger logo */}
          <div className="flex space-x-12 ml-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transform text-lg font-semibold text-white transition-all duration-300 hover:scale-110 hover:text-gray-200
                  ${location.pathname === item.href ? "text-blue-400" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="w-full md:hidden">
        {/* Enhanced Mobile Logo */}
        <div
          className={`fixed top-0 left-0 right-0 z-50 w-full bg-[#829280] p-2 transform-gpu transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Link to="/" className="block">
            <img
              src="/images/DSC-logo.png"
              alt="Logo"
              className="h-[6rem] w-[auto]  transition-transform duration-300 hover:scale-105"
            />
          </Link>
        </div>

        {/* Mobile Menu Button - Adjusted position for larger logo */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`fixed right-4 top-6 z-50 p-2 transform-gpu transition-transform duration-300 ${
            isVisible ? "translate-y-0" : "-translate-y-full"
          }`}
          aria-label="Toggle menu"
        >
          <div className="relative h-6 w-8">
            <span
              className={`absolute left-0 h-0.5 w-full transform-gpu transition-all duration-500
              ${
                isMenuOpen
                  ? "top-3 rotate-45 bg-white scale-x-100"
                  : "top-1 rotate-0 bg-white scale-x-75"
              }`}
            />
            <span
              className={`absolute left-0 top-3 h-0.5 w-full transform-gpu transition-all duration-300
              ${
                isMenuOpen
                  ? "opacity-0 rotate-45 scale-x-50"
                  : "opacity-100 rotate-0 scale-x-100"
              }`}
              style={{ backgroundColor: isMenuOpen ? "black" : "white" }}
            />
            <span
              className={`absolute left-0 h-0.5 w-full transform-gpu transition-all duration-500
              ${
                isMenuOpen
                  ? "top-3 -rotate-45 bg-white scale-x-100"
                  : "top-5 rotate-0 bg-white scale-x-90"
              }`}
            />
          </div>
        </button>

        {/* Full Screen Mobile Menu */}
        <div
          className={`fixed inset-0 z-40 flex w-full items-center justify-center bg-white transition-all duration-500
            ${
              isMenuOpen
                ? "opacity-100 visible scale-100"
                : "opacity-0 invisible scale-110"
            }`}
        >
          <div className="flex flex-col items-center space-y-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`transform text-4xl font-bold transition-all duration-700
                  hover:scale-110 hover:text-gray-600
                  ${
                    location.pathname === item.href
                      ? "text-blue-400"
                      : "text-black"
                  }
                  ${
                    isMenuOpen
                      ? "translate-y-0 rotate-0 opacity-100 blur-0"
                      : "translate-y-8 rotate-12 opacity-0 blur-sm"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
