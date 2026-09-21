import React, { useState, useEffect, useMemo } from 'react';
import { Grade, Stream, GradeId, StreamId, Subject, Lesson, UserProgress } from './types';
import { 
  GRADES, 
  STREAMS, 
  getSubjectsForGradeAndStream, 
  getLessonsForSubject, 
  getGroupedUnits, 
  searchLessons,
  ALL_LESSONS
} from './data/curriculumData';
import { Header } from './components/Header';
import { GradeStreamSelectorModal } from './components/GradeStreamSelectorModal';
import { SubjectBar } from './components/SubjectBar';
import { UnitSection } from './components/UnitSection';
import { LessonModal } from './components/LessonModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { 
  GraduationCap, 
  BookOpen, 
  Layers, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Filter, 
  Bookmark,
  Calendar,
  AlertCircle
} from 'lucide-react';

const STORAGE_KEY_PROGRESS = 'dz_curriculum_progress_v1';
const STORAGE_KEY_GRADE = 'dz_curriculum_grade_v1';
const STORAGE_KEY_STREAM = 'dz_curriculum_stream_v1';

export default function App() {
  // State for selected Grade and Stream
  const [selectedGradeId, setSelectedGradeId] = useState<GradeId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_GRADE);
    return (saved as GradeId) || '3as';
  });

  const [selectedStreamId, setSelectedStreamId] = useState<StreamId>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_STREAM);
    return (saved as StreamId) || 'scientific';
  });

  // Selector modal
  const [isSelectorOpen, setIsSelectorOpen] = useState<boolean>(false);

  // Search query
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected subject inside current stream
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');

  // Filter by trimester: all | 1 | 2 | 3
  const [selectedTrimester, setSelectedTrimester] = useState<0 | 1 | 2 | 3>(0);

  // Active Lesson modal
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [isLessonModalOpen, setIsLessonModalOpen] = useState<boolean>(false);
  const [lessonModalTab, setLessonModalTab] = useState<'video' | 'written' | 'exercises' | 'quiz'>('video');
  const [isInitialStudyMode, setIsInitialStudyMode] = useState<boolean>(false);

  // Favorites Drawer
  const [isFavoritesOpen, setIsFavoritesOpen] = useState<boolean>(false);

  // User Progress (completed & bookmarked)
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PROGRESS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      completedLessonIds: [],
      bookmarkedLessonIds: [],
      quizScores: {},
    };
  });

  // Persist progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(progress));
  }, [progress]);

  // Persist Grade & Stream
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_GRADE, selectedGradeId);
    localStorage.setItem(STORAGE_KEY_STREAM, selectedStreamId);
  }, [selectedGradeId, selectedStreamId]);

  // Current Grade and Stream objects
  const currentGrade = useMemo(
    () => GRADES.find(g => g.id === selectedGradeId) || GRADES[0],
    [selectedGradeId]
  );

  const currentStream = useMemo(
    () => STREAMS.find(s => s.id === selectedStreamId) || STREAMS[0],
    [selectedStreamId]
  );

  // Subjects for the chosen grade and stream
  const currentSubjects = useMemo(
    () => getSubjectsForGradeAndStream(selectedGradeId, selectedStreamId),
    [selectedGradeId, selectedStreamId]
  );

  // Ensure valid selected subject when subjects list changes
  useEffect(() => {
    if (currentSubjects.length > 0) {
      if (!currentSubjects.some(s => s.id === selectedSubjectId)) {
        setSelectedSubjectId(currentSubjects[0].id);
      }
    }
  }, [currentSubjects, selectedSubjectId]);

  // Active Subject
  const activeSubject = useMemo(
    () => currentSubjects.find(s => s.id === selectedSubjectId) || currentSubjects[0],
    [currentSubjects, selectedSubjectId]
  );

  // Lessons for the active subject
  const currentLessons = useMemo(() => {
    if (!activeSubject) return [];
    return getLessonsForSubject(activeSubject.id);
  }, [activeSubject]);

  // Search Results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchLessons(searchQuery, selectedGradeId);
  }, [searchQuery, selectedGradeId]);

  // Grouped units for display (filtered by trimester if selected)
  const groupedUnits = useMemo(() => {
    let list = currentLessons;
    if (selectedTrimester !== 0) {
      list = list.filter(l => l.trimester === selectedTrimester);
    }
    return getGroupedUnits(list);
  }, [currentLessons, selectedTrimester]);

  // Bookmarked lessons
  const bookmarkedLessons = useMemo(() => {
    return ALL_LESSONS.filter(l => progress.bookmarkedLessonIds.includes(l.id));
  }, [progress.bookmarkedLessonIds]);

  // Progress calculations
  const totalLessonsInStream = useMemo(() => {
    let count = 0;
    currentSubjects.forEach(s => {
      count += getLessonsForSubject(s.id).length;
    });
    return count;
  }, [currentSubjects]);

  // Handlers
  const handleSelectGradeAndStream = (gId: GradeId, sId: StreamId) => {
    setSelectedGradeId(gId);
    setSelectedStreamId(sId);
  };

  const handleOpenLesson = (
    lesson: Lesson, 
    defaultTab: 'video' | 'written' | 'exercises' | 'quiz' = 'video',
    startInStudyMode: boolean = false
  ) => {
    setActiveLesson(lesson);
    setLessonModalTab(defaultTab);
    setIsInitialStudyMode(startInStudyMode);
    setIsLessonModalOpen(true);
  };

  const handleCloseLesson = () => {
    setIsLessonModalOpen(false);
  };

  const handleToggleComplete = (lessonId: string) => {
    setProgress(prev => {
      const exists = prev.completedLessonIds.includes(lessonId);
      return {
        ...prev,
        completedLessonIds: exists
          ? prev.completedLessonIds.filter(id => id !== lessonId)
          : [...prev.completedLessonIds, lessonId],
      };
    });
  };

  const handleToggleBookmark = (lessonId: string) => {
    setProgress(prev => {
      const exists = prev.bookmarkedLessonIds.includes(lessonId);
      return {
        ...prev,
        bookmarkedLessonIds: exists
          ? prev.bookmarkedLessonIds.filter(id => id !== lessonId)
          : [...prev.bookmarkedLessonIds, lessonId],
      };
    });
  };

  const handleSaveQuizScore = (lessonId: string, score: number, total: number, percentage: number) => {
    setProgress(prev => ({
      ...prev,
      quizScores: {
        ...(prev.quizScores || {}),
        [lessonId]: {
          score,
          total,
          percentage,
          completedAt: new Date().toISOString(),
        }
      }
    }));
  };

  // Navigate between lessons in the current subject
  const currentLessonIndex = currentLessons.findIndex(l => l.id === activeLesson?.id);
  const hasPrevLesson = currentLessonIndex > 0;
  const hasNextLesson = currentLessonIndex >= 0 && currentLessonIndex < currentLessons.length - 1;

  const handleNavigateLesson = (direction: 'next' | 'prev') => {
    if (currentLessonIndex === -1) return;
    const nextIdx = direction === 'next' ? currentLessonIndex + 1 : currentLessonIndex - 1;
    if (nextIdx >= 0 && nextIdx < currentLessons.length) {
      setActiveLesson(currentLessons[nextIdx]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-emerald-200">
      
      {/* Header */}
      <Header
        currentGrade={currentGrade}
        currentStream={currentStream}
        onOpenSelector={() => setIsSelectorOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        progress={progress}
        totalLessonsCount={totalLessonsInStream}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
      />

      {/* Main Container */}
      <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        
        {/* Stream & Grade Banner Overview */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-emerald-950/10 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-emerald-200 text-xs font-bold backdrop-blur-xs">
                <GraduationCap className="w-4 h-4" />
                <span>{currentGrade.name} • {currentGrade.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                {currentStream.name}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
                {currentStream.description}
              </p>
            </div>

            {/* Quick Stream switcher pill */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <button
                id="hero-change-stream-btn"
                onClick={() => setIsSelectorOpen(true)}
                className="px-5 py-2.5 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 text-xs sm:text-sm font-extrabold shadow-md transition flex items-center gap-2"
              >
                <span>تغيير الشعبة أو المستوى</span>
                <span className="text-emerald-700">✎</span>
              </button>

              <button
                onClick={() => setIsFavoritesOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold border border-white/20 transition flex items-center gap-1.5"
              >
                <Bookmark className="w-4 h-4 text-amber-300 fill-current" />
                <span>المحفوظات ({progress.bookmarkedLessonIds.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================================================== */}
        {/* IF SEARCHING: DISPLAY LIVE SEARCH RESULTS          */}
        {/* ================================================== */}
        {searchQuery.trim() ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Search className="w-5 h-5 text-emerald-600" />
                <span>نتائج البحث عن: "{searchQuery}"</span>
              </h3>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-200 text-slate-700">
                {searchResults.length} نتيجة
              </span>
            </div>

            {searchResults.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
                <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
                <p className="text-sm font-bold text-slate-700">لم يتم العثور على دروس مطابقة لبحثك</p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  تأكد من كتابة الكلمات المفتاحية بشكل صحيح أو تصفح المواد مباشرة من الشريط أدناه.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition"
                >
                  مسح البحث
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.map(lesson => (
                  <div 
                    key={lesson.id}
                    onClick={() => handleOpenLesson(lesson)}
                    className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition cursor-pointer space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                        {lesson.unitTitle}
                      </span>
                      <span className="text-xs text-slate-400">الدرس {lesson.order}</span>
                    </div>
                    <h4 className="text-base font-extrabold text-slate-900 hover:text-emerald-700">
                      {lesson.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {lesson.description}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
                      <span className="font-bold text-red-600">
                        🎬 فيديو: {lesson.videoResources[0]?.teacherName}
                      </span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenLesson(lesson, 'written', true);
                          }}
                          className="px-2 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-extrabold border border-emerald-200 transition"
                          title="فتح فوري بوضع المذاكرة"
                        >
                          وضع المذاكرة 🎯
                        </button>
                        <span className="text-emerald-700 font-extrabold hover:underline">
                          عرض الدرس ←
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* ================================================== */
          /* STANDARD CURRICULUM VIEW BY SUBJECT & UNITS       */
          /* ================================================== */
          <div className="space-y-6">
            
            {/* Subject Selector Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                  <span>مواد البرنامج الرسمي للشعبة:</span>
                </span>
                <span className="text-[11px] text-slate-500">
                  {currentSubjects.length} مواد رسمية
                </span>
              </div>

              <SubjectBar
                subjects={currentSubjects}
                selectedSubjectId={selectedSubjectId}
                onSelectSubject={setSelectedSubjectId}
                getSubjectLessonsCount={(sId) => getLessonsForSubject(sId).length}
              />
            </div>

            {/* Trimester Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-extrabold text-slate-700">تصفية حسب الفصل الدراسي:</span>
              </div>

              <div className="flex items-center gap-1.5">
                {[
                  { id: 0, label: 'جميع الفصول' },
                  { id: 1, label: 'الفصل الأول' },
                  { id: 2, label: 'الفصل الثاني' },
                  { id: 3, label: 'الفصل الثالث' },
                ].map(trim => (
                  <button
                    key={trim.id}
                    onClick={() => setSelectedTrimester(trim.id as any)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                      selectedTrimester === trim.id
                        ? 'bg-emerald-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {trim.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Subject Units and Lessons */}
            {groupedUnits.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
                <Layers className="w-10 h-10 text-slate-300 mx-auto" />
                <p className="text-sm font-bold text-slate-700">
                  لا توجد دروس مسجلة في هذا الفصل للمادة المختارة
                </p>
                <button
                  onClick={() => setSelectedTrimester(0)}
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition"
                >
                  عرض جميع فصول المادة
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {groupedUnits.map((unitGroup, idx) => (
                  <UnitSection
                    key={`${unitGroup.unitTitle}-${idx}`}
                    unitGroup={unitGroup}
                    progress={progress}
                    onOpenLesson={handleOpenLesson}
                    onToggleComplete={handleToggleComplete}
                    onToggleBookmark={handleToggleBookmark}
                  />
                ))}
              </div>
            )}

          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="mt-12 bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500 space-y-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-semibold text-slate-700">
            منصة زاد التعليمية (ZAD) — مرجعك الشامل للتعليم الثانوي والتحضير للبكالوريا
          </p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>فيديوهات كبار الأساتذة</span>
            <span>•</span>
            <span>ملخصات واختبارات</span>
            <span>•</span>
            <span>تمارين وحلول نموذجية</span>
          </div>
        </div>
      </footer>

      {/* Grade & Stream Selection Modal */}
      <GradeStreamSelectorModal
        isOpen={isSelectorOpen}
        onClose={() => setIsSelectorOpen(false)}
        selectedGradeId={selectedGradeId}
        selectedStreamId={selectedStreamId}
        onSelect={handleSelectGradeAndStream}
      />

      {/* Lesson Details Modal (Video, Written, Exercises, Quiz) */}
      <LessonModal
        lesson={activeLesson}
        isOpen={isLessonModalOpen}
        onClose={handleCloseLesson}
        progress={progress}
        onToggleComplete={handleToggleComplete}
        onToggleBookmark={handleToggleBookmark}
        onSaveQuizScore={handleSaveQuizScore}
        initialTab={lessonModalTab}
        initialStudyMode={isInitialStudyMode}
        onNavigateLesson={handleNavigateLesson}
        hasPrevLesson={hasPrevLesson}
        hasNextLesson={hasNextLesson}
      />

      {/* Favorites / Bookmarked Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        bookmarkedLessons={bookmarkedLessons}
        progress={progress}
        onOpenLesson={(lesson) => handleOpenLesson(lesson, 'video')}
        onRemoveBookmark={handleToggleBookmark}
      />

    </div>
  );
}
