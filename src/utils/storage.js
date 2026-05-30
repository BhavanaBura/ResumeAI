// utils/storage.js
// Helper functions for saving/loading resume data from localStorage

const STORAGE_KEY = 'resumeai_data';
const THEME_KEY = 'resumeai_theme';
const TEMPLATE_KEY = 'resumeai_template';

// Save resume data to localStorage
export const saveToStorage = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
    return false;
  }
};

// Load resume data from localStorage
export const loadFromStorage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return null;
  }
};

// Clear saved resume data
export const clearStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Failed to clear localStorage:', error);
    return false;
  }
};

// Save theme preference
export const saveTheme = (theme) => {
  localStorage.setItem(THEME_KEY, theme);
};

// Load theme preference
export const loadTheme = () => {
  return localStorage.getItem(THEME_KEY) || 'light';
};

// Save selected template
export const saveTemplate = (template) => {
  localStorage.setItem(TEMPLATE_KEY, template);
};

// Load selected template
export const loadTemplate = () => {
  return localStorage.getItem(TEMPLATE_KEY) || 'modern';
};
