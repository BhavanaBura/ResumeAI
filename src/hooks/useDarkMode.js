// hooks/useDarkMode.js
// Manages dark/light mode toggle and persists preference in localStorage

import { useState, useEffect } from 'react';
import { saveTheme, loadTheme } from '../utils/storage';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    return loadTheme() === 'dark';
  });

  // Apply or remove 'dark' class on the html element when isDark changes
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    saveTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(prev => !prev);

  return { isDark, toggleDarkMode };
};
