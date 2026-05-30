// utils/defaultData.js
// Default empty state for the resume form

export const defaultResumeData = {
  // Personal Information
  fullName: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  location: '',
  photo: null, // base64 string

  // Professional
  summary: '',
  objective: '',

  // Education (array of entries)
  education: [
    {
      id: crypto.randomUUID(),
      degree: '',
      institution: '',
      year: '',
      grade: '',
    }
  ],

  // Experience (array of entries)
  experience: [
    {
      id: crypto.randomUUID(),
      company: '',
      role: '',
      duration: '',
      responsibilities: '',
    }
  ],

  // Projects (array of entries)
  projects: [
    {
      id: crypto.randomUUID(),
      name: '',
      description: '',
      technologies: '',
      githubLink: '',
      liveLink: '',
    }
  ],

  // Skills
  technicalSkills: '',
  softSkills: '',

  // Certifications (array of strings)
  certifications: [''],

  // Languages Known (array of strings)
  languages: [''],

  // Achievements (array of strings)
  achievements: [''],
};
