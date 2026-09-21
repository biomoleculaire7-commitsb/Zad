import React from 'react';
import { Subject } from '../types';
import { 
  Calculator, 
  Atom, 
  Dna, 
  Brain, 
  BookMarked, 
  Globe2, 
  Compass, 
  Languages, 
  MessageSquare,
  FileSpreadsheet,
  TrendingUp,
  Scale,
  Wrench,
  Microscope,
  HelpCircle,
  LucideIcon
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Calculator,
  Atom,
  Dna,
  Brain,
  BookMarked,
  Globe2,
  Compass,
  Languages,
  MessageSquare,
  FileSpreadsheet,
  TrendingUp,
  Scale,
  Wrench,
  Microscope,
};

interface SubjectBarProps {
  subjects: Subject[];
  selectedSubjectId: string;
  onSelectSubject: (subjectId: string) => void;
  getSubjectLessonsCount: (subjectId: string) => number;
}

export const SubjectBar: React.FC<SubjectBarProps> = ({
  subjects,
  selectedSubjectId,
  onSelectSubject,
  getSubjectLessonsCount,
}) => {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-thin">
      <div className="flex items-center gap-2 min-w-max">
        {subjects.map((subject) => {
          const isSelected = subject.id === selectedSubjectId;
          const IconComponent = ICON_MAP[subject.iconName] || HelpCircle;
          const lessonsCount = getSubjectLessonsCount(subject.id);

          return (
            <button
              key={subject.id}
              onClick={() => onSelectSubject(subject.id)}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-sm font-bold transition-all ${
                isSelected
                  ? 'bg-emerald-700 text-white border-emerald-700 shadow-md shadow-emerald-700/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                <IconComponent className="w-4 h-4" />
              </span>
              <div className="text-right">
                <div className="leading-tight">{subject.name}</div>
                <div className="flex items-center gap-2 text-[10px] mt-0.5 opacity-80">
                  <span>المعامل: {subject.coefficient}</span>
                  <span>•</span>
                  <span>{lessonsCount} {lessonsCount === 1 ? 'درس' : 'دروس'}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
