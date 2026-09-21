import { Lesson } from '../../types';

export const ECO_TECH_LANGUAGES_LESSONS: Lesson[] = [
  // ============================================================
  // التسيير المحاسبي والمالي (3AS تسيير واقتصاد)
  // ============================================================
  {
    id: 'gestion_3as_amortissement',
    title: 'أعمال نهاية السنة: الاهتلاك الخطي ونقص قيمة التثبيتات والتسوية المحاسبية',
    unitTitle: 'الوحدة 2: أعمال نهاية السنة والتثبيتات (المخطط السنوي - الفصل 1)',
    trimester: 1,
    subjectId: 'gestion_3as_eco',
    gradeId: '3as',
    streamId: 'management_eco',
    order: 1,
    durationEstimate: '60 دقيقة',
    description: 'مفهوم الاهتلاك الخطي والمتناقص والمتزايد، جدول الاهتلاك الخطي، حساب قسط الاهتلاك السنوي، خسارة القيمة عن التثبيتات (Dépréciation)، تعديل جدول الاهتلاك بعد الخسارة، والتسجيل في دفتر اليومية في 31/12 من السنة N.',
    objectives: [
      'حساب قسط الاهتلاك السنوي an ومعدل الاهتلاك t = 100/N',
      'إعداد جدول الاهتلاك الخطي وتحديد القيمة المحاسبية الصافية VNC',
      'إجراء اختبار خسارة القيمة (مقارنة VNC مع سعر البيع الصافي PVN)',
      'التسجيل المحاسبي السليم في اليومية لحسابات الصنف 2 والصنف 681 والصنف 28 والصنف 29',
    ],
    videoResources: [
      {
        id: 'vid_khettir_gestion',
        teacherName: 'الأستاذ إلياس خثير',
        teacherTitle: 'مؤلف كتب المحاسبة والمالية وأشهر أستاذ تسيير واقتصاد بالجزائر',
        videoTitle: 'أعمال نهاية السنة: الاهتلاك الخطي وخسارة القيمة والتسجيل المحاسبي بالتفصيل',
        duration: '1:10:00',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'الأستاذ إلياس خثير',
        viewsCount: '980K مشاهدة',
        notes: 'طريقة مبسطة جداً لفهم القيود المحاسبية وتعديل جدول الاهتلاك بعد الخسارة.',
      },
    ],
    writtenSummary: {
      introduction: 'تمثل أعمال نهاية السنة الوحدة الأهم والأكثر وزناً في امتحان البكالوريا لمادة التسيير المحاسبي والمالي (تستحوذ على أكثر من 10 نقاط في الموضوع).',
      sections: [
        {
          title: '1. الاهتلاك الخطي (Amortissement Linéaire)',
          content: '- المبلغ القابل للاهتلاك MA: هو تكلفة الحيازة - القيمة المتبقية VR (عادة VR = 0).\n- معدل الاهتلاك الخطي t: t = (100 / N)% حيث N مدة النفع بالسنوات.\n- قسط الاهتلاك السنوي an: an = MA * t = MA / N.\n- في حالة الحيازة خلال السنة (بين الأشهر): an = MA * t * (m / 12) حيث m عدد أشهر الاستعمال.\n- الاهتلاكات المتراكمة sum(A): مجموع الأقساط من تاريخ البداية إلى تاريخ الجرد.\n- القيمة المحاسبية الصافية: VNC = MA - sum(A).',
        },
        {
          title: '2. خسارة القيمة عن التثبيتات العينية والمعنوية',
          content: '- نختبر خسارة القيمة عندما يعطينا نص التمرين سعر البيع الصافي المحتمل (القيمة القابلة للتحصيل VR).\n- خسارة القيمة PV = VNC - VR (إذا كان VNC > VR).\n- التسجيل المحاسبي في 31/12/N:\n  * مدين: ح/ 681 (مخصصات الاهتلاكات والمؤونات وخسائر القيمة - أصول غير جارية).\n  * دائن: ح/ 29 (خسائر القيمة عن التثبيتات).\n- بعد إثبات الخسارة: يعدل جدول الاهتلاك وتصبح القاعدة الجديدة للاهتلاك هي VR وتقسم على عدد السنوات المتبقية.',
        },
      ],
      mindMapPoints: [
        'قسط الاهتلاك: an = MA * t (أو MA * t * m/12 في الأقساط المكملة)',
        'خسارة القيمة: PV = VNC - سعر البيع الصافي (إذا كان الفارق إيجابياً)',
        'القيد المحاسبي: 681 مدين / 28x دائن (قسط اهتلاك) و 29x دائن (خسارة قيمة)',
      ],
      conclusionOrAdvice: 'نصيحة بكالوريا: انتبه لتاريخ الحيازة؛ إذا تم الشراء في اليوم 15 من الشهر وما قبله يحتسب الشهر كاملاً، أما إذا كان الشراء بعد يوم 15 فلا يحتسب ذلك الشهر.',
    },
    exercises: [
      {
        id: 'ex_gest_bac',
        title: 'مسألة محاسبية شاملة: معدات نقل، خسارة قيمة، وتسجيل اليومية',
        difficulty: 'مستوى بكالوريا / اختبار',
        bacYear: 'بكالوريا 2023 شعبة تسيير واقتصاد',
        points: 6,
        question: 'في 02/01/2021، اشترت مؤسسة "الأمل" شاحنة لنقل البضائع (ح/ 2182) بمبلغ MA = 2,400,000 دج، مدة نفعها 5 سنوات وتهتلك خطياً.\nفي 31/12/2022، قُدر سعر بيعها الصافي في السوق بمبلغ 1,300,000 دج.\n1. احسب قسط الاهتلاك السنوي an ومجموع الاهتلاكات المتراكمة إلى غاية 31/12/2022.\n2. اختبر خسارة القيمة للشاحنة في 31/12/2022 وسجل قيد التسوية اللازم في اليومية.\n3. احسب قسط الاهتلاك لسنة 2023 بعد تعديل جدول الاهتلاك.',
        hint: 'الشاحنة استعملت سنتين كاملتين (2021 و 2022) قبل اختبار خسارة القيمة.',
        detailedSolution: '1. حساب الاهتلاكات:\n- معدل الاهتلاك: t = 100 / 5 = 20%.\n- قسط الاهتلاك السنوي: an = 2,400,000 * 0.20 = 480,000 دج. [1 ن]\n- الاهتلاكات المتراكمة في 31/12/2022 (سنتان): sum(A) = 480,000 * 2 = 960,000 دج. [1 ن]\n\n2. اختبار خسارة القيمة والتسجيل:\n- VNC في 31/12/2022 = MA - sum(A) = 2,400,000 - 960,000 = 1,440,000 دج.\n- سعر البيع الصافي PVN = 1,300,000 دج.\n- بما أن VNC > PVN توجد خسارة قيمة مقدارها: PV = 1,440,000 - 1,300,000 = 140,000 دج. [1.5 ن]\n- التسجيل في اليومية في 31/12/2022:\n  * تسجيل قسط اهتلاك 2022: من ح/ 681 (480,000) إلى ح/ 28182 (480,000).\n  * تسجيل خسارة القيمة: من ح/ 681 (140,000) إلى ح/ 29182 (140,000). [1.5 ن]\n\n3. قسط الاهتلاك لسنة 2023 بعد التعديل:\n- السنوات المتبقية: 5 - 2 = 3 سنوات.\n- القسط الجديد an(2023) = VNC المعدلة (أي سعر السوق) / السنوات المتبقية = 1,300,000 / 3 = 433,333.33 دج. [1 ن]',
      },
    ],
  },

  // ============================================================
  // الاقتصاد والمناجمنت (3AS تسيير واقتصاد)
  // ============================================================
  {
    id: 'eco_3as_money',
    title: 'النقود والصيرفة: المفهوم، الوظائف، والكتلة النقدية، والنظام المصرفي الجزائري',
    unitTitle: 'الوحدة 1: النقود والصيرفة (المخطط السنوي - الفصل 1)',
    trimester: 1,
    subjectId: 'eco_3as_eco',
    gradeId: '3as',
    streamId: 'management_eco',
    order: 1,
    durationEstimate: '45 دقيقة',
    description: 'تطور أشكال النقود من المقايضة إلى النقود السلعية والمعدنية والورقية والائتمانية والإلكترونية، وظائف النقود الاقتصادية، عناصر الكتلة النقدية M1, M2, M3، والنظام المصرفي الجزائري ودور بنك الجزائر في السياسة النقدية.',
    objectives: [
      'تحديد عيوب المقايضة ومبررات ظهور النقود وتطورها التاريخي',
      'تعداد وشرح وظائف النقود الثلاث (وسيط للمبادلة، مقياس للقيم، مستودع للقيمة)',
      'التمييز بين مكونات الكتلة النقدية وسيولة النقود',
      'توضيح دور البنك المركزي (بنك الجزائر) في إصدار النقد ومراقبة البنوك التجارية',
    ],
    videoResources: [
      {
        id: 'vid_eco_money',
        teacherName: 'الأستاذ بن سالم',
        teacherTitle: 'أستاذ الاقتصاد والمناجمنت للتعليم الثانوي',
        videoTitle: 'النقود والصيرفة مع ملخص المخططات الذهنية لأسئلة البكالوريا',
        duration: '45:00',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '720p HD',
        channelName: 'دروس الاقتصاد للبكالوريا',
        viewsCount: '420K مشاهدة',
      },
    ],
    writtenSummary: {
      introduction: 'تعتبر النقود شريان الاقتصاد الحديث، حيث حلت محل نظام المقايضة المعقد، وأصبحت الأداة الأساسية للتبادل التجاري وتسيير السيولة النقدية.',
      sections: [
        {
          title: '1. وظائف النقود الاقتصادية',
          content: '1. وسيط للمبادلة: أداة مقبولة عاماً لإبراء الذمم وتسوية الديون وتسهيل المبادلات.\n2. مقياس للقيم (وحدة حساب): تعبر عن أثمان وأسعار السلع والخدمات في السوق.\n3. مستودع للقيم: تمكن الأفراد والمؤسسات من الادخار وتأجيل الإنفاق إلى المستقبل.',
        },
        {
          title: '2. عناصر الكتلة النقدية (Les Agrégats Monétaires)',
          content: '- M1: النقود القانونية (الورقية والمعدنية) + النقود الخطية (الودائع الجارية تحت الطلب).\n- M2: M1 + الودائع لأجل والودائع الادخارية (شبه النقود).\n- M3: M2 + سندات الخزينة والموجودات المالية طويلة الأجل.',
        },
      ],
      mindMapPoints: [
        'وظائف النقود: وسيط للمبادلة + مقياس للقيم + مستودع للقيم',
        'الكتلة النقدية: M1 (أكثرها سيولة) -> M2 -> M3',
        'بنك الجزائر: بنك البنوك، بنك الدولة، ومصدر النقد الوحيد',
      ],
      conclusionOrAdvice: 'نصيحة بكالوريا: في أسئلة التعريفات والمصطلحات في مادة الاقتصاد، احرص على ذكر الكلمات المفتاحية الأساسية لتحصل على النقطة الكاملة دون إنقاص.',
    },
    exercises: [
      {
        id: 'ex_eco_1',
        title: 'سؤال بكالوريا نموذجي في التضخم والكتلة النقدية',
        difficulty: 'مستوى بكالوريا / اختبار',
        bacYear: 'بكالوريا 2022',
        points: 4,
        question: 'عرف التضخم النقدي، واذكر ثلاثة أسباب رئيسية لظهوره، مبيناً إجراءين من إجراءات السياسة النقدية لمعالجته.',
        hint: 'تذكر دور رفع سعر الفائدة من طرف البنك المركزي للحد من القروض.',
        detailedSolution: '1. تعريف التضخم: هو حركة صعودية مستمرة وتلقائية للأسعار ناتجة عن فائض في الطلب الكلي على العرض الكلي للسلع والخدمات أو زيادة الكتلة النقدية عن حجم الإنتاج الحقيقي. [1.5 ن]\n\n2. أسباب ظهوره: زيادة الطلب الكلي، ارتفاع تكاليف الإنتاج (أجور ومواد أولية)، والإصدار النقدي المفرط دون مقابل إنتاجي. [1.5 ن]\n\n3. إجراءات المعالجة: رفع سعر إعادة الخصم وسعر الفائدة للحد من القروض الاستهلاكية، وزيادة نسبة الاحتياطي الإجباري للبنوك لامتصاص السيولة الفائضة. [1 ن]',
      },
    ],
  },

  // ============================================================
  // التكنولوجيا والهندسة (3AS تقني رياضي)
  // ============================================================
  {
    id: 'tech_3as_engineering',
    title: 'التكنولوجيا: الهندسة الميكانيكية والكهربائية والمدنية وطرائق الصنع',
    unitTitle: 'الوحدة 1: دراسة الأنظمة والآليات الصناعية (المخطط السنوي - الفصل 1)',
    trimester: 1,
    subjectId: 'tech_3as_tm',
    gradeId: '3as',
    streamId: 'tech_math',
    order: 1,
    durationEstimate: '55 دقيقة',
    description: 'قراءة وفهم دفاتر الشروط التقنية، التحليل الوظيفي التنازلي بنظام SADT و FAST، دراسة التركيبات الميكانيكية للوسادات والمدحرجات والمسننات ومقاومة المواد (المد RDM)، والمخططات الكهربائية والمنطق التوافقي والتعاقبي وعدادات Grafcet.',
    objectives: [
      'تطبيق التحليل الوظيفي التنازلي SADT لتحديد وظائف الآلات الصناعية',
      'قراءة المخططات التجميعية وتحديد الوصلات الحركية والمدحرجات وتعيين أبعاد التوافقات والخشونة',
      'حساب إجهادات الشد والانضغاط والانحناء المستوي البسيط في مقاومة المواد',
      'إنشاء جداول الحقيقة ومخططات غرافسيت (Grafcet) للأنظمة الآلية المتكاملة',
    ],
    videoResources: [
      {
        id: 'vid_tech_tm',
        teacherName: 'الأستاذ قندوز',
        teacherTitle: 'أستاذ التكنولوجيا والهندسة للتعليم الثانوي التقني',
        videoTitle: 'مراجعة شاملة في التحليل الوظيفي والتركيبات الميكانيكية ونظام Grafcet',
        duration: '1:00:00',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '720p HD',
        channelName: 'هندسة تقني رياضي',
        viewsCount: '380K مشاهدة',
      },
    ],
    writtenSummary: {
      introduction: 'تعد مادة التكنولوجيا المادة الأساسية لفرع التقني رياضي (معامل 7 أو 6)، وتجمع بين العلوم الفيزيائية والرياضيات التطبيقية والرسم الصناعي والتصميم الآلي.',
      sections: [
        {
          title: '1. التحليل الوظيفي ونظام SADT و FAST',
          content: '- أداة SADT: تعبر عن الوظيفة الإجمالية للنظام (A-0) بمدخلات ومخرجات ومواد عمل ومحددات التحكم (الطاقة، البرنامج، الضبط، الاستغلال).\n- أداة FAST: تفكك الوظيفة الإجمالية إلى وظائف خدماتية ووظائف تقنية بالانتقال من السؤال "لماذا؟" إلى السؤال "كيف؟".',
        },
        {
          title: '2. مقاومة المواد (RDM) - الشد البسيط',
          content: 'يكون القضيب خاضعاً لشد بسيط إذا كان يؤثر عليه على محور التناظر قوى متعاكسة تسعى لتمديده.\n- الإجهاد الناظمي: sigma = N / S (حيث N الجهد الناظمي و S مساحة المقطع).\n- شرط المقاومة: sigma <= Rpe (حيث Rpe الإجهاد التطبيقي للمقاومة = Re / s مع s معامل الأمان).\n- التمدد المطلق: Delta L = (N * L) / (E * S) (قانون هوك).',
        },
      ],
      mindMapPoints: [
        'SADT: صندوق النشاط (الوظيفة) مع المدخلات والمخرجات ومحددات التحكم W, C, R, E',
        'مقاومة المواد: شرط المقاومة sigma = N/S <= Rpe',
        'قانون هوك: Delta L = (N * L) / (E * S)',
      ],
      conclusionOrAdvice: 'نصيحة بكالوريا: في الرسم التقني والتصميم، احرص على استخدام أدوات الرسم الهندسي الدقيقة والتظليل الصحيح للمقاطع بزاوية 45 درجة مع التمييز بين القطع المتجاورة.',
    },
    exercises: [
      {
        id: 'ex_tech_1',
        title: 'تطبيق في الشد البسيط وتحديد مساحة مقطع عمود مقاوم',
        difficulty: 'مستوى بكالوريا / اختبار',
        bacYear: 'بكالوريا تقني رياضي',
        points: 5,
        question: 'قضيب فولاذي دائري المقطع قطره d مجهول، يتعرض لجهد شد قدره N = 50,000 N. مادة القضيب لها حد مرونة Re = 320 N/mm^2 ومعامل الأمان المعتمد s = 2.\n1. احسب الإجهاد التطبيقي للمقاومة Rpe.\n2. اكتب شرط المقاومة واستنتج القطر الأدنى d اللازم لتحمل هذا الشد بأمان.',
        hint: 'مساحة المقطع الدائري S = pi * d^2 / 4.',
        detailedSolution: '1. حساب Rpe:\n- Rpe = Re / s = 320 / 2 = 160 N/mm^2 (أو MPa). [2 ن]\n\n2. شرط المقاومة وتعيين القطر:\n- شرط المقاومة: sigma = N / S <= Rpe => S >= N / Rpe.\n- S >= 50,000 / 160 = 312.5 mm^2. [1.5 ن]\n- بما أن S = pi * d^2 / 4 => d^2 >= (4 * S) / pi = (4 * 312.5) / 3.1416 = 397.88 mm^2.\n- إذن: d >= sqrt(397.88) ≈ 19.95 mm.\n- نختار القطر الاسمي المعياري الأدنى: d = 20 mm. [1.5 ن]',
      },
    ],
  },

  // ============================================================
  // اللغات الأجنبية - Français 3AS
  // ============================================================
  {
    id: 'french_3as_texte_histoire',
    title: 'Le texte d’histoire: Les faits d’histoire, la visée communicative, et le compte-rendu objectif',
    unitTitle: 'Projet 1: Le texte d’histoire (المخطط السنوي - الفصل 1)',
    trimester: 1,
    subjectId: 'french_3as_sci',
    gradeId: '3as',
    streamId: 'scientific',
    order: 1,
    durationEstimate: '50 دقيقة',
    description: 'Etude du texte d’histoire et de témoignage, la chronologie des événements, la subjectivité et l’objectivité de l’historien (les modalisateurs), la visée communicative (informer, rendre hommage, dénoncer, commémorer), et la méthodologie de rédaction du Compte-rendu objectif pour le Baccalauréat.',
    objectives: [
      'Identifier les caractéristiques du texte d’histoire et les repères chronologiques',
      'Repérer la présence ou l’absence de l’auteur à travers les marques d’énonciation et les modalisateurs',
      'Dégager la visée communicative (commémorative, informative, d’hommage)',
      'Rédiger un compte-rendu objectif conforme aux critères d’évaluation officiels du BAC',
    ],
    videoResources: [
      {
        id: 'vid_french_histoire',
        teacherName: 'الأستاذ ناصر للفرنسية',
        teacherTitle: 'مفتش وأستاذ مادة اللغة الفرنسية للتعليم الثانوي',
        videoTitle: 'Le texte d’histoire et méthode du compte-rendu objectif au BAC de A à Z',
        duration: '50:00',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '720p HD',
        channelName: 'Français BAC Algérie',
        viewsCount: '850K مشاهدة',
      },
    ],
    writtenSummary: {
      introduction: 'Le texte d’histoire est le texte incontournable du Projet 1 en 3ème Année Secondaire. Il relate des événements historiques réels, notamment ceux de la guerre de libération nationale algérienne.',
      sections: [
        {
          title: '1. Les indices spatio-temporels et les voix dans le texte',
          content: '- Les dates et les lieux: structurent le récit chronologique.\n- Les témoignages: paroles rapportées (style direct ou indirect) de témoins d’époque pour authentifier les faits.\n- Le lexique: termes de guerre, de combat, de résistance, ou de souffrance.',
        },
        {
          title: '2. L’objectivité et la subjectivité de l’auteur',
          content: '- Texte objectif: l’auteur est un historien neutre (absence des pronoms de la 1ère personne, verbes déclaratifs au passé simple/présent de narration).\n- Texte subjectif: présence de modalisateurs (lexique mélioratif ou péjoratif, adverbes de certitude ou de doute, tournures affectives).\n- La visée communicative:\n  * Informer sur un événement historique méconnu.\n  * Rendre hommage au courage des martyrs et des moudjahidines.\n  * Dénoncer les crimes et les massacres coloniaux.',
        },
        {
          title: '3. Modèle type du Compte-Rendu Objectif',
          content: 'Le compte-rendu objectif se compose de deux parties:\n1. L\'amorce (Paratexte): "Il s\'agit d\'un texte d\'histoire intitulé (...), écrit par l\'auteur (...), extrait de l\'ouvrage (...), paru aux éditions (...) en (...). Dans ce texte, l\'auteur informe les lecteurs sur (...) avec une visée informative et d\'hommage."\n2. Le résumé condensé des idées principales: utilisation des connecteurs logiques (D\'abord, ensuite, de plus, enfin) et des verbes introducteurs d\'opinion (L\'auteur souligne que, il ajoute que, il conclut que) à la 3ème personne du singulier, sans donner son avis personnel.',
        },
      ],
      mindMapPoints: [
        'Visée: Informer, commémorer, rendre hommage, dénoncer',
        'Indices: Dates, lieux, témoignages, noms propres',
        'Compte-rendu objectif: Amorce (qui, quoi, source, visée) + Résumé au quart de la longueur sans "Je"',
      ],
      conclusionOrAdvice: 'Conseil BAC: Dans le compte-rendu objectif, n\'utilisez jamais la première personne ("Je", "Moi") et ne donnez pas votre avis critique; résumez fidèlement les idées de l\'auteur à la 3ème personne.',
    },
    exercises: [
      {
        id: 'ex_fr_1',
        title: 'Application type BAC: Rédiger l’amorce du compte-rendu d’un texte d’histoire',
        difficulty: 'مستوى بكالوريا / اختبار',
        bacYear: 'BAC 2023',
        points: 6,
        question: 'Rédigez l\'amorce (introduction) du compte-rendu objectif d\'un texte historique de Mahfoud Kaddache relatant les manifestations du 11 Décembre 1960.',
        hint: 'Mentionnez le type de texte, l\'auteur, le thème principal et la visée communicative.',
        detailedSolution: 'Modèle d\'amorce réussi (noté sur 2.5 points au BAC):\n« Ce document est un texte d’histoire intitulé "Les manifestations du 11 décembre 1960", rédigé par l’éminent historien algérien Mahfoud Kaddache, extrait de son ouvrage "Histoire du nationalisme algérien", publié aux éditions SNED. Dans cet écrit, l’auteur met en lumière le soulèvement populaire héroïque du peuple algérien face à l’armée coloniale et son impact décisif sur l’internationalisation de la cause algérienne à l’ONU. La visée communicative de l’auteur est à la fois informative et commémorative, visant à rendre un vibrant hommage à la détermination et au sacrifice des manifestants. » [6 n pour le CR complet]',
      },
    ],
  },

  // ============================================================
  // اللغات الأجنبية - English 3AS
  // ============================================================
  {
    id: 'eng_3as_ancient_civilizations',
    title: 'Ancient Civilizations: Rise and Fall, Cultural Heritage, and Grammar (Used to, Had to)',
    unitTitle: 'Unit 1: Ancient Civilizations (المخطط السنوي - الفصل 1)',
    trimester: 1,
    subjectId: 'english_3as_sci',
    gradeId: '3as',
    streamId: 'scientific',
    order: 1,
    durationEstimate: '45 دقيقة',
    description: 'Study of ancient world civilizations (Mesopotamia, Ancient Egypt, Ancient Greece, Roman Empire, Indus Valley, and the Numidian Kingdom in Algeria), the causes of their rise and collapse, cultural contributions, grammar points (used to, had to, past simple vs past perfect, expressing cause and result: because, so, therefore), and writing a model essay.',
    objectives: [
      'Learn key historical and cultural vocabulary related to ancient civilizations and archaeological sites',
      'Master the use of "used to" for past habits and past obligations with "had to"',
      'Express cause and concession in historical discourse using formal link words',
      'Write a coherent historical essay comparing modern achievements with ancient heritage',
    ],
    videoResources: [
      {
        id: 'vid_eng_civ',
        teacherName: 'الأستاذ منصوري',
        teacherTitle: 'أستاذ مادة اللغة الإنجليزية للطور الثانوي',
        videoTitle: 'Unit 1 Ancient Civilizations: Full Revision with Grammar and Written Expression',
        duration: '48:00',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '720p HD',
        channelName: 'English with Mansouri',
        viewsCount: '720K مشاهدة',
      },
    ],
    writtenSummary: {
      introduction: 'Ancient Civilizations is the opening unit for all 3AS streams. It explores how early human societies developed writing, agriculture, governance, and architecture, and why mighty empires eventually collapsed.',
      sections: [
        {
          title: '1. Key Concepts and Vocabulary',
          content: '- Flourish / Thrive: To grow and develop successfully.\n- Collapse / Fall: The sudden breakdown of a civilization.\n- Irrigation: Supplying water to crops (e.g. Nile river, Tigris and Euphrates).\n- Legacy / Heritage: What an ancient society leaves behind for modern humanity (mathematics, astronomy, philosophy, codes of law like Hammurabi).',
        },
        {
          title: '2. Grammar: Past Habits with "Used to" and Past Obligations',
          content: '- Used to + Stem (infinitive): expresses a past habit or state that is no longer true today.\n  * Affirmative: Ancient Egyptians used to build monumental stone pyramids.\n  * Negative: People didn\'t use to have modern electrical appliances.\n  * Question: Did the Romans use to speak Latin?\n- Had to + Stem: expresses past necessity or obligation.\n  * Pharaohs had to defend their borders against invasions.',
        },
        {
          title: '3. Expressing Concession and Contrast (Although, Whereas, In spite of)',
          content: '- Although / Even though + clause (Subject + Verb): Although ancient societies lacked modern technology, they achieved remarkable architectural wonders.\n- In spite of / Despite + Noun phrase or Gerund (-ing): Despite facing severe droughts, the Mesopotamians thrived through innovative irrigation channels.',
        },
      ],
      mindMapPoints: [
        'Civilizations: Egypt (Pharaohs, Pyramids), Greece (Democracy, Philosophy), Rome (Law, Roads), Numidia (Massinissa)',
        'Grammar: used to + stem (past habits), had to (past necessity)',
        'Causes of collapse: Wars, invasions, climate change, epidemic diseases, internal corruption',
      ],
      conclusionOrAdvice: 'BAC Tip: When writing the final paragraph in English, always organize your essay into 3 distinct parts: Topic sentence (Introduction), Supporting sentences (Body with examples and linkers), and a concluding sentence summarizing the main lesson.',
    },
    exercises: [
      {
        id: 'ex_eng_1',
        title: 'BAC Grammar Practice: Sentence combination and vocabulary in context',
        difficulty: 'مستوى بكالوريا / اختبار',
        bacYear: 'BAC 2022',
        points: 4,
        question: 'Rewrite sentence (b) so that it means the same as sentence (a):\n1. (a) Ancient Romans built an extensive network of roads because they needed to facilitate trade and military movements.\n   (b) Since ............................................................................\n2. (a) In the past, people lived in small agrarian tribes, but now they live in large industrialized cities.\n   (b) In the past, people used to .............................................',
        hint: 'Use the correct connector and stem form after "used to".',
        detailedSolution: '1. (b) Since ancient Romans needed to facilitate trade and military movements, they built an extensive network of roads. [2 pts]\n2. (b) In the past, people used to live in small agrarian tribes. [2 pts]',
      },
    ],
  },

  // ============================================================
  // السنة الثانية ثانوي (2AS) - الرياضيات: الاشتقاقية
  // ============================================================
  {
    id: 'math_2as_derivation',
    title: 'الاشتقاقية وتطبيقاتها: العدد المشتق، معادلة المماس، واتجاه التغير للثانية ثانوي',
    unitTitle: 'الوحدة 1: الاشتقاقية وتطبيقاتها (المخطط السنوي 2AS - الفصل 1)',
    trimester: 1,
    subjectId: 'math_2as_sci',
    gradeId: '2as',
    streamId: 'scientific',
    order: 1,
    durationEstimate: '50 دقيقة',
    description: 'تعريف العدد المشتق f\'(x0) كنسبة تزايد لما h -> 0، التفسير الهندسي للعدد المشتق كمعامل توجيه لمماس المنحنى، معادلة المماس y = f\'(x0)(x - x0) + f(x0)، قواعد الاشتقاق الأساسية (الجداء، المقلوب، الكسر)، والربط بين إشارة المشتقة واتجاه تغير الدالة.',
    objectives: [
      'حساب نسبة التزايد وتحديد قابلية اشتقاق دالة عند نقطة',
      'كتابة معادلة مماس المنحنى عند نقطة معلومة أو بمعامل توجيه مفروض',
      'تطبيق قواعد مشتقة جداء دالتين (u*v)\' ومشتقة حاصل قسمة (u/v)\'',
      'استنتاج اتجاه تغير الدالة وجدول التغيرات وتعيين القيم الحدية المحلية',
    ],
    videoResources: [
      {
        id: 'vid_nour_2as_der',
        teacherName: 'الأستاذ نور الدين',
        teacherTitle: 'أستاذ الرياضيات الأول بالجزائر',
        videoTitle: 'الاشتقاقية للسنة الثانية ثانوي من الألف إلى الياء بالتفصيل مع تمارين',
        duration: '1:05:00',
        youtubeId: 'W3_rJ8qL4kM',
        downloadUrl: 'https://www.youtube.com/watch?v=W3_rJ8qL4kM',
        quality: '1080p HD',
        channelName: 'الأستاذ نور الدين',
        viewsCount: '1.1M مشاهدة',
      },
    ],
    writtenSummary: {
      introduction: 'الاشتقاقية هي الأداة الرياضية المركزية في السنة الثانية ثانوي، وهي القاعدة الأساسية لدراسة الدوال في شهادة البكالوريا لاحقاً.',
      sections: [
        {
          title: '1. تعريف العدد المشتق والتفسير الهندسي',
          content: '- قابلية الاشتقاق: نقول أن f قابلة للاشتقاق عند x0 إذا كانت نهاية نسبة التزايد منتهية: lim [f(x0 + h) - f(x0)] / h لما h -> 0 تساوي عدداً حقيقياً L يدعى العدد المشتق ويرمز له بـ f\'(x0).\n- التفسير الهندسي: يقبل المنحنى (Cf) عند النقطة A(x0, f(x0)) مماساً (T) معامل توجيهه هو f\'(x0).\n- معادلة المماس: y = f\'(x0) * (x - x0) + f(x0).',
        },
        {
          title: '2. قواعد الاشتقاق الأساسية',
          content: '- (x^n)\' = n * x^(n - 1)\n- (k * u)\' = k * u\'\n- (u + v)\' = u\' + v\'\n- (u * v)\' = u\' * v + u * v\'\n- (1 / v)\' = - v\' / v^2\n- (u / v)\' = (u\' * v - u * v\') / v^2\n- (sqrt(u))\' = u\' / (2 * sqrt(u))',
        },
      ],
      mindMapPoints: [
        'العدد المشتق: f\'(x0) = ميل المماس عند x0',
        'معادلة المماس: y = f\'(x0)(x - x0) + f(x0)',
        'f\'(x) > 0 -> الدالة متزايدة تماماً ، f\'(x) < 0 -> متناقصة تماماً',
      ],
      conclusionOrAdvice: 'نصيحة ثانية ثانوي: احفظ جدول مشتقات الدوال المرجعية عن ظهر قلب، فهو سلاحك الدائم في الرياضيات حتى نهاية البكالوريا.',
    },
    exercises: [
      {
        id: 'ex_2as_1',
        title: 'تطبيق في الاشتقاق ودراسة التغيرات ومعادلة المماس',
        difficulty: 'متوسط',
        points: 5,
        question: 'لتكن الدالة f المعرفة على R بـ: f(x) = x^3 - 3x + 2.\n1. احسب f\'(x) وادرس إشارتها.\n2. شكل جدول تغيرات الدالة f وعين القيم الحدية المحلية.\n3. اكتب معادلة المماس (T) للمنحنى (Cf) عند النقطة ذات الفاصلة x0 = 0.',
        hint: 'المشتقة من الدرجة الثانية، حل المعادلة f\'(x) = 0 لإيجاد الجذور.',
        detailedSolution: '1. المشتقة:\n- f\'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x - 1)(x + 1).\n- إشارة المشتقة:\n  * تنعدم عند x = -1 و x = 1.\n  * موجبة خارج الجذرين (x in ]-inf, -1[ U ]1, +inf[).\n  * سالبة داخل الجذرين (x in ]-1, 1[). [2 ن]\n\n2. التغيرات:\n- الدالة متزايدة تماماً على ]-inf, -1] و [1, +inf[، ومتناقصة تماماً على [-1, 1].\n- القيمة الحدية العظمى المحلية: f(-1) = (-1)^3 - 3(-1) + 2 = -1 + 3 + 2 = 4.\n- القيمة الحدية الصغرى المحلية: f(1) = 1 - 3 + 2 = 0. [2 ن]\n\n3. معادلة المماس عند x0 = 0:\n- f(0) = 2 و f\'(0) = -3.\n- y = f\'(0)(x - 0) + f(0) => y = -3x + 2. [1 ن]',
      },
    ],
  },

  // ============================================================
  // السنة الأولى ثانوي (1AS) - الجذع المشترك: الأعداد والحساب
  // ============================================================
  {
    id: 'math_1as_numbers',
    title: 'الأعداد والحساب: المجموعات العددية، المجالات، والقيمة المطلقة والمسافة',
    unitTitle: 'الوحدة 1: الأعداد والحساب (المخطط السنوي 1AS - الفصل 1)',
    trimester: 1,
    subjectId: 'math_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 1,
    durationEstimate: '45 دقيقة',
    description: 'المجموعات العددية واحتواؤها (N محتواة في Z محتواة في D محتواة في Q محتواة في R)، تمييز الأعداد العشرية والقابلة للكسر والأصم، القيمة المطلقة وخواصها، العلاقة بين القيمة المطلقة والمسافة والحصر والمجال، وحل المعادلات والمتراجحات من الشكل |x - a| <= r.',
    objectives: [
      'تصنيف الأعداد بدقة وتحديد أصغر مجموعة عددية ينتمي إليها كل عدد',
      'الانتقال بمرونة بين المجالات، الحصر، المسافة، والقيمة المطلقة',
      'حل المعادلات والمتراجحات التي تحتوي على القيمة المطلقة بيانياً وجبرياً',
      'تحديد رتبة مقدار وحساب الدقة في الحسابات التقريبية',
    ],
    videoResources: [
      {
        id: 'vid_nour_1as_num',
        teacherName: 'الأستاذ نور الدين',
        teacherTitle: 'أستاذ الرياضيات الأول للثانوي بالجزائر',
        videoTitle: 'الأعداد والحساب والمجالات والقيمة المطلقة للأولى ثانوي من الصفر',
        duration: '50:00',
        youtubeId: 'W3_rJ8qL4kM',
        downloadUrl: 'https://www.youtube.com/watch?v=W3_rJ8qL4kM',
        quality: '720p HD',
        channelName: 'الأستاذ نور الدين',
        viewsCount: '950K مشاهدة',
      },
    ],
    writtenSummary: {
      introduction: 'تمثل هذه الوحدة المدخل التأسيسي لمرحلة التعليم الثانوي في مادة الرياضيات، حيث تضبط المفاهيم الأساسية للأعداد والمجالات والمسافات.',
      sections: [
        {
          title: '1. تصنيف المجموعات العددية',
          content: 'N c Z c D c Q c R:\n- N: مجموعة الأعداد الطبيعية (0, 1, 2, ...).\n- Z: مجموعة الأعداد الصحيحة النسبية (الموجبة والسالبة).\n- D: مجموعة الأعداد العشرية (التي تكتب على الشكل a / 10^n أو a / (2^p * 5^q)).\n- Q: مجموعة الأعداد الناطقة (الكسور p/q مع مقام غير معدوم وتتميز بدور دوري بعد الفاصلة).\n- R: مجموعة الأعداد الحقيقية (تضم الناطقة والصماء مثل pi و sqrt(2)).',
        },
        {
          title: '2. القيمة المطلقة والمسافة والمجال',
          content: '- تعريف القيمة المطلقة: |x| = x إذا كان x >= 0، و |x| = -x إذا كان x <= 0.\n- المسافة بين عددين: d(a, b) = |a - b| = |b - a|.\n- العلاقة الأساسية: |x - c| <= r تكافئ:\n  * المسافة بين x و c أصغر أو تساوي r: d(x, c) <= r.\n  * حصر: c - r <= x <= c + r.\n  * مجال: x in [c - r, c + r] (حيث c المركز و r نصف القطر).',
        },
      ],
      mindMapPoints: [
        'N c Z c D c Q c R (كل طبيعي هو صحيح، كل صحيح هو عشري...)',
        'العشري: مقامه يحلل فقط لقوى 2 و 5',
        '|x - a| <= r -> المجال [a - r, a + r] (المركز a ونصف القطر r)',
      ],
      conclusionOrAdvice: 'نصيحة أولى ثانوي: لمعرفة هل العدد الناطق عشري، اختزل الكسر لأبسط شكل ثم حلل المقام إلى جداء عوامل أولية؛ إذا احتوى فقط على 2 و 5 فهو عشري.',
    },
    exercises: [
      {
        id: 'ex_1as_1',
        title: 'تطبيق في تصنيف الأعداد وحل متراجحة بالقيمة المطلقة',
        difficulty: 'متوسط',
        points: 4,
        question: '1. حدد أصغر مجموعة ينتمي إليها كل عدد من الأعداد التالية: A = 15/3 ، B = 7/20 ، C = 1/3 ، D = sqrt(8) / sqrt(2).\n2. حل في R المتراجحة التالية وعبر عن الحلول بمجال: |x - 3| <= 2.',
        hint: 'حول المتراجحة |x - 3| <= 2 إلى حصر للمركز 3 ونصف القطر 2.',
        detailedSolution: '1. تصنيف الأعداد:\n- A = 15 / 3 = 5 ينتمي إلى N (عدد طبيعي). [1 ن]\n- B = 7 / 20 = 7 / (2^2 * 5) = 0.35 ينتمي إلى D (عدد عشري). [1 ن]\n- C = 1 / 3 = 0.333... ينتمي إلى Q (عدد ناطق غير عشري). [0.5 ن]\n- D = sqrt(8 / 2) = sqrt(4) = 2 ينتمي إلى N (عدد طبيعي). [0.5 ن]\n\n2. حل المتراجحة |x - 3| <= 2:\n- تكافئ: -2 <= x - 3 <= 2.\n- بإضافة 3 لجميع الأطراف: 3 - 2 <= x <= 3 + 2 => 1 <= x <= 5.\n- مجموعة الحلول كمجال هي: S = [1, 5]. [1 ن]',
      },
    ],
  },

  // ============================================================
  // القانون - 3AS تسيير واقتصاد
  // ============================================================
  {
    id: 'law_3as_work_contract',
    title: 'عقد العمل وعلاقات العمل الفردية والجماعية وحالات إنهائه',
    unitTitle: 'الوحدة 1: عقد العمل وعلاقات العمل (المخطط السنوي - الفصل 1)',
    trimester: 1,
    subjectId: 'law_3as_eco',
    gradeId: '3as',
    streamId: 'management_eco',
    order: 1,
    durationEstimate: '50 دقيقة',
    description: 'تعريف عقد العمل وفق القانون الجزائري 90-11، شروط صحة عقد العمل (الرضا، الأهلية، المحل، والسبب)، التمييز الدقيق بين عقد العمل محدد المدة (CDD) وغير محدد المدة (CDI)، حقوق والتزامات العامل وصاحب العمل، وحالات تعليق وإنهاء علاقة العمل القانونية.',
    objectives: [
      'تعريف عقد العمل وتحديد أركانه الشكلية والموضوعية وفق القانون الجزائري',
      'المقارنة بين عقد العمل محدد المدة وعقد العمل غير محدد المدة وشروط اللجوء إليه',
      'تعداد التزامات العامل (أداء العمل، الالتزام بالسر المهني) والتزامات صاحب العمل (دفع الأجر، توفير شروط الأمن والسلامة)',
      'التمييز بين أسباب تعليق علاقة العمل وأسباب إنهائها النهائية (الاستقالة، العزل، التسريح الاقتصادي)',
    ],
    videoResources: [
      {
        id: 'vid_khettir_law_1',
        teacherName: 'الأستاذ إلياس خثير',
        teacherTitle: 'مؤلف كتب النجاح وأستاذ مادة القانون والتسيير',
        videoTitle: 'عقد العمل وعلاقات العمل الفردية بالتفصيل لطلبة بكالوريا تسيير واقتصاد',
        duration: '48:30',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'الأستاذ إلياس خثير',
        viewsCount: '480K مشاهدة',
        notes: 'التركيز على شروط عقد العمل محدد المدة وحالات التسريح التعسفي والتعويض.',
      },
    ],
    writtenSummary: {
      introduction: 'يمثل القانون أحد المواد الأساسية الثلاث لشعبة تسيير واقتصاد (معامل 2). تنظم الوحدة الأولى علاقات العمل الفردية والجماعية وفق أحكام القانون رقم 90-11 المتعلق بعلاقات العمل في الجزائر.',
      sections: [
        {
          title: '1. مفهوم عقد العمل وأنواعه',
          content: 'عقد العمل هو اتفاق يلتزم بموجبه شخص (العامل) بتقديم عمل لحساب شخص آخر (المستخدم) وتحت إشرافه وإدارته مقابل أجر مالي محدد.\nأنواع عقد العمل:\n1. عقد العمل غير محدد المدة (CDI): هو الأصل العام في التشريع الجزائري، لا يحدد له أجل انتهاء.\n2. عقد العمل محدد المدة (CDD): استثناء مشروط قانوناً، يجب أن يكون مكتوباً ومبرراً بأحد الحالات القانونية التالية حصراً:\n- استخلاف عامل متغيب مؤقتاً.\n- الزيادة المؤقتة في حجم العمل.\n- أشغال موسمية أو ذات طبيعة دورية.\n- إنجاز مشروع أو ورشة محددة المدة.',
          keyRules: [
            'إذا أُبرم عقد عمل محدد المدة دون توفر إحدى الحالات القانونية الصريحة، يعد باطلاً وينقلب قانوناً إلى عقد غير محدد المدة',
          ],
        },
        {
          title: '2. تعليق وإنهاء علاقة العمل',
          content: 'تعليق علاقة العمل (توقف مؤقت دون زوال الرابطة القانونية):\n- أداء التزامات الخدمة الوطنية.\n- ممارسة عهدة نقابية أو انتخابية.\n- العطلة المرضية أو حادث عمل.\n- صدور عقوبة توقيف تأديبي مؤقت.\nإنهاء علاقة العمل (زوال الرابطة العقدية بصفة نهائية):\n- البطلان أو الإلغاء القانوني للعقد.\n- انقضاء أجل العقد محدد المدة.\n- الاستقالة الإرادية للعامل.\n- العزل التأديبي بسبب خطأ مهني جسيم (كالسرقة، إفشاء السر المهني، الاعتداء الجسدي).\n- التسريح التأديبي أو التسريح لأسباب اقتصادية.\n- التقاعد أو وفاة العامل.',
        },
      ],
      mindMapPoints: [
        'أركان عقد العمل: الرضا، الأهلية (16 سنة مع موافقة الولي)، المحل، والسبب',
        'العقد غير محدد المدة هو الأصل؛ العقد محدد المدة استثناء كتابي مبرر',
        'التعليق: توقف مؤقت (خدمة وطنية، مرض، عهدة نقابية)',
        'الإنهاء: استقالة، تقاعد، عزل لخطأ جسيم، انتهاء الأجل، أو تسريح اقتصادي',
      ],
      conclusionOrAdvice: 'في أسئلة بكالوريا القانون، تُطرح أسئلة وضعيات (Cas pratique) تطلب تحديد مدى قانونية تصرف صاحب العمل (مثل تسريح عامل بدون تعويض). علل إجابتك دائماً بذكر المادة والمبدأ القانوني الصريح.',
    },
    exercises: [
      {
        id: 'ex_law_3as_1',
        title: 'وضعية تطبيقية نموذجية في قانون العمل',
        difficulty: 'متوسط',
        points: 6,
        question: 'قامت مؤسسة صناعية بتوظيف تقني سامٍ في الإعلام الآلي بموجب عقد عمل مكتوب مدته سنة كاملة قابلة للتجديد لشغل منصب دائم في مصلحة المحاسبة. بعد مرور 6 أشهر، قامت الإدارة بفصله شفهياً دون إخطار مسبق وبدون ارتكابه لأي خطأ.\n1) ما مدى صحة إبرام عقد محدد المدة لشغل منصب دائم وفق القانون الجزائري؟\n2) ما هو الوصف القانوني للتسريح الذي تعرض له هذا العامل؟\n3) ما هي الحقوق والتعويضات التي يمكن للعامل المطالبة بها أمام مفتشية العمل ومحكمة شؤون العمل؟',
        hint: 'المناصب الدائمة تقتضي عقداً غير محدد المدة، وفصل العامل شفهياً دون مبرر قانوني يعتبر تسريحاً تعسفياً.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'مدى صحة إبرام العقد محدد المدة',
            explanation: 'إبرام عقد عمل محدد المدة لشغل منصب عمل دائم هو تصرف مخالف لأحكام القانون 90-11؛ فالأصل في مناصب العمل الدائمة هو عقد العمل غير محدد المدة (CDI). بناءً عليه، يعتبر هذا العقد باطلاً في شرط مدته وينقلب قانوناً بقوة القانون إلى عقد عمل غير محدد المدة.',
            score: '2.0 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'الوصف القانوني للتسريح',
            explanation: 'التسريح الذي تم شفهياً وبدون مبرر جدي ومخالفاً للإجراءات التأديبية المنصوص عليها قانوناً (غياب إخطار، غياب خطأ جسيم، غياب سماع دفاع العامل) يكيّف قانوناً على أنه "تسريح تعسفي وغير قانوني".',
            score: '2.0 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'حقوق وتعويضات العامل',
            explanation: 'يحق للعامل اللجوء لمكتب المصالحة بمفتشية العمل ثم محكمة شؤون العمل للمطالبة بـ:\n1. إعادة إدماجه في منصب عمله مع الاحتفاظ بجميع حقوقه المكتسبة.\n2. وفي حالة رفض الطرفين أو أحدهما، يمنح العامل تعويضاً مالياً جابراً للضرر لا يقل عن الأجر الذي كان يتقاضاه لمدة 6 أشهر.\n3. التعويض عن الإخطار المسبق وعن العطل السنوية المدفوعة غير المستهلكة وشهادة العمل.',
            score: '2.0 ن',
          },
        ],
      },
    ],
  },

  // ============================================================
  // اللغة الأجنبية الثالثة - 3AS لغات أجنبية (اللغة الإسبانية)
  // ============================================================
  {
    id: 'lang3_3as_spanish_past_tenses',
    title: 'اللغة الإسبانية للبكالوريا: Los Tiempos del Pasado (Indefinido vs Imperfecto) والقواعد',
    unitTitle: 'الوحدة 1: قواعد الأزمنة والتعبير المنهجي (المخطط السنوي - الفصل 1)',
    trimester: 1,
    subjectId: 'lang3_3as_fl',
    gradeId: '3as',
    streamId: 'foreign_lang',
    order: 1,
    durationEstimate: '45 دقيقة',
    description: 'دراسة شاملة للأزمنة الماضية في اللغة الإسبانية لشهادة البكالوريا: تصريف واستعمال El Pretérito Indefinido (الماضي البسيط للأحداث المكتملة) في مقابل El Pretérito Imperfecto (الماضي المستمر للوصف والعادات)، الكلمات المفتاحية الدالة، وتطبيق منهجية الإجابة عن أسئلة النص والفقرة التعبيرية.',
    objectives: [
      'تصريف الأفعال المنتظمة والشاذة (Irregulares) في زمن Pretérito Indefinido',
      'تصريف الأفعال في زمن Pretérito Imperfecto واستيعاب الأفعال الثلاثة الشاذة فقط (Ser, Ir, Ver)',
      'التمييز الاستعمالي بين سرد حدث محدد بدقة (Indefinido) ووصف الحالة أو العادة القديمة (Imperfecto)',
      'إتقان سؤال القواعد والتحويل الزمني المعتمد في مواضيع البكالوريا الرسمية',
    ],
    videoResources: [
      {
        id: 'vid_spanish_bac_1',
        teacherName: 'الأستاذة خديجة إسبانية',
        teacherTitle: 'أستاذة متميزة في اللغة الإسبانية للثانوي ومصححة رسمية للبكالوريا',
        videoTitle: 'شرح أزمنة الماضي Indefinido vs Imperfecto للبكالوريا مع تطبيقات وزارية',
        duration: '40:15',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '720p HD',
        channelName: 'قناة الإسبانية للبكالوريا',
        viewsCount: '310K مشاهدة',
        notes: 'طريقة حفظ الأفعال الشاذة وتفادي أخطاء النبرة (Acento) في التصريف.',
      },
    ],
    writtenSummary: {
      introduction: 'تعتبر اللغة الإسبانية مادة مميزة وأساسية لشعبة اللغات الأجنبية (معامل 5). يركز امتحان البكالوريا بشكل مكثف على التحكم في الأزمنة والتحويل القواعدي والقدرة على كتابة فقرة معبرة خالية من الأخطاء.',
      sections: [
        {
          title: '1. El Pretérito Indefinido (الماضي المنتهي المحدد)',
          content: 'يستعمل للتعبير عن أحداث وقعت وانتهت في نقطة زمنية محددة من الماضي دون اتصال بالحاضر.\nعلاماته الزمنية: ayer (أمس), anoche (البارحة ليلاً), el año pasado (العام الماضي), en 1962, hace dos días.\nتصريف الأفعال المنتظمة:\n- أفعال -AR (مثل Hablar): hablé, hablaste, habló, hablamos, hablasteis, hablaron.\n- أفعال -ER / -IR (مثل Comer / Vivir): comí, comiste, comió, comimos, comisteis, comieron.\nأفعال شاذة هامة جداً:\n- Ser / Ir: fui, fuiste, fue, fuimos, fuisteis, fueron.\n- Estar: estuve, estuviste, estuvo, estuvimos, estuvisteis, estuvieron.\n- Tener: tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron.\n- Hacer: hice, hiciste, hizo, hicimos, hicisteis, hicieron.',
          keyRules: [
            'انتبه جيداً إلى الأكسنت في ضمير yo و él/ella: habló / comió',
          ],
        },
        {
          title: '2. El Pretérito Imperfecto (الماضي الناقص المستمر)',
          content: 'يستعمل للوصف في الماضي (la descripción)، والتعبير عن العادات والتكرار (las costumbres).\nعلاماته: siempre (دائماً), todos los días (كل يوم), antes (من قبل), a menudo (غالباً).\nتصريف الأفعال المنتظمة:\n- أفعال -AR (مثل Cantar): cantaba, cantabas, cantaba, cantábamos, cantabais, cantaban.\n- أفعال -ER / -IR (مثل Comer): comía, comías, comía, comíamos, comíais, comían.\nيوجد في الإسبانية 3 أفعال شاذة فقط في هذا الزمن:\n1. Ser: era, eras, era, éramos, erais, eran.\n2. Ir: iba, ibas, iba, íbamos, ibais, iban.\n3. Ver: veía, veías, veía, veíamos, veíais, veían.',
        },
      ],
      mindMapPoints: [
        'Indefinido: حدث مكتمل، تاريخ محدد (ayer, en 1954)',
        'Imperfecto: وصف، عادة، تكرار (antes, siempre, todos los días)',
        'الأفعال الشاذة في Imperfecto هي 3 فقط: Ser, Ir, Ver',
      ],
      conclusionOrAdvice: 'في امتحان البكالوريا، سؤال تصريف الأفعال بين قوسين يمنح نقطتين إلى 3 نقاط كاملة. ابحث أولاً عن المؤشر الزمني في الجملة (مثل ayer أو siempre) لتحديد الزمن المطلوب مباشرة.',
    },
    exercises: [
      {
        id: 'ex_spanish_3as_1',
        title: 'تمرين بكالوريا: Conjugación y concordancia de tiempos',
        difficulty: 'متوسط',
        points: 5,
        question: 'Pon los verbos entre paréntesis en el tiempo adecuado del pasado (Indefinido o Imperfecto):\n1. El año pasado, los estudiantes (aprobar) el examen de selectividad con éxito.\n2. Cuando nosotros (ser) niños, siempre (jugar) en el parque del barrio.\n3. Ayer, la profesora (explicar) la lección y los alumnos la (comprender) bien.',
        hint: 'الجملة 1 و 3 تحتويان على مؤشرات محددة (el año pasado, ayer)، بينما الجملة 2 تعبر عن عادة ووصف في الطفولة.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'الجملة الأولى',
            explanation: 'المؤشر "El año pasado" يدل على حدث منتهٍ ومحدد في الماضي، إذن نصرف في Pretérito Indefinido:\n- aprobó / aprobaron (الضمير هو los estudiantes = ellos):\naprobaron.',
            score: '1.5 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'الجملة الثانية',
            explanation: 'الجملة تعبر عن حالة مستمرة في الطفولة وعادة متكررة مع كلمة "siempre"، إذن نصرف في Pretérito Imperfecto:\n- ser مع nosotros: éramos.\n- jugar مع nosotros: jugábamos.',
            score: '2.0 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'الجملة الثالثة',
            explanation: 'المؤشر "Ayer" يدل على حدث محدد، إذن Pretérito Indefinido:\n- explicar مع la profesora (ella): explicó.\n- comprender مع los alumnos (ellos): comprendieron.',
            score: '1.5 ن',
          },
        ],
      },
    ],
  },
];

