import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader2, Image as ImageIcon, Edit, Trash2, X, Check } from 'lucide-react';
import { useMain } from '../contexts/MainContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { 
    loading, 
    error, 
    updateMessage,
    getImageUrl,
    fetchProjectById,
    updateProject,
    deleteProject,
    clearUpdateMessage
  } = useMain();
  
  const [project, setProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editFormData, setEditFormData] = useState({
    title: '',
    description1: '',
    description2: '',
    projectType: '',
    projectArea: '',
    projectLocation: ''
  });
  const [newMainImage, setNewMainImage] = useState(null);
  const [newOtherImages, setNewOtherImages] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  useEffect(() => {
    const loadProject = async () => {
      const data = await fetchProjectById(id);
      if (data) {
        setProject(data);
        setEditFormData({
          title: data.title,
          description1: data.description1,
          description2: data.description2 || '',
          projectType: data.projectType || '',
          projectArea: data.projectArea || '',
          projectLocation: data.projectLocation || ''
        });
      }
    };
    loadProject();
  }, [id, fetchProjectById]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMainImageChange = (e) => {
    if (e.target.files[0]) {
      setNewMainImage(e.target.files[0]);
    }
  };

  const handleOtherImagesChange = (e) => {
    if (e.target.files) {
      setNewOtherImages(Array.from(e.target.files));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    clearUpdateMessage();

    const formData = new FormData();
    Object.entries(editFormData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    if (newMainImage) formData.append('mainImage', newMainImage);
    if (newOtherImages.length > 0) {
      newOtherImages.forEach(img => formData.append('otherImages', img));
    }

    const updatedProject = await updateProject(id, formData);
    if (updatedProject) {
      setProject(updatedProject);
      setIsEditing(false);
      setNewMainImage(null);
      setNewOtherImages([]);
    }
  };

  const handleDelete = async () => {
    const success = await deleteProject(id);
    if (success) {
      navigate('/dashboard', {
        state: { message: 'Project deleted successfully!' }
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F7F5] flex items-center justify-center">
        <Loader2 className="animate-spin w-8 h-8 text-[#829280]" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#F5F7F5] p-4">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg max-w-md mx-auto">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7F5]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-all"
          >
            <ArrowLeft size={18} />
            <span>Back</span>
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 bg-[#829280] text-white rounded-lg hover:bg-[#728272] transition-all"
            >
              <Edit size={18} />
              <span>{isEditing ? 'Cancel' : 'Edit'}</span>
            </button>

            <button
              onClick={() => setDeleteConfirm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
            >
              <Trash2 size={18} />
              <span className="hidden md:inline">Delete</span>
            </button>
          </div>
        </div>

        {updateMessage && (
          <div className={`mb-6 p-4 rounded-lg ${
            updateMessage.includes('Error') 
              ? 'bg-red-100 text-red-700' 
              : 'bg-green-100 text-green-700'
          }`}>
            <div className="flex items-center gap-2">
              {updateMessage.includes('Error') ? <X size={18} /> : <Check size={18} />}
              {updateMessage}
            </div>
          </div>
        )}

<div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {isEditing ? (
          <form onSubmit={handleUpdate} className="p-4 md:p-8 space-y-6 max-w-3xl mx-auto">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Title
              </label>
              <input
                type="text"
                name="title"
                value={editFormData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#829280] transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type
              </label>
              <input
                type="text"
                name="projectType"
                value={editFormData.projectType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#829280] transition-all"
                placeholder="Enter project type"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Area
              </label>
              <input
                type="text"
                name="projectArea"
                value={editFormData.projectArea}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#829280] transition-all"
                placeholder="Enter project area"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Location
              </label>
              <input
                type="text"
                name="projectLocation"
                value={editFormData.projectLocation}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#829280] transition-all"
                placeholder="Enter project location"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description 1
              </label>
              <textarea
                name="description1"
                value={editFormData.description1}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#829280] transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description 2
              </label>
              <textarea
                name="description2"
                value={editFormData.description2}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#829280] transition-all"
              />
            </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Update Main Image
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-center w-full">
                    <label className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">Click to upload main image</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleMainImageChange}
                        accept="image/*"
                      />
                    </label>
                  </div>
                  {newMainImage && (
                    <div className="inline-flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 self-start">
                      <span className="text-sm text-gray-600">{newMainImage.name}</span>
                      <button
                        type="button"
                        onClick={() => setNewMainImage(null)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700">
                  Update Other Images
                </label>
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center justify-center w-full">
                    <label className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">Click to upload gallery images</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleOtherImagesChange}
                        accept="image/*"
                        multiple
                      />
                    </label>
                  </div>
                  {newOtherImages.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {newOtherImages.map((image, index) => (
                        <div key={index} className="inline-flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                          <span className="text-sm text-gray-600">{image.name}</span>
                          <button
                            type="button"
                            onClick={() => setNewOtherImages(prev => prev.filter((_, i) => i !== index))}
                            className="text-red-500 hover:text-red-600"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#829280] text-white rounded-lg hover:bg-[#728272] disabled:bg-gray-300 transition-all"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                'Update Project'
              )}
            </button>
          </form>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="relative h-[50vh] md:h-[60vh] mt-6 bg-gray-100 rounded-t-lg overflow-hidden">
                {project?.mainImage ? (
                  <img
                    src={getImageUrl(project.mainImage)}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ImageIcon size={48} className="text-gray-400" />
                  </div>
                )}
              </div>
  
              <div className="p-4 md:p-8 bg-white rounded-b-lg">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#4A5D4A]">{project?.title}</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-[#F5F7F5] p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-[#4A5D4A] mb-2">Project Type</h3>
                    <p className="text-gray-700">{project?.projectType || 'Not specified'}</p>
                  </div>
                  <div className="bg-[#F5F7F5] p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-[#4A5D4A] mb-2">Project Area</h3>
                    <p className="text-gray-700">{project?.projectArea || 'Not specified'}</p>
                  </div>
                  <div className="bg-[#F5F7F5] p-4 rounded-lg">
                    <h3 className="text-sm font-semibold text-[#4A5D4A] mb-2">Location</h3>
                    <p className="text-gray-700">{project?.projectLocation || 'Not specified'}</p>
                  </div>
                </div>
  
                <div className="space-y-8">
                  <div className="bg-[#F5F7F5] p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4 text-[#4A5D4A]">Description</h2>
                    <p className="text-gray-700 leading-relaxed">{project?.description1}</p>
                  </div>
  
                  {project?.description2 && (
                    <div className="bg-[#F5F7F5] p-6 rounded-lg">
                      <h2 className="text-xl font-semibold mb-4 text-[#4A5D4A]">Additional Details</h2>
                      <p className="text-gray-700 leading-relaxed">{project?.description2}</p>
                    </div>
                  )}
                  {project?.otherImages?.length > 0 && (
                    <div>
                      <h2 className="text-xl font-semibold mb-6 text-[#4A5D4A]">Gallery</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.otherImages.map((image, index) => (
                          <div
                            key={index}
                            className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                          >
                            <img
                              src={getImageUrl(image)}
                              alt={`Gallery ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {deleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h3 className="text-xl font-bold mb-4 text-[#4A5D4A]">Confirm Delete</h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this project? This action cannot be undone.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleDelete}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
                >
                  Delete
                </button>
                <button
                  onClick={() => setDeleteConfirm(false)}
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;