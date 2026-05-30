// components/TemplateSelector.jsx
// Allows user to switch between Modern, Professional, and Minimal templates

import React from 'react';
import { FiLayout } from 'react-icons/fi';
import { saveTemplate } from '../utils/storage';

const TEMPLATES = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'Colorful sidebar layout',
    preview: (
      <div className="w-full h-full flex">
        <div className="w-2/5 bg-blue-600 rounded-l-sm"></div>
        <div className="w-3/5 bg-white dark:bg-gray-700 p-1 space-y-1">
          <div className="h-1.5 bg-gray-300 dark:bg-gray-500 rounded w-3/4"></div>
          <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
          <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
          <div className="h-1 bg-blue-200 dark:bg-blue-800 rounded w-1/2 mt-2"></div>
          <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
        </div>
      </div>
    ),
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Corporate ATS-friendly',
    preview: (
      <div className="w-full h-full bg-white dark:bg-gray-700 p-1.5 space-y-1">
        <div className="h-2 bg-gray-800 dark:bg-gray-300 rounded w-2/3"></div>
        <div className="h-1 bg-gray-400 rounded w-full"></div>
        <div className="h-0.5 bg-gray-800 dark:bg-gray-300 rounded w-full mt-1"></div>
        <div className="h-1 bg-gray-300 dark:bg-gray-500 rounded w-3/4"></div>
        <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
        <div className="h-0.5 bg-gray-800 dark:bg-gray-300 rounded w-full mt-1"></div>
        <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
      </div>
    ),
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean one-column',
    preview: (
      <div className="w-full h-full bg-white dark:bg-gray-700 p-1.5 space-y-1">
        <div className="h-2 bg-gray-900 dark:bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div className="h-0.5 bg-gray-300 dark:bg-gray-500 rounded w-full mt-1"></div>
        <div className="h-1 bg-gray-400 dark:bg-gray-400 rounded w-2/3 mx-auto"></div>
        <div className="h-0.5 bg-gray-200 rounded w-full mt-1"></div>
        <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
        <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-4/5"></div>
        <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
      </div>
    ),
  },
];

const TemplateSelector = ({ selectedTemplate, onSelectTemplate }) => {
  const handleSelect = (templateId) => {
    onSelectTemplate(templateId);
    saveTemplate(templateId);
  };

  return (
    <div className="section-card">
      <h3 className="section-title">
        <FiLayout className="text-primary-500" />
        Choose Template
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {TEMPLATES.map((template) => (
          <button
            key={template.id}
            onClick={() => handleSelect(template.id)}
            className={`relative rounded-lg overflow-hidden border-2 transition-all duration-200 group
              ${selectedTemplate === template.id
                ? 'border-primary-500 shadow-md shadow-primary-100 dark:shadow-primary-900/30'
                : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
              }`}
          >
            {/* Preview Thumbnail */}
            <div className="h-16 w-full overflow-hidden">
              {template.preview}
            </div>

            {/* Label */}
            <div className={`px-2 py-1.5 text-center transition-colors
              ${selectedTemplate === template.id
                ? 'bg-primary-50 dark:bg-primary-900/20'
                : 'bg-gray-50 dark:bg-gray-800'
              }`}
            >
              <p className={`text-xs font-semibold ${selectedTemplate === template.id ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'}`}>
                {template.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 hidden sm:block">
                {template.description}
              </p>
            </div>

            {/* Selected checkmark */}
            {selectedTemplate === template.id && (
              <div className="absolute top-1 right-1 w-4 h-4 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
