// templates/ModernTemplate.jsx
// Modern resume template with colorful sidebar layout

import React from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const ModernTemplate = ({ data }) => {
  // Safely parse skills from comma-separated string
  const techSkills = data.technicalSkills
    ? data.technicalSkills.split(',').map(s => s.trim()).filter(Boolean)
    : [];
  const softSkills = data.softSkills
    ? data.softSkills.split(',').map(s => s.trim()).filter(Boolean)
    : [];

  // Filter out empty entries
  const validEducation = data.education?.filter(e => e.degree || e.institution) || [];
  const validExperience = data.experience?.filter(e => e.company || e.role) || [];
  const validProjects = data.projects?.filter(p => p.name || p.description) || [];
  const validCerts = data.certifications?.filter(c => c.trim()) || [];
  const validLangs = data.languages?.filter(l => l.trim()) || [];
  const validAchievements = data.achievements?.filter(a => a.trim()) || [];

  return (
    <div className="flex min-h-full font-sans text-sm bg-white" style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* Sidebar */}
      <div className="w-64 shrink-0 bg-blue-700 text-white p-5" style={{ backgroundColor: '#1d4ed8', color: 'white' }}>

        {/* Profile Photo */}
        {data.photo && (
          <div className="mb-4 flex justify-center">
            <img
              src={data.photo}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-2 border-blue-400"
              style={{ border: '2px solid #93c5fd' }}
            />
          </div>
        )}

        {/* Name */}
        <h1 className="text-xl font-bold mb-1 text-center" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', marginBottom: '4px' }}>
          {data.fullName || 'Your Name'}
        </h1>

        {/* Contact Info */}
        <div className="mt-4 space-y-2" style={{ marginTop: '16px' }}>
          <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider" style={{ color: '#bfdbfe', fontSize: '10px', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Contact
          </p>
          {data.email && (
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', color: '#bfdbfe', wordBreak: 'break-all' }}>✉ {data.email}</span>
            </div>
          )}
          {data.phone && (
            <div style={{ marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', color: '#bfdbfe' }}>✆ {data.phone}</span>
            </div>
          )}
          {data.location && (
            <div style={{ marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', color: '#bfdbfe' }}>⊙ {data.location}</span>
            </div>
          )}
          {data.linkedin && (
            <div style={{ marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', color: '#bfdbfe', wordBreak: 'break-all' }}>in {data.linkedin.replace('https://', '').replace('www.', '')}</span>
            </div>
          )}
          {data.github && (
            <div style={{ marginBottom: '6px' }}>
              <span style={{ fontSize: '11px', color: '#bfdbfe', wordBreak: 'break-all' }}>⌥ {data.github.replace('https://', '').replace('www.', '')}</span>
            </div>
          )}
        </div>

        {/* Technical Skills */}
        {techSkills.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ color: '#bfdbfe', fontSize: '10px', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>
              Technical Skills
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {techSkills.map((skill, i) => (
                <span key={i} style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', fontSize: '10px', padding: '2px 8px', borderRadius: '9999px' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {softSkills.length > 0 && (
          <div style={{ marginTop: '16px' }}>
            <p style={{ color: '#bfdbfe', fontSize: '10px', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>
              Soft Skills
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {softSkills.map((skill, i) => (
                <li key={i} style={{ fontSize: '11px', color: '#dbeafe', marginBottom: '3px' }}>
                  ▸ {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        {validLangs.length > 0 && (
          <div style={{ marginTop: '16px' }}>
            <p style={{ color: '#bfdbfe', fontSize: '10px', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>
              Languages
            </p>
            {validLangs.map((lang, i) => (
              <p key={i} style={{ fontSize: '11px', color: '#dbeafe', marginBottom: '3px' }}>• {lang}</p>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '24px 20px', backgroundColor: 'white' }}>

        {/* Summary */}
        {data.summary && (
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #1d4ed8', paddingBottom: '4px', marginBottom: '8px' }}>
              Professional Summary
            </h2>
            <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.6' }}>{data.summary}</p>
          </div>
        )}

        {/* Objective */}
        {data.objective && (
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #1d4ed8', paddingBottom: '4px', marginBottom: '8px' }}>
              Career Objective
            </h2>
            <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.6' }}>{data.objective}</p>
          </div>
        )}

        {/* Experience */}
        {validExperience.length > 0 && (
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #1d4ed8', paddingBottom: '4px', marginBottom: '10px' }}>
              Work Experience
            </h2>
            {validExperience.map((exp, i) => (
              <div key={i} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>{exp.role}</p>
                    <p style={{ fontSize: '11px', color: '#1d4ed8', fontWeight: '500' }}>{exp.company}</p>
                  </div>
                  {exp.duration && (
                    <span style={{ fontSize: '10px', color: '#6b7280', whiteSpace: 'nowrap' }}>{exp.duration}</span>
                  )}
                </div>
                {exp.responsibilities && (
                  <div style={{ marginTop: '4px' }}>
                    {exp.responsibilities.split('\n').filter(l => l.trim()).map((line, j) => (
                      <p key={j} style={{ fontSize: '11px', color: '#374151', lineHeight: '1.5', marginBottom: '2px' }}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {validEducation.length > 0 && (
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #1d4ed8', paddingBottom: '4px', marginBottom: '10px' }}>
              Education
            </h2>
            {validEducation.map((edu, i) => (
              <div key={i} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <p style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>{edu.degree}</p>
                    <p style={{ fontSize: '11px', color: '#374151' }}>{edu.institution}</p>
                    {edu.grade && <p style={{ fontSize: '11px', color: '#6b7280' }}>{edu.grade}</p>}
                  </div>
                  {edu.year && (
                    <span style={{ fontSize: '10px', color: '#6b7280' }}>{edu.year}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {validProjects.length > 0 && (
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #1d4ed8', paddingBottom: '4px', marginBottom: '10px' }}>
              Projects
            </h2>
            {validProjects.map((proj, i) => (
              <div key={i} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <p style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>{proj.name}</p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {proj.githubLink && <span style={{ fontSize: '10px', color: '#1d4ed8' }}>GitHub</span>}
                    {proj.liveLink && <span style={{ fontSize: '10px', color: '#1d4ed8' }}>Demo</span>}
                  </div>
                </div>
                {proj.technologies && (
                  <p style={{ fontSize: '10px', color: '#1d4ed8', fontStyle: 'italic', marginBottom: '2px' }}>{proj.technologies}</p>
                )}
                {proj.description && (
                  <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.5' }}>{proj.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {validCerts.length > 0 && (
          <div style={{ marginBottom: '18px' }}>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #1d4ed8', paddingBottom: '4px', marginBottom: '8px' }}>
              Certifications
            </h2>
            {validCerts.map((cert, i) => (
              <p key={i} style={{ fontSize: '11px', color: '#374151', marginBottom: '3px' }}>▸ {cert}</p>
            ))}
          </div>
        )}

        {/* Achievements */}
        {validAchievements.length > 0 && (
          <div>
            <h2 style={{ fontSize: '13px', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '2px solid #1d4ed8', paddingBottom: '4px', marginBottom: '8px' }}>
              Achievements
            </h2>
            {validAchievements.map((a, i) => (
              <p key={i} style={{ fontSize: '11px', color: '#374151', marginBottom: '3px' }}>▸ {a}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
