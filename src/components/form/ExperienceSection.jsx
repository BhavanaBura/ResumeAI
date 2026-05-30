// components/form/ExperienceSection.jsx
// Manages dynamic list of work experience entries

import React from 'react';
import { FiTool, FiPlus, FiTrash2 } from 'react-icons/fi';
import { MdWork } from 'react-icons/md';

const defaultEntry = {
  company: '',
  role: '',
  duration: '',
  responsibilities: '',
};

const ExperienceSection = ({ data, onUpdate, onAdd, onRemove }) => {
  return (
    <div className="section-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="section-title mb-0">
          <MdWork className="text-primary-500" />
          Work Experience
        </h3>
        <button
          type="button"
          onClick={() => onAdd('experience', defaultEntry)}
          className="btn-secondary text-xs"
        >
          <FiPlus size={13} /> Add More
        </button>
      </div>

      <div className="space-y-4">
        {data.experience.map((exp, index) => (
          <div
            key={exp.id || index}
            className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 relative"
          >
            {data.experience.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove('experience', index)}
                className="btn-danger absolute top-3 right-3"
              >
                <FiTrash2 size={12} /> Remove
              </button>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-16 sm:pr-20">
              <div>
                <label className="form-label">Company Name *</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => onUpdate('experience', index, 'company', e.target.value)}
                  placeholder="Google, TCS, Infosys..."
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Job Title / Role *</label>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => onUpdate('experience', index, 'role', e.target.value)}
                  placeholder="Software Engineer"
                  className="form-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="form-label">Duration</label>
                <input
                  type="text"
                  value={exp.duration}
                  onChange={(e) => onUpdate('experience', index, 'duration', e.target.value)}
                  placeholder="Jan 2023 – Present"
                  className="form-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="form-label">Key Responsibilities</label>
                <textarea
                  value={exp.responsibilities}
                  onChange={(e) => onUpdate('experience', index, 'responsibilities', e.target.value)}
                  placeholder="• Developed REST APIs using Node.js and Express&#10;• Reduced load time by 30% through optimization&#10;• Collaborated with cross-functional teams..."
                  rows={4}
                  className="form-input resize-none"
                />
                <p className="text-xs text-gray-400 mt-1">
                  Tip: Start each point with a bullet (•) or dash (-) for better formatting
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
