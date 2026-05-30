// components/form/ExtrasSection.jsx
// Certifications, Languages Known, and Achievements

import React from 'react';
import { FiAward, FiGlobe, FiZap, FiPlus, FiTrash2 } from 'react-icons/fi';

// Reusable component for a simple string list (certifications, languages, achievements)
const StringListField = ({ label, icon: Icon, items, arrayName, onUpdate, onAdd, onRemove, placeholder }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="form-label mb-0 flex items-center gap-1.5">
          <Icon size={14} className="text-primary-500" />
          {label}
        </label>
        <button
          type="button"
          onClick={() => onAdd(arrayName)}
          className="text-xs text-primary-600 dark:text-primary-400 hover:text-primary-700 flex items-center gap-1 font-medium"
        >
          <FiPlus size={12} /> Add
        </button>
      </div>

      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2">
            <input
              type="text"
              value={item}
              onChange={(e) => onUpdate(arrayName, index, e.target.value)}
              placeholder={placeholder}
              className="form-input flex-1"
            />
            {items.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(arrayName, index)}
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              >
                <FiTrash2 size={14} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ExtrasSection = ({ data, onUpdateSimple, onAddSimple, onRemoveSimple }) => {
  return (
    <div className="section-card space-y-5">
      <h3 className="section-title">
        <FiAward className="text-primary-500" />
        Additional Details
      </h3>

      <StringListField
        label="Certifications"
        icon={FiAward}
        items={data.certifications}
        arrayName="certifications"
        onUpdate={onUpdateSimple}
        onAdd={onAddSimple}
        onRemove={onRemoveSimple}
        placeholder="AWS Certified Developer, Google Cloud Associate..."
      />

      <div className="border-t border-gray-100 dark:border-gray-800 pt-5">
        <StringListField
          label="Languages Known"
          icon={FiGlobe}
          items={data.languages}
          arrayName="languages"
          onUpdate={onUpdateSimple}
          onAdd={onAddSimple}
          onRemove={onRemoveSimple}
          placeholder="English (Fluent), Telugu (Native)..."
        />
      </div>

      <div className="border-t border-gray-100 dark:border-gray-800 pt-5">
        <StringListField
          label="Achievements & Awards"
          icon={FiZap}
          items={data.achievements}
          arrayName="achievements"
          onUpdate={onUpdateSimple}
          onAdd={onAddSimple}
          onRemove={onRemoveSimple}
          placeholder="Won 1st place in college hackathon, Published research paper..."
        />
      </div>
    </div>
  );
};

export default ExtrasSection;
