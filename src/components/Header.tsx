import React from 'react';
import { Grade, Stream, UserProgress } from '../types';
import { BookOpen, Bookmark, CheckCircle2, Search, GraduationCap } from 'lucide-react';

interface HeaderProps {
  currentGrade: Grade;
  currentStream: Stream;
  onOpenSelector: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  progress: UserProgress;
  totalLessonsCount: number;
  onOpenFavorites: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentGrade,
  currentStream,
  onOpenSelector,
  searchQuery,
  onSearchChange,
  progress,
  totalLessonsCount,
  onOpenFavorites,
}) => {
  const completedCount = progress.completedLessonIds.length;
  const progressPercent = totalLessonsCount > 0 ? Math.round((completedCount / totalLessonsCount) * 100) : 0;

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      {/* Top Banner: Algerian Identity */}
      <div className="bg-emerald-800 text-emerald-50 px-4 py-1.5 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <span className="font-semibold flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 border border-white"></span>
            الجمهورية الجزائرية الديمقراطية الشعبية — منصة زاد للتعليم الثانوي
          </span>
          <span className="hidden sm:inline-block text-emerald-200">
            وفق التدرجات البيداغوجية الرسمية لوزارة التربية الوطنية
          </span>
        </div>
      </div>

      {/* Main Header bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Logo & Current selection */}
          <div className="flex items-center justify-between w-full md:w-auto gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-linear-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-md shadow-emerald-600/25">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <span className="text-emerald-700 font-black text-2xl sm:text-3xl tracking-wide">زاد</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    ZAD • منصة الثانوي
                  </span>
                </h1>
                <p className="text-xs text-slate-500 hidden sm:block">
                  زاد التلميذ للثانوي الجزائري • دروس، فيديوهات، ملخصات واختبارات
                </p>
              </div>
            </div>

            {/* Change Grade & Stream Button */}
            <button
              id="change-grade-stream-btn"
              onClick={onOpenSelector}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 transition"
              title="تغيير السنة الدراسية والشعبة"
            >
              <div className="text-right">
                <div className="text-emerald-700 font-extrabold">{currentGrade.name}</div>
                <div className="text-[11px] text-slate-500 font-medium">{currentStream.shortName}</div>
              </div>
              <span className="text-slate-400 text-xs">▼</span>
            </button>
          </div>

          {/* Search bar & Stats */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            {/* Search Input */}
            <div className="relative flex-1 md:w-72">
              <Search className="absolute right-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                id="search-lessons-input"
                type="text"
                placeholder="ابحث عن درس، محور، أو أستاذ..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-3 pr-9 py-2 bg-slate-100 hover:bg-slate-100/80 focus:bg-white text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-hidden transition text-slate-800 placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute left-2.5 top-2.5 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Bookmarks Button */}
            <button
              id="open-favorites-btn"
              onClick={onOpenFavorites}
              className="relative p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 transition flex items-center gap-1.5 text-xs font-semibold"
              title="الدروس المحفوظة للمراجعة"
            >
              <Bookmark className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">المفضلة</span>
              {progress.bookmarkedLessonIds.length > 0 && (
                <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {progress.bookmarkedLessonIds.length}
                </span>
              )}
            </button>

            {/* Revision Progress pill */}
            <div 
              className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900"
              title={`تم إكمال ${completedCount} من أصل ${totalLessonsCount} درس`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <div className="text-right">
                <div className="text-[11px] font-bold flex items-center gap-1">
                  <span>المراجعة:</span>
                  <span className="text-emerald-700">{progressPercent}%</span>
                </div>
                <div className="w-20 bg-emerald-200 rounded-full h-1.5 mt-0.5 overflow-hidden">
                  <div 
                    className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
