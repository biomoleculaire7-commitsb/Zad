import { Grade, Stream, Subject } from '../types';

export const GRADES: Grade[] = [
  {
    id: '3as',
    name: 'السنة الثالثة ثانوي',
    subtitle: 'مقبلون على شهادة البكالوريا (BAC)',
    badge: 'بكالوريا 2025/2026',
  },
  {
    id: '2as',
    name: 'السنة الثانية ثانوي',
    subtitle: 'سنة التخصص والتحضير للبكالوريا',
    badge: 'المرحلة الانتقالية',
  },
  {
    id: '1as',
    name: 'السنة الأولى ثانوي',
    subtitle: 'الجذع المشترك الأساسي',
    badge: 'بداية المرحلة الثانوية',
  },
];

export const STREAMS: Stream[] = [
  {
    id: 'scientific',
    name: 'شعبة علوم تجريبية',
    shortName: 'علوم تجريبية',
    gradeIds: ['3as', '2as'],
    icon: 'FlaskConical',
    description: 'ترتكز على مواد العلوم الطبيعية والفيزياء والرياضيات بصورة متوازنة وتفتح تخصصات الطب والهندسة والبيولوجيا.',
    color: 'emerald',
  },
  {
    id: 'math',
    name: 'شعبة رياضيات',
    shortName: 'رياضيات',
    gradeIds: ['3as', '2as'],
    icon: 'Calculator',
    description: 'عمادها الرياضيات والفيزياء وتعد من النخب للشعب الهندسية والمدارس العليا والذكاء الاصطناعي.',
    color: 'blue',
  },
  {
    id: 'tech_math',
    name: 'شعبة تقني رياضي',
    shortName: 'تقني رياضي',
    gradeIds: ['3as', '2as'],
    icon: 'Wrench',
    description: 'تشمل الفروع التكنولوجية: هندسة ميكانيكية، هندسة مدنية، هندسة كهربائية، وهندسة الطرائق.',
    color: 'amber',
  },
  {
    id: 'management_eco',
    name: 'شعبة تسيير واقتصاد',
    shortName: 'تسيير واقتصاد',
    gradeIds: ['3as', '2as'],
    icon: 'TrendingUp',
    description: 'تركز على المحاسبة والمالية، الاقتصاد والمناجمنت، القانون، والرياضيات المطبقة للتجارة وإدارة الأعمال.',
    color: 'cyan',
  },
  {
    id: 'literature_philo',
    name: 'شعبة آداب وفلسفة',
    shortName: 'آداب وفلسفة',
    gradeIds: ['3as', '2as'],
    icon: 'BookOpen',
    description: 'التركيز العالي على مادة الفلسفة واللغة العربية وتفتح تخصصات الحقوق والعلوم السياسية والإعلام والترجمة.',
    color: 'rose',
  },
  {
    id: 'foreign_lang',
    name: 'شعبة لغات أجنبية',
    shortName: 'لغات أجنبية',
    gradeIds: ['3as', '2as'],
    icon: 'Languages',
    description: 'تتضمن دراسة معمقة للغات الحية: الإنجليزية، الفرنسية، ولغة ثالثة (إسبانية، ألمانية، أو إيطالية).',
    color: 'indigo',
  },
  {
    id: 'tc_science',
    name: 'جذع مشترك علوم وتكنولوجيا',
    shortName: 'جذع علوم',
    gradeIds: ['1as'],
    icon: 'Microscope',
    description: 'السنة التحضيرية للتوجه نحو شعب العلوم التجريبية، الرياضيات، والتقني رياضي، والتسيير.',
    color: 'teal',
  },
  {
    id: 'tc_literature',
    name: 'جذع مشترك آداب',
    shortName: 'جذع آداب',
    gradeIds: ['1as'],
    icon: 'PenTool',
    description: 'السنة التحضيرية للتوجه نحو شعبتي الآداب والفلسفة واللغات الأجنبية والتسيير.',
    color: 'purple',
  },
];

export const SUBJECTS_MAP: Record<string, Subject[]> = {
  // 3AS Scientific
  '3as_scientific': [
    { id: 'math_3as_sci', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '3as', streamId: 'scientific', coefficient: 5, weeklyHours: 5 },
    { id: 'physics_3as_sci', name: 'العلوم الفيزيائية', iconName: 'Atom', color: 'indigo', gradeId: '3as', streamId: 'scientific', coefficient: 5, weeklyHours: 5 },
    { id: 'science_3as_sci', name: 'علوم الطبيعة والحياة', iconName: 'Dna', color: 'emerald', gradeId: '3as', streamId: 'scientific', coefficient: 6, weeklyHours: 6 },
    { id: 'philo_3as_sci', name: 'الفلسفة', iconName: 'Brain', color: 'purple', gradeId: '3as', streamId: 'scientific', coefficient: 2, weeklyHours: 2 },
    { id: 'arabic_3as_sci', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '3as', streamId: 'scientific', coefficient: 3, weeklyHours: 3 },
    { id: 'history_3as_sci', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '3as', streamId: 'scientific', coefficient: 2, weeklyHours: 2 },
    { id: 'islamic_3as_sci', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '3as', streamId: 'scientific', coefficient: 2, weeklyHours: 2 },
    { id: 'french_3as_sci', name: 'اللغة الفرنسية', iconName: 'Languages', color: 'sky', gradeId: '3as', streamId: 'scientific', coefficient: 2, weeklyHours: 2 },
    { id: 'english_3as_sci', name: 'اللغة الإنجليزية', iconName: 'MessageSquare', color: 'violet', gradeId: '3as', streamId: 'scientific', coefficient: 2, weeklyHours: 2 },
  ],
  // 3AS Math
  '3as_math': [
    { id: 'math_3as_math', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '3as', streamId: 'math', coefficient: 7, weeklyHours: 7 },
    { id: 'physics_3as_math', name: 'العلوم الفيزيائية', iconName: 'Atom', color: 'indigo', gradeId: '3as', streamId: 'math', coefficient: 6, weeklyHours: 6 },
    { id: 'science_3as_math', name: 'علوم الطبيعة والحياة', iconName: 'Dna', color: 'emerald', gradeId: '3as', streamId: 'math', coefficient: 2, weeklyHours: 2 },
    { id: 'philo_3as_math', name: 'الفلسفة', iconName: 'Brain', color: 'purple', gradeId: '3as', streamId: 'math', coefficient: 2, weeklyHours: 2 },
    { id: 'arabic_3as_math', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '3as', streamId: 'math', coefficient: 3, weeklyHours: 3 },
    { id: 'history_3as_math', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '3as', streamId: 'math', coefficient: 2, weeklyHours: 2 },
    { id: 'islamic_3as_math', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '3as', streamId: 'math', coefficient: 2, weeklyHours: 2 },
  ],
  // 3AS Literature & Philosophy
  '3as_literature_philo': [
    { id: 'philo_3as_lit', name: 'الفلسفة', iconName: 'Brain', color: 'purple', gradeId: '3as', streamId: 'literature_philo', coefficient: 6, weeklyHours: 6 },
    { id: 'arabic_3as_lit', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '3as', streamId: 'literature_philo', coefficient: 6, weeklyHours: 6 },
    { id: 'history_3as_lit', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '3as', streamId: 'literature_philo', coefficient: 4, weeklyHours: 4 },
    { id: 'islamic_3as_lit', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '3as', streamId: 'literature_philo', coefficient: 2, weeklyHours: 2 },
    { id: 'math_3as_lit', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '3as', streamId: 'literature_philo', coefficient: 2, weeklyHours: 2 },
    { id: 'french_3as_lit', name: 'اللغة الفرنسية', iconName: 'Languages', color: 'sky', gradeId: '3as', streamId: 'literature_philo', coefficient: 3, weeklyHours: 3 },
    { id: 'english_3as_lit', name: 'اللغة الإنجليزية', iconName: 'MessageSquare', color: 'violet', gradeId: '3as', streamId: 'literature_philo', coefficient: 3, weeklyHours: 3 },
  ],
  // 3AS Management & Economics
  '3as_management_eco': [
    { id: 'gestion_3as_eco', name: 'التسيير المحاسبي والمالي', iconName: 'FileSpreadsheet', color: 'emerald', gradeId: '3as', streamId: 'management_eco', coefficient: 6, weeklyHours: 6 },
    { id: 'eco_3as_eco', name: 'الاقتصاد والمناجمنت', iconName: 'TrendingUp', color: 'cyan', gradeId: '3as', streamId: 'management_eco', coefficient: 5, weeklyHours: 5 },
    { id: 'law_3as_eco', name: 'القانون', iconName: 'Scale', color: 'slate', gradeId: '3as', streamId: 'management_eco', coefficient: 2, weeklyHours: 2 },
    { id: 'math_3as_eco', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '3as', streamId: 'management_eco', coefficient: 5, weeklyHours: 5 },
    { id: 'history_3as_eco', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '3as', streamId: 'management_eco', coefficient: 4, weeklyHours: 4 },
    { id: 'philo_3as_eco', name: 'الفلسفة', iconName: 'Brain', color: 'purple', gradeId: '3as', streamId: 'management_eco', coefficient: 2, weeklyHours: 2 },
    { id: 'arabic_3as_eco', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '3as', streamId: 'management_eco', coefficient: 3, weeklyHours: 3 },
    { id: 'islamic_3as_eco', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '3as', streamId: 'management_eco', coefficient: 2, weeklyHours: 2 },
  ],
  // 3AS Technical Math
  '3as_tech_math': [
    { id: 'tech_3as_tm', name: 'التكنولوجيا (الهندسة)', iconName: 'Wrench', color: 'amber', gradeId: '3as', streamId: 'tech_math', coefficient: 7, weeklyHours: 7 },
    { id: 'math_3as_tm', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '3as', streamId: 'tech_math', coefficient: 6, weeklyHours: 6 },
    { id: 'physics_3as_tm', name: 'العلوم الفيزيائية', iconName: 'Atom', color: 'indigo', gradeId: '3as', streamId: 'tech_math', coefficient: 6, weeklyHours: 6 },
    { id: 'arabic_3as_tm', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '3as', streamId: 'tech_math', coefficient: 3, weeklyHours: 3 },
    { id: 'philo_3as_tm', name: 'الفلسفة', iconName: 'Brain', color: 'purple', gradeId: '3as', streamId: 'tech_math', coefficient: 2, weeklyHours: 2 },
    { id: 'history_3as_tm', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '3as', streamId: 'tech_math', coefficient: 2, weeklyHours: 2 },
    { id: 'islamic_3as_tm', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '3as', streamId: 'tech_math', coefficient: 2, weeklyHours: 2 },
  ],
  // 3AS Foreign Languages
  '3as_foreign_lang': [
    { id: 'lang3_3as_fl', name: 'اللغة الأجنبية الثالثة', iconName: 'Languages', color: 'indigo', gradeId: '3as', streamId: 'foreign_lang', coefficient: 5, weeklyHours: 5 },
    { id: 'french_3as_fl', name: 'اللغة الفرنسية', iconName: 'Languages', color: 'sky', gradeId: '3as', streamId: 'foreign_lang', coefficient: 5, weeklyHours: 5 },
    { id: 'english_3as_fl', name: 'اللغة الإنجليزية', iconName: 'MessageSquare', color: 'violet', gradeId: '3as', streamId: 'foreign_lang', coefficient: 5, weeklyHours: 5 },
    { id: 'arabic_3as_fl', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '3as', streamId: 'foreign_lang', coefficient: 5, weeklyHours: 5 },
    { id: 'philo_3as_fl', name: 'الفلسفة', iconName: 'Brain', color: 'purple', gradeId: '3as', streamId: 'foreign_lang', coefficient: 3, weeklyHours: 3 },
    { id: 'history_3as_fl', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '3as', streamId: 'foreign_lang', coefficient: 2, weeklyHours: 2 },
    { id: 'islamic_3as_fl', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '3as', streamId: 'foreign_lang', coefficient: 2, weeklyHours: 2 },
    { id: 'math_3as_fl', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '3as', streamId: 'foreign_lang', coefficient: 2, weeklyHours: 2 },
  ],
  // 2AS Scientific
  '2as_scientific': [
    { id: 'math_2as_sci', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '2as', streamId: 'scientific', coefficient: 5, weeklyHours: 5 },
    { id: 'physics_2as_sci', name: 'العلوم الفيزيائية', iconName: 'Atom', color: 'indigo', gradeId: '2as', streamId: 'scientific', coefficient: 5, weeklyHours: 5 },
    { id: 'science_2as_sci', name: 'علوم الطبيعة والحياة', iconName: 'Dna', color: 'emerald', gradeId: '2as', streamId: 'scientific', coefficient: 6, weeklyHours: 6 },
    { id: 'arabic_2as_sci', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '2as', streamId: 'scientific', coefficient: 3, weeklyHours: 3 },
    { id: 'history_2as_sci', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '2as', streamId: 'scientific', coefficient: 2, weeklyHours: 2 },
    { id: 'islamic_2as_sci', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '2as', streamId: 'scientific', coefficient: 2, weeklyHours: 2 },
    { id: 'french_2as_sci', name: 'اللغة الفرنسية', iconName: 'Languages', color: 'sky', gradeId: '2as', streamId: 'scientific', coefficient: 2, weeklyHours: 2 },
    { id: 'english_2as_sci', name: 'اللغة الإنجليزية', iconName: 'MessageSquare', color: 'violet', gradeId: '2as', streamId: 'scientific', coefficient: 2, weeklyHours: 2 },
  ],
  // 2AS Math
  '2as_math': [
    { id: 'math_2as_math', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '2as', streamId: 'math', coefficient: 7, weeklyHours: 7 },
    { id: 'physics_2as_math', name: 'العلوم الفيزيائية', iconName: 'Atom', color: 'indigo', gradeId: '2as', streamId: 'math', coefficient: 6, weeklyHours: 6 },
    { id: 'science_2as_math', name: 'علوم الطبيعة والحياة', iconName: 'Dna', color: 'emerald', gradeId: '2as', streamId: 'math', coefficient: 2, weeklyHours: 2 },
    { id: 'arabic_2as_math', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '2as', streamId: 'math', coefficient: 3, weeklyHours: 3 },
    { id: 'history_2as_math', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '2as', streamId: 'math', coefficient: 2, weeklyHours: 2 },
    { id: 'islamic_2as_math', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '2as', streamId: 'math', coefficient: 2, weeklyHours: 2 },
  ],
  // 2AS Literature & Philosophy
  '2as_literature_philo': [
    { id: 'arabic_2as_lit', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '2as', streamId: 'literature_philo', coefficient: 5, weeklyHours: 5 },
    { id: 'philo_2as_lit', name: 'الفلسفة', iconName: 'Brain', color: 'purple', gradeId: '2as', streamId: 'literature_philo', coefficient: 4, weeklyHours: 4 },
    { id: 'history_2as_lit', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '2as', streamId: 'literature_philo', coefficient: 4, weeklyHours: 4 },
    { id: 'french_2as_lit', name: 'اللغة الفرنسية', iconName: 'Languages', color: 'sky', gradeId: '2as', streamId: 'literature_philo', coefficient: 3, weeklyHours: 3 },
    { id: 'english_2as_lit', name: 'اللغة الإنجليزية', iconName: 'MessageSquare', color: 'violet', gradeId: '2as', streamId: 'literature_philo', coefficient: 3, weeklyHours: 3 },
    { id: 'islamic_2as_lit', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '2as', streamId: 'literature_philo', coefficient: 2, weeklyHours: 2 },
    { id: 'math_2as_lit', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '2as', streamId: 'literature_philo', coefficient: 2, weeklyHours: 2 },
  ],
  // 2AS Management & Economics
  '2as_management_eco': [
    { id: 'gestion_2as_eco', name: 'التسيير المحاسبي والمالي', iconName: 'FileSpreadsheet', color: 'emerald', gradeId: '2as', streamId: 'management_eco', coefficient: 5, weeklyHours: 5 },
    { id: 'eco_2as_eco', name: 'الاقتصاد والمناجمنت', iconName: 'TrendingUp', color: 'cyan', gradeId: '2as', streamId: 'management_eco', coefficient: 4, weeklyHours: 4 },
    { id: 'math_2as_eco', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '2as', streamId: 'management_eco', coefficient: 4, weeklyHours: 4 },
    { id: 'law_2as_eco', name: 'القانون', iconName: 'Scale', color: 'slate', gradeId: '2as', streamId: 'management_eco', coefficient: 2, weeklyHours: 2 },
    { id: 'history_2as_eco', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '2as', streamId: 'management_eco', coefficient: 3, weeklyHours: 3 },
    { id: 'arabic_2as_eco', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '2as', streamId: 'management_eco', coefficient: 3, weeklyHours: 3 },
    { id: 'islamic_2as_eco', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '2as', streamId: 'management_eco', coefficient: 2, weeklyHours: 2 },
  ],
  // 1AS Trunk Common Science
  '1as_tc_science': [
    { id: 'math_1as_sci', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '1as', streamId: 'tc_science', coefficient: 5, weeklyHours: 5 },
    { id: 'physics_1as_sci', name: 'العلوم الفيزيائية', iconName: 'Atom', color: 'indigo', gradeId: '1as', streamId: 'tc_science', coefficient: 4, weeklyHours: 4 },
    { id: 'science_1as_sci', name: 'علوم الطبيعة والحياة', iconName: 'Dna', color: 'emerald', gradeId: '1as', streamId: 'tc_science', coefficient: 4, weeklyHours: 4 },
    { id: 'tech_1as_sci', name: 'التكنولوجيا', iconName: 'Wrench', color: 'amber', gradeId: '1as', streamId: 'tc_science', coefficient: 2, weeklyHours: 2 },
    { id: 'arabic_1as_sci', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '1as', streamId: 'tc_science', coefficient: 3, weeklyHours: 3 },
    { id: 'history_1as_sci', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '1as', streamId: 'tc_science', coefficient: 2, weeklyHours: 2 },
    { id: 'islamic_1as_sci', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '1as', streamId: 'tc_science', coefficient: 2, weeklyHours: 2 },
    { id: 'french_1as_sci', name: 'اللغة الفرنسية', iconName: 'Languages', color: 'sky', gradeId: '1as', streamId: 'tc_science', coefficient: 2, weeklyHours: 2 },
    { id: 'english_1as_sci', name: 'اللغة الإنجليزية', iconName: 'MessageSquare', color: 'violet', gradeId: '1as', streamId: 'tc_science', coefficient: 2, weeklyHours: 2 },
  ],
  // 1AS Trunk Common Literature
  '1as_tc_literature': [
    { id: 'arabic_1as_lit', name: 'اللغة العربية وآدابها', iconName: 'BookMarked', color: 'amber', gradeId: '1as', streamId: 'tc_literature', coefficient: 5, weeklyHours: 5 },
    { id: 'history_1as_lit', name: 'التاريخ والجغرافيا', iconName: 'Globe2', color: 'rose', gradeId: '1as', streamId: 'tc_literature', coefficient: 3, weeklyHours: 3 },
    { id: 'french_1as_lit', name: 'اللغة الفرنسية', iconName: 'Languages', color: 'sky', gradeId: '1as', streamId: 'tc_literature', coefficient: 3, weeklyHours: 3 },
    { id: 'english_1as_lit', name: 'اللغة الإنجليزية', iconName: 'MessageSquare', color: 'violet', gradeId: '1as', streamId: 'tc_literature', coefficient: 3, weeklyHours: 3 },
    { id: 'islamic_1as_lit', name: 'العلوم الإسلامية', iconName: 'Compass', color: 'teal', gradeId: '1as', streamId: 'tc_literature', coefficient: 2, weeklyHours: 2 },
    { id: 'math_1as_lit', name: 'الرياضيات', iconName: 'Calculator', color: 'blue', gradeId: '1as', streamId: 'tc_literature', coefficient: 2, weeklyHours: 2 },
    { id: 'science_1as_lit', name: 'علوم الطبيعة والحياة', iconName: 'Dna', color: 'emerald', gradeId: '1as', streamId: 'tc_literature', coefficient: 2, weeklyHours: 2 },
    { id: 'physics_1as_lit', name: 'العلوم الفيزيائية', iconName: 'Atom', color: 'indigo', gradeId: '1as', streamId: 'tc_literature', coefficient: 2, weeklyHours: 2 },
  ],
};
