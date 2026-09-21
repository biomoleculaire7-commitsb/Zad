import React from 'react';
import { Lesson, UserProgress } from '../types';
import { X, Bookmark, PlayCircle, FileText, Award, ArrowLeft, Trash2, Maximize2 } from 'lucide-react';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedLessons: Lesson[];
  progress: UserProgress;
  onOpenLesson: (lesson: Lesson, defaultTab?: 'video' | 'written' | 'exercises' | 'quiz', startInStudyMode?: boolean) => void;
  onRemoveBookmark: (lessonId: string) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedLessons,
  progress,
  onOpenLesson,
  onRemoveBookmark,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col border-l border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-amber-500/20 text-amber-400">
              <Bookmark className="w-5 h-5 fill-current" />
            </span>
            <div>
              <h2 className="text-base font-extrabold">الدروس المحفوظة للمراجعة</h2>
              <p className="text-xs text-slate-400">
                {bookmarkedLessons.length} {bookmarkedLessons.length === 1 ? 'درس محفوظ' : 'دروس محفوظة'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lessons List */}
        <div className="p-4 overflow-y-auto grow space-y-3">
          {bookmarkedLessons.length === 0 ? (
            <div className="text-center py-16 space-y-3 text-slate-400">
              <Bookmark className="w-12 h-12 mx-auto text-slate-300" />
              <p className="text-sm font-bold text-slate-600">لا توجد دروس في المفضلة حالياً</p>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                اضغط على أيقونة الإشارة المرجعية (المفضلة) على أي درس لحفظه والرجوع إليه سريعاً قبل الامتحانات.
              </p>
            </div>
          ) : (
            bookmarkedLessons.map(lesson => (
              <div 
                key={lesson.id}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-emerald-300 hover:shadow-xs transition space-y-2 relative group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                    {lesson.unitTitle}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveBookmark(lesson.id);
                    }}
                    className="text-slate-400 hover:text-red-500 transition p-1"
                    title="إزالة من المحفوظات"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <h4 
                  onClick={() => {
                    onOpenLesson(lesson);
                    onClose();
                  }}
                  className="text-sm font-extrabold text-slate-900 hover:text-emerald-700 cursor-pointer transition leading-snug"
                >
                  {lesson.title}
                </h4>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <span className="flex items-center gap-1">
                      <PlayCircle className="w-3 h-3 text-red-500" />
                      فيديو
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3 text-blue-500" />
                      ملخص
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-500" />
                      تمارين
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        onOpenLesson(lesson, 'written', true);
                        onClose();
                      }}
                      className="text-emerald-700 hover:bg-emerald-50 px-2 py-1 rounded-lg text-xs font-extrabold border border-emerald-200 flex items-center gap-1 transition"
                      title="مذاكرة مركزة فورية بدون تشتت"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>مذاكرة</span>
                    </button>

                    <button
                      onClick={() => {
                        onOpenLesson(lesson, 'video', false);
                        onClose();
                      }}
                      className="text-slate-700 hover:text-emerald-700 font-bold hover:underline flex items-center gap-1 text-xs"
                    >
                      <span>فتح</span>
                      <ArrowLeft className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
