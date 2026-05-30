// App.jsx
// Root component — wires everything together

import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import TemplateSelector from './components/TemplateSelector';
import AnalyticsPanel from './components/AnalyticsPanel';
import { useResumeData } from './hooks/useResumeData';
import { useDarkMode } from './hooks/useDarkMode';
import { loadTemplate } from './utils/storage';

function App() {
  // Custom hooks for data and dark mode
  const {
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
  } = useResumeData();

  const { isDark, toggleDarkMode } = useDarkMode();

  // Selected template (persisted in localStorage)
  const [selectedTemplate, setSelectedTemplate] = useState(loadTemplate);

  // Mobile: toggle between form and preview
  const [mobileView, setMobileView] = useState('form');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: isDark ? '#1f2937' : '#ffffff',
            color: isDark ? '#f9fafb' : '#111827',
            border: isDark ? '1px solid #374151' : '1px solid #e5e7eb',
            fontSize: '13px',
          },
        }}
      />

      {/* Header */}
      <Header
        isDark={isDark}
        toggleDarkMode={toggleDarkMode}
        onSave={manualSave}
        onReset={resetData}
      />

      {/* Mobile View Toggle */}
      <div className="lg:hidden flex items-center gap-2 p-3 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-14 z-40">
        <button
          onClick={() => setMobileView('form')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
            mobileView === 'form'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          }`}
        >
          ✏️ Edit Resume
        </button>
        <button
          onClick={() => setMobileView('preview')}
          className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
            mobileView === 'preview'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
          }`}
        >
          👁 Preview
        </button>
      </div>

      {/* Main Layout */}
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex h-[calc(100vh-56px)] lg:h-[calc(100vh-56px)] overflow-hidden">

          {/* ===== LEFT PANEL: Form + Template + Analytics ===== */}
          <div
            className={`
              w-full lg:w-[420px] xl:w-[460px] shrink-0
              flex flex-col gap-3 p-4 overflow-y-auto
              border-r border-gray-200 dark:border-gray-800
              bg-white dark:bg-gray-900
              ${mobileView === 'form' ? 'block' : 'hidden'} lg:block
            `}
          >
            {/* Template Selector */}
            <TemplateSelector
              selectedTemplate={selectedTemplate}
              onSelectTemplate={setSelectedTemplate}
            />

            {/* Analytics */}
            <AnalyticsPanel resumeData={resumeData} />

            {/* Resume Form */}
            <div className="flex-1">
              <ResumeForm
                resumeData={resumeData}
                onUpdateField={updateField}
                onUpdateArrayItem={updateArrayItem}
                onAddArrayItem={addArrayItem}
                onRemoveArrayItem={removeArrayItem}
                onUpdateSimpleArrayItem={updateSimpleArrayItem}
                onAddSimpleArrayItem={addSimpleArrayItem}
                onRemoveSimpleArrayItem={removeSimpleArrayItem}
              />
            </div>

            {/* Auto-save note */}
            <p className="text-xs text-gray-400 dark:text-gray-600 text-center pb-2">
              💾 Auto-saved to browser storage
            </p>
          </div>

          {/* ===== RIGHT PANEL: Resume Preview ===== */}
          <div
            className={`
              flex-1 p-4 overflow-hidden bg-gray-100 dark:bg-gray-950
              ${mobileView === 'preview' ? 'block' : 'hidden'} lg:block
            `}
          >
            <ResumePreview
              resumeData={resumeData}
              selectedTemplate={selectedTemplate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
