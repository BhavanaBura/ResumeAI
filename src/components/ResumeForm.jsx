// components/ResumeForm.jsx
// Left panel with tabbed form sections for all resume data

import React, { useState } from 'react';
import { FiUser, FiBriefcase, FiBookOpen, FiCode, FiStar, FiAward } from 'react-icons/fi';
import { MdWork } from 'react-icons/md';

import PersonalInfoSection from './form/PersonalInfoSection';
import ProfessionalSection from './form/ProfessionalSection';
import EducationSection from './form/EducationSection';
import ExperienceSection from './form/ExperienceSection';
import ProjectsSection from './form/ProjectsSection';
import SkillsSection from './form/SkillsSection';
import ExtrasSection from './form/ExtrasSection';

// Tab configuration
const TABS = [
  { id: 'personal', label: 'Personal', icon: FiUser },
  { id: 'professional', label: 'Summary', icon: FiBriefcase },
  { id: 'education', label: 'Education', icon: FiBookOpen },
  { id: 'experience', label: 'Experience', icon: MdWork },
  { id: 'projects', label: 'Projects', icon: FiCode },
  { id: 'skills', label: 'Skills', icon: FiStar },
  { id: 'extras', label: 'Extras', icon: FiAward },
];

const ResumeForm = ({
  resumeData,
  onUpdateField,
  onUpdateArrayItem,
  onAddArrayItem,
  onRemoveArrayItem,
  onUpdateSimpleArrayItem,
  onAddSimpleArrayItem,
  onRemoveSimpleArrayItem,
}) => {
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="flex flex-col h-full">
      {/* Tabs */}
      <div className="shrink-0 overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-xl mb-4 min-w-max">
          {TABS.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap
                  ${activeTab === tab.id
                    ? 'bg-white dark:bg-gray-900 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
              >
                <Icon size={13} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Section */}
      <div className="flex-1 overflow-y-auto">
        <div className="animate-fade-in">
          {activeTab === 'personal' && (
            <PersonalInfoSection
              data={resumeData}
              onUpdate={onUpdateField}
            />
          )}

          {activeTab === 'professional' && (
            <ProfessionalSection
              data={resumeData}
              onUpdate={onUpdateField}
            />
          )}

          {activeTab === 'education' && (
            <EducationSection
              data={resumeData}
              onUpdate={onUpdateArrayItem}
              onAdd={onAddArrayItem}
              onRemove={onRemoveArrayItem}
            />
          )}

          {activeTab === 'experience' && (
            <ExperienceSection
              data={resumeData}
              onUpdate={onUpdateArrayItem}
              onAdd={onAddArrayItem}
              onRemove={onRemoveArrayItem}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsSection
              data={resumeData}
              onUpdate={onUpdateArrayItem}
              onAdd={onAddArrayItem}
              onRemove={onRemoveArrayItem}
            />
          )}

          {activeTab === 'skills' && (
            <SkillsSection
              data={resumeData}
              onUpdate={onUpdateField}
            />
          )}

          {activeTab === 'extras' && (
            <ExtrasSection
              data={resumeData}
              onUpdateSimple={onUpdateSimpleArrayItem}
              onAddSimple={onAddSimpleArrayItem}
              onRemoveSimple={onRemoveSimpleArrayItem}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
