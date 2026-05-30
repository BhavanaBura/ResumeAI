// templates/ProfessionalTemplate.jsx
// Professional corporate-style ATS-friendly resume template

import React from 'react';

const ProfessionalTemplate = ({ data }) => {
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

  // Section title style
  const sectionTitle = {
    fontSize: '13px',
    fontWeight: '700',
    color: '#1e293b',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    borderBottom: '1.5px solid #1e293b',
    paddingBottom: '3px',
    marginBottom: '10px',
  };

  return (
    <div style={{ backgroundColor: 'white', padding: '32px 36px', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#1e293b', minHeight: '297mm' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '20px', borderBottom: '2px solid #1e293b', paddingBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          {data.photo && (
            <img src={data.photo} alt="Profile" style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #e2e8f0' }} />
          )}
          <div>
            <h1 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
              {data.fullName || 'Your Full Name'}
            </h1>
          </div>
        </div>

        {/* Contact row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '10px' }}>
          {data.email && <span style={{ fontSize: '11px', color: '#475569' }}>✉ {data.email}</span>}
          {data.phone && <span style={{ fontSize: '11px', color: '#475569' }}>✆ {data.phone}</span>}
          {data.location && <span style={{ fontSize: '11px', color: '#475569' }}>⊙ {data.location}</span>}
          {data.linkedin && (
            <span style={{ fontSize: '11px', color: '#2563eb' }}>
              {data.linkedin.replace('https://', '').replace('www.', '')}
            </span>
          )}
          {data.github && (
            <span style={{ fontSize: '11px', color: '#2563eb' }}>
              {data.github.replace('https://', '').replace('www.', '')}
            </span>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.summary && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={sectionTitle}>Professional Summary</h2>
          <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.7' }}>{data.summary}</p>
        </div>
      )}

      {/* Objective */}
      {data.objective && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={sectionTitle}>Career Objective</h2>
          <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.7' }}>{data.objective}</p>
        </div>
      )}

      {/* Skills */}
      {(techSkills.length > 0 || softSkills.length > 0) && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={sectionTitle}>Skills</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {techSkills.length > 0 && (
              <div>
                <p style={{ fontSize: '11px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>Technical Skills</p>
                <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.6' }}>{techSkills.join(' • ')}</p>
              </div>
            )}
            {softSkills.length > 0 && (
              <div>
                <p style={{ fontSize: '11px', fontWeight: '600', color: '#0f172a', marginBottom: '4px' }}>Soft Skills</p>
                <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.6' }}>{softSkills.join(' • ')}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Experience */}
      {validExperience.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={sectionTitle}>Work Experience</h2>
          {validExperience.map((exp, i) => (
            <div key={i} style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>{exp.role}</span>
                  {exp.company && <span style={{ fontSize: '11px', color: '#475569' }}> — {exp.company}</span>}
                </div>
                {exp.duration && (
                  <span style={{ fontSize: '10px', color: '#64748b', whiteSpace: 'nowrap' }}>{exp.duration}</span>
                )}
              </div>
              {exp.responsibilities && (
                <div style={{ marginTop: '4px' }}>
                  {exp.responsibilities.split('\n').filter(l => l.trim()).map((line, j) => (
                    <p key={j} style={{ fontSize: '11px', color: '#374151', lineHeight: '1.6', marginBottom: '2px' }}>{line}</p>
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
          <h2 style={sectionTitle}>Education</h2>
          {validEducation.map((edu, i) => (
            <div key={i} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>{edu.degree}</p>
                <p style={{ fontSize: '11px', color: '#475569' }}>{edu.institution}</p>
                {edu.grade && <p style={{ fontSize: '11px', color: '#64748b' }}>{edu.grade}</p>}
              </div>
              {edu.year && <span style={{ fontSize: '11px', color: '#64748b', whiteSpace: 'nowrap' }}>{edu.year}</span>}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {validProjects.length > 0 && (
        <div style={{ marginBottom: '18px' }}>
          <h2 style={sectionTitle}>Projects</h2>
          {validProjects.map((proj, i) => (
            <div key={i} style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>
                  {proj.name}
                  {proj.technologies && (
                    <span style={{ fontWeight: '400', color: '#64748b', fontSize: '11px' }}> — {proj.technologies}</span>
                  )}
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {proj.githubLink && <span style={{ fontSize: '10px', color: '#2563eb' }}>GitHub ↗</span>}
                  {proj.liveLink && <span style={{ fontSize: '10px', color: '#2563eb' }}>Live ↗</span>}
                </div>
              </div>
              {proj.description && (
                <p style={{ fontSize: '11px', color: '#374151', lineHeight: '1.6', marginTop: '2px' }}>{proj.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Bottom row: Certs, Languages, Achievements */}
      {(validCerts.length > 0 || validLangs.length > 0 || validAchievements.length > 0) && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
          {validCerts.length > 0 && (
            <div>
              <h2 style={{ ...sectionTitle, marginBottom: '8px' }}>Certifications</h2>
              {validCerts.map((c, i) => (
                <p key={i} style={{ fontSize: '11px', color: '#374151', marginBottom: '3px' }}>• {c}</p>
              ))}
            </div>
          )}
          {validLangs.length > 0 && (
            <div>
              <h2 style={{ ...sectionTitle, marginBottom: '8px' }}>Languages</h2>
              {validLangs.map((l, i) => (
                <p key={i} style={{ fontSize: '11px', color: '#374151', marginBottom: '3px' }}>• {l}</p>
              ))}
            </div>
          )}
          {validAchievements.length > 0 && (
            <div>
              <h2 style={{ ...sectionTitle, marginBottom: '8px' }}>Achievements</h2>
              {validAchievements.map((a, i) => (
                <p key={i} style={{ fontSize: '11px', color: '#374151', marginBottom: '3px' }}>• {a}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfessionalTemplate;
