// components/form/PersonalInfoSection.jsx
// Form section for personal details and profile photo

import React, { useRef } from 'react';
import { FiUser, FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin, FiCamera } from 'react-icons/fi';
import toast from 'react-hot-toast';

const PersonalInfoSection = ({ data, onUpdate }) => {
  const fileInputRef = useRef(null);

  // Convert uploaded photo to base64 and store
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast.error('Image size should be less than 2MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      onUpdate('photo', event.target.result);
      toast.success('Photo uploaded!');
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="section-card">
      <h3 className="section-title">
        <FiUser className="text-primary-500" />
        Personal Information
      </h3>

      {/* Photo Upload */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-16 h-16 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-600
                     flex items-center justify-center cursor-pointer overflow-hidden hover:border-primary-400 transition-colors"
          onClick={() => fileInputRef.current?.click()}
        >
          {data.photo ? (
            <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <FiCamera className="text-gray-400" size={20} />
          )}
        </div>
        <div>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="btn-secondary text-xs"
          >
            {data.photo ? 'Change Photo' : 'Upload Photo'}
          </button>
          {data.photo && (
            <button
              type="button"
              onClick={() => onUpdate('photo', null)}
              className="block mt-1 text-xs text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          )}
          <p className="text-xs text-gray-400 mt-1">JPG, PNG — max 2MB</p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handlePhotoUpload}
          className="hidden"
        />
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        <div className="sm:col-span-2">
          <label className="form-label">Full Name *</label>
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => onUpdate('fullName', e.target.value)}
              placeholder="John Doe"
              className="form-input pl-8"
            />
          </div>
        </div>

        <div>
          <label className="form-label">Email *</label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="email"
              value={data.email}
              onChange={(e) => onUpdate('email', e.target.value)}
              placeholder="john@example.com"
              className="form-input pl-8"
            />
          </div>
        </div>

        <div>
          <label className="form-label">Phone *</label>
          <div className="relative">
            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => onUpdate('phone', e.target.value)}
              placeholder="+91 9876543210"
              className="form-input pl-8"
            />
          </div>
        </div>

        <div>
          <label className="form-label">LinkedIn URL</label>
          <div className="relative">
            <FiLinkedin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="url"
              value={data.linkedin}
              onChange={(e) => onUpdate('linkedin', e.target.value)}
              placeholder="linkedin.com/in/johndoe"
              className="form-input pl-8"
            />
          </div>
        </div>

        <div>
          <label className="form-label">GitHub URL</label>
          <div className="relative">
            <FiGithub className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="url"
              value={data.github}
              onChange={(e) => onUpdate('github', e.target.value)}
              placeholder="github.com/johndoe"
              className="form-input pl-8"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="form-label">Location</label>
          <div className="relative">
            <FiMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            <input
              type="text"
              value={data.location}
              onChange={(e) => onUpdate('location', e.target.value)}
              placeholder="Hyderabad, India"
              className="form-input pl-8"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalInfoSection;
