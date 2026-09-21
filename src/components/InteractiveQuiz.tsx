import React, { useState, useEffect, useMemo } from 'react';
import { Lesson, QuizQuestion } from '../types';
import { getLessonQuiz } from '../data/lessonQuizzes';
import { playSound } from '../utils/audioFeedback';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Award, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Volume2, 
  VolumeX, 
  Lightbulb, 
  FileText, 
  BookOpen,
  Check,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

interface InteractiveQuizProps {
  lesson: Lesson;
  isStudyMode?: boolean;
  onCompleteQuiz?: (score: number, total: number, percentage: number) => void;
  onGoToTab?: (tab: 'written' | 'exercises' | 'video') => void;
  onToggleComplete?: (lessonId: string) => void;
  isLessonCompleted?: boolean;
}

const OPTION_LETTERS = ['أ', 'ب', 'ج', 'د'];

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  lesson,
  isStudyMode = false,
  onCompleteQuiz,
  onGoToTab,
  onToggleComplete,
  isLessonCompleted = false,
}) => {
  // Load questions for this specific lesson (100% guarantee of questions)
  const questions: QuizQuestion[] = useMemo(() => {
    return getLessonQuiz(lesson);
  }, [lesson]);

  // Quiz progression state
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Timer
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);

  // Review mode on final results
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

  // Reset when lesson changes
  useEffect(() => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setIsFinished(false);
    setSecondsElapsed(0);
    setIsTimerActive(true);
    setIsReviewOpen(false);
  }, [lesson.id]);

  // Elapsed timer tick
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerActive && !isFinished) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, isFinished]);

  const currentQ = questions[currentIdx] || questions[0];
  const totalQuestions = questions.length;
  const isCurrentSubmitted = submittedAnswers[currentQ?.id] || false;
  const currentSelectedOption = selectedAnswers[currentQ?.id];

  // Calculate scores
  const correctAnswersCount = useMemo(() => {
    return questions.filter(q => selectedAnswers[q.id] === q.correctIndex && submittedAnswers[q.id]).length;
  }, [questions, selectedAnswers, submittedAnswers]);

  const answeredCount = useMemo(() => {
    return Object.keys(submittedAnswers).length;
  }, [submittedAnswers]);

  const percentage = Math.round((correctAnswersCount / totalQuestions) * 100);

  // Play audio helper with respect to user toggle
  const triggerSound = (type: 'correct' | 'wrong' | 'complete' | 'click') => {
    if (soundEnabled) {
      playSound(type);
    }
  };

  // Option selection
  const handleSelectOption = (optionIndex: number) => {
    if (isCurrentSubmitted) return;
    triggerSound('click');
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQ.id]: optionIndex
    }));
  };

  // Submit and verify current question
  const handleSubmitCurrent = () => {
    if (currentSelectedOption === undefined || isCurrentSubmitted) return;

    const isCorrect = currentSelectedOption === currentQ.correctIndex;
    if (isCorrect) {
      triggerSound('correct');
    } else {
      triggerSound('wrong');
    }

    const nextSubmitted = {
      ...submittedAnswers,
      [currentQ.id]: true
    };
    setSubmittedAnswers(nextSubmitted);

    // Check if this was the last question submitted
    if (Object.keys(nextSubmitted).length === totalQuestions) {
      // Calculate final score
      const finalCorrect = questions.filter(
        q => (q.id === currentQ.id ? isCorrect : selectedAnswers[q.id] === q.correctIndex)
      ).length;
      const finalPct = Math.round((finalCorrect / totalQuestions) * 100);

      setTimeout(() => {
        setIsFinished(true);
        setIsTimerActive(false);
        triggerSound('complete');
        if (onCompleteQuiz) {
          onCompleteQuiz(finalCorrect, totalQuestions, finalPct);
        }
      }, 1200);
    }
  };

  // Navigation
  const handleNext = () => {
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx(prev => prev + 1);
    } else if (answeredCount === totalQuestions) {
      setIsFinished(true);
      setIsTimerActive(false);
      triggerSound('complete');
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  // Retake quiz
  const handleRestartQuiz = () => {
    triggerSound('click');
    setCurrentIdx(0);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setIsFinished(false);
    setSecondsElapsed(0);
    setIsTimerActive(true);
    setIsReviewOpen(false);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainder = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
  };

  // Performance Assessment Badge
  const getAssessment = (pct: number) => {
    if (pct === 100) {
      return {
        title: 'درجة الامتياز (20/20)',
        color: 'text-amber-500 bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-700',
        message: 'أداء مبهر واستيعاب استثنائي وشامل لجميع عناصر الدرس وفق المنهاج البيداغوجي الرسمي!',
        icon: '🏆'
      };
    }
    if (pct >= 80) {
      return {
        title: 'تقدير جيد جداً (16-19/20)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-700',
        message: 'إتقان ممتاز جداً لمعظم المفاهيم والقوانين المحورية. أنت جاهز لخوض تمارين البكالوريا والاختبارات!',
        icon: '🌟'
      };
    }
    if (pct >= 60) {
      return {
        title: 'تقدير حسن / مقبول (12-15/20)',
        color: 'text-blue-700 bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-700',
        message: 'فهم طيب للمبادئ العامة، مع الحاجة لتدقيق بعض الجزئيات في الملخص المكتوب لتفادي الأخطاء الشائعة.',
        icon: '💡'
      };
    }
    return {
      title: 'يحتاج لمراجعة إضافية (دون 10/20)',
      color: 'text-rose-700 bg-rose-50 border-rose-200 dark:bg-rose-950/40 dark:border-rose-700',
      message: 'يُنصح بإعادة قراءة الملخص البيداغوجي المكتوب أو مشاهدة فيديو الأستاذ بتركيز ثم إعادة الاختبار لترسيخ القواعد.',
      icon: '🔄'
    };
  };

  // ========================================================
  // VIEW: FINAL RESULTS SCREEN (شاشة النتائج والتقييم)
  // ========================================================
  if (isFinished) {
    const assessment = getAssessment(percentage);
    const scoreOutOf20 = Math.round((correctAnswersCount / totalQuestions) * 20);

    return (
      <div className="space-y-6 animate-fade-in">
        {/* Results Header Card */}
        <div className={`p-6 sm:p-8 rounded-3xl border text-center relative overflow-hidden ${
          isStudyMode 
            ? 'bg-black/10 dark:bg-white/5 border-current/10' 
            : 'bg-gradient-to-b from-purple-50/70 via-white to-slate-50 border-purple-100 shadow-sm'
        }`}>
          <div className="max-w-xl mx-auto space-y-4">
            
            <div className="inline-flex items-center gap-2 text-2xl sm:text-3xl">
              <span>{assessment.icon}</span>
              <span className={`text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full border ${assessment.color}`}>
                {assessment.title}
              </span>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {correctAnswersCount} <span className="text-2xl text-slate-400 font-bold">/ {totalQuestions}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-300 mt-1">
                النسبة المئوية: {percentage}% — العلامة التقديرية: {scoreOutOf20}/20
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {assessment.message}
            </p>

            {/* Metric counters */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 dark:border-white/10">
              <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10">
                <div className="text-xs text-slate-500 font-bold flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>صحيحة</span>
                </div>
                <div className="text-lg font-black text-emerald-600 mt-0.5">
                  {correctAnswersCount}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10">
                <div className="text-xs text-slate-500 font-bold flex items-center justify-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" />
                  <span>خاطئة</span>
                </div>
                <div className="text-lg font-black text-rose-600 mt-0.5">
                  {totalQuestions - correctAnswersCount}
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-white/10">
                <div className="text-xs text-slate-500 font-bold flex items-center justify-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>الوقت</span>
                </div>
                <div className="text-lg font-black text-blue-600 mt-0.5">
                  {formatTime(secondsElapsed)}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={handleRestartQuiz}
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-purple-600/20 transition"
              >
                <RotateCcw className="w-4 h-4" />
                <span>إعادة الاختبار</span>
              </button>

              <button
                onClick={() => setIsReviewOpen(prev => !prev)}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition"
              >
                <FileText className="w-4 h-4" />
                <span>{isReviewOpen ? 'إخفاء المراجعة' : 'مراجعة جميع الأسئلة والحلول'}</span>
              </button>

              {onToggleComplete && (
                <button
                  onClick={() => onToggleComplete(lesson.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border transition ${
                    isLessonCompleted
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-700'
                      : 'bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border-slate-200 dark:bg-slate-800'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{isLessonCompleted ? 'تم إنجاز الدرس بنجاح' : 'تحديد كدرس مكتمل'}</span>
                </button>
              )}
            </div>

            {/* Quick jump to lesson summary or exercises */}
            {onGoToTab && (
              <div className="flex items-center justify-center gap-4 text-xs font-bold pt-2">
                <button
                  onClick={() => onGoToTab('written')}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>مراجعة الملخص المكتوب</span>
                </button>
                <span className="text-slate-300">•</span>
                <button
                  onClick={() => onGoToTab('exercises')}
                  className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>الانتقال للتمارين المحلولة</span>
                </button>
              </div>
            )}

          </div>
        </div>

        {/* ======================================================== */}
        {/* REVIEW LIST (مراجعة تفصيلية لجميع الأسئلة مع التعليل) */}
        {/* ======================================================== */}
        {isReviewOpen && (
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-purple-600" />
              <span>مراجعة تفصيلية لجميع الأسئلة والحلول النموذجية:</span>
            </h4>

            {questions.map((q, qIdx) => {
              const userAns = selectedAnswers[q.id];
              const isCorrect = userAns === q.correctIndex;

              return (
                <div 
                  key={q.id} 
                  className={`p-5 rounded-2xl border transition-all ${
                    isCorrect 
                      ? 'bg-emerald-50/40 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800' 
                      : 'bg-rose-50/40 border-rose-200 dark:bg-rose-950/20 dark:border-rose-800'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-full text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5 ${
                      isCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                    }`}>
                      {qIdx + 1}
                    </span>
                    <div className="space-y-2 grow">
                      <h5 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white leading-relaxed">
                        {q.question}
                      </h5>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {q.options.map((opt, optIdx) => {
                          const isOptionCorrect = optIdx === q.correctIndex;
                          const isOptionChosen = optIdx === userAns;

                          let optionClass = 'bg-white/80 dark:bg-slate-800/80 border-slate-200 text-slate-700';
                          if (isOptionCorrect) {
                            optionClass = 'bg-emerald-100 dark:bg-emerald-900/60 border-emerald-400 text-emerald-900 dark:text-emerald-100 font-bold';
                          } else if (isOptionChosen && !isOptionCorrect) {
                            optionClass = 'bg-rose-100 dark:bg-rose-900/60 border-rose-400 text-rose-900 dark:text-rose-100 line-through';
                          }

                          return (
                            <div key={optIdx} className={`p-2.5 rounded-xl border text-xs flex items-center justify-between gap-2 ${optionClass}`}>
                              <span>{OPTION_LETTERS[optIdx]}. {opt}</span>
                              {isOptionCorrect && <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />}
                              {isOptionChosen && !isOptionCorrect && <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      <div className="p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200/80 dark:border-white/10 text-xs leading-relaxed text-slate-700 dark:text-slate-300 mt-2 flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block mb-0.5">التعليل والشرح العلمي:</span>
                          {q.explanation}
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    );
  }

  // ========================================================
  // VIEW: ACTIVE QUIZ QUESTION CARD (الاختبار الجاري)
  // ========================================================
  return (
    <div className="space-y-6">
      
      {/* Top Status & Controls Header */}
      <div className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 ${
        isStudyMode ? 'bg-black/10 dark:bg-white/5 border-current/10' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-xl bg-purple-600 text-white text-xs font-black shadow-xs">
            السؤال {currentIdx + 1} من {totalQuestions}
          </span>

          <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-bold">
            <Clock className="w-3.5 h-3.5 text-purple-600" />
            <span className="font-mono">{formatTime(secondsElapsed)}</span>
          </div>

          <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
            الإجابات الصحيحة: <strong className="text-emerald-600 font-black">{correctAnswersCount}</strong> / {answeredCount}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Audio toggle button */}
          <button
            onClick={() => setSoundEnabled(prev => !prev)}
            className={`p-1.5 rounded-lg border text-xs font-bold transition ${
              soundEnabled 
                ? 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:border-purple-800' 
                : 'text-slate-400 border-slate-200 hover:bg-slate-100'
            }`}
            title={soundEnabled ? 'كتم المؤثرات الصوتية' : 'تفعيل المؤثرات الصوتية التفاعلية'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Direct reset button */}
          <button
            onClick={handleRestartQuiz}
            className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition"
            title="إعادة بدء الاختبار من السؤال الأول"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
        <div 
          className="bg-gradient-to-r from-purple-600 to-indigo-600 h-full transition-all duration-300 ease-out rounded-full"
          style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Main Question Card */}
      <div className={`p-6 sm:p-7 rounded-3xl border space-y-6 ${
        isStudyMode ? 'bg-black/5 dark:bg-white/5 border-current/10' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        
        {/* Question Title */}
        <div className="flex items-start gap-3.5">
          <span className="w-8 h-8 rounded-2xl bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 text-sm font-black flex items-center justify-center shrink-0 mt-0.5 border border-purple-200/60">
            {currentIdx + 1}
          </span>
          <div className="space-y-1">
            <span className="text-[11px] font-extrabold tracking-wide uppercase text-purple-600 dark:text-purple-400">
              اختيار من متعدد (QCM) — المفهوم الأساسي
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-relaxed">
              {currentQ.question}
            </h3>
          </div>
        </div>

        {/* Options List */}
        <div className="space-y-3 mr-11">
          {currentQ.options.map((optionText, optIdx) => {
            const isOptionSelected = currentSelectedOption === optIdx;
            const isCorrectOption = optIdx === currentQ.correctIndex;

            let buttonClass = 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800 dark:bg-slate-800/40 dark:border-white/10 dark:text-slate-100';

            if (isCurrentSubmitted) {
              if (isCorrectOption) {
                buttonClass = 'bg-emerald-50 dark:bg-emerald-950/80 border-emerald-500 text-emerald-900 dark:text-emerald-100 font-bold ring-2 ring-emerald-500/20';
              } else if (isOptionSelected && !isCorrectOption) {
                buttonClass = 'bg-rose-50 dark:bg-rose-950/80 border-rose-500 text-rose-900 dark:text-rose-100 font-bold ring-2 ring-rose-500/20';
              } else {
                buttonClass = 'opacity-50 bg-slate-50 border-slate-200 text-slate-500 dark:bg-slate-800/20';
              }
            } else if (isOptionSelected) {
              buttonClass = 'bg-purple-50 dark:bg-purple-950/60 border-purple-500 text-purple-900 dark:text-purple-100 font-bold ring-2 ring-purple-500/20';
            }

            return (
              <button
                key={optIdx}
                disabled={isCurrentSubmitted}
                onClick={() => handleSelectOption(optIdx)}
                className={`w-full text-right p-4 rounded-2xl border text-xs sm:text-sm font-medium transition-all duration-200 flex items-center justify-between gap-4 group ${buttonClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 border transition ${
                    isOptionSelected 
                      ? 'bg-purple-600 text-white border-purple-600' 
                      : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-200 border-slate-300 dark:border-slate-600'
                  }`}>
                    {OPTION_LETTERS[optIdx]}
                  </span>
                  <span className="leading-relaxed">{optionText}</span>
                </div>

                {/* Status Badges */}
                {isCurrentSubmitted && isCorrectOption && (
                  <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-black shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="hidden sm:inline">إجابة صحيحة</span>
                  </span>
                )}

                {isCurrentSubmitted && isOptionSelected && !isCorrectOption && (
                  <span className="inline-flex items-center gap-1 text-rose-600 dark:text-rose-400 text-xs font-black shrink-0">
                    <XCircle className="w-4 h-4" />
                    <span className="hidden sm:inline">إجابة خاطئة</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Action / Instant Feedback Box */}
        <div className="mr-11 pt-2 space-y-4">
          {!isCurrentSubmitted ? (
            <button
              disabled={currentSelectedOption === undefined}
              onClick={handleSubmitCurrent}
              className={`w-full sm:w-auto px-6 py-3 rounded-2xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 transition-all ${
                currentSelectedOption !== undefined
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/25 active:scale-98'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed dark:bg-white/5 dark:text-slate-600'
              }`}
            >
              <span>تأكيد الإجابة والتحقق الفوري</span>
              <Check className="w-4 h-4" />
            </button>
          ) : (
            <div className="space-y-4 animate-fade-in">
              {/* Detailed pedagogical explanation box */}
              <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                currentSelectedOption === currentQ.correctIndex
                  ? 'bg-emerald-50 text-emerald-950 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-100'
                  : 'bg-rose-50 text-rose-950 border-rose-200 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-100'
              }`}>
                <div className="flex items-start gap-2.5">
                  <Lightbulb className={`w-5 h-5 shrink-0 mt-0.5 ${
                    currentSelectedOption === currentQ.correctIndex ? 'text-emerald-600' : 'text-rose-600'
                  }`} />
                  <div>
                    <span className="font-black text-sm block mb-1">
                      {currentSelectedOption === currentQ.correctIndex 
                        ? '🎉 إجابة صحيحة وممتازة!' 
                        : 'توضيح الإجابة الصحيحة:'}
                    </span>
                    <p className="font-medium leading-relaxed">
                      {currentQ.explanation}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation button to Next Question or Final Results */}
              <div className="flex items-center justify-between gap-3 pt-2">
                {currentIdx > 0 ? (
                  <button
                    onClick={handlePrev}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>السؤال السابق</span>
                  </button>
                ) : <div />}

                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-black flex items-center gap-2 shadow-md shadow-purple-600/20 transition group"
                >
                  <span>
                    {currentIdx < totalQuestions - 1 ? 'السؤال الموالي' : 'إنهاء الاختبار وعرض النتيجة'}
                  </span>
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          )}
        </div>

      </div>

      {/* Bottom helper tabs */}
      {onGoToTab && (
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-bold px-2">
          <span>تحتاج إلى تذكر قاعدة أو قانون؟</span>
          <button
            onClick={() => onGoToTab('written')}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 hover:underline"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>مراجعة الدرس المكتوب أولاً</span>
          </button>
        </div>
      )}

    </div>
  );
};
