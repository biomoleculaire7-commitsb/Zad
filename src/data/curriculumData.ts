import { GradeId, StreamId, Subject, Lesson } from '../types';
import { sanitizeVideoResource } from '../utils/videoResolver';
import { getExtraExercisesForLesson } from './exercises';
import { getOfficialExamsForLesson } from './examsData';
import { GRADES, STREAMS, SUBJECTS_MAP } from './gradesAndStreams';
import { LESSONS_DATABASE } from './lessonsData';
import { EXTRA_LESSONS } from './extraLessonsData';
import { MATH_LESSONS } from './lessons/mathLessons';
import { PHYSICS_LESSONS } from './lessons/physicsLessons';
import { SCIENCE_LESSONS } from './lessons/scienceLessons';
import { HUMANITIES_LESSONS } from './lessons/humanitiesLessons';
import { ECO_TECH_LANGUAGES_LESSONS } from './lessons/ecoTechAndLanguagesLessons';
import { FIRST_YEAR_LESSONS } from './lessons/firstYearLessons';
import { OFFICIAL_PROGRESSIONS_1AS_LESSONS } from './lessons/officialProgressions1AS';
import { OFFICIAL_PROGRESSIONS_SCIENCES_LESSONS } from './lessons/officialProgressionsSciences';
import { SECOND_YEAR_LESSONS } from './lessons/secondYearLessons';
import { SCIENTIFIC_STREAM_1AS_LESSONS } from './lessons/scientificStream1AS';
import { SCIENTIFIC_STREAM_2AS_LESSONS } from './lessons/scientificStream2AS';
import { SCIENTIFIC_STREAM_3AS_LESSONS } from './lessons/scientificStream3AS';

export { GRADES, STREAMS, SUBJECTS_MAP };

// Combine all lesson sources with deduplication by lesson ID
const RAW_ALL_LESSONS: Lesson[] = [
  ...SCIENTIFIC_STREAM_1AS_LESSONS,
  ...SCIENTIFIC_STREAM_2AS_LESSONS,
  ...SCIENTIFIC_STREAM_3AS_LESSONS,
  ...OFFICIAL_PROGRESSIONS_SCIENCES_LESSONS,
  ...OFFICIAL_PROGRESSIONS_1AS_LESSONS,
  ...FIRST_YEAR_LESSONS,
  ...SECOND_YEAR_LESSONS,
  ...MATH_LESSONS,
  ...PHYSICS_LESSONS,
  ...SCIENCE_LESSONS,
  ...HUMANITIES_LESSONS,
  ...ECO_TECH_LANGUAGES_LESSONS,
  ...EXTRA_LESSONS,
  ...LESSONS_DATABASE,
];

// Deduplicate by ID prioritizing the most detailed/first defined version
const lessonMap = new Map<string, Lesson>();
RAW_ALL_LESSONS.forEach(lesson => {
  if (!lessonMap.has(lesson.id)) {
    // Sanitize video resources to ensure all lessons have verified, playable YouTube streams
    const sanitizedVideos = (lesson.videoResources || []).map(vid => 
      sanitizeVideoResource(vid, lesson.title, lesson.subjectId)
    );

    // Merge base exercises with tailored comprehensive exercises bank
    const baseExercises = lesson.exercises || [];
    const extraExercises = getExtraExercisesForLesson(lesson);
    const existingExIds = new Set(baseExercises.map(e => e.id));
    const combinedExercises = [
      ...baseExercises,
      ...extraExercises.filter(e => !existingExIds.has(e.id))
    ];

    lessonMap.set(lesson.id, {
      ...lesson,
      videoResources: sanitizedVideos,
      exercises: combinedExercises,
      exams: getOfficialExamsForLesson(lesson),
    });
  }
});

export const ALL_LESSONS: Lesson[] = Array.from(lessonMap.values());

export function getSubjectsForGradeAndStream(gradeId: GradeId, streamId: StreamId): Subject[] {
  const key = `${gradeId}_${streamId}`;
  if (SUBJECTS_MAP[key]) {
    return SUBJECTS_MAP[key];
  }
  // Fallback to any matching
  const matching = Object.values(SUBJECTS_MAP).flat().filter(
    s => s.gradeId === gradeId && s.streamId === streamId
  );
  if (matching.length > 0) return matching;

  if (gradeId === '3as' && streamId === 'math') {
    return SUBJECTS_MAP['3as_math'] || [];
  }
  return SUBJECTS_MAP['3as_scientific'] || [];
}

export function getLessonsForSubject(subjectId: string): Lesson[] {
  // Direct exact match
  const direct = ALL_LESSONS.filter(l => l.subjectId === subjectId);
  if (direct.length > 0) return direct;

  // Intelligent fallback by subject type and grade
  const parts = subjectId.split('_');
  const baseType = parts[0]; // 'math', 'physics', 'science', 'philo', etc.
  const gradeType = parts[1]; // '3as', '2as', '1as'

  // Match lessons with same subject family and grade
  const byGradeAndType = ALL_LESSONS.filter(l => l.subjectId.startsWith(baseType) && l.gradeId === gradeType);
  if (byGradeAndType.length > 0) return byGradeAndType;

  // Fallback to same subject family
  const byFamily = ALL_LESSONS.filter(l => l.subjectId.startsWith(baseType));
  if (byFamily.length > 0) return byFamily;

  return [];
}

export function getLessonById(id: string): Lesson | undefined {
  return ALL_LESSONS.find(l => l.id === id);
}

export interface UnitGroup {
  unitTitle: string;
  trimester: 1 | 2 | 3;
  lessons: Lesson[];
}

export function getGroupedUnits(lessons: Lesson[]): UnitGroup[] {
  const groupsMap = new Map<string, { trimester: 1 | 2 | 3; lessons: Lesson[] }>();

  lessons.forEach(lesson => {
    const key = lesson.unitTitle;
    if (!groupsMap.has(key)) {
      groupsMap.set(key, { trimester: lesson.trimester, lessons: [] });
    }
    groupsMap.get(key)!.lessons.push(lesson);
  });

  const result: UnitGroup[] = [];
  groupsMap.forEach((val, title) => {
    result.push({
      unitTitle: title,
      trimester: val.trimester,
      lessons: val.lessons.sort((a, b) => a.order - b.order),
    });
  });

  return result.sort((a, b) => a.trimester - b.trimester);
}

export function searchLessons(query: string, gradeId?: GradeId, streamId?: StreamId): Lesson[] {
  const cleanQ = query.trim().toLowerCase();
  if (!cleanQ) return [];

  return ALL_LESSONS.filter(lesson => {
    if (gradeId && lesson.gradeId !== gradeId) return false;
    // stream check
    const matchTitle = lesson.title.toLowerCase().includes(cleanQ);
    const matchUnit = lesson.unitTitle.toLowerCase().includes(cleanQ);
    const matchDesc = lesson.description.toLowerCase().includes(cleanQ);
    const matchTeacher = lesson.videoResources.some(v => v.teacherName.toLowerCase().includes(cleanQ));
    return matchTitle || matchUnit || matchDesc || matchTeacher;
  });
}
