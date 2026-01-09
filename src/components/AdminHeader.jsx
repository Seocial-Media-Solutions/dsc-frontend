import React, { useState } from 'react';
import { LogOut, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminHeader = ({ user, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#829280] to-[#96a594] shadow-lg z-10">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Desktop and Tablet Layout */}
        <div className="hidden md:flex justify-between items-center py-2">
          <div className="flex items-center gap-3">
            <Link to={"/"}>
            <img
              src="images/DSC-logo.png"
              alt="Company Logo"
              className="h-32 w-[100px]"
            />
            </Link>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-medium">
                  {user?.username?.[0]?.toUpperCase() || 'U'}
                </span>
              </div>
              <span className="text-white/90 font-medium">
                {user?.username || 'User'}
              </span>
            </div>
            
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 
                       text-white rounded-lg transition-all duration-200 
                       border border-white/20 hover:border-white/30
                       active:scale-95 transform"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex justify-between items-center py-3">
            <img
              src="/images/DSC-logo.png"
              alt="Company Logo"
              className="h-[8rem]  w-auto"
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`${isMenuOpen ? 'max-h-48' : 'max-h-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
            <div className="py-4 space-y-4">
              <div className="flex items-center gap-2 px-2">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-medium">
                    {user?.username?.[0]?.toUpperCase() || 'U'}
                  </span>
                </div>
                <span className="text-white/90 font-medium">
                  {user?.username || 'User'}
                </span>
              </div>
              
              <div className="px-2 pb-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-4 py-2 bg-white/10 hover:bg-white/20 
                           text-white rounded-lg transition-all duration-200 
                           border border-white/20 hover:border-white/30
                           active:scale-95 transform"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;