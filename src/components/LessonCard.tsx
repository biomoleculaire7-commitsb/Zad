import React from 'react';
import { Lesson, UserProgress } from '../types';
import { 
  PlayCircle, 
  FileText, 
  CheckCircle2, 
  Bookmark, 
  Clock, 
  ExternalLink, 
  HelpCircle, 
  Award,
  Maximize2
} from 'lucide-react';

interface LessonCardProps {
  lesson: Lesson;
  progress: UserProgress;
  onOpenLesson: (lesson: Lesson, defaultTab?: 'video' | 'written' | 'exercises' | 'quiz', startInStudyMode?: boolean) => void;
  onToggleComplete: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string) => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  progress,
  onOpenLesson,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const isCompleted = progress.completedLessonIds.includes(lesson.id);
  const isBookmarked = progress.bookmarkedLessonIds.includes(lesson.id);

  const mainTeacher = lesson.videoResources[0]?.teacherName;

  return (
    <div 
      className={`group bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
        isCompleted 
          ? 'border-emerald-200 bg-emerald-50/20' 
          : 'border-slate-200 hover:border-emerald-300 hover:shadow-md'
      }`}
    >
      <div className="p-4 sm:p-5">
        {/* Top bar: Order, duration, and action buttons */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">
              الدرس {lesson.order}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {lesson.durationEstimate}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {/* Bookmark button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(lesson.id);
              }}
              className={`p-1.5 rounded-lg transition ${
                isBookmarked 
                  ? 'bg-amber-100 text-amber-600' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
              title={isBookmarked ? 'إزالة من المحفوظات' : 'حفظ في قائمة المراجعة'}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>

            {/* Complete status button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleComplete(lesson.id);
              }}
              className={`p-1.5 rounded-lg transition ${
                isCompleted 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'text-slate-400 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
              title={isCompleted ? 'تمت دراسته' : 'تحديد كمنجز'}
            >
              <CheckCircle2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Lesson Title */}
        <h3 
          onClick={() => onOpenLesson(lesson)}
          className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-emerald-700 cursor-pointer transition leading-snug line-clamp-2"
        >
          {lesson.title}
        </h3>

        {/* Description snippet */}
        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
          {lesson.description}
        </p>

        {/* Feature badges (Teacher, Written, Exercises, Quiz) */}
        <div className="flex flex-wrap items-center gap-2 mt-3.5 pt-3 border-t border-slate-100">
          {mainTeacher && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-red-50 text-red-700 border border-red-100">
              <PlayCircle className="w-3.5 h-3.5 text-red-600" />
              <span>فيديو: {mainTeacher}</span>
            </span>
          )}

          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>ملخص مكتوب</span>
          </span>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-100">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>{lesson.exercises.length} تمارين نموذجية</span>
          </span>

          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 border border-purple-100">
            <HelpCircle className="w-3.5 h-3.5 text-purple-600" />
            <span>
              {progress.quizScores && progress.quizScores[lesson.id]
                ? `اختبار تقييمي (${progress.quizScores[lesson.id].percentage}%)`
                : 'اختبار تقييمي'}
            </span>
          </span>
        </div>

        {/* Direct Action Choices: video, written lesson, exercises, quiz */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-100">
          <button
            onClick={() => onOpenLesson(lesson, 'video')}
            className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold transition border border-red-200/60"
            title="مشاهدة أو تحميل شرح الأستاذ بالفيديو"
          >
            <PlayCircle className="w-3.5 h-3.5 shrink-0" />
            <span>فيديو الدرس</span>
          </button>

          <button
            onClick={() => onOpenLesson(lesson, 'written')}
            className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition border border-blue-200/60"
            title="قراءة ملخص الدرس المكتوب"
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span>درس مكتوب</span>
          </button>

          <button
            onClick={() => onOpenLesson(lesson, 'exercises')}
            className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition border border-emerald-200/60"
            title="تمارين تطبيقية مع الحل النموذجي"
          >
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>تمارين وحلول</span>
          </button>

          <button
            onClick={() => onOpenLesson(lesson, 'quiz')}
            className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 text-xs font-bold transition border border-purple-200/60 shadow-2xs"
            title="إجراء الاختبار التقييمي التفاعلي مع تصحيح فوري ونتائج"
          >
            <HelpCircle className="w-3.5 h-3.5 shrink-0 text-purple-600" />
            <span>اختبار تقييمي</span>
          </button>
        </div>

        {/* Dedicated Study Mode direct action */}
        <button
          onClick={() => onOpenLesson(lesson, 'written', true)}
          className="w-full mt-2.5 py-2 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white text-xs font-extrabold transition shadow-xs flex items-center justify-center gap-2 group/btn"
          title="بدء المراجعة الفورية بوضع المذاكرة المركز الخالي من المشتتات"
        >
          <Maximize2 className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
          <span>وضع المذاكرة (Study Mode)</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20 font-normal">
            تركيز كامل
          </span>
        </button>

      </div>
    </div>
  );
};
