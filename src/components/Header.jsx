// components/Header.jsx
// Top navigation bar with logo, dark mode toggle, save button

import React from 'react';
import { FiMoon, FiSun, FiSave, FiTrash2, FiDownload } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { exportToPDF } from '../utils/pdfExport';
import toast from 'react-hot-toast';

const Header = ({ isDark, toggleDarkMode, onSave, onReset }) => {

  const handleDownload = async () => {
    const loading = toast.loading('Generating PDF...');
    try {
      await exportToPDF('resume-preview', 'my-resume');
      toast.dismiss(loading);
      toast.success('PDF downloaded!');
    } catch (error) {
      toast.dismiss(loading);
      toast.error('PDF export failed. Try again.');
      console.error(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-4 h-14 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
            <HiSparkles className="text-white text-sm" />
          </div>
          <span className="font-display font-bold text-lg gradient-text">ResumeAI</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">

          {/* Download PDF */}
          <button
            onClick={handleDownload}
            className="btn-primary hidden sm:flex"
            title="Download as PDF"
          >
            <FiDownload size={15} />
            <span>Export PDF</span>
          </button>

          {/* Mobile Download */}
          <button
            onClick={handleDownload}
            className="sm:hidden p-2 rounded-lg bg-primary-600 text-white"
            title="Download PDF"
          >
            <FiDownload size={16} />
          </button>

          {/* Save */}
          <button
            onClick={onSave}
            className="btn-secondary"
            title="Save resume"
          >
            <FiSave size={15} />
            <span className="hidden sm:inline">Save</span>
          </button>

          {/* Clear / Reset */}
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to clear all resume data?')) {
                onReset();
              }
            }}
            className="p-2 rounded-lg text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
            title="Clear resume"
          >
            <FiTrash2 size={16} />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>

        </div>
      </div>
    </header>
  );
};

export default Header;
