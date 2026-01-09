import React, { useState, useEffect } from 'react';
import { Edit, Trash2, Calendar, Flag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMain } from '../contexts/MainContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { 
    projects, 
    loading, 
    error,
    fetchProjects,
    deleteProject
  } = useMain();
  
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [sortBy, setSortBy] = useState('newest');

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleDelete = async (projectId) => {
    const success = await deleteProject(projectId);
    if (success) {
      await fetchProjects();
    }
    setDeleteConfirm(null);
  };

  const getSortedProjects = () => {
    return [...projects].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt) - new Date(a.createdAt);
        case 'oldest':
          return new Date(a.createdAt) - new Date(b.createdAt);
        case 'alphabetical':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#829280]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Project List Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-xl font-semibold text-[#4A5D4A]">Project List</h2>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#829280]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>
      </div>

      {/* Project List */}
      <div className="space-y-4">
        {getSortedProjects().map((project) => (
          <div
            key={project._id}
            className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div 
                  className="flex-1 cursor-pointer" 
                  onClick={() => navigate(`/project/${project._id}`)}
                >
                  <h3 className="text-lg font-semibold text-[#4A5D4A] mb-2 group-hover:text-[#829280] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {project.description1}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{formatDate(project.createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flag size={16} />
                      <span>{project.status || 'Active'}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => navigate(`/project/${project._id}`)}
                    className="p-2 text-[#829280] hover:bg-[#F5F7F5] rounded-lg transition-colors"
                    title="Edit Project"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => setDeleteConfirm(project._id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete Project"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500">No projects found. Create your first project!</p>
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-[#4A5D4A]">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this project? This action cannot be undone.
            </p>
            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 text-gray-600 bg-[#F5F7F5] rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;