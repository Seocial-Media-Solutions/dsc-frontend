// src/context/MainContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';
import axios from 'axios';
import { API_CONFIG } from '../config/api';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updateMessage, setUpdateMessage] = useState('');

  const getImageUrl = useCallback((imagePath) => {
    if (!imagePath) return null;
    return `${API_CONFIG.UPLOADS_URL}/${imagePath}`;
  }, []);

  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_CONFIG.BASE_URL}/projects`);
      setProjects(response.data.data);
      setError(null);
      return response.data.data;
    } catch (error) {
      setError(error.response?.data?.error || 'Error fetching projects');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchProjectById = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_CONFIG.BASE_URL}/projects/${id}`);
      const projectData = response.data.data;
      setError(null);
      return projectData;
    } catch (error) {
      setError(error.response?.data?.error || 'Error fetching project details');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProject = useCallback(async (id, formData) => {
    setLoading(true);
    try {
      const response = await axios.put(
        `${API_CONFIG.BASE_URL}/projects/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      setUpdateMessage('Project updated successfully!');
      setError(null);
      return response.data.data;
    } catch (error) {
      setError(error.response?.data?.error || 'Error updating project');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteProject = useCallback(async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${API_CONFIG.BASE_URL}/projects/${id}`);
      setError(null);
      setUpdateMessage('Project deleted successfully!');
      return true;
    } catch (error) {
      setError(error.response?.data?.error || 'Error deleting project');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const clearUpdateMessage = useCallback(() => {
    setUpdateMessage('');
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value = {
    projects,
    loading,
    error,
    updateMessage,
    getImageUrl,
    fetchProjects,
    fetchProjectById,
    updateProject,
    deleteProject,
    clearUpdateMessage,
    clearError
  };

  return (
    <MainContext.Provider value={value}>
      {children}
    </MainContext.Provider>
  );
};

export const useMain = () => {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error('useMain must be used within a MainProvider');
  }
  return context;
};