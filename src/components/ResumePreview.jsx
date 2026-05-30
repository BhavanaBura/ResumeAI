// components/ResumePreview.jsx
// Right panel that shows a live preview of the resume using the selected template

import React, { useState } from 'react';
import { FiMaximize2, FiMinimize2, FiDownload } from 'react-icons/fi';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import { exportToPDF } from '../utils/pdfExport';
import toast from 'react-hot-toast';

// Map template ID to template component
const TEMPLATE_COMPONENTS = {
  modern: ModernTemplate,
  professional: ProfessionalTemplate,
  minimal: MinimalTemplate,
};

const ResumePreview = ({ resumeData, selectedTemplate }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const TemplateComponent = TEMPLATE_COMPONENTS[selectedTemplate] || ModernTemplate;

  const handleDownload = async () => {
    const loading = toast.loading('Generating PDF...');
    try {
      await exportToPDF('resume-preview', 'my-resume');
      toast.dismiss(loading);
      toast.success('PDF downloaded!');
    } catch (error) {
      toast.dismiss(loading);
      toast.error('PDF export failed. Try again.');
    }
  };

  return (
    <div className={`flex flex-col h-full ${isFullscreen ? 'fixed inset-0 z-50 bg-white dark:bg-gray-950 p-4' : ''}`}>
      {/* Preview Header */}
      <div className="flex items-center justify-between mb-3 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
          <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            Live Preview — {selectedTemplate.charAt(0).toUpperCase() + selectedTemplate.slice(1)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownload}
            className="p-1.5 text-gray-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
            title="Download PDF"
          >
            <FiDownload size={15} />
          </button>
          <button
            onClick={() => setIsFullscreen(prev => !prev)}
            className="p-1.5 text-gray-500 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
            title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen preview'}
          >
            {isFullscreen ? <FiMinimize2 size={15} /> : <FiMaximize2 size={15} />}
          </button>
        </div>
      </div>

      {/* Preview Container — this scrolls if content is tall */}
      <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
        {/* Scale the A4 resume to fit the preview panel */}
        <div className="min-w-full">
          {/* The actual resume — this is the element captured for PDF */}
          <div
            id="resume-preview"
            className="bg-white mx-auto"
            style={{
              width: '210mm',
              minHeight: '297mm',
              transformOrigin: 'top left',
            }}
          >
            <TemplateComponent data={resumeData} />
          </div>
        </div>
      </div>

      {/* Size note */}
      <p className="text-xs text-gray-400 dark:text-gray-600 text-center mt-2 shrink-0">
        A4 format (210 × 297mm) · Updates in real-time
      </p>
    </div>
  );
};

export default ResumePreview;
