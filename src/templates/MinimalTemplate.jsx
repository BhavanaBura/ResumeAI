// templates/MinimalTemplate.jsx
// Minimal, elegant single-column resume template

import React from 'react';

const MinimalTemplate = ({ data }) => {
  const techSkills = data.technicalSkills
    ? data.technicalSkills.split(',').map(s => s.trim()).filter(Boolean)
    : [];
  const softSkills = data.softSkills
    ? data.softSkills.split(',').map(s => s.trim()).filter(Boolean)
    : [];

  const validEducation = data.education?.filter(e => e.degree || e.institution) || [];
  const validExperience = data.experience?.filter(e => e.company || e.role) || [];
  const validProjects = data.projects?.filter(p => p.name || p.description) || [];
  const validCerts = data.certifications?.filter(c => c.trim()) || [];
  const validLangs = data.languages?.filter(l => l.trim()) || [];
  const validAchievements = data.achievements?.filter(a => a.trim()) || [];

  const SectionDivider = ({ title }) => (
    <div style={{ marginBottom: '14px' }}>
      <h2 style={{
        fontSize: '11px',
        fontWeight: '700',
        color: '#9ca3af',
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        marginBottom: '8px',
      }}>
        {title}
      </h2>
      <div style={{ height: '1px', backgroundColor: '#e5e7eb', marginBottom: '10px' }}></div>
    </div>
  );

  return (
    <div style={{ backgroundColor: 'white', padding: '40px 40px', fontFamily: 'Georgia, serif', fontSize: '12px', color: '#111827', maxWidth: '100%' }}>

      {/* Header - centered */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        {data.photo && (
          <img
            src={data.photo}
            alt="Profile"
            style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 12px', display: 'block' }}
          />
        )}
        <h1 style={{ fontSize: '24px', fontWeight: '400', color: '#111827', margin: '0 0 8px 0', letterSpacing: '0.02em' }}>
          {data.fullName || 'Your Name'}
        </h1>

        {/* Contact in one line */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', fontSize: '10.5px', color: '#6b7280' }}>
          {data.email && <span>{data.email}</span>}
          {data.email && data.phone && <span>·</span>}
          {data.phone && <span>{data.phone}</span>}
          {data.location && <span>· {data.location}</span>}
        </div>
        {(data.linkedin || data.github) && (
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '10.5px', color: '#6b7280', marginTop: '3px' }}>
            {data.linkedin && <span>{data.linkedin.replace('https://', '').replace('www.', '')}</span>}
            {data.linkedin && data.github && <span>·</span>}
            {data.github && <span>{data.github.replace('https://', '').replace('www.', '')}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {data.summary && (
        <div style={{ marginBottom: '22px' }}>
          <SectionDivider title="Profile" />
          <p style={{ fontSize: '11.5px', color: '#374151', lineHeight: '1.8', fontStyle: 'italic' }}>{data.summary}</p>
        </div>
      )}

      {/* Objective */}
      {data.objective && (
        <div style={{ marginBottom: '22px' }}>
          <SectionDivider title="Objective" />
          <p style={{ fontSize: '11.5px', color: '#374151', lineHeight: '1.8' }}>{data.objective}</p>
        </div>
      )}

      {/* Experience */}
      {validExperience.length > 0 && (
        <div style={{ marginBottom: '22px' }}>
          <SectionDivider title="Experience" />
          {validExperience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#111827' }}>{exp.role}</span>
                  {exp.company && (
                    <span style={{ fontSize: '11.5px', color: '#6b7280' }}>, {exp.company}</span>
                  )}
                </div>
                {exp.duration && (
                  <span style={{ fontSize: '10.5px', color: '#9ca3af', fontStyle: 'italic' }}>{exp.duration}</span>
                )}
              </div>
              {exp.responsibilities && (
                <div style={{ paddingLeft: '12px' }}>
                  {exp.responsibilities.split('\n').filter(l => l.trim()).map((line, j) => (
                    <p key={j} style={{ fontSize: '11px', color: '#4b5563', lineHeight: '1.7', marginBottom: '2px' }}>{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {validEducation.length > 0 && (
        <div style={{ marginBottom: '22px' }}>
          <SectionDivider title="Education" />
          {validEducation.map((edu, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#111827', margin: 0 }}>{edu.degree}</p>
                <p style={{ fontSize: '11px', color: '#6b7280', margin: '2px 0 0 0' }}>
                  {edu.institution}{edu.grade ? ` — ${edu.grade}` : ''}
                </p>
              </div>
              {edu.year && (
                <span style={{ fontSize: '10.5px', color: '#9ca3af', fontStyle: 'italic', whiteSpace: 'nowrap' }}>{edu.year}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {validProjects.length > 0 && (
        <div style={{ marginBottom: '22px' }}>
          <SectionDivider title="Projects" />
          {validProjects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <p style={{ fontSize: '12px', fontWeight: '700', color: '#111827', margin: '0 0 2px 0' }}>
                {proj.name}
                {(proj.githubLink || proj.liveLink) && (
                  <span style={{ fontSize: '10px', color: '#9ca3af', fontWeight: '400' }}>
                    {proj.githubLink ? ' — GitHub' : ''}{proj.liveLink ? ' — Live' : ''}
                  </span>
                )}
              </p>
              {proj.technologies && (
                <p style={{ fontSize: '10.5px', color: '#9ca3af', margin: '0 0 2px 0', fontStyle: 'italic' }}>{proj.technologies}</p>
              )}
              {proj.description && (
                <p style={{ fontSize: '11px', color: '#4b5563', lineHeight: '1.7', margin: 0 }}>{proj.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {(techSkills.length > 0 || softSkills.length > 0) && (
        <div style={{ marginBottom: '22px' }}>
          <SectionDivider title="Skills" />
          {techSkills.length > 0 && (
            <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.7', marginBottom: '4px' }}>
              <strong>Technical: </strong>{techSkills.join(', ')}
            </p>
          )}
          {softSkills.length > 0 && (
            <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.7' }}>
              <strong>Soft Skills: </strong>{softSkills.join(', ')}
            </p>
          )}
        </div>
      )}

      {/* Certifications, Languages, Achievements in a grid */}
      {(validCerts.length > 0 || validLangs.length > 0 || validAchievements.length > 0) && (
        <div>
          <SectionDivider title="Additional Information" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
            {validCerts.length > 0 && (
              <div>
                <p style={{ fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '4px' }}>Certifications</p>
                {validCerts.map((c, i) => <p key={i} style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>• {c}</p>)}
              </div>
            )}
            {validLangs.length > 0 && (
              <div>
                <p style={{ fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '4px' }}>Languages</p>
                {validLangs.map((l, i) => <p key={i} style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>• {l}</p>)}
              </div>
            )}
            {validAchievements.length > 0 && (
              <div>
                <p style={{ fontSize: '11px', fontWeight: '700', color: '#374151', marginBottom: '4px' }}>Achievements</p>
                {validAchievements.map((a, i) => <p key={i} style={{ fontSize: '11px', color: '#6b7280', marginBottom: '2px' }}>• {a}</p>)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MinimalTemplate;
