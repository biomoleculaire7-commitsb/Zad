import React, { useState, useEffect, useMemo } from 'react';
import { Lesson, QuizQuestion, OfficialExam, ExamExercisePart, SolutionStep } from '../types';
import { getLessonQuiz } from '../data/lessonQuizzes';
import { playSound } from '../utils/audioFeedback';
import { executePrintExam } from '../utils/printDocument';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Award, 
  Clock, 
  Volume2, 
  VolumeX, 
  Lightbulb, 
  FileText, 
  BookOpen,
  Check,
  ChevronRight,
  ChevronLeft,
  Printer,
  Calendar,
  Layers,
  FileCheck,
  Eye,
  EyeOff,
  Sparkles,
  Play,
  Pause,
  CheckSquare,
  Square,
  AlertCircle
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
  // Load questions for this specific lesson
  const questions: QuizQuestion[] = useMemo(() => {
    return getLessonQuiz(lesson);
  }, [lesson]);

  // Quiz progression state
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Timer for Quiz
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);

  // Review mode on final results
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);

  // Evaluation Sub-Mode: Interactive QCM Quiz vs Formal Official Exams (20/20)
  const [evaluationMode, setEvaluationMode] = useState<'quiz' | 'formal_exams'>('quiz');
  const [selectedExamIndex, setSelectedExamIndex] = useState<number>(0);
  const [revealedExamSolutions, setRevealedExamSolutions] = useState<Record<string, boolean>>({});
  const [examNotice, setExamNotice] = useState<string | null>(null);

  // Exam simulation countdown timer state
  const [isExamTimerRunning, setIsExamTimerRunning] = useState<boolean>(false);
  const [examRemainingSeconds, setExamRemainingSeconds] = useState<number>(3600); // 1 hour default
  const [solvedExamExercises, setSolvedExamExercises] = useState<Record<string, boolean>>({});

  const officialExams = useMemo(() => {
    return lesson.exams || [];
  }, [lesson.exams]);

  const currentExam: OfficialExam | undefined = officialExams[selectedExamIndex] || officialExams[0];

  // Load solved exam exercises state
  useEffect(() => {
    try {
      const stored = localStorage.getItem(`zad_exam_solved_${lesson.id}`);
      if (stored) {
        setSolvedExamExercises(JSON.parse(stored));
      } else {
        setSolvedExamExercises({});
      }
    } catch {
      setSolvedExamExercises({});
    }
  }, [lesson.id]);

  const toggleSolvedExamExercise = (exKey: string) => {
    setSolvedExamExercises(prev => {
      const next = { ...prev, [exKey]: !prev[exKey] };
      try {
        localStorage.setItem(`zad_exam_solved_${lesson.id}`, JSON.stringify(next));
      } catch (err) {
        console.error(err);
      }
      return next;
    });
  };

  // Set default countdown when changing current exam
  useEffect(() => {
    if (currentExam) {
      if (currentExam.duration.includes('3')) {
        setExamRemainingSeconds(3.5 * 3600);
      } else if (currentExam.duration.includes('2')) {
        setExamRemainingSeconds(2 * 3600);
      } else {
        setExamRemainingSeconds(3600);
      }
      setIsExamTimerRunning(false);
      setRevealedExamSolutions({});
    }
  }, [currentExam]);

  // Exam Countdown interval
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isExamTimerRunning && examRemainingSeconds > 0) {
      interval = setInterval(() => {
        setExamRemainingSeconds(prev => {
          if (prev <= 1) {
            setIsExamTimerRunning(false);
            if (soundEnabled) playSound('complete');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isExamTimerRunning, examRemainingSeconds, soundEnabled]);

  const toggleExamSolution = (key: string) => {
    setRevealedExamSolutions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleAllExamSolutions = () => {
    if (!currentExam) return;
    const allKeys = currentExam.exercises.map((_, i) => `${currentExam.id}_${i}`);
    const areAllOpen = allKeys.every(k => revealedExamSolutions[k]);
    const next: Record<string, boolean> = {};
    allKeys.forEach(k => {
      next[k] = !areAllOpen;
    });
    setRevealedExamSolutions(next);
  };

  const handlePrintExam = (exam: OfficialExam) => {
    const res = executePrintExam(exam, lesson.title);
    if (res.method === 'download') {
      setExamNotice('تم تنزيل موضوع الاختبار كملف HTML للطباعة!');
    } else {
      setExamNotice('تم فتح نافذة الطباعة الرسمية لموضوع الامتحان!');
    }
    setTimeout(() => setExamNotice(null), 4000);
  };

  // Reset quiz when lesson changes
  useEffect(() => {
    setCurrentIdx(0);
    setSelectedAnswers({});
    setSubmittedAnswers({});
    setIsFinished(false);
    setSecondsElapsed(0);
    setIsTimerActive(true);
    setIsReviewOpen(false);
    setSelectedExamIndex(0);
    setRevealedExamSolutions({});
  }, [lesson.id]);

  // Elapsed timer tick for QCM
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerActive && !isFinished && evaluationMode === 'quiz') {
      interval = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerActive, isFinished, evaluationMode]);

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

  const percentage = Math.round((correctAnswersCount / (totalQuestions || 1)) * 100);

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

  const formatExamCountdown = (secs: number) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const remainder = secs % 60;
    if (hrs > 0) {
      return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
    }
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

  return (
    <div className="space-y-6">
      
      {/* ======================================================== */}
      {/* MODE TOGGLE: INTERACTIVE QCM QUIZ VS FORMAL OFFICIAL EXAMS */}
      {/* ======================================================== */}
      <div className="p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 shadow-xs">
        <button
          onClick={() => setEvaluationMode('quiz')}
          className={`flex-1 flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition-all ${
            evaluationMode === 'quiz'
              ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25 scale-[1.01]'
              : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 hover:bg-slate-200/60 dark:hover:bg-slate-700/60'
          }`}
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>اختبار تفاعلي تدريبي (QCM)</span>
          <span className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
            evaluationMode === 'quiz' ? 'bg-purple-700 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
          }`}>
            {totalQuestions} أسئلة
          </span>
        </button>

        <button
          onClick={() => setEvaluationMode('formal_exams')}
          className={`flex-1 flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-black transition-all ${
            evaluationMode === 'formal_exams'
              ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/25 scale-[1.01]'
              : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700 hover:bg-slate-200/60 dark:hover:bg-slate-700/60'
          }`}
        >
          <Award className="w-4 h-4 shrink-0" />
          <span>الفروض والاختبارات الرسمية (20/20)</span>
          <span className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
            evaluationMode === 'formal_exams' ? 'bg-emerald-800 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
          }`}>
            {officialExams.length} مواضيع وزارية
          </span>
        </button>
      </div>

      {examNotice && (
        <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm font-bold flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
          <span>{examNotice}</span>
        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: FORMAL OFFICIAL EXAMS (فروض واختبارات رسمية 20/20) */}
      {/* ======================================================== */}
      {evaluationMode === 'formal_exams' && (
        <div className="space-y-6 animate-fade-in">
          
          {/* Exam Selection Pills */}
          {officialExams.length > 1 && (
            <div className="flex flex-wrap items-center gap-2 pb-1 border-b border-slate-200 dark:border-white/10">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 ml-2">المواضيع المقترحة:</span>
              {officialExams.map((ex, idx) => (
                <button
                  key={ex.id}
                  onClick={() => setSelectedExamIndex(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition flex items-center gap-2 ${
                    selectedExamIndex === idx
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <span>{ex.type === 'فرض محروس' ? '📝' : ex.type === 'بكالوريا تجريبية' ? '🎓' : '📋'}</span>
                  <span>{ex.type}</span>
                  <span className="text-[10px] opacity-80">({ex.duration})</span>
                </button>
              ))}
            </div>
          )}

          {currentExam && (
            <div className="space-y-6">
              
              {/* Exam Header Banner Card */}
              <div className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white shadow-lg space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-1.5 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-extrabold">
                        {currentExam.type}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-white/10 text-white text-xs font-bold">
                        الثلاثي {currentExam.trimester || 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-extrabold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>المدة: {currentExam.duration}</span>
                      </span>
                      <span className="px-2.5 py-0.5 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-400/30 text-xs font-extrabold">
                        العلامة: {currentExam.totalPoints} / 20
                      </span>
                    </div>

                    <h2 className="text-lg sm:text-xl font-black leading-snug">
                      {currentExam.title}
                    </h2>

                    {currentExam.officialNotes && (
                      <p className="text-xs text-slate-300 font-medium">
                        {currentExam.officialNotes}
                      </p>
                    )}
                  </div>

                  {/* Actions: Print and Timer */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => handlePrintExam(currentExam)}
                      className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-900 text-xs font-black flex items-center gap-1.5 shadow-sm transition active:scale-98"
                      title="طباعة موضوع الامتحان أو حفظه كـ PDF مع سلم التنقيط"
                    >
                      <Printer className="w-4 h-4 text-emerald-700" />
                      <span>طباعة الامتحان (A4/PDF)</span>
                    </button>

                    <button
                      onClick={toggleAllExamSolutions}
                      className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition"
                    >
                      {currentExam.exercises.every((_, i) => revealedExamSolutions[`${currentExam.id}_${i}`]) ? (
                        <>
                          <EyeOff className="w-4 h-4 text-amber-300" />
                          <span>إخفاء جميع الحلول</span>
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4 text-emerald-300" />
                          <span>إظهار جميع عناصر الإجابة</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Exam Room Countdown Timer Simulation */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-300">مؤقت قاعة الامتحان التدريبي:</span>
                    <span className={`font-mono text-base font-black px-2.5 py-0.5 rounded-lg border ${
                      examRemainingSeconds <= 300 
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
                        : 'bg-black/30 text-emerald-300 border-white/10'
                    }`}>
                      {formatExamCountdown(examRemainingSeconds)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsExamTimerRunning(prev => !prev)}
                      className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold flex items-center gap-1 transition"
                    >
                      {isExamTimerRunning ? (
                        <>
                          <Pause className="w-3.5 h-3.5" />
                          <span>إيقاف مؤقت</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5" />
                          <span>بدء محاكاة الامتحان</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => {
                        setIsExamTimerRunning(false);
                        if (currentExam.duration.includes('3')) setExamRemainingSeconds(3.5 * 3600);
                        else if (currentExam.duration.includes('2')) setExamRemainingSeconds(2 * 3600);
                        else setExamRemainingSeconds(3600);
                      }}
                      className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition"
                      title="إعادة ضبط المؤقت"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Official Instructions Box */}
              {currentExam.instructions && currentExam.instructions.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-amber-950 dark:text-amber-100 text-xs sm:text-sm space-y-2">
                  <div className="font-extrabold flex items-center gap-2 text-amber-800 dark:text-amber-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>توجيهات وتعليمات وزارية هامة للمترشح:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs font-medium mr-2">
                    {currentExam.instructions.map((inst, i) => (
                      <li key={i}>{inst}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Exam Exercises List */}
              <div className="space-y-6">
                {currentExam.exercises.map((part: ExamExercisePart, exIdx: number) => {
                  const solutionKey = `${currentExam.id}_${exIdx}`;
                  const isSolutionOpen = revealedExamSolutions[solutionKey] || false;
                  const isSolved = solvedExamExercises[solutionKey] || false;

                  return (
                    <div 
                      key={exIdx}
                      className={`p-6 rounded-3xl border transition-all ${
                        isSolved 
                          ? 'bg-emerald-50/20 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-900/50 shadow-xs' 
                          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-white/10 shadow-sm'
                      }`}
                    >
                      {/* Exercise Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-white/5">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-black flex items-center justify-center border border-emerald-300 dark:border-emerald-800">
                            {part.number || exIdx + 1}
                          </span>
                          <div>
                            <h3 className="text-sm sm:text-base font-black text-slate-900 dark:text-white">
                              {part.title}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-black">
                            {part.points} نقاط / 20
                          </span>

                          <button
                            onClick={() => toggleSolvedExamExercise(solutionKey)}
                            className={`p-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition ${
                              isSolved
                                ? 'bg-emerald-600 text-white border-emerald-600'
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                            }`}
                            title="تعليم التمرين كمنجز بعد التدرب عليه"
                          >
                            {isSolved ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                            <span className="hidden sm:inline">{isSolved ? 'تم الإنجاز' : 'تحديد كمنجز'}</span>
                          </button>
                        </div>
                      </div>

                      {/* Problem Statement */}
                      <div className="py-4 space-y-3">
                        <div className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 leading-relaxed whitespace-pre-line bg-slate-50/60 dark:bg-white/5 p-4 rounded-2xl border border-slate-100 dark:border-white/5">
                          {part.statement}
                        </div>

                        {/* Tips if available */}
                        {part.tips && part.tips.length > 0 && (
                          <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-blue-950 dark:text-blue-200 text-xs space-y-1">
                            <span className="font-extrabold flex items-center gap-1.5 text-blue-800 dark:text-blue-300">
                              <Lightbulb className="w-3.5 h-3.5" />
                              <span>إرشاد وتوجيه بيداغوجي:</span>
                            </span>
                            <ul className="list-disc list-inside space-y-0.5 mr-2 font-medium">
                              {part.tips.map((tip, tIdx) => (
                                <li key={tIdx}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Solution Toggle & Detailed Solution */}
                      <div className="pt-2">
                        <button
                          onClick={() => toggleExamSolution(solutionKey)}
                          className={`w-full py-2.5 px-4 rounded-xl border text-xs sm:text-sm font-black flex items-center justify-between transition ${
                            isSolutionOpen
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                              : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {isSolutionOpen ? <EyeOff className="w-4 h-4 text-emerald-600" /> : <Eye className="w-4 h-4 text-slate-500" />}
                            <span>{isSolutionOpen ? 'إخفاء عناصر الإجابة والسلّم الوزاري' : 'عرض التصحيح النموذجي وسلّم التنقيط بالتفصيل'}</span>
                          </span>
                          <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                            سلم {part.points} ن
                          </span>
                        </button>

                        {/* Solution Panel */}
                        {isSolutionOpen && (
                          <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 space-y-4 animate-fade-in">
                            <div className="text-xs font-extrabold text-emerald-800 dark:text-emerald-300 flex items-center gap-2 border-b border-emerald-200 dark:border-emerald-800/60 pb-2">
                              <FileCheck className="w-4 h-4" />
                              <span>شبكة التصحيح الوزاري المعتمدة لـ «{part.title}»:</span>
                            </div>

                            {Array.isArray(part.solution) ? (
                              <div className="space-y-3">
                                {part.solution.map((step: SolutionStep, sIdx: number) => (
                                  <div 
                                    key={sIdx}
                                    className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-emerald-100 dark:border-emerald-900/40 text-xs sm:text-sm space-y-1.5 shadow-2xs"
                                  >
                                    <div className="flex items-center justify-between gap-2">
                                      <span className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
                                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black flex items-center justify-center">
                                          {step.stepNumber || sIdx + 1}
                                        </span>
                                        <span>{step.stepTitle}</span>
                                      </span>
                                      {step.score && (
                                        <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-black text-[11px]">
                                          {step.score}
                                        </span>
                                      )}
                                    </div>

                                    <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium text-xs sm:text-sm">
                                      {step.explanation}
                                    </p>

                                    {step.formulaUsed && (
                                      <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-mono text-xs border border-slate-200 dark:border-slate-700">
                                        <span className="font-sans font-bold text-slate-500 ml-2">القاعدة المطبقة:</span>
                                        {step.formulaUsed}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            ) : (
                              <div className="text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-line text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
                                {part.solution}
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          )}

        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 1: INTERACTIVE QUIZ (QCM)                           */}
      {/* ======================================================== */}
      {evaluationMode === 'quiz' && (
        <div className="space-y-6">

          {/* VIEW: FINAL RESULTS SCREEN (شاشة النتائج والتقييم) */}
          {isFinished ? (
            <div className="space-y-6 animate-fade-in">
              {/* Results Header Card */}
              <div className={`p-6 sm:p-8 rounded-3xl border text-center relative overflow-hidden ${
                isStudyMode 
                  ? 'bg-black/10 dark:bg-white/5 border-current/10' 
                  : 'bg-gradient-to-b from-purple-50/70 via-white to-slate-50 border-purple-100 shadow-sm'
              }`}>
                <div className="max-w-xl mx-auto space-y-4">
                  
                  <div className="inline-flex items-center gap-2 text-2xl sm:text-3xl">
                    <span>{getAssessment(percentage).icon}</span>
                    <span className={`text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full border ${getAssessment(percentage).color}`}>
                      {getAssessment(percentage).title}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                      {correctAnswersCount} <span className="text-2xl text-slate-400 font-bold">/ {totalQuestions}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-300 mt-1">
                      النسبة المئوية: {percentage}% — العلامة التقديرية: {Math.round((correctAnswersCount / (totalQuestions || 1)) * 20)}/20
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {getAssessment(percentage).message}
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

                    <button
                      onClick={() => setEvaluationMode('formal_exams')}
                      className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition"
                    >
                      <Award className="w-4 h-4" />
                      <span>الانتقال للفروض الرسمية (20/20)</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Review Section */}
              {isReviewOpen && (
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-extrabold text-slate-800 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span>مراجعة إجاباتك بالتفصيل:</span>
                  </h4>

                  {questions.map((q, idx) => {
                    const userChoice = selectedAnswers[q.id];
                    const isUserCorrect = userChoice === q.correctIndex;

                    return (
                      <div 
                        key={q.id}
                        className={`p-4 sm:p-5 rounded-2xl border transition ${
                          isUserCorrect 
                            ? 'bg-emerald-50/50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800/40' 
                            : 'bg-rose-50/50 border-rose-200 dark:bg-rose-950/20 dark:border-rose-800/40'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                            isUserCorrect ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white'
                          }`}>
                            {idx + 1}
                          </span>
                          
                          <div className="space-y-2 flex-grow">
                            <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                              {q.question}
                            </h5>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                              <div className={`p-2.5 rounded-xl border font-medium ${
                                isUserCorrect 
                                  ? 'bg-emerald-100/80 border-emerald-300 text-emerald-900 dark:bg-emerald-900/60 dark:text-emerald-100'
                                  : 'bg-rose-100/80 border-rose-300 text-rose-900 dark:bg-rose-900/60 dark:text-rose-100'
                              }`}>
                                <span className="font-bold block mb-0.5">إجابتك:</span>
                                {userChoice !== undefined ? q.options[userChoice] : 'لم تتم الإجابة'}
                              </div>

                              {!isUserCorrect && (
                                <div className="p-2.5 rounded-xl border bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-100 font-medium">
                                  <span className="font-bold block mb-0.5">الإجابة الصحيحة المعتمدة:</span>
                                  {q.options[q.correctIndex]}
                                </div>
                              )}
                            </div>

                            <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
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
          ) : (
            /* VIEW: ACTIVE QUIZ QUESTION CARD (الاختبار الجاري) */
            <div className="space-y-6">
              
              {/* Top Status & Controls Header */}
              <div className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-3 ${
                isStudyMode ? 'bg-black/10 dark:bg-white/5 border-current/10' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/60 dark:border-slate-700'
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
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 transition"
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
                isStudyMode ? 'bg-black/5 dark:bg-white/5 border-current/10' : 'bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-sm'
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
                <div className="space-y-3 mr-0 sm:mr-11">
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
                <div className="mr-0 sm:mr-11 pt-2 space-y-4">
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
                            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold flex items-center gap-1.5 transition dark:border-slate-700 dark:text-slate-300"
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

            </div>
          )}

        </div>
      )}

      {/* Bottom helper tabs */}
      {onGoToTab && (
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-bold px-2 pt-2 border-t border-slate-200/60 dark:border-white/5">
          <span>تحتاج إلى تذكر القواعد أو مزيد من التمارين؟</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onGoToTab('written')}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 flex items-center gap-1 hover:underline"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>مراجعة الدرس المكتوب</span>
            </button>
            <button
              onClick={() => onGoToTab('exercises')}
              className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 flex items-center gap-1 hover:underline"
            >
              <Award className="w-3.5 h-3.5" />
              <span>بنك التمارين المحلولة ({lesson.exercises.length})</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
