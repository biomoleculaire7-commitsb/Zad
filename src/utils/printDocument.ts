import { Lesson, OfficialExam } from '../types';

/**
 * Builds a clean, fully-styled, standalone printable HTML document
 * matching Algerian official educational presentation standards.
 */
export function generatePrintableHtml(lesson: Lesson): string {
  const objectivesHtml = lesson.objectives && lesson.objectives.length > 0
    ? `
      <div class="print-box objectives-box">
        <div class="box-title">🎯 الكفاءات والأهداف المستهدفة:</div>
        <ul>
          ${lesson.objectives.map(obj => `<li>${obj}</li>`).join('')}
        </ul>
      </div>
    `
    : '';

  const sectionsHtml = lesson.writtenSummary.sections.map((sec, idx) => {
    const formulasHtml = sec.formulas && sec.formulas.length > 0
      ? `
        <div class="formulas-block">
          <div class="sub-label">القوانين والعلاقات الرياضية الأساسية:</div>
          ${sec.formulas.map(f => `<div class="formula-item">${f}</div>`).join('')}
        </div>
      `
      : '';

    const keyRulesHtml = sec.keyRules && sec.keyRules.length > 0
      ? `
        <div class="rules-block">
          <div class="sub-label">الملاحظات والقواعد الذهبية:</div>
          <ul>
            ${sec.keyRules.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>
      `
      : '';

    const examplesHtml = sec.examples && sec.examples.length > 0
      ? `
        <div class="examples-block">
          <div class="sub-label">مثال تطبيقي مباشر:</div>
          ${sec.examples.map(ex => `<p class="example-p">${ex}</p>`).join('')}
        </div>
      `
      : '';

    return `
      <div class="section-container">
        <h3 class="section-title">${idx + 1}. ${sec.title}</h3>
        <div class="section-text">${sec.content.replace(/\n/g, '<br/>')}</div>
        ${formulasHtml}
        ${keyRulesHtml}
        ${examplesHtml}
      </div>
    `;
  }).join('');

  const mindMapHtml = lesson.writtenSummary.mindMapPoints && lesson.writtenSummary.mindMapPoints.length > 0
    ? `
      <div class="print-box mindmap-box">
        <div class="box-title">🧠 خريطة المفاهيم وخلاصة المراجعة السريعة:</div>
        <div class="mindmap-grid">
          ${lesson.writtenSummary.mindMapPoints.map(point => `
            <div class="mindmap-item">
              <span class="bullet">•</span>
              <span>${point}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `
    : '';

  const adviceHtml = lesson.writtenSummary.conclusionOrAdvice
    ? `
      <div class="print-box advice-box">
        <div class="box-title">💡 نصيحة منهجية للاختبارات والامتحانات الرسمية:</div>
        <p>${lesson.writtenSummary.conclusionOrAdvice}</p>
      </div>
    `
    : '';

  const exercisesHtml = lesson.exercises && lesson.exercises.length > 0
    ? `
      <div class="page-break"></div>
      <div class="exercises-header">
        <h2>📝 تمارين وتطبيقات نموذجية مع الحل المفصل</h2>
        <p class="subtitle">سلسلة تمارين محاكية لأسئلة البكالوريا والاختبارات الفصلية</p>
      </div>
      ${lesson.exercises.map((ex, idx) => `
        <div class="exercise-card">
          <div class="ex-head">
            <span class="ex-badge">تمرين رقم ${idx + 1}</span>
            <span class="ex-title">${ex.title}</span>
            <span class="ex-meta">${ex.difficulty}${ex.points ? ` • ${ex.points} نقاط` : ''}${ex.bacYear ? ` • ${ex.bacYear}` : ''}</span>
          </div>
          <div class="ex-question">
            <strong>نص التمرين:</strong>
            <p>${ex.question.replace(/\n/g, '<br/>')}</p>
          </div>
          ${ex.hint ? `<div class="ex-hint"><em>💡 تلميح للحل:</em> ${ex.hint}</div>` : ''}
          <div class="ex-solution">
            <div class="sol-title">✅ الحل النموذجي المفصل وسلم التنقيط:</div>
            ${Array.isArray(ex.detailedSolution) 
              ? ex.detailedSolution.map(step => `
                <div class="sol-step">
                  <span class="step-num">${step.stepNumber}</span>
                  <div class="step-content">
                    <strong>${step.stepTitle}</strong>
                    <div>${step.explanation.replace(/\n/g, '<br/>')}</div>
                    ${step.formulaUsed ? `<div class="step-formula">${step.formulaUsed}</div>` : ''}
                    ${step.score ? `<span class="step-score">العلامة: ${step.score}</span>` : ''}
                  </div>
                </div>
              `).join('')
              : `<div style="line-height: 1.8; padding: 6px 0;">${ex.detailedSolution.replace(/\n/g, '<br/>')}</div>`
            }
          </div>
        </div>
      `).join('')}
    `
    : '';

  const videoTeacherName = lesson.videoResources[0]?.teacherName || 'نخبة من أساتذة الجزائر';

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>${lesson.title} - مطبوعة المراجعة الشاملة</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
      background: #ffffff;
      color: #1a1a1a;
      line-height: 1.6;
      font-size: 13pt;
      padding: 20mm;
    }

    /* Print Specific Media Rules */
    @media print {
      body {
        padding: 0;
        font-size: 11pt;
      }
      .page-break {
        page-break-before: always;
      }
      .no-print-bar {
        display: none !important;
      }
      @page {
        size: A4;
        margin: 15mm;
      }
    }

    .no-print-bar {
      background: #0f172a;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 12px;
      margin-bottom: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    }

    .print-btn {
      background: #059669;
      color: white;
      border: none;
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .print-btn:hover {
      background: #047857;
    }

    /* Official Algerian Document Header */
    .official-header {
      border-bottom: 2px solid #0f172a;
      padding-bottom: 12px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header-right {
      text-align: right;
    }

    .header-center {
      text-align: center;
      flex-grow: 1;
    }

    .header-left {
      text-align: left;
    }

    .country-title {
      font-size: 12pt;
      font-weight: 800;
      color: #0f172a;
    }

    .ministry-title {
      font-size: 10pt;
      color: #475569;
    }

    .doc-badge {
      display: inline-block;
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 10pt;
      font-weight: bold;
      color: #047857;
      margin-top: 4px;
    }

    /* Lesson Main Title */
    .lesson-headline {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-right: 6px solid #059669;
      padding: 15px 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }

    .unit-tag {
      font-size: 10pt;
      font-weight: 700;
      color: #059669;
      display: block;
      margin-bottom: 4px;
    }

    .main-title {
      font-size: 18pt;
      font-weight: 900;
      color: #0f172a;
      line-height: 1.3;
    }

    .meta-bar {
      margin-top: 8px;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      font-size: 9.5pt;
      color: #475569;
    }

    .meta-item strong {
      color: #0f172a;
    }

    /* Boxes */
    .print-box {
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 16px;
      font-size: 10.5pt;
    }

    .objectives-box {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #166534;
    }

    .objectives-box ul {
      margin-right: 20px;
      margin-top: 6px;
    }

    .box-title {
      font-weight: 800;
      font-size: 11pt;
      margin-bottom: 4px;
    }

    .mindmap-box {
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      color: #1e293b;
    }

    .mindmap-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-top: 8px;
    }

    .mindmap-item {
      display: flex;
      gap: 6px;
      font-size: 10pt;
      background: #ffffff;
      padding: 6px 10px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
    }

    .bullet {
      color: #059669;
      font-weight: bold;
    }

    .advice-box {
      background: #fffbeb;
      border: 1px solid #fde68a;
      color: #92400e;
    }

    /* Sections */
    .section-container {
      margin-bottom: 22px;
      padding-bottom: 16px;
      border-bottom: 1px dashed #cbd5e1;
    }

    .section-title {
      font-size: 13pt;
      font-weight: 800;
      color: #1e3a8a;
      margin-bottom: 8px;
    }

    .section-text {
      font-size: 11pt;
      line-height: 1.7;
      margin-bottom: 10px;
      color: #334155;
    }

    .formulas-block {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 10px;
      border-radius: 6px;
      margin: 10px 0;
    }

    .sub-label {
      font-weight: bold;
      font-size: 9.5pt;
      color: #475569;
      margin-bottom: 5px;
    }

    .formula-item {
      font-family: 'Courier New', Courier, monospace;
      font-weight: bold;
      font-size: 11pt;
      direction: ltr;
      text-align: left;
      background: #ffffff;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid #cbd5e1;
      margin-bottom: 4px;
      color: #0f766e;
    }

    .rules-block {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      padding: 10px 14px;
      border-radius: 6px;
      margin: 10px 0;
      font-size: 10.5pt;
      color: #14532d;
    }

    .rules-block ul {
      margin-right: 18px;
    }

    .examples-block {
      background: #fffbeb;
      border: 1px solid #fde68a;
      padding: 10px 14px;
      border-radius: 6px;
      margin: 10px 0;
      font-size: 10.5pt;
      color: #78350f;
    }

    /* Exercises */
    .exercises-header {
      border-bottom: 2px solid #059669;
      padding-bottom: 8px;
      margin-bottom: 20px;
    }

    .exercises-header h2 {
      font-size: 16pt;
      color: #0f172a;
    }

    .subtitle {
      font-size: 10pt;
      color: #64748b;
    }

    .exercise-card {
      border: 1px solid #cbd5e1;
      border-radius: 8px;
      margin-bottom: 20px;
      overflow: hidden;
      page-break-inside: avoid;
    }

    .ex-head {
      background: #f1f5f9;
      padding: 8px 14px;
      border-bottom: 1px solid #cbd5e1;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .ex-badge {
      background: #0f172a;
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 9pt;
      font-weight: bold;
    }

    .ex-title {
      font-weight: 800;
      font-size: 11pt;
      color: #0f172a;
    }

    .ex-meta {
      font-size: 9pt;
      color: #475569;
    }

    .ex-question {
      padding: 12px 16px;
      font-size: 10.5pt;
      line-height: 1.6;
      background: #ffffff;
    }

    .ex-hint {
      background: #fef3c7;
      padding: 8px 16px;
      font-size: 9.5pt;
      color: #92400e;
      border-top: 1px dashed #fde68a;
    }

    .ex-solution {
      background: #f8fafc;
      border-top: 1px solid #cbd5e1;
      padding: 12px 16px;
    }

    .sol-title {
      font-weight: 800;
      color: #047857;
      font-size: 11pt;
      margin-bottom: 8px;
    }

    .sol-step {
      display: flex;
      gap: 10px;
      margin-bottom: 8px;
      padding-bottom: 8px;
      border-bottom: 1px dotted #e2e8f0;
      font-size: 10pt;
    }

    .step-num {
      background: #e2e8f0;
      color: #0f172a;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      font-size: 9pt;
      flex-shrink: 0;
    }

    .step-content {
      flex-grow: 1;
    }

    .step-formula {
      font-family: 'Courier New', Courier, monospace;
      background: #f1f5f9;
      padding: 4px 8px;
      border-radius: 4px;
      display: inline-block;
      margin-top: 4px;
      direction: ltr;
      font-weight: bold;
      color: #0f766e;
    }

    .step-score {
      display: inline-block;
      background: #dcfce7;
      color: #166534;
      padding: 1px 6px;
      border-radius: 4px;
      font-size: 8.5pt;
      font-weight: bold;
      margin-right: 8px;
    }

    /* Footer */
    .official-footer {
      margin-top: 30px;
      border-top: 1px solid #cbd5e1;
      padding-top: 10px;
      text-align: center;
      font-size: 9pt;
      color: #64748b;
    }
  </style>
</head>
<body>

  <!-- Top Action Bar for browser view -->
  <div class="no-print-bar">
    <div>
      <strong>📄 وثيقة الدرس جاهزة للطباعة والحفظ كـ PDF</strong>
      <span style="font-size: 12px; opacity: 0.8; margin-right: 10px;">(مخصصة للمطابقة مع معايير ورقة A4)</span>
    </div>
    <div style="display: flex; gap: 10px;">
      <button onclick="window.print()" class="print-btn">
        🖨️ طباعة الآن (Print / Save as PDF)
      </button>
    </div>
  </div>

  <!-- Ministry Document Header -->
  <div class="official-header">
    <div class="header-right">
      <div class="country-title">الجمهورية الجزائرية الديمقراطية الشعبية</div>
      <div class="ministry-title">وزارة التربية الوطنية • التعليم الثانوي</div>
    </div>
    <div class="header-center">
      <span class="doc-badge">بطاقة المراجعة والتحضير الفردي</span>
    </div>
    <div class="header-left">
      <div style="font-size: 10pt; font-weight: bold; color: #047857;">منصة زاد التعليمية (Zad)</div>
      <div style="font-size: 9pt; color: #64748b;">السنة الدراسية 2025/2026</div>
    </div>
  </div>

  <!-- Lesson Headline -->
  <div class="lesson-headline">
    <span class="unit-tag">${lesson.unitTitle} (الفصل ${lesson.trimester})</span>
    <h1 class="main-title">${lesson.title}</h1>
    <div class="meta-bar">
      <span class="meta-item"><strong>الأستاذ المحاضر:</strong> ${videoTeacherName}</span>
      <span class="meta-item"><strong>المدة المقدرة:</strong> ${lesson.durationEstimate || '45 دقيقة'}</span>
      <span class="meta-item"><strong>عدد التمارين المحلولة:</strong> ${lesson.exercises ? lesson.exercises.length : 0}</span>
    </div>
  </div>

  <!-- Objectives -->
  ${objectivesHtml}

  <!-- Introduction -->
  <div class="section-container" style="background: #fafafa; padding: 12px 16px; border-radius: 8px;">
    <h3 class="section-title" style="color: #0f172a;">📌 مدخل تمهيدي ومقدمة الدرس:</h3>
    <div class="section-text">${lesson.writtenSummary.introduction.replace(/\n/g, '<br/>')}</div>
  </div>

  <!-- Lesson Detailed Sections -->
  ${sectionsHtml}

  <!-- Mind Map Summary -->
  ${mindMapHtml}

  <!-- Bac / Exam Advice -->
  ${adviceHtml}

  <!-- Exercises and Model Solutions -->
  ${exercisesHtml}

  <!-- Footer -->
  <div class="official-footer">
    <p>تم استخراج هذا المستند من منصة زاد للتعليم الثانوي الجزائري • بالتوفيق والنجاح لجميع طلبتنا الأعزاء</p>
  </div>

  <script>
    // Auto-trigger print if requested via URL hash or after brief rendering
    window.addEventListener('DOMContentLoaded', function() {
      if (window.location.search.includes('autoprint=1')) {
        setTimeout(function() {
          window.print();
        }, 300);
      }
    });
  </script>
</body>
</html>`;
}

/**
 * Robust handler that safely opens the printable version in a new tab or triggers download
 * even when running inside sandboxed iframes.
 */
export function executePrintLesson(lesson: Lesson): { success: boolean; method: 'popup' | 'download' } {
  const htmlContent = generatePrintableHtml(lesson);
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const blobUrl = URL.createObjectURL(blob);

  // Try opening in new window first
  try {
    const printWindow = window.open(blobUrl, '_blank');
    if (printWindow) {
      // Successfully opened window
      return { success: true, method: 'popup' };
    }
  } catch (err) {
    console.warn('Popup blocked or sandboxed, falling back to direct download:', err);
  }

  // Fallback: Trigger direct file download
  try {
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `درس_${lesson.title.slice(0, 30).replace(/[/\\?%*:|"<>]/g, '_')}_كامل_للطباعة.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return { success: true, method: 'download' };
  } catch (downloadErr) {
    console.error('Failed to trigger download:', downloadErr);
    return { success: false, method: 'download' };
  }
}

/**
 * Builds an official examination printable HTML document matching
 * Algerian Ministry of National Education examination formatting standards.
 */
export function generatePrintableExamHtml(exam: OfficialExam, lessonTitle: string): string {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>${exam.title} - اختبار رسمي</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
      background: #ffffff;
      color: #111827;
      line-height: 1.6;
      font-size: 13pt;
      padding: 15mm;
    }
    @media print {
      body { padding: 0; font-size: 11pt; }
      .page-break { page-break-before: always; }
      .no-print-bar { display: none !important; }
      @page { size: A4; margin: 15mm; }
    }
    .no-print-bar {
      background: #0f172a;
      color: #ffffff;
      padding: 12px 20px;
      border-radius: 12px;
      margin-bottom: 25px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .print-btn {
      background: #059669;
      color: white;
      border: none;
      padding: 8px 18px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
    }
    .exam-header {
      border: 2px solid #0f172a;
      padding: 16px 20px;
      border-radius: 12px;
      margin-bottom: 20px;
      text-align: center;
      background: #f8fafc;
    }
    .republic-title { font-size: 14pt; font-weight: 800; }
    .ministry-title { font-size: 12pt; font-weight: bold; color: #334155; margin-bottom: 8px; }
    .exam-main-title { font-size: 16pt; font-weight: 900; color: #047857; margin: 6px 0; }
    .exam-meta-grid {
      display: flex;
      justify-content: space-around;
      border-top: 1px dashed #cbd5e1;
      padding-top: 8px;
      margin-top: 8px;
      font-size: 11pt;
      font-weight: bold;
    }
    .instructions-box {
      background: #fef3c7;
      border: 1px solid #f59e0b;
      padding: 10px 15px;
      border-radius: 8px;
      margin-bottom: 20px;
      font-size: 10.5pt;
    }
    .exercise-box {
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      margin-bottom: 24px;
      overflow: hidden;
      page-break-inside: avoid;
    }
    .exercise-head {
      background: #0f172a;
      color: white;
      padding: 8px 14px;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 12pt;
    }
    .exercise-body { padding: 16px; font-size: 12pt; white-space: pre-line; }
    .solution-block {
      background: #f0fdf4;
      border-top: 2px dashed #86efac;
      padding: 14px 16px;
    }
    .solution-title { font-weight: 900; color: #166534; margin-bottom: 8px; font-size: 12pt; }
    .step-item {
      background: white;
      border: 1px solid #bbf7d0;
      border-radius: 8px;
      padding: 8px 12px;
      margin-bottom: 8px;
    }
    .step-head { display: flex; justify-content: space-between; font-weight: bold; color: #15803d; }
  </style>
</head>
<body>
  <div class="no-print-bar">
    <div><strong>منصة زاد التعليمية</strong> — موضوع امتحان / فرض رسمي للطباعة</div>
    <button class="print-btn" onclick="window.print()">🖨️ طباعة الآن / حفظ كـ PDF</button>
  </div>

  <div class="exam-header">
    <div class="republic-title">الجمهورية الجزائرية الديمقراطية الشعبية</div>
    <div class="ministry-title">وزارة التربية الوطنية — منصة زاد للتعليم الثانوي الجزائري</div>
    <div class="exam-main-title">${exam.title}</div>
    <div style="font-size: 11pt; color: #475569;">الموضوع المعتمد لدرس: ${lessonTitle}</div>
    <div class="exam-meta-grid">
      <span>نوع الموضوع: ${exam.type}</span>
      <span>المدة الزمنية: ${exam.duration}</span>
      <span>العلامة الكاملة: ${exam.totalPoints} / 20</span>
    </div>
  </div>

  ${exam.instructions && exam.instructions.length > 0 ? `
    <div class="instructions-box">
      <strong>⚠️ تعليمات هامة للمترشح:</strong>
      <ul style="padding-right: 20px; margin-top: 4px;">
        ${exam.instructions.map(inst => `<li>${inst}</li>`).join('')}
      </ul>
    </div>
  ` : ''}

  ${exam.exercises.map((ex, idx) => `
    <div class="exercise-box">
      <div class="exercise-head">
        <span>${ex.title}</span>
        <span>(${ex.points} نقاط)</span>
      </div>
      <div class="exercise-body">${ex.statement.replace(/\n/g, '<br/>')}</div>
      <div class="solution-block">
        <div class="solution-title">✅ عناصر الإجابة الرسمية وسلم التنقيط:</div>
        ${Array.isArray(ex.solution) ? ex.solution.map(s => `
          <div class="step-item">
            <div class="step-head">
              <span>المرحلة ${s.stepNumber}: ${s.stepTitle}</span>
              ${s.score ? `<span style="background: #dcfce7; padding: 2px 6px; border-radius: 4px;">${s.score}</span>` : ''}
            </div>
            <div style="margin-top: 4px; font-size: 11pt;">${s.explanation.replace(/\n/g, '<br/>')}</div>
            ${s.formulaUsed ? `<div style="font-family: monospace; font-size: 10pt; color: #2563eb; margin-top: 4px;">القانون: ${s.formulaUsed}</div>` : ''}
          </div>
        `).join('') : `<div>${ex.solution}</div>`}
      </div>
    </div>
  `).join('')}

  <div style="text-align: center; margin-top: 30px; font-size: 10pt; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 10px;">
    تم إعداد واستخراج هذا الموضوع الرسمي عبر <strong>«منصة زاد التعليمية للثانوي الجزائري»</strong> — بالتوفيق والنجاح لجميع التلاميذ.
  </div>

  <script>
    window.addEventListener('load', function() {
      if (!window.matchMedia('print').matches) {
        setTimeout(function() { window.print(); }, 400);
      }
    });
  </script>
</body>
</html>`;
}

export function executePrintExam(exam: OfficialExam, lessonTitle: string): { success: boolean; method: 'popup' | 'download' } {
  const htmlContent = generatePrintableExamHtml(exam, lessonTitle);
  const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
  const blobUrl = URL.createObjectURL(blob);

  try {
    const printWindow = window.open(blobUrl, '_blank');
    if (printWindow) {
      return { success: true, method: 'popup' };
    }
  } catch (err) {
    console.warn('Popup blocked, falling back to download:', err);
  }

  try {
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = `موضوع_${exam.title.replace(/[/\\?%*:|"<>]/g, '_')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    return { success: true, method: 'download' };
  } catch (downloadErr) {
    return { success: false, method: 'download' };
  }
}
