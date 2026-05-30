// components/form/ProfessionalSection.jsx
// Form section for professional summary and career objective with AI generation

import React, { useState } from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { generateSummary, generateObjective } from '../../services/geminiService';
import toast from 'react-hot-toast';

const ProfessionalSection = ({ data, onUpdate }) => {
  // Track loading state for each AI button separately
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [loadingObjective, setLoadingObjective] = useState(false);

  // Generate AI summary
  const handleGenerateSummary = async () => {
    setLoadingSummary(true);
    try {
      const summary = await generateSummary(data);
      onUpdate('summary', summary);
      toast.success('Summary generated!');
    } catch (error) {
      toast.error(error.message || 'Failed to generate summary');
    } finally {
      setLoadingSummary(false);
    }
  };

  // Generate AI objective
  const handleGenerateObjective = async () => {
    setLoadingObjective(true);
    try {
      const objective = await generateObjective(data);
      onUpdate('objective', objective);
      toast.success('Career objective generated!');
    } catch (error) {
      toast.error(error.message || 'Failed to generate objective');
    } finally {
      setLoadingObjective(false);
    }
  };

  return (
    <div className="section-card">
      <h3 className="section-title">
        <FiBriefcase className="text-primary-500" />
        Professional Details
      </h3>

      {/* Professional Summary */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <label className="form-label mb-0">Professional Summary</label>
          <button
            type="button"
            onClick={handleGenerateSummary}
            disabled={loadingSummary}
            className="btn-ai"
            title="Generate summary using AI"
          >
            <HiSparkles size={14} />
            {loadingSummary ? 'Generating...' : 'AI Generate'}
          </button>
        </div>
        <textarea
          value={data.summary}
          onChange={(e) => onUpdate('summary', e.target.value)}
          placeholder="A results-driven software engineer with expertise in..."
          rows={4}
          className="form-input resize-none"
        />
        <p className="text-xs text-gray-400 mt-1">{data.summary?.length || 0} characters</p>
      </div>

      {/* Career Objective */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="form-label mb-0">Career Objective</label>
          <button
            type="button"
            onClick={handleGenerateObjective}
            disabled={loadingObjective}
            className="btn-ai"
            title="Generate objective using AI"
          >
            <HiSparkles size={14} />
            {loadingObjective ? 'Generating...' : 'AI Generate'}
          </button>
        </div>
        <textarea
          value={data.objective}
          onChange={(e) => onUpdate('objective', e.target.value)}
          placeholder="Seeking a challenging position where I can utilize my skills..."
          rows={3}
          className="form-input resize-none"
        />
      </div>

      {/* Info about AI */}
      <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 flex items-center gap-1">
        <HiSparkles size={11} />
        AI uses your skills, experience, and projects to generate ATS-friendly content
      </p>
    </div>
  );
};

export default ProfessionalSection;
