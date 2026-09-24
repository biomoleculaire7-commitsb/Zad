export type GradeId = '3as' | '2as' | '1as';

export type StreamId = 
  | 'scientific'       // شعبة علوم تجريبية
  | 'math'             // شعبة رياضيات
  | 'tech_math'        // شعبة تقني رياضي
  | 'management_eco'   // شعبة تسيير واقتصاد
  | 'literature_philo' // شعبة آداب وفلسفة
  | 'foreign_lang'     // شعبة لغات أجنبية
  | 'tc_science'       // جذع مشترك علوم وتكنولوجيا (1as)
  | 'tc_literature';   // جذع مشترك آداب (1as)

export interface Grade {
  id: GradeId;
  name: string;
  subtitle: string;
  badge: string;
}

export interface Stream {
  id: StreamId;
  name: string;
  shortName: string;
  gradeIds: GradeId[];
  icon: string;
  description: string;
  color: string;
}

export interface Subject {
  id: string;
  name: string;
  iconName: string;
  color: string;
  gradeId: GradeId;
  streamId: StreamId;
  coefficient: number;
  weeklyHours: number;
}

export interface VideoResource {
  id: string;
  teacherName: string;
  teacherTitle: string;
  videoTitle: string;
  duration: string;
  youtubeId: string;
  downloadUrl?: string;
  quality: string;
  channelName: string;
  viewsCount?: string;
  notes?: string;
}

export interface SolutionStep {
  stepNumber: number;
  stepTitle: string;
  explanation: string;
  formulaUsed?: string;
  score?: string;
}

export interface Exercise {
  id: string;
  title: string;
  difficulty: 'سهل' | 'متوسط' | 'صعب' | 'مستوى بكالوريا / اختبار' | 'سهل إلى متوسط';
  bacYear?: string; // e.g. "بكالوريا 2023 الدورة العادية"
  question: string;
  hint?: string;
  detailedSolution: string | SolutionStep[];
  tips?: string[];
  points?: number;
}

export interface WrittenSection {
  title: string;
  content: string;
  keyRules?: string[];
  examples?: string[];
  formulas?: string[];
  importantNotes?: string[];
}

export interface WrittenSummary {
  introduction: string;
  sections: WrittenSection[];
  conclusionOrAdvice: string;
  mindMapPoints?: string[];
  keyTerms?: { term: string; definition: string }[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ExamExercisePart {
  number: number;
  title: string;
  points: number;
  statement: string;
  solution: string | SolutionStep[];
  tips?: string[];
}

export interface OfficialExam {
  id: string;
  title: string;
  type: 'فرض محروس' | 'اختبار فصلي' | 'بكالوريا تجريبية';
  duration: string;
  totalPoints: number;
  trimester?: 1 | 2 | 3;
  instructions?: string[];
  exercises: ExamExercisePart[];
  officialNotes?: string;
}

export interface Lesson {
  id: string;
  title: string;
  unitTitle: string;
  trimester: 1 | 2 | 3;
  subjectId: string;
  gradeId: GradeId;
  streamId: StreamId;
  order: number;
  durationEstimate: string;
  description: string;
  objectives: string[];
  videoResources: VideoResource[];
  writtenSummary: WrittenSummary;
  exercises: Exercise[];
  quiz?: QuizQuestion[];
  exams?: OfficialExam[];
}

export interface UserProgress {
  completedLessonIds: string[];
  bookmarkedLessonIds: string[];
  lastVisitedLessonId?: string;
  quizScores?: Record<string, { score: number; total: number; percentage: number; timestamp: number }>;
}
