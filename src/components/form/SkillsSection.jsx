// components/form/SkillsSection.jsx
// Form section for technical and soft skills

import React from 'react';
import { FiStar } from 'react-icons/fi';

const SkillsSection = ({ data, onUpdate }) => {
  return (
    <div className="section-card">
      <h3 className="section-title">
        <FiStar className="text-primary-500" />
        Skills
      </h3>

      <div className="space-y-4">
        <div>
          <label className="form-label">Technical Skills *</label>
          <textarea
            value={data.technicalSkills}
            onChange={(e) => onUpdate('technicalSkills', e.target.value)}
            placeholder="React, JavaScript, Node.js, Python, SQL, MongoDB, Git, HTML, CSS, TypeScript..."
            rows={3}
            className="form-input resize-none"
          />
          <p className="text-xs text-gray-400 mt-1">
            Separate skills with commas for best ATS results
          </p>
        </div>

        <div>
          <label className="form-label">Soft Skills</label>
          <textarea
            value={data.softSkills}
            onChange={(e) => onUpdate('softSkills', e.target.value)}
            placeholder="Communication, Problem Solving, Team Leadership, Critical Thinking, Time Management..."
            rows={2}
            className="form-input resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
