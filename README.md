# 🚀 ResumeAI — AI-Powered Resume Builder

## 📋 Objective

ResumeAI is a web-based application that helps students and job seekers create professional resumes quickly and efficiently.

The application provides real-time resume creation, multiple resume templates, resume analytics, ATS keyword checking, PDF export functionality, and AI-assisted content generation to simplify the resume-building process.

---

## ✨ Features

* Live Resume Preview
* Multiple Resume Templates

  * Modern
  * Professional
  * Minimal
* Resume Completion Tracking
* Resume Score Analysis
* ATS Keyword Checker
* AI-Assisted Summary Generation
* AI-Assisted Career Objective Generation
* Profile Photo Upload
* Dark Mode Support
* Local Storage Auto Save
* Responsive Design
* PDF Export

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* JavaScript

### Styling

* Tailwind CSS

### PDF Generation

* html2canvas
* jsPDF

### Notifications

* react-hot-toast

### Storage

* Browser Local Storage

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/your-username/resume-ai.git
cd resume-ai
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 📁 Project Structure

```text
src
├── components
│   ├── Header.jsx
│   ├── ResumeForm.jsx
│   ├── ResumePreview.jsx
│   ├── TemplateSelector.jsx
│   └── AnalyticsPanel.jsx
│
├── templates
│   ├── ModernTemplate.jsx
│   ├── ProfessionalTemplate.jsx
│   └── MinimalTemplate.jsx
│
├── hooks
│   ├── useResumeData.js
│   └── useDarkMode.js
│
├── services
│   └── geminiService.js
│
├── utils
│   ├── analytics.js
│   ├── storage.js
│   ├── pdfExport.js
│   └── defaultData.js
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ How It Works

1. Users enter resume details through the form.
2. Data is stored and managed using React state.
3. Resume preview updates instantly in real time.
4. Users can switch between multiple templates.
5. Analytics calculate completion percentage and resume score.
6. AI-assisted features generate summaries and career objectives.
7. Resume data is automatically saved using Local Storage.
8. Users can export the final resume as a PDF.

---

## 🌟 Future Enhancements

* More Resume Templates
* Cover Letter Generator
* LinkedIn Profile Import
* Cloud Storage Integration
* Multi-language Support
* Advanced ATS Optimization

---

## 👩‍💻 Author

Bhavana

Built as an internship project to demonstrate frontend development, React concepts, state management, responsive UI design, and PDF generation functionality.

---

## 📄 License

This project is created for educational and internship demonstration purposes.
