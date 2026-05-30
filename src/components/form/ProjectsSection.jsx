// components/form/ProjectsSection.jsx
// Manages dynamic list of project entries

import React from 'react';
import { FiCode, FiPlus, FiTrash2, FiGithub, FiExternalLink } from 'react-icons/fi';

const defaultEntry = {
  name: '',
  description: '',
  technologies: '',
  githubLink: '',
  liveLink: '',
};

const ProjectsSection = ({ data, onUpdate, onAdd, onRemove }) => {
  return (
    <div className="section-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="section-title mb-0">
          <FiCode className="text-primary-500" />
          Projects
        </h3>
        <button
          type="button"
          onClick={() => onAdd('projects', defaultEntry)}
          className="btn-secondary text-xs"
        >
          <FiPlus size={13} /> Add More
        </button>
      </div>

      <div className="space-y-4">
        {data.projects.map((project, index) => (
          <div
            key={project.id || index}
            className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 relative"
          >
            {data.projects.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove('projects', index)}
                className="btn-danger absolute top-3 right-3"
              >
                <FiTrash2 size={12} /> Remove
              </button>
            )}

            <div className="space-y-3 pr-16 sm:pr-20">
              <div>
                <label className="form-label">Project Name *</label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => onUpdate('projects', index, 'name', e.target.value)}
                  placeholder="E-Commerce Platform"
                  className="form-input"
                />
              </div>

              <div>
                <label className="form-label">Description *</label>
                <textarea
                  value={project.description}
                  onChange={(e) => onUpdate('projects', index, 'description', e.target.value)}
                  placeholder="A full-stack web application that allows users to browse products, add to cart, and checkout securely..."
                  rows={3}
                  className="form-input resize-none"
                />
              </div>

              <div>
                <label className="form-label">Technologies Used</label>
                <input
                  type="text"
                  value={project.technologies}
                  onChange={(e) => onUpdate('projects', index, 'technologies', e.target.value)}
                  placeholder="React, Node.js, MongoDB, Express, Tailwind CSS"
                  className="form-input"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="form-label">GitHub Link</label>
                  <div className="relative">
                    <FiGithub className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                    <input
                      type="url"
                      value={project.githubLink}
                      onChange={(e) => onUpdate('projects', index, 'githubLink', e.target.value)}
                      placeholder="github.com/you/project"
                      className="form-input pl-8"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label">Live Demo Link</label>
                  <div className="relative">
                    <FiExternalLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
                    <input
                      type="url"
                      value={project.liveLink}
                      onChange={(e) => onUpdate('projects', index, 'liveLink', e.target.value)}
                      placeholder="your-project.vercel.app"
                      className="form-input pl-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
