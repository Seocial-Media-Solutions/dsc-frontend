import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLocation } from 'react-router-dom';
import { LayoutDashboard, FolderPlus, Bell, X, Check } from 'lucide-react';
import AdminHeader from './AdminHeader';
import Dashboard from './Dashboard';
import AddProject from './AddProject';
import { useMain } from '../contexts/MainContext';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const [message, setMessage] = useState(location.state?.message || '');
const { projects, fetchProjects } = useMain();


    useEffect(() => {
      fetchProjects();
    }, [fetchProjects]);
  

 


  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      window.history.replaceState({}, document.title);
      
      // Auto-dismiss message after 5 seconds
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [location.state?.message]);

  return (
    <div className="min-h-screen bg-[#F5F7F5]">
      <AdminHeader user={user} logout={logout} />
      
      <main className="container mt-20 mx-auto px-4 md:px-6 pt-20 pb-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#4A5D4A] mb-2">
            Welcome back, {user?.name || 'Admin'}
          </h1>
          <p className="text-gray-600">
            Manage your projects and content from this dashboard
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              activeTab === 'dashboard' 
                ? 'bg-[#829280] text-white shadow-lg' 
                : 'bg-white text-[#4A5D4A] hover:bg-[#F0F2F0] shadow-sm'
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('add-project')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              activeTab === 'add-project' 
                ? 'bg-[#829280] text-white shadow-lg' 
                : 'bg-white text-[#4A5D4A] hover:bg-[#F0F2F0] shadow-sm'
            }`}
          >
            <FolderPlus size={20} />
            <span className="font-medium">Add Project</span>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#F0F2F0] rounded-lg">
                <LayoutDashboard size={24} className="text-[#829280]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">Total Projects</h3>
                <p className="text-2xl font-bold text-[#4A5D4A]">{projects.length}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#F0F2F0] rounded-lg">
                <Bell size={24} className="text-[#829280]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">Recent Updates</h3>
                <p className="text-2xl font-bold text-[#4A5D4A]">
                  {projects.filter(p => new Date(p.updatedAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#F0F2F0] rounded-lg">
                <FolderPlus size={24} className="text-[#829280]" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">Active Projects</h3>
                <p className="text-2xl font-bold text-[#4A5D4A]">
                  {projects.filter(p => p.status === 'active').length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div
            className={`relative mb-6 p-4 pr-12 rounded-lg ${
              message.includes('Error') 
                ? 'bg-red-50 text-red-700 border border-red-200' 
                : 'bg-green-50 text-green-700 border border-green-200'
            }`}
          >
            <div className="flex items-center gap-2">
              {message.includes('Error') ? (
                <X size={18} className="text-red-500" />
              ) : (
                <Check size={18} className="text-green-500" />
              )}
              <span className="font-medium">{message}</span>
            </div>
            <button
              onClick={() => setMessage('')}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
            >
              <X size={16} />
            </button>
          </div>
        )}

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'dashboard' ? (
            <Dashboard 
              projects={projects} 
              setMessage={setMessage} 
              fetchProjects={fetchProjects} 
            />
          ) : (
            <AddProject 
              setMessage={setMessage} 
              fetchProjects={fetchProjects} 
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;