import React from 'react';
import { UnitGroup } from '../data/curriculumData';
import { Lesson, UserProgress } from '../types';
import { LessonCard } from './LessonCard';
import { Layers, Calendar } from 'lucide-react';

interface UnitSectionProps {
  unitGroup: UnitGroup;
  progress: UserProgress;
  onOpenLesson: (lesson: Lesson, defaultTab?: 'video' | 'written' | 'exercises' | 'quiz', startInStudyMode?: boolean) => void;
  onToggleComplete: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string) => void;
}

export const UnitSection: React.FC<UnitSectionProps> = ({
  unitGroup,
  progress,
  onOpenLesson,
  onToggleComplete,
  onToggleBookmark,
}) => {
  const trimesterName = 
    unitGroup.trimester === 1 
      ? 'الفصل الدراسي الأول' 
      : unitGroup.trimester === 2 
        ? 'الفصل الدراسي الثاني' 
        : 'الفصل الدراسي الثالث';

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      {/* Unit Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800">
            <Layers className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-base sm:text-lg font-black text-slate-900">
              {unitGroup.unitTitle}
            </h3>
            <span className="text-xs text-slate-500">
              يتضمن {unitGroup.lessons.length} {unitGroup.lessons.length === 1 ? 'درس رئيسي' : 'دروس رئيسية'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            {trimesterName}
          </span>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {unitGroup.lessons.map(lesson => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            progress={progress}
            onOpenLesson={onOpenLesson}
            onToggleComplete={onToggleComplete}
            onToggleBookmark={onToggleBookmark}
          />
        ))}
      </div>
    </div>
  );
};
