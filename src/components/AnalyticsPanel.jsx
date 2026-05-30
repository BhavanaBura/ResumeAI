// components/AnalyticsPanel.jsx
// Shows resume completion %, score, and ATS keyword matches

import React from 'react';
import { FiTrendingUp, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi2';
import { calculateCompletion, calculateScore, checkAtsKeywords, getScoreCategory } from '../utils/analytics';

// Progress bar component (reusable)
const ProgressBar = ({ value, colorClass }) => (
  <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
    <div
      className={`h-2 rounded-full transition-all duration-500 ${colorClass}`}
      style={{ width: `${value}%` }}
    />
  </div>
);

const AnalyticsPanel = ({ resumeData }) => {
  const completion = calculateCompletion(resumeData);
  const score = calculateScore(resumeData);
  const atsData = checkAtsKeywords(resumeData);
  const scoreCategory = getScoreCategory(score);

  // Choose color for the score bar
  const getBarColor = (val) => {
    if (val >= 75) return 'bg-green-500';
    if (val >= 50) return 'bg-blue-500';
    if (val >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="section-card space-y-4">
      <h3 className="section-title">
        <FiTrendingUp className="text-primary-500" />
        Resume Analytics
      </h3>

      {/* Completion */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Completion</span>
          <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{completion}%</span>
        </div>
        <ProgressBar value={completion} colorClass={getBarColor(completion)} />
      </div>

      {/* Score */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Resume Score</span>
          <span className={`text-sm font-bold ${scoreCategory.color}`}>
            {score}/100 — {scoreCategory.label}
          </span>
        </div>
        <ProgressBar value={score} colorClass={getBarColor(score)} />
      </div>

      {/* ATS Keywords */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            ATS Keywords
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {atsData.matched.length}/{atsData.total} found
          </span>
        </div>

        {/* Keyword pills */}
        <div className="flex flex-wrap gap-1.5">
          {['React', 'JavaScript', 'Node.js', 'Python', 'Java', 'SQL', 'MongoDB', 'HTML', 'CSS', 'TypeScript'].map(keyword => {
            const matched = atsData.matched.includes(keyword);
            return (
              <span
                key={keyword}
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium transition-colors
                  ${matched
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500'
                  }`}
              >
                {matched ? <FiCheckCircle size={10} /> : <FiAlertCircle size={10} />}
                {keyword}
              </span>
            );
          })}
        </div>
      </div>

      {/* Tip */}
      {score < 60 && (
        <div className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
          <HiSparkles className="text-amber-500 mt-0.5 shrink-0" size={14} />
          <p className="text-xs text-amber-700 dark:text-amber-400">
            Add more experience, skills, and projects to boost your score. Use the AI buttons to generate professional content.
          </p>
        </div>
      )}
    </div>
  );
};

export default AnalyticsPanel;
