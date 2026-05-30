// utils/pdfExport.js
// Handles generating and downloading the resume as a PDF using html2canvas + jsPDF

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

/**
 * Export resume preview as a single-page PDF
 */
export const exportToPDF = async (
  elementId = 'resume-preview',
  fileName = 'resume'
) => {

  const element = document.getElementById(elementId);

  if (!element) {
    throw new Error('Resume preview element not found');
  }

  try {

    // Wait for fonts and images
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    await document.fonts.ready;

    // Capture resume
    const canvas = await html2canvas(element, {
      scale: 4,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      letterRendering: true,
    });

    const imgData = canvas.toDataURL(
      'image/png',
      1.0
    );

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = 210;
    const pdfHeight = 297;

    // Force everything into a single A4 page
    pdf.addImage(
      imgData,
      'PNG',
      0,
      0,
      pdfWidth,
      pdfHeight,
      undefined,
      'FAST'
    );

    pdf.save(`${fileName}.pdf`);

    return true;

  } catch (error) {

    console.error(
      'PDF export failed:',
      error
    );

    throw error;
  }
};