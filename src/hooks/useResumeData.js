// hooks/useResumeData.js
// Custom hook to manage resume form data, auto-save, and localStorage

import { useState, useEffect, useCallback } from 'react';
import { defaultResumeData } from '../utils/defaultData';
import { saveToStorage, loadFromStorage, clearStorage } from '../utils/storage';
import toast from 'react-hot-toast';

export const useResumeData = () => {
  // Initialize state from localStorage or use defaults
  const [resumeData, setResumeData] = useState(() => {
    const saved = loadFromStorage();
    return saved || defaultResumeData;
  });

  // Auto-save every time resumeData changes (with debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      saveToStorage(resumeData);
    }, 800); // Save 800ms after last change

    return () => clearTimeout(timer);
  }, [resumeData]);

  // Update a single top-level field (e.g., fullName, email)
  const updateField = useCallback((fieldName, value) => {
    setResumeData(prev => ({
      ...prev,
      [fieldName]: value,
    }));
  }, []);

  // Update a specific item in an array field (education, experience, projects)
  const updateArrayItem = useCallback((arrayName, index, fieldName, value) => {
    setResumeData(prev => {
      const updated = [...prev[arrayName]];
      updated[index] = { ...updated[index], [fieldName]: value };
      return { ...prev, [arrayName]: updated };
    });
  }, []);

  // Add a new item to an array field
  const addArrayItem = useCallback((arrayName, defaultItem) => {
    setResumeData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], { ...defaultItem, id: crypto.randomUUID() }],
    }));
  }, []);

  // Remove an item from an array field by index
  const removeArrayItem = useCallback((arrayName, index) => {
    setResumeData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index),
    }));
  }, []);

  // Update a simple string array item (certifications, languages, achievements)
  const updateSimpleArrayItem = useCallback((arrayName, index, value) => {
    setResumeData(prev => {
      const updated = [...prev[arrayName]];
      updated[index] = value;
      return { ...prev, [arrayName]: updated };
    });
  }, []);

  // Add to a simple string array
  const addSimpleArrayItem = useCallback((arrayName) => {
    setResumeData(prev => ({
      ...prev,
      [arrayName]: [...prev[arrayName], ''],
    }));
  }, []);

  // Remove from a simple string array
  const removeSimpleArrayItem = useCallback((arrayName, index) => {
    setResumeData(prev => ({
      ...prev,
      [arrayName]: prev[arrayName].filter((_, i) => i !== index),
    }));
  }, []);

  // Reset to defaults / clear all data
  const resetData = useCallback(() => {
    clearStorage();
    setResumeData(defaultResumeData);
    toast.success('Resume cleared successfully!');
  }, []);

  // Manual save with toast notification
  const manualSave = useCallback(() => {
    const success = saveToStorage(resumeData);
    if (success) {
      toast.success('Resume saved!');
    } else {
      toast.error('Failed to save. Try again.');
    }
  }, [resumeData]);

  return {
    resumeData,
    updateField,
    updateArrayItem,
    addArrayItem,
    removeArrayItem,
    updateSimpleArrayItem,
    addSimpleArrayItem,
    removeSimpleArrayItem,
    resetData,
    manualSave,
  };
};
