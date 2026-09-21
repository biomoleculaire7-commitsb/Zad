import React, { useState, useEffect, useRef } from 'react';
import { Lesson, UserProgress, VideoResource, Exercise } from '../types';
import { executePrintLesson } from '../utils/printDocument';
import { InteractiveQuiz } from './InteractiveQuiz';
import { getLessonQuiz } from '../data/lessonQuizzes';
import { sanitizeVideoResource } from '../utils/videoResolver';
import { 
  X, 
  PlayCircle, 
  FileText, 
  Award, 
  HelpCircle, 
  Bookmark, 
  CheckCircle2, 
  Download, 
  Printer, 
  Share2, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Sparkles, 
  BookOpen, 
  Info, 
  Check, 
  RotateCcw,
  Maximize2,
  Minimize2,
  Timer,
  Play,
  Pause,
  Sun,
  Moon,
  Type,
  Coffee,
  ExternalLink,
  Search,
  FileDown,
  Columns,
  Video,
  Link2,
  Tv,
  Copy,
  Plus
} from 'lucide-react';

interface LessonModalProps {
  lesson: Lesson | null;
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onToggleComplete: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string) => void;
  onSaveQuizScore?: (lessonId: string, score: number, total: number, percentage: number) => void;
  initialTab?: 'video' | 'written' | 'exercises' | 'quiz';
  initialStudyMode?: boolean;
  onNavigateLesson?: (direction: 'next' | 'prev') => void;
  hasPrevLesson?: boolean;
  hasNextLesson?: boolean;
}

type StudyTheme = 'sepia' | 'dark' | 'light';
type StudyFontSize = 'normal' | 'large' | 'xlarge';

export const LessonModal: React.FC<LessonModalProps> = ({
  lesson,
  isOpen,
  onClose,
  progress,
  onToggleComplete,
  onToggleBookmark,
  onSaveQuizScore,
  initialTab = 'video',
  initialStudyMode = false,
  onNavigateLesson,
  hasPrevLesson = false,
  hasNextLesson = false,
}) => {
  const [activeTab, setActiveTab] = useState<'video' | 'written' | 'exercises' | 'quiz'>(initialTab);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number>(0);
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});
  const [revealedHints, setRevealedHints] = useState<Record<string, boolean>>({});
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});
  const [copyNotification, setCopyNotification] = useState<string | null>(null);
  const [printNotice, setPrintNotice] = useState<string | null>(null);
  const [playerKey, setPlayerKey] = useState<number>(0);

  // In-App Embedded Video Player & Continuous Learning States
  const [isSplitView, setIsSplitView] = useState<boolean>(false);
  const [isMiniPlayerActive, setIsMiniPlayerActive] = useState<boolean>(true);
  const [isFloatingDismissed, setIsFloatingDismissed] = useState<boolean>(false);
  const [customUrlInput, setCustomUrlInput] = useState<string>('');
  const [showCustomUrlBox, setShowCustomUrlBox] = useState<boolean>(false);
  const [activeCustomVideo, setActiveCustomVideo] = useState<{
    type: 'youtube' | 'direct' | 'embed';
    src: string;
    id?: string;
    title?: string;
    teacherName?: string;
  } | null>(null);
  const [playerNotification, setPlayerNotification] = useState<string | null>(null);

  // Parse educational video links (YouTube watch/embed/shorts, direct mp4/webm, or web embeds)
  const parseEducationalVideoLink = (input: string): { type: 'youtube' | 'direct' | 'embed'; src: string; id?: string } | null => {
    if (!input || !input.trim()) return null;
    const trimmed = input.trim();

    // 1. Direct YouTube 11-char ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
      return {
        type: 'youtube',
        src: `https://www.youtube.com/embed/${trimmed}?rel=0&enablejsapi=1&autoplay=1`,
        id: trimmed,
      };
    }

    // 2. Direct video file
    if (/\.(mp4|webm|ogg|m4v)(\?.*)?$/i.test(trimmed)) {
      return {
        type: 'direct',
        src: trimmed,
      };
    }

    // 3. YouTube link (watch, youtu.be, embed, shorts)
    const ytMatch = trimmed.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([a-zA-Z0-9_-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return {
        type: 'youtube',
        src: `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&enablejsapi=1&autoplay=1`,
        id: ytMatch[1],
      };
    }

    // 4. Web embed or external video iframe
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return {
        type: 'embed',
        src: trimmed,
      };
    }

    return null;
  };

  // Handler to play any custom educational link directly inside the app
  const handlePlayCustomUrl = (urlToPlay?: string) => {
    const target = (urlToPlay || customUrlInput).trim();
    if (!target) return;

    const parsed = parseEducationalVideoLink(target);
    if (parsed) {
      setActiveCustomVideo({
        type: parsed.type,
        src: parsed.src,
        id: parsed.id,
        title: 'مقطع تعليمي مخصص للدرس',
        teacherName: 'شرح تعليمي مدمج',
      });
      setPlayerKey(k => k + 1);
      setPlayerNotification('تم تشغيل الرابط التعليمي مباشرة داخل التطبيق بنجاح!');
      setCustomUrlInput('');
      setShowCustomUrlBox(false);
      setTimeout(() => setPlayerNotification(null), 4000);
    } else {
      setPlayerNotification('يرجى إدخال رابط يوتيوب أو رابط فيديو مباشر صالح.');
      setTimeout(() => setPlayerNotification(null), 4000);
    }
  };

  // Load quiz questions for current lesson
  const quizQuestions = lesson ? getLessonQuiz(lesson) : [];

  // Study Mode (وضع المذاكرة) States
  const [isStudyMode, setIsStudyMode] = useState<boolean>(initialStudyMode);
  const [studyTheme, setStudyTheme] = useState<StudyTheme>(() => {
    return (localStorage.getItem('dz_study_theme') as StudyTheme) || 'sepia';
  });
  const [studyFontSize, setStudyFontSize] = useState<StudyFontSize>(() => {
    return (localStorage.getItem('dz_study_font_size') as StudyFontSize) || 'large';
  });

  // Focus Timer (Pomodoro / مؤقت التركيز)
  const [timerDurationMinutes, setTimerDurationMinutes] = useState<number>(25);
  const [timerSecondsLeft, setTimerSecondsLeft] = useState<number>(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerCompletedNotice, setTimerCompletedNotice] = useState<boolean>(false);

  // Synchronize initial state when opening modal
  useEffect(() => {
    setActiveTab(initialTab);
    setSelectedVideoIndex(0);
    setRevealedSolutions({});
    setRevealedHints({});
    setSelectedQuizAnswers({});
    setQuizSubmitted({});
    if (initialStudyMode) {
      setIsStudyMode(true);
    }
  }, [lesson, initialTab, isOpen, initialStudyMode]);

  // Persist study preferences
  useEffect(() => {
    localStorage.setItem('dz_study_theme', studyTheme);
  }, [studyTheme]);

  useEffect(() => {
    localStorage.setItem('dz_study_font_size', studyFontSize);
  }, [studyFontSize]);

  // Focus Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSecondsLeft > 0) {
      interval = setInterval(() => {
        setTimerSecondsLeft(prev => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            setTimerCompletedNotice(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSecondsLeft]);

  // Reset timer duration
  const handleSetTimerDuration = (minutes: number) => {
    setTimerDurationMinutes(minutes);
    setTimerSecondsLeft(minutes * 60);
    setIsTimerRunning(false);
    setTimerCompletedNotice(false);
  };

  const handleResetTimer = () => {
    setTimerSecondsLeft(timerDurationMinutes * 60);
    setIsTimerRunning(false);
    setTimerCompletedNotice(false);
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Keyboard shortcut listener (Escape to exit study mode or close modal, 'f' to toggle study mode)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      // Ignore if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'Escape') {
        if (isStudyMode) {
          setIsStudyMode(false);
          e.stopPropagation();
        } else {
          onClose();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        setIsStudyMode(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isStudyMode, onClose]);

  if (!isOpen || !lesson) return null;

  const isCompleted = progress.completedLessonIds.includes(lesson.id);
  const isBookmarked = progress.bookmarkedLessonIds.includes(lesson.id);
  const rawVideo = lesson.videoResources?.[selectedVideoIndex] || lesson.videoResources?.[0];
  const sanitizedDefault = rawVideo 
    ? sanitizeVideoResource(rawVideo, lesson.title, lesson.subjectId)
    : sanitizeVideoResource({
        id: 'auto_gen_vid',
        teacherName: 'الأستاذ نور الدين',
        teacherTitle: 'أستاذ معتمد',
        videoTitle: lesson.title,
        duration: '1:15:00',
        youtubeId: 'H0Yd-Jrt2UM',
        quality: '1080p HD',
        channelName: 'التعليم الثانوي الجزائري',
      }, lesson.title, lesson.subjectId);

  const currentVideo: VideoResource = activeCustomVideo
    ? {
        id: 'custom_video_stream',
        teacherName: activeCustomVideo.teacherName || 'مقطع تعليمي مدمج',
        teacherTitle: 'شرح ومحاضرة تعليمية تم تحميلها داخل المشغل المدمج',
        videoTitle: activeCustomVideo.title || lesson.title,
        duration: 'مباشر',
        youtubeId: activeCustomVideo.type === 'youtube' && activeCustomVideo.id ? activeCustomVideo.id : '',
        downloadUrl: activeCustomVideo.src,
        quality: '1080p HD',
        channelName: 'مشغل المنصة المدمج',
        viewsCount: 'تشغيل مباشر',
        notes: 'يتم تشغيل هذا الرابط التعليمي مباشرة داخل المنصة دون مغادرة الصفحة أو فتح نوافذ جديدة.',
      }
    : sanitizedDefault;

  // Video renderer supporting YouTube, Direct HTML5 video, or Web Embeds
  const renderVideoFrame = (compact = false) => {
    if (activeCustomVideo?.type === 'direct') {
      return (
        <video
          key={`direct-video-${activeCustomVideo.src}`}
          src={activeCustomVideo.src}
          controls
          autoPlay
          playsInline
          className="w-full h-full object-contain bg-black"
        />
      );
    }

    if (activeCustomVideo?.type === 'embed') {
      return (
        <iframe
          key={`embed-frame-${activeCustomVideo.src}`}
          className="w-full h-full"
          src={activeCustomVideo.src}
          title={currentVideo.videoTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      );
    }

    const yId = currentVideo.youtubeId || 'H0Yd-Jrt2UM';
    return (
      <iframe
        key={`${playerKey}-${yId}-${compact ? 'mini' : 'main'}`}
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${yId}?rel=0&enablejsapi=1&autoplay=0`}
        title={currentVideo.videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  };

  const toggleSolution = (exerciseId: string) => {
    setRevealedSolutions(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const toggleHint = (exerciseId: string) => {
    setRevealedHints(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const handlePrint = () => {
    if (!lesson) return;
    try {
      const result = executePrintLesson(lesson);
      if (result.method === 'download') {
        setPrintNotice('تم تنزيل مستند الدرس بصيغة قابلة للطباعة وحفظ كـ PDF عبر المتصفح!');
      } else {
        setPrintNotice('تم فتح نافذة الطباعة الرسمية للدرس بنجاح!');
      }
    } catch (err) {
      console.warn('Print execution error, falling back to window.print():', err);
      window.print();
      setPrintNotice('تم إرسال أمر الطباعة إلى الطابعة!');
    }
    setTimeout(() => setPrintNotice(null), 4500);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopyNotification('تم نسخ رابط الدرس إلى الحافظة!');
      setTimeout(() => setCopyNotification(null), 2500);
    }
  };

  const handleSelectQuiz = (questionId: string, optionIdx: number) => {
    setSelectedQuizAnswers(prev => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const handleSubmitQuiz = (questionId: string) => {
    setQuizSubmitted(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  // Theme style classes for Study Mode
  const getThemeClasses = () => {
    if (!isStudyMode) return { container: '', card: '', text: '', border: '' };
    switch (studyTheme) {
      case 'dark':
        return {
          container: 'bg-slate-950 text-slate-100',
          header: 'bg-slate-900/90 border-slate-800 text-white',
          card: 'bg-slate-900 border-slate-800 text-slate-200',
          innerHighlight: 'bg-slate-800/80 border-slate-700 text-slate-100',
          subtleText: 'text-slate-400',
          badge: 'bg-slate-800 text-slate-300 border-slate-700',
          border: 'border-slate-800',
          tabActive: 'bg-emerald-600 text-white shadow-md shadow-emerald-950',
          tabInactive: 'text-slate-400 hover:text-white hover:bg-slate-800',
        };
      case 'sepia':
        return {
          container: 'bg-[#faf6eb] text-[#2e261d]',
          header: 'bg-[#f4efe0] border-[#e8ded0] text-[#2e261d]',
          card: 'bg-[#f5f0e3] border-[#e7ded0] text-[#332b21]',
          innerHighlight: 'bg-[#ebe4d3] border-[#ded4bf] text-[#2c2419]',
          subtleText: 'text-[#736352]',
          badge: 'bg-[#ede5d5] text-[#4d4032] border-[#ded4bf]',
          border: 'border-[#e8ded0]',
          tabActive: 'bg-[#5b4a39] text-[#faf6eb] shadow-md shadow-[#5b4a39]/20',
          tabInactive: 'text-[#736352] hover:text-[#2e261d] hover:bg-[#ede5d5]',
        };
      case 'light':
      default:
        return {
          container: 'bg-slate-50 text-slate-900',
          header: 'bg-white border-slate-200 text-slate-900',
          card: 'bg-white border-slate-200 text-slate-800',
          innerHighlight: 'bg-slate-100 border-slate-200 text-slate-800',
          subtleText: 'text-slate-500',
          badge: 'bg-slate-100 text-slate-700 border-slate-200',
          border: 'border-slate-200',
          tabActive: 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20',
          tabInactive: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
        };
    }
  };

  const themeClasses = getThemeClasses();

  // Dynamic font size classes
  const getFontSizeClasses = () => {
    switch (studyFontSize) {
      case 'xlarge':
        return {
          body: 'text-lg sm:text-xl leading-loose',
          heading: 'text-xl sm:text-2xl font-black',
          subheading: 'text-base sm:text-lg',
        };
      case 'large':
        return {
          body: 'text-base sm:text-lg leading-loose',
          heading: 'text-lg sm:text-xl font-black',
          subheading: 'text-sm sm:text-base',
        };
      case 'normal':
      default:
        return {
          body: 'text-sm sm:text-base leading-relaxed',
          heading: 'text-base sm:text-lg font-black',
          subheading: 'text-xs sm:text-sm',
        };
    }
  };

  const fontClasses = getFontSizeClasses();

  return (
    <div 
      className={
        isStudyMode
          ? `fixed inset-0 z-50 flex flex-col w-screen h-screen max-w-none max-h-none overflow-hidden select-text transition-colors duration-200 ${themeClasses.container}`
          : 'fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200'
      }
      role="dialog"
      aria-modal="true"
    >
      <div 
        className={
          isStudyMode
            ? 'w-full h-full flex flex-col overflow-hidden'
            : 'bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-slate-200 flex flex-col my-auto max-h-[94vh] overflow-hidden'
        }
      >
        {/* ======================================================== */}
        {/* TOP BAR / HEADER (ADAPTS BETWEEN NORMAL & STUDY MODE)   */}
        {/* ======================================================== */}
        {isStudyMode ? (
          /* DISTRACTION-FREE STUDY MODE TOP BAR */
          <div className={`px-4 sm:px-6 py-2.5 border-b flex flex-wrap items-center justify-between gap-3 shrink-0 shadow-xs z-20 ${themeClasses.header}`}>
            
            {/* Right: Mode Badge & Lesson Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs border border-emerald-500/30 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>وضع المذاكرة (Study Mode)</span>
              </div>
              <span className="hidden md:inline text-xs opacity-60">|</span>
              <h2 className="text-sm sm:text-base font-extrabold truncate max-w-xs sm:max-w-md">
                {lesson.title}
              </h2>
            </div>

            {/* Center: Pomodoro Focus Timer */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-black/5 dark:bg-white/5 border border-current/10">
              <Timer className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span className="font-mono font-black text-sm sm:text-base tracking-wider">
                {formatTimer(timerSecondsLeft)}
              </span>
              
              <button
                id="study-timer-toggle-btn"
                onClick={() => setIsTimerRunning(prev => !prev)}
                className="p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition"
                title={isTimerRunning ? 'إيقاف مؤقت' : 'تشغيل المؤقت'}
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                id="study-timer-reset-btn"
                onClick={handleResetTimer}
                className="p-1 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition"
                title="إعادة ضبط المؤقت"
              >
                <RotateCcw className="w-3 h-3" />
              </button>

              {/* Timer duration presets */}
              <div className="hidden lg:flex items-center gap-1 mr-1 border-r border-current/10 pr-2">
                {[15, 25, 45].map(mins => (
                  <button
                    key={mins}
                    onClick={() => handleSetTimerDuration(mins)}
                    className={`text-[10px] px-1.5 py-0.5 rounded font-bold transition ${
                      timerDurationMinutes === mins && !timerCompletedNotice
                        ? 'bg-emerald-600 text-white'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    {mins}د
                  </button>
                ))}
              </div>
            </div>

            {/* Left: Study Controls (Theme, Font Size, Exit) */}
            <div className="flex items-center gap-2">
              
              {/* Font Size Adjuster */}
              <div className="flex items-center rounded-lg border border-current/10 p-0.5 text-xs font-bold">
                <button
                  onClick={() => setStudyFontSize('normal')}
                  className={`px-2 py-0.5 rounded transition ${studyFontSize === 'normal' ? 'bg-emerald-600 text-white' : 'opacity-70 hover:opacity-100'}`}
                  title="حجم خط عادي"
                >
                  A
                </button>
                <button
                  onClick={() => setStudyFontSize('large')}
                  className={`px-2 py-0.5 rounded text-sm transition ${studyFontSize === 'large' ? 'bg-emerald-600 text-white' : 'opacity-70 hover:opacity-100'}`}
                  title="حجم خط كبير ومريح"
                >
                  A+
                </button>
                <button
                  onClick={() => setStudyFontSize('xlarge')}
                  className={`px-2 py-0.5 rounded text-base transition ${studyFontSize === 'xlarge' ? 'bg-emerald-600 text-white' : 'opacity-70 hover:opacity-100'}`}
                  title="حجم خط كبير جداً"
                >
                  A++
                </button>
              </div>

              {/* Theme Switcher */}
              <div className="flex items-center rounded-lg border border-current/10 p-0.5 text-xs">
                <button
                  onClick={() => setStudyTheme('sepia')}
                  className={`px-2 py-1 rounded flex items-center gap-1 font-bold transition ${
                    studyTheme === 'sepia' ? 'bg-[#5b4a39] text-[#faf6eb]' : 'opacity-70 hover:opacity-100'
                  }`}
                  title="الوضع الورقي الدافئ (مريح للعينين)"
                >
                  <Coffee className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">ورقي</span>
                </button>
                <button
                  onClick={() => setStudyTheme('dark')}
                  className={`px-2 py-1 rounded flex items-center gap-1 font-bold transition ${
                    studyTheme === 'dark' ? 'bg-slate-700 text-white' : 'opacity-70 hover:opacity-100'
                  }`}
                  title="الوضع الليلي المركز"
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">ليلي</span>
                </button>
                <button
                  onClick={() => setStudyTheme('light')}
                  className={`px-2 py-1 rounded flex items-center gap-1 font-bold transition ${
                    studyTheme === 'light' ? 'bg-slate-200 text-slate-900' : 'opacity-70 hover:opacity-100'
                  }`}
                  title="الوضع النهاري النظيف"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline">نهاري</span>
                </button>
              </div>

              {/* Toggle Completed */}
              <button
                id="study-complete-btn"
                onClick={() => onToggleComplete(lesson.id)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-extrabold flex items-center gap-1 transition ${
                  isCompleted 
                    ? 'bg-emerald-600 text-white' 
                    : 'border border-current/20 opacity-80 hover:opacity-100'
                }`}
                title={isCompleted ? 'إلغاء الإكمال' : 'تحديد كدرس تمت مراجعته'}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isCompleted ? 'مكتمل' : 'إنهاء'}</span>
              </button>

              {/* Exit Study Mode Button */}
              <button
                id="exit-study-mode-btn"
                onClick={() => setIsStudyMode(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 text-xs font-bold transition shadow-xs"
                title="الخروج من وضع المذاكرة (Esc)"
              >
                <Minimize2 className="w-3.5 h-3.5" />
                <span>الخروج من وضع المذاكرة</span>
                <kbd className="hidden sm:inline text-[10px] px-1 py-0.5 bg-black/20 rounded">Esc</kbd>
              </button>

              {/* Close Dialog entirely */}
              <button
                id="study-close-modal-btn"
                onClick={onClose}
                className="p-1.5 rounded-lg opacity-60 hover:opacity-100 transition"
                aria-label="إغلاق النافذة بالكامل"
              >
                <X className="w-5 h-5" />
              </button>

            </div>
          </div>
        ) : (
          /* STANDARD MODAL HEADER */
          <div className="bg-slate-900 text-white px-5 py-4 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {lesson.unitTitle}
              </span>
              <span className="hidden sm:inline text-xs text-slate-400">
                الدرس رقم {lesson.order}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Dedicated Enter Study Mode Button */}
              <button
                id="enter-study-mode-modal-btn"
                onClick={() => setIsStudyMode(true)}
                className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md shadow-emerald-950/20 transition group"
                title="تفعيل وضع المذاكرة (Study Mode) الخالي من المشتتات"
              >
                <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                <span>وضع المذاكرة (Study Mode)</span>
              </button>

              {/* Toggle Bookmark */}
              <button
                id="modal-bookmark-btn"
                onClick={() => onToggleBookmark(lesson.id)}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                  isBookmarked 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title={isBookmarked ? 'إزالة من المحفوظات' : 'حفظ في قائمة المراجعة'}
              >
                <Bookmark className="w-4 h-4 fill-current" />
                <span className="hidden sm:inline">{isBookmarked ? 'محفوظ' : 'حفظ'}</span>
              </button>

              {/* Toggle Completed */}
              <button
                id="modal-complete-btn"
                onClick={() => onToggleComplete(lesson.id)}
                className={`p-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                  isCompleted 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
                title={isCompleted ? 'إلغاء الإكمال' : 'تحديد كدرس تمت مراجعته'}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span className="hidden sm:inline">{isCompleted ? 'مكتمل' : 'تمت دراسته'}</span>
              </button>

              {/* Print / PDF button */}
              <button
                id="modal-print-btn"
                onClick={handlePrint}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition text-xs flex items-center gap-1"
                title="طباعة الدرس أو حفظه كـ PDF"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">طباعة / PDF</span>
              </button>

              {/* Share button */}
              <button
                id="modal-share-btn"
                onClick={handleShare}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition text-xs"
                title="مشاركة رابط الدرس"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {/* Close button */}
              <button
                id="modal-close-btn"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                aria-label="إغلاق النافذة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Copy notification popup */}
        {copyNotification && (
          <div className="bg-emerald-600 text-white text-xs font-bold py-1.5 px-4 text-center">
            {copyNotification}
          </div>
        )}

        {/* Print notification popup */}
        {printNotice && (
          <div className="bg-emerald-700 text-white text-xs sm:text-sm font-bold py-2 px-4 text-center flex items-center justify-center gap-2 shadow-md">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>{printNotice}</span>
          </div>
        )}

        {/* In-App Player Notification popup */}
        {playerNotification && (
          <div className="bg-slate-900 border-b border-emerald-500/60 text-emerald-300 text-xs sm:text-sm font-bold py-2 px-4 text-center flex items-center justify-center gap-2 shadow-md animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{playerNotification}</span>
          </div>
        )}

        {/* Focus Timer Finished Celebration */}
        {timerCompletedNotice && (
          <div className="bg-emerald-600 text-white text-xs sm:text-sm font-bold py-2 px-4 text-center flex items-center justify-center gap-2 animate-bounce">
            <span>🎉 ممتاز! انتهت جلسة المذاكرة المقررة ({timerDurationMinutes} دقيقة). يمكنك أخذ استراحة خفيفة!</span>
            <button 
              onClick={() => setTimerCompletedNotice(false)} 
              className="text-xs underline bg-white/20 px-2 py-0.5 rounded ml-2"
            >
              حسناً
            </button>
          </div>
        )}

        {/* Lesson Title Banner (Only shown in normal mode to keep Study Mode clean) */}
        {!isStudyMode && (
          <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 shrink-0">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              {lesson.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              {lesson.description}
            </p>

            {/* Core Objectives pills */}
            {lesson.objectives && lesson.objectives.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs text-slate-700">
                <span className="font-bold text-slate-900 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  الكفاءات المستهدفة:
                </span>
                {lesson.objectives.map((obj, i) => (
                  <span key={i} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px]">
                    ✓ {obj}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* TABS SELECTOR (VIDEO, WRITTEN, EXERCISES, QUIZ)          */}
        {/* ======================================================== */}
        <div className={`px-4 sm:px-6 pt-2 pb-2 border-b shrink-0 transition-colors ${
          isStudyMode ? themeClasses.header : 'bg-white border-slate-200'
        }`}>
          <div className={`flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none ${
            isStudyMode ? 'justify-center' : ''
          }`}>
            
            {/* 1. Video Tab */}
            <button
              id="tab-video-btn"
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-extrabold text-xs sm:text-sm transition-all relative ${
                activeTab === 'video'
                  ? isStudyMode ? themeClasses.tabActive : 'bg-red-600 text-white shadow-md shadow-red-600/20'
                  : isStudyMode ? themeClasses.tabInactive : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <PlayCircle className="w-4 h-4" />
              <span>فيديو الشرح للأستاذ</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20">
                {lesson.videoResources.length}
              </span>
            </button>

            {/* 2. Written Lesson Tab */}
            <button
              id="tab-written-btn"
              onClick={() => setActiveTab('written')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-extrabold text-xs sm:text-sm transition-all relative ${
                activeTab === 'written'
                  ? isStudyMode ? themeClasses.tabActive : 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : isStudyMode ? themeClasses.tabInactive : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>الدرس المكتوب والملخص</span>
            </button>

            {/* 3. Exercises Tab */}
            <button
              id="tab-exercises-btn"
              onClick={() => setActiveTab('exercises')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-extrabold text-xs sm:text-sm transition-all relative ${
                activeTab === 'exercises'
                  ? isStudyMode ? themeClasses.tabActive : 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                  : isStudyMode ? themeClasses.tabInactive : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>تمارين وتطبيقات مع الحل</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20">
                {lesson.exercises.length}
              </span>
            </button>

            {/* 4. Interactive Evaluation Quiz Tab */}
            <button
              id="tab-quiz-btn"
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-extrabold text-xs sm:text-sm transition-all relative ${
                activeTab === 'quiz'
                  ? isStudyMode ? themeClasses.tabActive : 'bg-purple-600 text-white shadow-md shadow-purple-600/20'
                  : isStudyMode ? themeClasses.tabInactive : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>اختبار تقييمي (Quiz)</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20">
                {quizQuestions.length} أسئلة
              </span>
            </button>

            {/* Split Screen Toggle Button (Continuous Learning) */}
            <button
              id="split-screen-toggle-btn"
              onClick={() => {
                setIsSplitView(prev => !prev);
                if (activeTab === 'video') {
                  setActiveTab('written');
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl font-extrabold text-xs sm:text-sm transition-all mr-auto shrink-0 ${
                isSplitView
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25 ring-2 ring-amber-400'
                  : isStudyMode
                    ? themeClasses.tabInactive
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
              }`}
              title="وضع التعلم المتزامن: تشغيل فيديو الشرح والملخص جنباً إلى جنب دون مغادرة المنصة"
            >
              <Columns className="w-4 h-4" />
              <span className="hidden sm:inline">
                {isSplitView ? 'إنهاء الشاشة المنقسمة' : 'وضع التعلم المتزامن (شاشة منقسمة)'}
              </span>
              <span className="sm:hidden">
                {isSplitView ? 'إنهاء التقسيم' : 'شاشة منقسمة'}
              </span>
            </button>

          </div>
        </div>

        {/* ======================================================== */}
        {/* MODAL SCROLLABLE CONTENT BODY                            */}
        {/* ======================================================== */}
        <div className={`overflow-y-auto grow p-4 sm:p-6 transition-colors ${
          isStudyMode ? `${themeClasses.container} flex flex-col items-center` : 'p-6 space-y-6'
        }`}>
          
          <div className={`w-full ${isStudyMode ? 'max-w-4xl space-y-6' : 'space-y-6'}`}>

            {/* ================================================== */}
            {/* TAB 1: IN-APP EMBEDDED VIDEO PLAYER (NO REDIRECTS) */}
            {/* ================================================== */}
            {activeTab === 'video' && (
              <div className="space-y-6">
                
                {/* Teacher Selector & Custom URL Toggle */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pb-1">
                  <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                    <span className={`text-xs font-bold whitespace-nowrap ${isStudyMode ? themeClasses.subtleText : 'text-slate-500'}`}>
                      اختر الأستاذ:
                    </span>
                    {lesson.videoResources.map((vid, idx) => (
                      <button
                        key={vid.id}
                        onClick={() => {
                          setSelectedVideoIndex(idx);
                          setActiveCustomVideo(null);
                          setPlayerKey(k => k + 1);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition shrink-0 ${
                          selectedVideoIndex === idx && !activeCustomVideo
                            ? 'bg-red-600 border-red-500 text-white shadow-sm shadow-red-600/20'
                            : isStudyMode 
                              ? `${themeClasses.badge} hover:opacity-100` 
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {vid.teacherName} ({vid.duration})
                      </button>
                    ))}
                    
                    {/* Active custom link indicator */}
                    {activeCustomVideo && (
                      <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
                        🔗 رابط تعليمي مخصص قيد التشغيل
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowCustomUrlBox(prev => !prev)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition"
                      title="تشغيل رابط فيديو تعليمي مخصص داخل التطبيق"
                    >
                      <Link2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>تشغيل رابط تعليمي مخصص</span>
                    </button>
                    
                    {activeCustomVideo && (
                      <button
                        onClick={() => {
                          setActiveCustomVideo(null);
                          setPlayerKey(k => k + 1);
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-300 text-xs font-bold border border-red-500/40 transition"
                        title="العودة لفيديو الأستاذ المعتمد"
                      >
                        إلغاء المخصص ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Custom Video URL Input Drawer */}
                {showCustomUrlBox && (
                  <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 text-white shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Tv className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs sm:text-sm font-extrabold text-slate-100">
                          تشغيل رابط تعليمي مخصص داخل المشغل المدمج
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400">
                        يدعم روابط YouTube وروابط الفيديو المباشرة (.mp4)
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          value={customUrlInput}
                          onChange={(e) => setCustomUrlInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handlePlayCustomUrl();
                            }
                          }}
                          placeholder="الصق رابط YouTube (مثال: https://www.youtube.com/watch?v=... أو معرف الفيديو)"
                          className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-hidden focus:border-emerald-500"
                        />
                      </div>
                      <button
                        onClick={() => handlePlayCustomUrl()}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md shadow-emerald-900/30 transition shrink-0"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>تشغيل داخل التطبيق</span>
                      </button>
                    </div>

                    {/* Quick suggestion chips */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[11px] text-slate-400">
                      <span>نماذج شروحات إضافية معتمدة:</span>
                      <button
                        onClick={() => handlePlayCustomUrl('H0Yd-Jrt2UM')}
                        className="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                      >
                        الأستاذ نور الدين (مراجعة شاملة)
                      </button>
                      <button
                        onClick={() => handlePlayCustomUrl('WJ2e5-13kyI')}
                        className="px-2 py-0.5 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition"
                      >
                        الأستاذ طيبي (تمارين نموذجية)
                      </button>
                    </div>
                  </div>
                )}

                {/* In-App Video Player Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 p-3 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-sm">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="font-extrabold text-slate-100">
                      مشغل مدمج داخل المنصة: {currentVideo.teacherName}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Split View Button */}
                    <button
                      onClick={() => {
                        setIsSplitView(true);
                        setActiveTab('written');
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white text-xs font-extrabold shadow-sm transition"
                      title="مشاهدة الفيديو ومطالعة الملخص والتمارين جنباً إلى جنب"
                    >
                      <Columns className="w-3.5 h-3.5" />
                      <span>شاشة منقسمة (فيديو + ملخص)</span>
                    </button>

                    {/* Reload Player Button */}
                    <button
                      onClick={() => setPlayerKey(k => k + 1)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition"
                      title="إعادة تحميل المشغل"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">إعادة تحميل</span>
                    </button>

                    {/* Copy Video Link Button */}
                    <button
                      onClick={() => {
                        const linkToCopy = currentVideo.downloadUrl || (currentVideo.youtubeId ? `https://www.youtube.com/watch?v=${currentVideo.youtubeId}` : window.location.href);
                        navigator.clipboard.writeText(linkToCopy);
                        setPlayerNotification('تم نسخ رابط الفيديو بنجاح إلى الحافظة!');
                        setTimeout(() => setPlayerNotification(null), 3000);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition"
                      title="نسخ رابط الفيديو"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">نسخ الرابط</span>
                    </button>

                    {/* Optional external fallback link */}
                    <a
                      href={currentVideo.downloadUrl || (currentVideo.youtubeId ? `https://www.youtube.com/watch?v=${currentVideo.youtubeId}` : '#')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white text-xs transition"
                      title="فتح على YouTube كخيار بديل عند الحاجة"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Embedded Video Player Frame (100% In-App) */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
                  {renderVideoFrame(false)}
                </div>

                {/* Continuous Learning Guarantee Notice */}
                <div className={`p-3.5 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                  isStudyMode ? 'bg-slate-900/40 border-slate-800 text-slate-300' : 'bg-emerald-50/70 border-emerald-200/80 text-emerald-950'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <strong>تجربة تعلم مستمرة داخل المنصة:</strong> يعمل الفيديو مباشرة داخل التطبيق دون أي تحويل خارجي. 
                      عند الانتقال لتبويب <strong>«الدرس المكتوب»</strong> أو <strong>«التمارين»</strong>، يمكنك متابعة الشرح عبر 
                      <strong> النافذة العائمة المصغرة</strong> أو تفعيل <strong>«وضع التعلم المتزامن»</strong> لمشاهدة الفيديو والملخص في نفس الشاشة.
                    </div>
                  </div>
                </div>

                {/* Teacher Info & In-App Actions */}
                <div className={`rounded-2xl border p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                  isStudyMode ? themeClasses.card : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base sm:text-lg font-black">
                        {currentVideo.teacherName}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                        أستاذ معتمد وموثوق
                      </span>
                    </div>
                    <p className={`text-xs ${isStudyMode ? themeClasses.subtleText : 'text-slate-600'}`}>
                      {currentVideo.teacherTitle}
                    </p>
                    <p className={`text-xs flex items-center gap-3 pt-1 ${isStudyMode ? themeClasses.subtleText : 'text-slate-500'}`}>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        المدة: {currentVideo.duration}
                      </span>
                      <span>•</span>
                      <span>الجودة: {currentVideo.quality}</span>
                      {currentVideo.viewsCount && (
                        <>
                          <span>•</span>
                          <span>{currentVideo.viewsCount}</span>
                        </>
                      )}
                    </p>
                  </div>

                  {/* Actions for in-app learning */}
                  <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                    <button
                      onClick={() => {
                        setIsSplitView(true);
                        setActiveTab('written');
                      }}
                      className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-extrabold shadow-md shadow-amber-600/20 transition"
                      title="مشاهدة الشرح ومطالعة الدرس جنباً إلى جنب"
                    >
                      <Columns className="w-4 h-4" />
                      <span>وضع التعلم المتزامن (شاشة منقسمة)</span>
                    </button>

                    <button
                      onClick={handlePrint}
                      className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 transition"
                      title="طباعة وثيقة الدرس الرسمية أو حفظها كـ PDF"
                    >
                      <Printer className="w-4 h-4" />
                      <span>طباعة الدرس / PDF</span>
                    </button>
                  </div>
                </div>

                {/* Teacher's notes & Methodology Advice */}
                {currentVideo.notes && (
                  <div className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 ${
                    isStudyMode 
                      ? 'bg-amber-950/20 border-amber-900/40 text-amber-200' 
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}>
                    <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold block mb-0.5">توجيهات منهجية من الأستاذ:</span>
                      {currentVideo.notes}
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* ================================================== */}
            {/* CONTINUOUS IN-APP LEARNING: SYNCHRONIZED PLAYER   */}
            {/* ================================================== */}
            {activeTab !== 'video' && isSplitView && (
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-white shadow-xl space-y-3 mb-6 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between text-xs pb-1.5 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="font-extrabold text-slate-100">
                      مشغل الشاشة المتزامنة: {currentVideo.teacherName}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setActiveTab('video')}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs transition"
                      title="الانتقال للمشغل الكامل"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">المشغل الكامل</span>
                    </button>
                    <button
                      onClick={() => setIsSplitView(false)}
                      className="px-2 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-bold transition"
                      title="إغلاق وضع الشاشة المنقسمة"
                    >
                      ✕ إغلاق التقسيم
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-6 lg:col-span-5 relative aspect-video rounded-xl overflow-hidden bg-black border border-slate-800 shadow-inner">
                    {renderVideoFrame(true)}
                  </div>
                  <div className="md:col-span-6 lg:col-span-7 space-y-2">
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 inline-block">
                        {currentVideo.teacherTitle}
                      </span>
                      <h4 className="text-sm font-black text-white line-clamp-1">{currentVideo.videoTitle}</h4>
                      <p className="text-xs text-slate-400 flex items-center gap-2">
                        <span>المدة: {currentVideo.duration}</span>
                        <span>•</span>
                        <span>الجودة: {currentVideo.quality}</span>
                      </p>
                    </div>

                    {lesson.videoResources.length > 1 && (
                      <div className="pt-2 border-t border-slate-800 flex items-center gap-1.5 overflow-x-auto pb-1">
                        <span className="text-[10px] text-slate-400 whitespace-nowrap">تبديل الأستاذ:</span>
                        {lesson.videoResources.map((vid, idx) => (
                          <button
                            key={vid.id}
                            onClick={() => {
                              setSelectedVideoIndex(idx);
                              setActiveCustomVideo(null);
                              setPlayerKey(k => k + 1);
                            }}
                            className={`px-2 py-1 rounded text-[10px] font-bold border transition shrink-0 ${
                              selectedVideoIndex === idx && !activeCustomVideo
                                ? 'bg-red-600 border-red-500 text-white'
                                : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                            }`}
                          >
                            {vid.teacherName}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Quick banner to enable split view when viewing other tabs */}
            {activeTab !== 'video' && !isSplitView && (
              <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-sm text-xs mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0"></span>
                  <span>
                    فيديو الشرح المعتمد متاح للأستاذ <strong>{currentVideo.teacherName}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsSplitView(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-extrabold text-xs shadow-xs transition"
                    title="مشاهدة الفيديو ومطالعة الدرس جنباً إلى جنب"
                  >
                    <Columns className="w-3.5 h-3.5" />
                    <span>تفعيل الشاشة المنقسمة (فيديو + ملخص)</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('video')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>مشغل الفيديو</span>
                  </button>
                </div>
              </div>
            )}

            {/* ================================================== */}
            {/* TAB 2: WRITTEN LESSON (DETAILED AND FORMATTED)     */}
            {/* ================================================== */}
            {activeTab === 'written' && (
              <div className="space-y-6 printable-content">

                {/* Top Action Bar for Written Lesson */}
                <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 dark:text-emerald-200">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>وثيقة الدرس المكتوبة وفق التدرج السنوي لوزارة التربية الوطنية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrint}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold shadow-sm transition"
                      title="طباعة الدرس أو تصديره إلى PDF بضغطة زر واحدة"
                    >
                      <Printer className="w-4 h-4" />
                      <span>طباعة الوثيقة / حفظ PDF</span>
                    </button>
                  </div>
                </div>
                
                {/* Introduction box */}
                <div className={`p-4 sm:p-5 rounded-2xl border ${
                  isStudyMode 
                    ? themeClasses.innerHighlight 
                    : 'bg-blue-50/60 border-blue-200/80'
                }`}>
                  <div className="flex items-center gap-2 font-extrabold text-sm mb-2 text-blue-600 dark:text-blue-400">
                    <BookOpen className="w-4 h-4" />
                    <span>مدخل تمهيدي للدرس:</span>
                  </div>
                  <p className={fontClasses.body}>
                    {lesson.writtenSummary.introduction}
                  </p>
                </div>

                {/* Sections */}
                <div className="space-y-5">
                  {lesson.writtenSummary.sections.map((sec, idx) => (
                    <div key={idx} className={`rounded-2xl border p-5 sm:p-6 shadow-xs space-y-4 ${
                      isStudyMode ? themeClasses.card : 'bg-white border-slate-200'
                    }`}>
                      <h3 className={`${fontClasses.heading} flex items-center gap-2.5`}>
                        <span className="w-2.5 h-6 rounded-full bg-blue-600 inline-block"></span>
                        <span>{sec.title}</span>
                      </h3>

                      {/* Content text */}
                      <div className={`${fontClasses.body} whitespace-pre-line font-medium`}>
                        {sec.content}
                      </div>

                      {/* Formulas if present */}
                      {sec.formulas && sec.formulas.length > 0 && (
                        <div className={`p-4 rounded-xl border space-y-2 ${
                          isStudyMode ? themeClasses.innerHighlight : 'bg-slate-50 border-slate-200'
                        }`}>
                          <span className={`text-xs font-bold block mb-1 ${isStudyMode ? themeClasses.subtleText : 'text-slate-600'}`}>
                            القوانين والعلاقات الرياضية:
                          </span>
                          {sec.formulas.map((form, fIdx) => (
                            <div key={fIdx} className="font-mono text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 bg-black/5 dark:bg-black/40 p-2.5 rounded-lg border border-current/10 dir-ltr text-left">
                              {form}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Key rules list */}
                      {sec.keyRules && sec.keyRules.length > 0 && (
                        <div className={`p-4 rounded-xl border space-y-2 ${
                          isStudyMode 
                            ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' 
                            : 'bg-emerald-50 rounded-xl border-emerald-200 text-emerald-900'
                        }`}>
                          <span className="text-xs font-black block mb-1">القواعد والملاحظات الجوهرية:</span>
                          {sec.keyRules.map((rule, rIdx) => (
                            <div key={rIdx} className={`${fontClasses.subheading} font-medium flex items-start gap-2`}>
                              <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{rule}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Examples */}
                      {sec.examples && sec.examples.length > 0 && (
                        <div className={`p-4 rounded-xl border space-y-2 ${
                          isStudyMode 
                            ? 'bg-amber-950/20 border-amber-900/40 text-amber-200' 
                            : 'bg-amber-50/70 border-amber-200 text-amber-900'
                        }`}>
                          <span className="text-xs font-black block mb-1">مثال تطبيقي مباشر:</span>
                          {sec.examples.map((ex, eIdx) => (
                            <p key={eIdx} className={`${fontClasses.subheading} leading-relaxed font-medium`}>
                              {ex}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mind map / Key Takeaways summary */}
                {lesson.writtenSummary.mindMapPoints && lesson.writtenSummary.mindMapPoints.length > 0 && (
                  <div className="bg-slate-900 text-white rounded-2xl p-5 sm:p-6 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>خريطة المفاهيم وخلاصة المراجعة السريعة:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {lesson.writtenSummary.mindMapPoints.map((point, pIdx) => (
                        <div key={pIdx} className="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 mt-2"></span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Conclusion & Baccalaureate tip */}
                {lesson.writtenSummary.conclusionOrAdvice && (
                  <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 ${
                    isStudyMode 
                      ? 'bg-emerald-950/30 border-emerald-800 text-emerald-200' 
                      : 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  }`}>
                    <Info className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold block mb-0.5">نصيحة ذهبية لشهادة البكالوريا / الامتحانات:</span>
                      {lesson.writtenSummary.conclusionOrAdvice}
                    </div>
                  </div>
                )}

                {/* Action bar for printing */}
                <div className={`flex items-center justify-between pt-4 border-t ${
                  isStudyMode ? themeClasses.border : 'border-slate-200'
                }`}>
                  <span className={`text-xs ${isStudyMode ? themeClasses.subtleText : 'text-slate-500'}`}>
                    يمكنك طباعة هذا الملخص الورقي أو حفظه بصيغة PDF للمراجعة دون إنترنت
                  </span>
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition"
                  >
                    <Printer className="w-4 h-4" />
                    <span>تحميل كملف PDF / طباعة</span>
                  </button>
                </div>

              </div>
            )}

            {/* ================================================== */}
            {/* TAB 3: EXERCISES WITH STEP-BY-STEP DETAILED SOLUTION */}
            {/* ================================================== */}
            {activeTab === 'exercises' && (
              <div className="space-y-6">
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={fontClasses.heading}>
                      تمارين وتطبيقات نموذجية للمراجعة
                    </h3>
                    <p className={`text-xs ${isStudyMode ? themeClasses.subtleText : 'text-slate-500'}`}>
                      تمارين محاكية لأسئلة البكالوريا والاختبارات الرسمية مع الحل النموذجي المفصل
                    </p>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                    {lesson.exercises.length} {lesson.exercises.length === 1 ? 'تمرين' : 'تمارين'}
                  </span>
                </div>

                {/* Exercises List */}
                <div className="space-y-6">
                  {lesson.exercises.map((ex, idx) => {
                    const isSolutionShown = revealedSolutions[ex.id];
                    const isHintShown = revealedHints[ex.id];

                    return (
                      <div key={ex.id} className={`rounded-2xl border overflow-hidden shadow-xs ${
                        isStudyMode ? themeClasses.card : 'bg-white border-slate-200'
                      }`}>
                        
                        {/* Exercise Header */}
                        <div className={`px-5 py-3.5 border-b flex flex-wrap items-center justify-between gap-2 ${
                          isStudyMode ? themeClasses.innerHighlight : 'bg-slate-50 border-slate-200'
                        }`}>
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-extrabold flex items-center justify-center">
                              {idx + 1}
                            </span>
                            <span className="font-extrabold text-sm sm:text-base">
                              {ex.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
                              {ex.difficulty}
                            </span>
                            {ex.points && (
                              <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                                {ex.points} نقاط
                              </span>
                            )}
                            {ex.bacYear && (
                              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">
                                {ex.bacYear}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Question Statement */}
                        <div className="p-5 space-y-4">
                          <div className={`${fontClasses.body} whitespace-pre-line font-medium`}>
                            {ex.question}
                          </div>

                          {/* Hint Accordion */}
                          {ex.hint && (
                            <div>
                              <button
                                onClick={() => toggleHint(ex.id)}
                                className="text-xs font-bold text-amber-600 hover:text-amber-500 flex items-center gap-1.5 transition"
                              >
                                <HelpCircle className="w-3.5 h-3.5" />
                                <span>{isHintShown ? 'إخفاء التلميح المنهجي' : '💡 هل تحتاج إلى تلميح لحل التمرين؟'}</span>
                              </button>
                              {isHintShown && (
                                <div className={`mt-2 p-3 rounded-xl border text-xs leading-relaxed animate-in fade-in ${
                                  isStudyMode 
                                    ? 'bg-amber-950/30 border-amber-900/50 text-amber-200' 
                                    : 'bg-amber-50 border-amber-200 text-amber-900'
                                }`}>
                                  {ex.hint}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Tips */}
                          {ex.tips && ex.tips.length > 0 && (
                            <div className="space-y-1">
                              {ex.tips.map((tip, tIdx) => (
                                <p key={tIdx} className={`text-xs flex items-center gap-1.5 ${
                                  isStudyMode ? themeClasses.subtleText : 'text-slate-500'
                                }`}>
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                  <span>{tip}</span>
                                </p>
                              ))}
                            </div>
                          )}

                          {/* Action: Reveal / Hide Solution */}
                          <div className="pt-2">
                            <button
                              id={`toggle-solution-${ex.id}`}
                              onClick={() => toggleSolution(ex.id)}
                              className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition ${
                                isSolutionShown
                                  ? isStudyMode 
                                    ? 'bg-slate-800 text-slate-200' 
                                    : 'bg-slate-200 text-slate-800'
                                  : 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs'
                              }`}
                            >
                              <Award className="w-4 h-4" />
                              <span>{isSolutionShown ? 'إخفاء الحل النموذجي' : '✓ كشف الحل النموذجي المفصل والتنقيط'}</span>
                            </button>

                            {/* Detailed Solution Box */}
                            {isSolutionShown && (
                              <div className={`mt-4 p-5 rounded-2xl border space-y-3 animate-in fade-in duration-200 ${
                                isStudyMode 
                                  ? 'bg-emerald-950/20 border-emerald-900/50' 
                                  : 'bg-emerald-50/50 border-emerald-200'
                              }`}>
                                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-extrabold text-sm border-b pb-2 border-emerald-500/20">
                                  <CheckCircle2 className="w-4 h-4" />
                                  <span>عناصر الإجابة النموذجية المعتمدة رسمياً:</span>
                                </div>
                                {Array.isArray(ex.detailedSolution) ? (
                                  <div className="space-y-3 pt-1">
                                    {ex.detailedSolution.map((step, sIdx) => (
                                      <div key={sIdx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/40 space-y-1.5 shadow-2xs">
                                        <div className="flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
                                          <div className="flex items-center gap-1.5">
                                            <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-extrabold flex items-center justify-center">
                                              {step.stepNumber}
                                            </span>
                                            <span>{step.stepTitle}</span>
                                          </div>
                                          {step.score && (
                                            <span className="bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded text-[11px] font-bold">
                                              العلامة: {step.score}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed text-slate-800 dark:text-slate-200">
                                          {step.explanation}
                                        </p>
                                        {step.formulaUsed && (
                                          <div className="text-xs font-mono bg-slate-50 dark:bg-slate-800/80 p-1.5 rounded text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-slate-700">
                                            القانون المعتمد: {step.formulaUsed}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className={`${fontClasses.body} whitespace-pre-line font-medium leading-loose`}>
                                    {ex.detailedSolution}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            )}

            {/* ================================================== */}
            {/* TAB 4: INTERACTIVE EVALUATION QUIZ (اختبار تقييمي) */}
            {/* ================================================== */}
            {activeTab === 'quiz' && (
              <InteractiveQuiz
                lesson={lesson}
                isStudyMode={isStudyMode}
                onCompleteQuiz={(score, total, pct) => {
                  if (onSaveQuizScore) {
                    onSaveQuizScore(lesson.id, score, total, pct);
                  }
                }}
                onGoToTab={(tab) => setActiveTab(tab)}
                onToggleComplete={onToggleComplete}
                isLessonCompleted={isCompleted}
              />
            )}

          </div>

        </div>

        {/* ======================================================== */}
        {/* MODAL FOOTER: NAVIGATION BETWEEN LESSONS                 */}
        {/* ======================================================== */}
        <div className={`px-4 sm:px-6 py-3 border-t flex items-center justify-between shrink-0 transition-colors ${
          isStudyMode ? themeClasses.header : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            {hasPrevLesson && (
              <button
                onClick={() => onNavigateLesson && onNavigateLesson('prev')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition ${
                  isStudyMode ? themeClasses.badge : 'border-slate-300 text-slate-700 hover:bg-white'
                }`}
                title="الانتقال إلى الدرس السابق في المادة"
              >
                <ChevronRight className="w-4 h-4" />
                <span>الدرس السابق</span>
              </button>
            )}
            {hasNextLesson && (
              <button
                onClick={() => onNavigateLesson && onNavigateLesson('next')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition ${
                  isStudyMode ? themeClasses.badge : 'border-slate-300 text-slate-700 hover:bg-white'
                }`}
                title="الانتقال إلى الدرس الموالي في المادة"
              >
                <span>الدرس الموالي</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isStudyMode ? (
              <button
                onClick={() => setIsStudyMode(false)}
                className="px-4 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
              >
                العودة للواجهة العادية
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition"
              >
                إغلاق
              </button>
            )}
          </div>
        </div>

        {/* ======================================================== */}
        {/* FLOATING IN-APP MINI-PLAYER FOR CONTINUOUS LEARNING     */}
        {/* ======================================================== */}
        {activeTab !== 'video' && !isSplitView && isMiniPlayerActive && !isFloatingDismissed && (
          <div className="fixed bottom-5 left-5 z-50 w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-700 text-white animate-in fade-in slide-in-from-bottom-4 duration-300">
            {/* Mini Player Top Bar */}
            <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border-b border-slate-800 text-xs">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
                <span className="font-bold truncate text-slate-200" title={`${currentVideo.teacherName}: ${currentVideo.videoTitle}`}>
                  {currentVideo.teacherName}
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0 mr-1">
                <button
                  onClick={() => setIsSplitView(true)}
                  className="p-1 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition"
                  title="عرض الشاشة المنقسمة جنباً إلى جنب"
                >
                  <Columns className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setActiveTab('video')}
                  className="p-1 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition"
                  title="الرجوع إلى المشغل الكامل"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsFloatingDismissed(true)}
                  className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition"
                  title="إخفاء الشاشة المصغرة"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Video container */}
            <div className="relative aspect-video bg-black">
              {renderVideoFrame(true)}
            </div>

            {/* Mini Player Bottom Bar */}
            <div className="px-3 py-1.5 bg-slate-900 flex items-center justify-between text-[11px] text-slate-300">
              <span className="truncate">{currentVideo.duration} • {currentVideo.quality}</span>
              <button
                onClick={() => setIsSplitView(true)}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 text-[10px]"
              >
                <Columns className="w-3 h-3" />
                <span>عرض بجانب الدرس</span>
              </button>
            </div>
          </div>
        )}

        {/* Minimized Floating Player restore button */}
        {activeTab !== 'video' && !isSplitView && isFloatingDismissed && (
          <button
            onClick={() => setIsFloatingDismissed(false)}
            className="fixed bottom-5 left-5 z-40 flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/95 hover:bg-slate-900 text-white text-xs font-bold border border-slate-700 shadow-xl backdrop-blur-xs transition animate-in fade-in"
            title="إظهار مشغل الفيديو العائم"
          >
            <Tv className="w-4 h-4 text-emerald-400" />
            <span>إظهار الفيديو العائم</span>
          </button>
        )}

      </div>
    </div>
  );
};
