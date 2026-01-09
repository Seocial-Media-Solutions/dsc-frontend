import React, { useState } from 'react';
import { Plus, ImageIcon, Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

const AddProject = ({ setMessage, fetchProjects }) => {
  const [formData, setFormData] = useState({
    title: '',
    description1: '',
    description2: '',
    projectType: '',
    projectArea: '',
    projectLocation: ''
  });
  const [mainImage, setMainImage] = useState(null);
  const [otherImages, setOtherImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title' && value.length <= 200) {  // Increased to 200 chars
      setFormData(prev => ({ ...prev, [name]: value }));
    } else if ((name === 'description1' || name === 'description2') && value.length <= 10000) {  // Increased to 10000 chars
      setFormData(prev => ({ ...prev, [name]: value }));
    } else if (['projectType', 'projectArea', 'projectLocation'].includes(name)) {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setMessage('Main image must be less than 5MB');
      return;
    }
    setMainImage(file);
  };

  const handleOtherImagesChange = (e) => {
    const files = [...e.target.files];
    if (files.length > 25) {
      setMessage('Maximum 25 additional images allowed');
      return;
    }
    const oversizedFiles = files.filter(file => file.size > 10 * 1024 * 1024);
    if (oversizedFiles.length > 0) {
      setMessage('Each image must be less than 5MB');
      return;
    }
    setOtherImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const submitData = new FormData();
    // Append all form fields
    Object.keys(formData).forEach(key => {
      if (formData[key]) submitData.append(key, formData[key]);
    });

    // Append images
    if (mainImage) submitData.append('mainImage', mainImage);
    otherImages.forEach(img => submitData.append('otherImages', img));

    try {
      await axios.post('https://api.dsconcept.in/api/projects', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage('Project created successfully!');
      setFormData({
        title: '',
        description1: '',
        description2: '',
        projectType: '',
        projectArea: '',
        projectLocation: ''
      });
      setMainImage(null);
      setOtherImages([]);
      fetchProjects();
    } catch (error) {
      setMessage(error.response?.data?.error || 'Error creating project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-xl p-8 border border-gray-200"
    >
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 border-b border-gray-200 pb-4">
        Add New Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Project Title <span className="text-[#829280] text-xs">(max 200 characters)</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#829280] focus:border-[#829280] transition duration-200 bg-white"
          />
          <div className="text-xs text-gray-500 flex justify-end">
            {formData.title.length}/200 characters
          </div>
        </div>

        {/* Project Type Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Project Type
          </label>
          <input
            type="text"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            placeholder="e.g., Residential, Commercial, Industrial"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#829280] focus:border-[#829280] transition duration-200 bg-white"
          />
        </div>

        {/* Project Area Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Project Area
          </label>
          <input
            type="text"
            name="projectArea"
            value={formData.projectArea}
            onChange={handleChange}
            placeholder="e.g., 1000 sq ft"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#829280] focus:border-[#829280] transition duration-200 bg-white"
          />
        </div>

        {/* Project Location Field */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Project Location
          </label>
          <input
            type="text"
            name="projectLocation"
            value={formData.projectLocation}
            onChange={handleChange}
            placeholder="e.g., City, State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#829280] focus:border-[#829280] transition duration-200 bg-white"
          />
        </div>

        {/* Primary Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Primary Description <span className="text-[#829280] text-xs">(max 10000 characters)</span>
          </label>
          <textarea
            name="description1"
            value={formData.description1}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#829280] focus:border-[#829280] transition duration-200 bg-white"
          />
          <div className="text-xs text-gray-500 flex justify-end">
            {formData.description1.length}/10000 characters
          </div>
        </div>

        {/* Secondary Description */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Secondary Description <span className="text-[#829280] text-xs">(max 10000 characters)</span>
          </label>
          <textarea
            name="description2"
            value={formData.description2}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#829280] focus:border-[#829280] transition duration-200 bg-white"
          />
          <div className="text-xs text-gray-500 flex justify-end">
            {formData.description2.length}/10000 characters
          </div>
        </div>

        {/* Main Image Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Main Image <span className="text-[#829280] text-xs">(max 5MB)</span>
          </label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              onChange={handleMainImageChange}
              className="hidden"
              id="mainImage"
              accept="image/*"
            />
            <motion.label
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              htmlFor="mainImage"
              className="flex items-center gap-2 px-4 py-3 bg-[#829280] text-white rounded-lg cursor-pointer hover:bg-[#728272] transition duration-200"
            >
              <ImageIcon size={18} />
              Choose File
            </motion.label>
            {mainImage && (
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                {mainImage.name}
              </span>
            )}
          </div>
        </div>

        {/* Additional Images Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Additional Images <span className="text-[#829280] text-xs">(max 25 images, 5MB each)</span>
          </label>
          <div className="flex items-center gap-4">
            <input
              type="file"
              onChange={handleOtherImagesChange}
              className="hidden"
              id="otherImages"
              accept="image/*"
              multiple
            />
            <motion.label
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              htmlFor="otherImages"
              className="flex items-center gap-2 px-4 py-3 bg-[#829280] text-white rounded-lg cursor-pointer hover:bg-[#728272] transition duration-200"
            >
              <Plus size={18} />
              Add Images
            </motion.label>
            {otherImages.length > 0 && (
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                {otherImages.length} images selected
              </span>
            )}
          </div>
        </div>

        {/* Guidelines Box */}
        <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-600 mt-4">
          <div className="flex items-center gap-2">
            <AlertCircle size={16} className="text-[#829280]" />
            <span className="font-medium">Upload Guidelines:</span>
          </div>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Main image and each additional image must be under 5MB</li>
            <li>Maximum 25 additional images allowed</li>
            <li>Title limited to 200 characters</li>
            <li>Descriptions limited to 10000 characters each</li>
            <li>Project type, area, and location are optional</li>
          </ul>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#829280] text-white rounded-lg hover:bg-[#728272] disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-200 mt-8 font-medium"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <Plus size={20} />
              Create Project
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddProject;