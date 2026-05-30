// utils/analytics.js
// Functions to calculate resume completion %, score, and ATS keywords

// ATS keywords to check for
const ATS_KEYWORDS = [
  'React', 'JavaScript', 'Node.js', 'Python', 'Java',
  'SQL', 'MongoDB', 'HTML', 'CSS', 'TypeScript',
  'Git', 'REST', 'API', 'AWS', 'Docker',
  'Agile', 'Scrum', 'Machine Learning', 'TensorFlow', 'Express',
];

/**
 * Calculate how complete the resume is (0-100%)
 */
export const calculateCompletion = (data) => {
  const fields = [
    { value: data.fullName, weight: 1 },
    { value: data.email, weight: 1 },
    { value: data.phone, weight: 1 },
    { value: data.location, weight: 1 },
    { value: data.summary, weight: 2 },
    { value: data.objective, weight: 1 },
    { value: data.technicalSkills, weight: 2 },
    { value: data.softSkills, weight: 1 },
    { value: data.linkedin, weight: 1 },
    { value: data.github, weight: 1 },
    {
      value: data.education?.some(e => e.degree && e.institution),
      weight: 2
    },
    {
      value: data.experience?.some(e => e.company && e.role),
      weight: 3
    },
    {
      value: data.projects?.some(p => p.name && p.description),
      weight: 3
    },
    {
      value: data.certifications?.some(c => c.trim()),
      weight: 1
    },
  ];

  const total = fields.reduce((sum, f) => sum + f.weight, 0);
  const filled = fields.reduce((sum, f) => {
    const val = f.value;
    const isFilled = val && (typeof val === 'string' ? val.trim().length > 0 : val);
    return sum + (isFilled ? f.weight : 0);
  }, 0);

  return Math.round((filled / total) * 100);
};

/**
 * Calculate resume score out of 100
 */
export const calculateScore = (data) => {
  let score = 0;

  // Personal info (20 pts)
  if (data.fullName) score += 5;
  if (data.email) score += 5;
  if (data.phone) score += 5;
  if (data.location) score += 3;
  if (data.linkedin || data.github) score += 2;

  // Summary (15 pts)
  if (data.summary) {
    score += data.summary.length > 100 ? 15 : 8;
  }

  // Skills (15 pts)
  if (data.technicalSkills) {
    const skillCount = data.technicalSkills.split(',').filter(s => s.trim()).length;
    score += Math.min(skillCount * 2, 10);
  }
  if (data.softSkills) score += 5;

  // Experience (20 pts)
  const validExp = data.experience?.filter(e => e.company && e.role) || [];
  score += Math.min(validExp.length * 7, 20);

  // Education (15 pts)
  const validEdu = data.education?.filter(e => e.degree && e.institution) || [];
  score += Math.min(validEdu.length * 8, 15);

  // Projects (10 pts)
  const validProj = data.projects?.filter(p => p.name && p.description) || [];
  score += Math.min(validProj.length * 4, 10);

  // Certifications (5 pts)
  const validCert = data.certifications?.filter(c => c.trim()) || [];
  if (validCert.length > 0) score += 5;

  return Math.min(score, 100);
};

/**
 * Check which ATS keywords appear in the resume
 */
export const checkAtsKeywords = (data) => {
  // Combine all text fields into one string for keyword search
  const allText = [
    data.summary,
    data.objective,
    data.technicalSkills,
    data.softSkills,
    ...(data.experience?.map(e => `${e.role} ${e.responsibilities}`) || []),
    ...(data.projects?.map(p => `${p.description} ${p.technologies}`) || []),
  ].join(' ').toLowerCase();

  const matched = ATS_KEYWORDS.filter(keyword =>
    allText.includes(keyword.toLowerCase())
  );

  return {
    matched,
    total: ATS_KEYWORDS.length,
    percentage: Math.round((matched.length / ATS_KEYWORDS.length) * 100),
  };
};

/**
 * Get score category label and color
 */
export const getScoreCategory = (score) => {
  if (score >= 80) return { label: 'Excellent', color: 'text-green-600' };
  if (score >= 60) return { label: 'Good', color: 'text-blue-600' };
  if (score >= 40) return { label: 'Average', color: 'text-yellow-600' };
  return { label: 'Needs Work', color: 'text-red-600' };
};
