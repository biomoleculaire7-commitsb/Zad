import React from 'react';
import { Grade, Stream, GradeId, StreamId } from '../types';
import { GRADES, STREAMS } from '../data/gradesAndStreams';
import { Check, X, GraduationCap, Sparkles, BookOpen } from 'lucide-react';

interface GradeStreamSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedGradeId: GradeId;
  selectedStreamId: StreamId;
  onSelect: (gradeId: GradeId, streamId: StreamId) => void;
}

export const GradeStreamSelectorModal: React.FC<GradeStreamSelectorModalProps> = ({
  isOpen,
  onClose,
  selectedGradeId,
  selectedStreamId,
  onSelect,
}) => {
  const [tempGradeId, setTempGradeId] = React.useState<GradeId>(selectedGradeId);
  const [tempStreamId, setTempStreamId] = React.useState<StreamId>(selectedStreamId);

  React.useEffect(() => {
    setTempGradeId(selectedGradeId);
    setTempStreamId(selectedStreamId);
  }, [selectedGradeId, selectedStreamId, isOpen]);

  if (!isOpen) return null;

  // Filter available streams for the chosen grade
  const availableStreams = STREAMS.filter(s => s.gradeIds.includes(tempGradeId));

  // If currently selected stream is not available in the chosen grade, pick first available
  const handleGradeChange = (gradeId: GradeId) => {
    setTempGradeId(gradeId);
    const validStreams = STREAMS.filter(s => s.gradeIds.includes(gradeId));
    if (!validStreams.some(s => s.id === tempStreamId)) {
      setTempStreamId(validStreams[0].id);
    }
  };

  const handleConfirm = () => {
    onSelect(tempGradeId, tempStreamId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-emerald-800 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-700/80">
              <GraduationCap className="w-5 h-5 text-emerald-100" />
            </div>
            <div>
              <h2 className="text-lg font-bold">اختيار المستوى الدراسي والشعبة</h2>
              <p className="text-xs text-emerald-200">خصص البرنامج الدراسي بما يوافق دراستك في الثانوية الجزائرية</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-700 transition"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Step 1: Grade Selection */}
          <div>
            <label className="block text-sm font-extrabold text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-black">1</span>
              <span>اختر السنة الدراسية:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {GRADES.map(grade => {
                const isSelected = grade.id === tempGradeId;
                return (
                  <button
                    key={grade.id}
                    type="button"
                    onClick={() => handleGradeChange(grade.id)}
                    className={`text-right p-3.5 rounded-xl border-2 transition-all relative ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-extrabold text-slate-900 text-sm">{grade.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">{grade.subtitle}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                      {grade.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Stream Selection */}
          <div>
            <label className="block text-sm font-extrabold text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center font-black">2</span>
              <span>اختر الشعبة أو الجذع المشترك:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {availableStreams.map(stream => {
                const isSelected = stream.id === tempStreamId;
                return (
                  <button
                    key={stream.id}
                    type="button"
                    onClick={() => setTempStreamId(stream.id)}
                    className={`text-right p-3.5 rounded-xl border-2 transition-all relative ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/70 shadow-xs'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-extrabold text-slate-900 text-sm">{stream.name}</span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                    </div>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {stream.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-medium">
            سيتم تحديث قائمة المواد والمحاور فوراً
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-sm font-bold transition"
            >
              إلغاء
            </button>
            <button
              id="confirm-selection-btn"
              onClick={handleConfirm}
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-extrabold shadow-md shadow-emerald-600/20 transition flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>تأكيد الاختيار وتحديث الدروس</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
