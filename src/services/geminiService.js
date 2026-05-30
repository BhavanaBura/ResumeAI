// services/geminiService.js
// Handles all Gemini AI API calls for generating resume content

const GEMINI_API_URL =
'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
/**
 * Call the Gemini API with a given prompt
 * @param {string} prompt - The text prompt to send
 * @returns {string} - The generated text response
 */
const callGeminiAPI = async (prompt) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    throw new Error('Please add your Gemini API key to the .env file (VITE_GEMINI_API_KEY)');
  }

  const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 500,
      },
    }),
  });

 if (!response.ok) {
  const error = await response.json();

  console.log("FULL GEMINI ERROR:", error);

  throw new Error(
    JSON.stringify(error, null, 2)
  );
}

  const data = await response.json();

  // Extract the generated text from the response
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('No content generated. Please try again.');
  }

  return text.trim();
};

/**
 * Generate a professional summary based on resume data
 */
export const generateSummary = async (resumeData) => {

  const skills =
    resumeData.technicalSkills ||
    "software development";

  const education =
    resumeData.education?.[0]?.degree ||
    "Computer Science";

  return `Motivated and detail-oriented ${education} student with strong skills in ${skills}. Passionate about developing innovative solutions, learning new technologies, and solving real-world problems. Demonstrates excellent teamwork, communication, and problem-solving abilities while continuously striving for professional growth.`;
};

/**
 * Generate a career objective based on resume data
 */
export const generateObjective = async (resumeData) => {

  const skills =
    resumeData.technicalSkills ||
    "software development";

  return `Seeking an opportunity to apply my knowledge in ${skills} and contribute to meaningful projects while enhancing my technical and professional skills in a dynamic work environment.`;
};
