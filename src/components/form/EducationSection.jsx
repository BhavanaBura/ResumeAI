// components/form/EducationSection.jsx
// Manages dynamic list of education entries

import React from 'react';
import { FiBookOpen, FiPlus, FiTrash2 } from 'react-icons/fi';

// Default values for a new education entry
const defaultEntry = {
  degree: '',
  institution: '',
  year: '',
  grade: '',
};

const EducationSection = ({ data, onUpdate, onAdd, onRemove }) => {
  return (
    <div className="section-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="section-title mb-0">
          <FiBookOpen className="text-primary-500" />
          Education
        </h3>
        <button
          type="button"
          onClick={() => onAdd('education', defaultEntry)}
          className="btn-secondary text-xs"
        >
          <FiPlus size={13} /> Add More
        </button>
      </div>

      <div className="space-y-4">
        {data.education.map((edu, index) => (
          <div
            key={edu.id || index}
            className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 relative"
          >
            {/* Remove button (only if more than 1 entry) */}
            {data.education.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove('education', index)}
                className="btn-danger absolute top-3 right-3"
              >
                <FiTrash2 size={12} /> Remove
              </button>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-16 sm:pr-20">
              <div className="sm:col-span-2">
                <label className="form-label">Degree / Qualification *</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => onUpdate('education', index, 'degree', e.target.value)}
                  placeholder="B.Tech Computer Science"
                  className="form-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="form-label">Institution / University *</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => onUpdate('education', index, 'institution', e.target.value)}
                  placeholder="JNTU Hyderabad"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Year of Passing</label>
                <input
                  type="text"
                  value={edu.year}
                  onChange={(e) => onUpdate('education', index, 'year', e.target.value)}
                  placeholder="2024"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">CGPA / Percentage</label>
                <input
                  type="text"
                  value={edu.grade}
                  onChange={(e) => onUpdate('education', index, 'grade', e.target.value)}
                  placeholder="8.5 CGPA / 85%"
                  className="form-input"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
