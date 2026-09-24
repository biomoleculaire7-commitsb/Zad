import { Lesson, QuizQuestion } from '../types';

// Curated comprehensive questions for Algerian Secondary School Curriculum (1AS, 2AS, 3AS)
export const SUBJECT_TOPIC_QUIZZES: Record<string, QuizQuestion[]> = {
  // ==========================================
  // MATHEMATICS 3AS
  // ==========================================
  '3as_math_exp': [
    {
      id: 'q_3as_exp_1',
      question: 'ما هي قيمة النهاية الشهيرة للتزايد المقارن: lim (e^x / x) لما يؤول x إلى +∞ ؟',
      options: ['0', '1', '+∞', '-∞'],
      correctIndex: 2,
      explanation: 'وفق مبرهنة التزايد المقارن، فإن الدالة الأسية تتغلب على الدالة القوة في اللانهاية، ويكون lim (e^x / x) = +∞ عند +∞.'
    },
    {
      id: 'q_3as_exp_2',
      question: 'مشتقة الدالة المركبة f(x) = e^(u(x)) حيث u دالة قابلة للاشتقاق هي:',
      options: ['f\'(x) = e^(u(x))', 'f\'(x) = u\'(x) · e^(u(x))', 'f\'(x) = u\'(x) · e^(u(x) - 1)', 'f\'(x) = e^(u\'(x))'],
      correctIndex: 1,
      explanation: 'مشتقة مركب دالة أسية هي جداء مشتقة الأس في العبارة الأسية نفسها: (e^u)\' = u\' · e^u.'
    },
    {
      id: 'q_3as_exp_3',
      question: 'حلول المعادلة e^(2x) - 3e^x + 2 = 0 في المجموعة R هي:',
      options: ['S = {0, ln(2)}', 'S = {1, 2}', 'S = {ln(1), ln(3)}', 'لا توجد حلول حقيقية'],
      correctIndex: 0,
      explanation: 'بوضع X = e^x > 0، تصبح المعادلة: X² - 3X + 2 = 0 التي تعطي حلين: X = 1 أي x = ln(1) = 0، أو X = 2 أي x = ln(2).'
    },
    {
      id: 'q_3as_exp_4',
      question: 'إشارة المقدار (e^x - 1) على R هي:',
      options: ['موجبة دوماً على R', 'سالبة على ]-∞; 0[ وموجبة على ]0; +∞[ وتعدم عند 0', 'سالبة دوماً على R', 'موجبة على ]-∞; 0['],
      correctIndex: 1,
      explanation: 'بما أن e^0 = 1، فإن e^x < 1 لما x < 0 و e^x > 1 لما x > 0، وبالتالي تنعدم عند 0 وتغير إشارتها.'
    },
    {
      id: 'q_3as_exp_5',
      question: 'المستقيم المقارب الأفقي لمنحنى الدالة f(x) = e^x + 2 بجوار -∞ هو:',
      options: ['y = 0', 'y = 2', 'x = 2', 'y = -2'],
      correctIndex: 1,
      explanation: 'بما أن lim e^x = 0 عند -∞، فإن lim f(x) = 0 + 2 = 2، إذن المستقيم ذو المعادلة y = 2 مستقيم مقارب أفقي بجوار -∞.'
    }
  ],

  '3as_math_ln': [
    {
      id: 'q_3as_ln_1',
      question: 'مجموعة تعريف الدالة f(x) = ln(2x - 4) هي:',
      options: ['R', ']0; +∞[', ']2; +∞[', '[2; +∞['],
      correctIndex: 2,
      explanation: 'تشترط الدالة اللوغاريتمية أن يكون ما بداخلها موجباً تماماً: 2x - 4 > 0 أي 2x > 4 ومنه x > 2، إذن المجال هو ]2; +∞[.'
    },
    {
      id: 'q_3as_ln_2',
      question: 'ما هي قيمة النهاية الشهيرة: lim (x · ln(x)) لما يؤول x إلى 0 بقيم كبرى ؟',
      options: ['1', '-∞', '0', '+∞'],
      correctIndex: 2,
      explanation: 'بالتزايد المقارن، فإن نهاية x · ln(x) عند 0 بقيم كبرى تساوي 0 (وهي نهاية شهيرة تزيل حالة عدم التعيين).'
    },
    {
      id: 'q_3as_ln_3',
      question: 'الخاصية الجبرية الصحيحة للوغاريتم النيبيري هي:',
      options: ['ln(a + b) = ln(a) · ln(b)', 'ln(a / b) = ln(a) - ln(b)', 'ln(a · b) = ln(a) + ln(b)²', 'ln(a^n) = (ln(a))^n'],
      correctIndex: 1,
      explanation: 'من الخواص الجبرية الأساسية للوغاريتم: لوغاريتم الكسر يساوي فرق اللوغاريتمين: ln(a/b) = ln(a) - ln(b) لأي عددين موجبين تماماً.'
    },
    {
      id: 'q_3as_ln_4',
      question: 'مشتقة الدالة f(x) = ln(x² + 1) على R هي:',
      options: ['f\'(x) = 1 / (x² + 1)', 'f\'(x) = 2x / (x² + 1)', 'f\'(x) = 2x · ln(x² + 1)', 'f\'(x) = x / (x² + 1)'],
      correctIndex: 1,
      explanation: 'مشتقة الدالة ln(u) هي u\' / u. هنا u(x) = x² + 1 ومشتقتها u\'(x) = 2x، إذن f\'(x) = 2x / (x² + 1).'
    }
  ],

  '3as_math_sequences': [
    {
      id: 'q_3as_seq_1',
      question: 'الخطوة الأولى الإلزامية في البرهان بالتراجع لخاصية P(n) هي:',
      options: ['فرض صحة P(n+1)', 'التحقق من صحة الخاصية من أجل الرتبة الابتدائية n0', 'حساب نهاية المتتالية', 'إثبات أن المتتالية هندسية'],
      correctIndex: 1,
      explanation: 'مبدأ الاستدلال بالتراجع ينطلق وجوباً من مرحلة التحقق (الرتبة الابتدائية)، ثم فرضية التراجع، ثم برهان صحة P(n+1).'
    },
    {
      id: 'q_3as_seq_2',
      question: 'إذا كانت المتتالية (Un) متزايدة ومحدودة من الأعلى بعدد حقيقي M، فإنها:',
      options: ['متباعدة نحو +∞', 'متقاربة بالضرورة نحو نهاية l ≤ M', 'متناوبة الإشارة', 'غير متقاربة'],
      correctIndex: 1,
      explanation: 'حسب مبرهنة التقارب المونوتوني: كل متتالية عددية متزايدة ومحدودة من الأعلى هي متتالية متقاربة حتماً.'
    },
    {
      id: 'q_3as_seq_3',
      question: 'مجموع n حداً الأولى لمتتالية هندسية (Vn) أساسها q ≠ 1 وحدها الأول V0 يعطى بالعلاقة:',
      options: ['Sn = V0 · [(1 - q^n) / (1 - q)]', 'Sn = n · (V0 + Vn) / 2', 'Sn = V0 · q^(n-1)', 'Sn = (1 - q) / (1 - q^n)'],
      correctIndex: 0,
      explanation: 'قانون مجموع حدود متتالية هندسية هو الحد الأول مضروباً في كسر (1 - q^(عدد الحدود)) على (1 - q).'
    },
    {
      id: 'q_3as_seq_4',
      question: 'تكون المتتالية الهندسية ذات الأساس q متقاربة ونهايتها 0 إذا وفقط إذا كان الأساس محصوراً في:',
      options: ['q > 1', '-1 < q < 1', 'q ≥ 1', 'q ≤ -1'],
      correctIndex: 1,
      explanation: 'إذا كان |q| < 1 (أي -1 < q < 1) فإن lim (q^n) = 0 لما n يؤول إلى +∞، وتكون المتتالية متقاربة نحو الصفر.'
    }
  ],

  // ==========================================
  // PHYSICS 3AS
  // ==========================================
  '3as_phys_kinetics': [
    {
      id: 'q_3as_kin_1',
      question: 'يُعرّف زمن نصف التفاعل t_{1/2} بأنه الزمن اللازم لـ:',
      options: ['توقف التفاعل الكيميائي كلياً', 'وصول تقدم التفاعل إلى نصف قيمته النهائية x_f / 2', 'استهلاك نصف حجم المحلول', 'مضاعفة السرعة الحجمية مرتين'],
      correctIndex: 1,
      explanation: 'زمن نصف التفاعل t_{1/2} هو المدة الزمنية اللازمة لبلوغ التقدم نصف قيمته النهائية: x(t_{1/2}) = x_f / 2 (أو x_max / 2 في التفاعلات التامة).'
    },
    {
      id: 'q_3as_kin_2',
      question: 'العبارة الصحيحة للسرعة الحجمية للتفاعل الكيميائي v_vol هي:',
      options: ['v_vol = (1 / V_tot) · (dx / dt)', 'v_vol = V_tot · (dx / dt)', 'v_vol = - (dx / dt)', 'v_vol = dx / dt'],
      correctIndex: 0,
      explanation: 'السرعة الحجمية للتفاعل هي مشتق التقدم x بالنسبة للزمن مقسوماً على الحجم الكلي للمزيج التفاعلي V_tot.'
    },
    {
      id: 'q_3as_kin_3',
      question: 'تأثير زيادة درجة الحرارة والتركيز الابتدائي للمتفاعلات على سرعة التفاعل هو:',
      options: ['إنقاص سرعة التفاعل وزيادة مدته', 'تسريع التفاعل لأنها تزيد من تواتر الصدمات الفعالة', 'لا تؤثر إطلاقاً على مدة التفاعل', 'توقف التفاعل فوراً'],
      correctIndex: 1,
      explanation: 'درجة الحرارة والتراكيز الابتدائية عوامل حركية تؤدي زيادتها إلى رفع الطاقة الحركية وتواتر التصادمات الفعالة بين الجزيئات مما يسرع التفاعل.'
    },
    {
      id: 'q_3as_kin_4',
      question: 'في المتابعة عن طريق قياس الناقلية الكهربائية، يشترط في التحول الكيميائي المدروس أن:',
      options: ['يحتوي على غازات منطلقة فقط', 'يحتوي المزيج التفاعلي على شوارد وتتغير تراكيزها خلال التفاعل', 'تكون درجة الحرارة متغيرة باستمرار', 'يحدث في وسط جاف تماماً'],
      correctIndex: 1,
      explanation: 'تعتمد الناقلية G أو الناقلية النوعية σ على وجود شوارد في الوسط وحركيتها، وتغير تراكيزها مع تقدم التفاعل هو ما يمكننا من المتابعة الزمنية.'
    }
  ],

  '3as_phys_mechanics': [
    {
      id: 'q_3as_mech_1',
      question: 'المرجع المناسب لدراسة حركة الأقمار الاصطناعية التي تدور حول كوكب الأرض هو:',
      options: ['المرجع السطحي الأرضي', 'المرجع الجيو مركزي (المركزي الأرضي)', 'المرجع الهيليومركزي (المركزي الشمسي)', 'مرجع كوبرنيكوس'],
      correctIndex: 1,
      explanation: 'المرجع المركزي الأرضي (الجيو مركزي) مبدؤه مركز الأرض ومحاوره موجهة نحو ثلاثة نجوم بعيدة ثابتة، وهو المرجع العطالي المناسب لحركة الأقمار حول الأرض.'
    },
    {
      id: 'q_3as_mech_2',
      question: 'القمر الاصطناعي الجيومستقر هو قمر يبدو ساكناً بالنسبة لملاحظ على سطح الأرض، ومن شروطه الأساسية:',
      options: ['يدور في أي مستوى مداري ويدور عكس اتجاه دوران الأرض', 'يدور في مستوى خط الاستواء، في نفس اتجاه دوران الأرض، ودوره يساوي دور الأرض (24h)', 'يكون ارتفاعه متغيراً بين الليل والنهار', 'دوره المداري 12 ساعة فقط'],
      correctIndex: 1,
      explanation: 'شروط القمر الجيومستقر ثلاثة: يدور في مستو يشمل خط الاستواء، في نفس جهة دوران الأرض حول محورها، وبدور يساوي دور دوران الأرض (T ≈ 24 h = 86400 s).'
    },
    {
      id: 'q_3as_mech_3',
      question: 'في السقوط الشاقولي الحقيقي لجسم صلب في مائع، عند بلوغ السرعة الحدية v_lim يكون:',
      options: ['التسارع أعظمياً a = g', 'التسارع منعدماً a = dv/dt = 0 ومحصلة القوى معدومة', 'دافعة أرخميدس تنعدم', 'السرعة تتناقص تدريجياً'],
      correctIndex: 1,
      explanation: 'عند بلوغ السرعة الحدية تصبح السرعة ثابتة، وبالتالي ينعدم مشتقها (التسارع a = 0)، وتتوازن قوة الثقل مع دافعة أرخميدس وقوة الاحتكاك.'
    },
    {
      id: 'q_3as_mech_4',
      question: 'نص القانون الثالث لكبلر ينص على أن النسبة بين مربع الدور T ومكعب البعد المتوسط r هي:',
      options: ['نسبة متغيرة حسب كتلة الكوكب التابع', 'نسبة ثابتة لجميع الكواكب التي تدور حول نفس المركز الجاذب: T² / r³ = ثابت', 'تساوي الصفر دائماً', 'تتناسب عكساً مع الزمن'],
      correctIndex: 1,
      explanation: 'القانون الثالث لكبلر يثبت أن T² / r³ = 4π² / (G · M)، وهي قيمة ثابتة لا تتعلق إلا بكتلة الجسم المركزي الجاذب (M).'
    }
  ],

  // ==========================================
  // NATURAL SCIENCES 3AS
  // ==========================================
  '3as_sci_protein': [
    {
      id: 'q_3as_bio_1',
      question: 'مقر عملية الاستنساخ الوراثي في الخلية حقيقية النواة هو:',
      options: ['الهيولى (السيتوبلازم)', 'النواة، ويشرف عليها إنزيم ARN بوليميراز', 'الشبكة الهيولية الملساء', 'جهاز كولجي'],
      correctIndex: 1,
      explanation: 'تتم عملية الاستنساخ الحيوي داخل النواة حيث يتم نسخ سلسلة من الـ ADN إلى جزيئة ARNm بواسطة إنزيم ARN بوليميراز.'
    },
    {
      id: 'q_3as_bio_2',
      question: 'الرامزة المسؤولة عن انطلاق عملية الترجمة في الـ ARNm وتشفير الحمض الأميني ميثيونين هي:',
      options: ['UAA', 'AUG', 'UGA', 'UAG'],
      correctIndex: 1,
      explanation: 'رامزة الانطلاق العالمية هي AUG، وهي تشفر للحمض الأميني الميثيونين (Met) وتبدأ عندها القراءة الريبوزومية.'
    },
    {
      id: 'q_3as_bio_3',
      question: 'الروابط الكيميائية المسؤولة عن الحفاظ على البنية الفراغية الثالثية للبروتينات تشمل:',
      options: ['الروابط الببتيدية فقط', 'الجسور ثنائية الكبريت، الروابط الهيدروجينية، الشاردية، والتجاذب الكاره للماء', 'الروابط الفوسفاتية فقط', 'الروابط الفلزية'],
      correctIndex: 1,
      explanation: 'تستقر البنية الثالثية بفضل 4 أنواع من الروابط بين الجذور الجانبية للأحماض الأمينية: الهيدروجينية، الشاردية، الكارهة للماء، وجسور ثنائي الكبريت التكافئية.'
    },
    {
      id: 'q_3as_bio_4',
      question: 'تتميز الإنزيمات بصفة التخصص الوظيفي المزدوج، والمقصود به:',
      options: ['العمل في درجتي حرارة مختلفتين', 'نوعي لمادة التفاعل (الركيزة) ونوعي لنوع التفاعل الكيميائي', 'التأثير داخل الخلية وخارجها', 'تفكيك وتركيب المواد في آن واحد'],
      correctIndex: 1,
      explanation: 'التخصص المزدوج للإنزيم يعني أنه نوعي تجاه مادة التفاعل (الركيزة S) ونوعي تجاه طبيعة التفاعل المحفز (أكسدة، إماهة، فسفرة...).'
    }
  ],

  // ==========================================
  // PHILOSOPHY 3AS
  // ==========================================
  '3as_philo_science': [
    {
      id: 'q_3as_phil_1',
      question: 'العائق الإبستيمولوجي الأساسي الذي واجه تطبيق المنهج التجريبي على المادة الحية هو:',
      options: ['عدم توفر المخابر', 'تشابك الأعضاء، صعوبة العزل، وسرعة هلاك العضو الحي عند تشريحه', 'ثبات شكل الكائنات الحية تماماً', 'بساطة الظاهرة البيولوجية مقارنة بالفيزيائية'],
      correctIndex: 1,
      explanation: 'تتميز المادة الحية بالتشابك والوحدة العضوية الوظيفية الحتمية والغائية، فنزع أي عضو أو فصله يؤدي لتغيير طبيعته أو موت الكائن الحي.'
    },
    {
      id: 'q_3as_phil_2',
      question: 'الفيلسوف والطبيب الفيزيولوجي الذي أثبت إمكانية تطبيق المنهج التجريبي في البيولوجيا هو:',
      options: ['رينيه ديكارت', 'كلود برنارد (Claude Bernard) في كتابه مدخل لدراسة الطب التجريبي', 'أوغست كونت', 'جون لوك'],
      correctIndex: 1,
      explanation: 'كلود برنارد هو رائد المنهج التجريبي في علم الأحياء، حيث أكد أن شروط المادة الحية تخضع لنفس الحتمية التي تخضع لها المادة الجامدة.'
    },
    {
      id: 'q_3as_phil_3',
      question: 'يرى أصحاب النزعة الإحيائية (Vitalisme) بزعامة كزافييه بيشا أن الحياة:',
      options: ['ميكانيكا فيزيائية محضة', 'مجموعة من القوى الحيوية المقاومة للموت التي لا تخضع لقوانين الفيزياء والكيمياء', 'ظاهرة رياضية رقمية', 'تخضع للتنبؤ الدقيق والحتمية الصارمة'],
      correctIndex: 1,
      explanation: 'عرّف بيشا الحياة بأنها: "مجموع القوى التي تقاوم الموت"، واعتبر أن المادة الحية تسيرها قوة حيوية باطنية خاصة لا يمكن إخضاعها للتجريب الجامد.'
    },
    {
      id: 'q_3as_phil_4',
      question: 'في منهجية المقال الفلسفي الجدلي، المرحلة التي تلي عرض النقيضين ومناقشتهما تسمى:',
      options: ['طرح المشكلة', 'التركيب (التجاوز أو التوفيق)', 'التحليل اللغوي', 'الملاحظة الحسية'],
      correctIndex: 1,
      explanation: 'في المقالة الجدلية، بعد عرض الأطروحة ونقدها، ونقيض الأطروحة ونقده، تأتي محطة التركيب للتوفيق بينهما أو تغليب أحدهما أو تجاوزهما معاً.'
    }
  ],

  // ==========================================
  // ISLAMIC STUDIES (1AS, 2AS, 3AS)
  // ==========================================
  'islamic_sharia_purposes': [
    {
      id: 'q_isl_1',
      question: 'مقاصد الشريعة الإسلامية الضرورية (الكليات الخمس) مرتبة حسب الأهمية هي:',
      options: ['حفظ المال، ثم النفس، ثم العقل، ثم النسل، ثم الدين', 'حفظ الدين، النفس، العقل، النسل (العرض)، والمال', 'حفظ الصحة والبيئة والوطن والتجارة', 'حفظ المصالح الدنيوية فقط'],
      correctIndex: 1,
      explanation: 'ترتيب الكليات الخمس الضرورية في الفقه الإسلامي يقدم حفظ الدين أولاً، ثم النفس، ثم العقل، ثم النسل/العرض، ثم المال.'
    },
    {
      id: 'q_isl_2',
      question: 'المقاصد الحاجية في الشريعة الإسلامية هي ما يُحتاج إليه من أجل:',
      options: ['حماية أصل الوجود الإنساني من الانعدام', 'رفع الحرج والمشقة والتيسير على الناس (كالرخص الشرعية)', 'تحسين المظهر والأخذ بمكارم الأخلاق', 'فرض العقوبات والحدود الجنائية'],
      correctIndex: 1,
      explanation: 'الحاجيات هي ما يحتاجه الناس للتوسعة ورفع الضيق والمشقة؛ وفواتها لا يهدد أصل الحياة لكنه يوقع في الحرج والعنت (مثل رخص السفر والمرض).'
    },
    {
      id: 'q_isl_3',
      question: 'من وسائل القرآن الكريم لتثبيت العقيدة الإسلامية إثارة الوجدان، والمقصود بها:',
      options: ['الرد على شبهات الملحدين بالمنطق الرياضي', 'تحريك المشاعر والانفعالات الفطرية بذكر نعم الله ومظاهر رحمته وعذابه', 'حفظ نصوص الآيات غيباً', 'فرض الإيمان بالإكراه'],
      correctIndex: 1,
      explanation: 'إثارة الوجدان تكون بدغدغة المشاعر الفطرية للإنسان ولفت انتباهه إلى جميل صنع الله ورحمته لتتحرك عاطفته نحو محبة الخالق وخشيته.'
    }
  ],

  // ==========================================
  // HISTORY & GEOGRAPHY (1AS, 2AS, 3AS)
  // ==========================================
  'history_revolution': [
    {
      id: 'q_hist_1',
      question: 'تاريخ انعقاد مؤتمر الصومام التاريخي وهدفه الأساسي هو:',
      options: ['1 نوفمبر 1954 لإعلان الثورة', '20 أوت 1956 لإعادة هيكلة وتنظيم الثورة التحريرية سياسياً وعسكرياً', '19 مارس 1962 لتوقيع وقف إطلاق النار', '8 ماي 1945 لتنظيم المظاهرات'],
      correctIndex: 1,
      explanation: 'عُقد مؤتمر الصومام في قرية إيفري بأوزلاقن في 20 أوت 1956، وقام بوضع الهيكل التنظيمي للثورة (المجلس الوطني ومجلس التنسيق والتنفيذ وأولوية الداخل).'
    },
    {
      id: 'q_hist_2',
      question: 'قائد هجومات الشمال القسنطيني في 20 أوت 1955 هو الشهيد البطل:',
      options: ['مصطفى بن بولعيد', 'زيغود يوسف', 'العربي بن مهيدي', 'ديدوش مراد'],
      correctIndex: 1,
      explanation: 'قاد البطل زيغود يوسف (نائب الشهيد ديدوش مراد بالولاية الثانية) هجومات الشمال القسنطيني في 20 أوت 1955 لفك الحصار عن الأوراس وتدويل القضية.'
    },
    {
      id: 'q_hist_3',
      question: 'من مبادئ مؤتمر باندونغ بإندونيسيا (1955) التي شكلت منطلق حركة عدم الانحياز:',
      options: ['الانضمام إلى الحلف الأطلسي NATO', 'الاحترام المتبادل لسيادة الدول ودعم حركات التحرر والحياد الإيجابي بين المعسكرين', 'دعم الاستعمار التقليدي', 'تقسيم العالم إلى منطقتي نفوذ'],
      correctIndex: 1,
      explanation: 'شكل مؤتمر باندونغ 1955 النواة لحركة عدم الانحياز، معلناً مبادئ التضامن الأفرو-آسيوي، والحياد الإيجابي، ودعم حق الشعوب المستعمرة في تقرير مصيرها.'
    }
  ],

  // ==========================================
  // ARABIC LANGUAGE & LITERATURE
  // ==========================================
  'arabic_literature': [
    {
      id: 'q_arab_1',
      question: 'الرابطة القلمية مدرسة أدبية تجديدية تأسست في المهجر الشمالي بنيويورك عام 1920 برئاسة الأديب:',
      options: ['أحمد شوقي', 'جبران خليل جبران ومعه ميخائيل نعيمة وإيليا أبو ماضي', 'طه حسين', 'معروف الرصافي'],
      correctIndex: 1,
      explanation: 'تأسست الرابطة القلمية في نيويورك سنة 1920 وتزعمها جبران خليل جبران وميخائيل نعيمة، وتميزت بالنزعة الإنسانية والتأملية والدعوة للتجديد.'
    },
    {
      id: 'q_arab_2',
      question: 'إعراب كلمة "إذا" في قول الشاعر: "إذا الشّعبُ يوماً أرادَ الحياةَ"',
      options: ['حرف نفي مبني لا محل له من الإعراب', 'ظرف لما يستقبل من الزمان خافض لشرطه منصوب بجوابه مبني على السكون', 'اسم فاعل مرفوع', 'حرف جر شبيه بالزائد'],
      correctIndex: 1,
      explanation: '"إذا" الشرطية غير الجازمة تعرب: ظرفية شرطية غير جازمة مبنية على السكون في محل نصب على الظرفية الزمانية، خافضة لشرطها متعلقة بجوابها.'
    },
    {
      id: 'q_arab_3',
      question: 'الصورة البيانية في العبارة: "طار الخبر في أرجاء الثانوية كالنار في الهشيم" هي:',
      options: ['استعارة مكنية', 'تشبيه تمثيلي تام الأركان', 'كناية عن موصوف', 'مجاز مرسل علاقاته الكلية'],
      correctIndex: 1,
      explanation: 'اجتمعت هنا أركان التشبيه (المشبه: انتشار الخبر، المشبه به: اشتعال النار بالهشيم، الأداة: الكاف، ووجه الشبه: السرعة والشمول)، فهو تشبيه تام وتمثيلي.'
    }
  ],

  // ==========================================
  // 2AS SCIENTIFIC STREAM (MATH, PHYS, SCIENCE)
  // ==========================================
  '2as_math_polynomials': [
    {
      id: 'q_2as_poly_1',
      question: 'إذا كان العدد 2 جذراً لكثير الحدود P(x) = x³ - 3x² + 4، فإن P(x) يقبل القسمة على:',
      options: ['(x + 2)', '(x - 2)', '(x² + 4)', '(2x - 1)'],
      correctIndex: 1,
      explanation: 'مبرهنة الجذور: يكون العدد a جذراً لكثير الحدود P(x) إذا وفقط إذا كان P(x) يقبل القسمة التامة على (x - a).'
    },
    {
      id: 'q_2as_poly_2',
      question: 'إشارة كثير الحدود من الدرجة الثانية f(x) = ax² + bx + c في حالة مميز موجب Δ > 0 تكون:',
      options: ['من إشارة a دوماً على R', 'عكس إشارة a بين الجذرين، ومن إشارة a خارج مجال الجذرين', 'معدومة دوماً', 'عكس إشارة a خارج الجذرين'],
      correctIndex: 1,
      explanation: 'عندما يكون المميز Δ > 0، يقبل كثير الحدود جذرين متمايزين x1 و x2، وتكون إشارته عكس إشارة a داخل مجال الجذرين ومن نفس إشارة a خارجهما.'
    }
  ],

  '2as_phys_work_energy': [
    {
      id: 'q_2as_phys_work_1',
      question: 'عبارة عمل قوة الثقل W(P) لجسم كتلته m ينتقل من ارتفاع zA إلى zB هي:',
      options: ['W(P) = m · g · (zA - zB)', 'W(P) = (1/2) m v²', 'W(P) = - m · g / h', 'W(P) = F · cos(α)'],
      correctIndex: 0,
      explanation: 'عمل الثقل يتعلق بالارتفاع الشاقولي فقط ولا يتعلق بالمسار المتبع: W(P) = m · g · (zA - zB) = ± m·g·h (مساعد في النزول، ومعرقل في الصعود).'
    },
    {
      id: 'q_2as_phys_work_2',
      question: 'نص نظرية الطاقة الحركية لجملة صلبة في حركة انسحابية بين موضعين A و B هو:',
      options: ['Ec(B) - Ec(A) = Σ W(F_ext)', 'Ec(B) + Ec(A) = 0', 'W(F) = Δt / Δv', 'Ec = m · v'],
      correctIndex: 0,
      explanation: 'تنص نظرية الطاقة الحركية على أن تغير الطاقة الحركية لجملة صلبة بين موضعين يساوي المجموع الجبري لأعمال جميع القوى الخارجية المطبقة عليها: ΔEc = Σ W(F).'
    }
  ],

  '2as_sci_nervous': [
    {
      id: 'q_2as_sci_syn_1',
      question: 'الوسيط الكيميائي العصبي المسؤول عن نقل الرسالة العصبية المنبهة في المشبك العصبي العضلي هو:',
      options: ['الأدرينالين', 'الأستيل كولين (Acétylcholine)', 'حمض الغابا (GABA)', 'الدوبامين'],
      correctIndex: 1,
      explanation: 'الأستيل كولين هو المبلغ العصبي الكيميائي النوعي للمشابك التنبيهية في اللوحة المحركة، حيث يحرر في الشق المشبكي ويثبت على مستقبلات الغشاء بعد مشبكي.'
    },
    {
      id: 'q_2as_sci_syn_2',
      question: 'المنعكس العضلي هو فعل لاإرادي يتميز بـ:',
      options: ['ارتخاء العضلة استجابة لتقلصها', 'تقلص العضلة استجابة لمدها وتمددها للحفاظ على وضعية الجسم', 'تثبيط الجهاز العصبي المركزي كلياً', 'تدخل القشرة المخية الواعية فقط'],
      correctIndex: 1,
      explanation: 'يُعرّف المنعكس العضلي بأنه تقلص لاإرادي للعضلة استجابة لتمددها، ومركزه العصبي الانعكاسي هو النخاع الشوكي ويساهم في الحفاظ على توازن الجسم ومقوية العضلات.'
    }
  ],

  // ==========================================
  // 1AS SCIENTIFIC STREAM (MATH, PHYS, SCIENCE, TECH)
  // ==========================================
  '1as_math_vectors': [
    {
      id: 'q_1as_vec_1',
      question: 'شرط الارتباط الخطي لشعاعين u(x; y) و v(x\'; y\') في معلم هو:',
      options: ['x · x\' + y · y\' = 0', 'x · y\' - x\' · y = 0', 'x + y = x\' + y\'', 'x / y = x\' · y\''],
      correctIndex: 1,
      explanation: 'يكون الشعاعان غير المعدومين مرتبطين خطياً (متوازيين) إذا وفقط إذا كان جدائهما المتصالب معدوماً: x · y\' - x\' · y = 0.'
    },
    {
      id: 'q_1as_vec_2',
      question: 'شعاع التوجيه للمستقيم ذي المعادلة الديكارتية ax + by + c = 0 هو:',
      options: ['u(-b; a)', 'u(a; b)', 'u(c; a)', 'u(b; -a)'],
      correctIndex: 0,
      explanation: 'لكل مستقيم ذي معادلة ax + by + c = 0، شعاع توجيهه يعطى بالمركبات u(-b; a) ومعامل توجيهه هو m = -a/b (إذا كان b ≠ 0).'
    }
  ],

  '1as_phys_inertial': [
    {
      id: 'q_1as_phys_inert_1',
      question: 'ينص مبدأ العطالة (القانون الأول لنيوتن) على أنه:',
      options: ['يحافظ كل جسم على سكونه أو حركته المستقيمة المنتظمة إذا لم تتدخل قوة لتغيير حالته الحركية', 'القوة تساوي جداء الكتلة في السرعة', 'كل حركة دائرية هي حركة عطالية', 'الأجسام تسقط بنفس السرعة دائماً بغض النظر عن الكتلة'],
      correctIndex: 0,
      explanation: 'مبدأ العطالة: في مرجع عطالي، يحافظ كل جسم على سكونه أو حركته المستقيمة المنتظمة إذا كانت القوى المؤثرة عليه متوازنة (محصلتها معدومة).'
    },
    {
      id: 'q_1as_phys_inert_2',
      question: 'عندما تكون القوة المؤثرة على جسم موازية لمسار حركته وبنفس اتجاه الحركة، فإن الحركة تكون:',
      options: ['دائرية منتظمة', 'مستقيمة متسارعة', 'مستقيمة متباطئة', 'منحنية منتظمة'],
      correctIndex: 1,
      explanation: 'إذا كان شعاع القوة وشعاع السرعة في نفس الاتجاه، فإن السرعة تتزايد مع الزمن وتكون الحركة مستقيمة متسارعة.'
    }
  ],

  '1as_tech_logic': [
    {
      id: 'q_1as_tech_1',
      question: 'في الجبر البولياني، مخرج البوابة المنطقية "و" (AND / ET) يساوي 1 (صحيح) إذا وفقط إذا:',
      options: ['كان أحد المدخلين على الأقل يساوي 1', 'كان كلا المدخلين A و B يساويان 1 معاً', 'كان كلا المدخلين يساويان 0', 'عُكس أحد المدخلين'],
      correctIndex: 1,
      explanation: 'الدالة المنطقية الجدائية ET (AND) تعطي المخرج 1 حصراً إذا كان كل من A = 1 و B = 1 (S = A · B).'
    },
    {
      id: 'q_1as_tech_2',
      question: 'قانون أوم (Ohm\'s Law) لمقاومة كهربائية R تعبر بواسطة تيار شدته I يعطى بالعلاقة:',
      options: ['U = R · I', 'U = R / I', 'U = I / R', 'P = U + I'],
      correctIndex: 0,
      explanation: 'قانون أوم يربط التوتر بين طرفي ناقل أومي U (بالفولت) بشدة التيار I (بالأمبير) وقيمة المقاومة R (بالأوم): U = R · I.'
    }
  ]
};

// Intelligent generator for any lesson that produces highly relevant curriculum questions
export function generateSmartQuestionsForLesson(lesson: Lesson): QuizQuestion[] {
  const qList: QuizQuestion[] = [];
  const title = lesson.title;
  const unit = lesson.unitTitle;
  const subj = lesson.subjectId.toLowerCase();

  // 1. Objectives question
  if (lesson.objectives && lesson.objectives.length > 0) {
    const mainObj = lesson.objectives[0];
    qList.push({
      id: `smart_obj_${lesson.id}_1`,
      question: `وفقاً للمنهاج الدراسي الرسمي، ما هو الهدف التعليمي الأساسي من درس "${title}" ؟`,
      options: [
        mainObj,
        'حفظ القوانين دون فهم طريقة تطبيقها في التمارين والمسائل',
        'دراسة النظريات القديمة وتجاهل التطبيقات المعاصرة في الامتحانات',
        'تجاهل الشروط النظامية والاعتماد على التخمين العشوائي'
      ],
      correctIndex: 0,
      explanation: `الهدف المحوري المحدد في المنهاج البيداغوجي الرسمي هو: ${mainObj}.`
    });
  }

  // 2. Key Terms question
  if (lesson.writtenSummary.keyTerms && lesson.writtenSummary.keyTerms.length > 0) {
    const firstTerm = lesson.writtenSummary.keyTerms[0];
    const secondTerm = lesson.writtenSummary.keyTerms[1] || {
      term: 'المفهوم البيداغوجي المساعد',
      definition: 'قاعدة تطبيقية إجرائية معتمدة في حل المسائل'
    };

    qList.push({
      id: `smart_term_${lesson.id}_2`,
      question: `ما هو المفهوم العلمي الدقيق للمصطلح البيداغوجي: "${firstTerm.term}" ؟`,
      options: [
        firstTerm.definition,
        secondTerm.definition,
        'ظاهرة عشوائية لا تخضع لقوانين محددة في المنهج',
        'خاصية تقتصر على الظواهر الفيزيائية النظرية دون التطبيقية'
      ],
      correctIndex: 0,
      explanation: `المصطلح "${firstTerm.term}" يُعرّف بدقة علمية بأنه: ${firstTerm.definition}.`
    });

    if (lesson.writtenSummary.keyTerms.length > 1) {
      const term2 = lesson.writtenSummary.keyTerms[1];
      qList.push({
        id: `smart_term2_${lesson.id}_2b`,
        question: `في محور المصطلحات والمفاهيم، ما هو مدلول: "${term2.term}" ؟`,
        options: [
          term2.definition,
          'علاقة عكسية تنفي النتيجة السابقة',
          'فرضية تجريبية غير مثبتة في المنهاج',
          'معيار شكلي لا يؤثر على صحة الاستدلال'
        ],
        correctIndex: 0,
        explanation: `يُقصد بـ "${term2.term}" علمياً: ${term2.definition}.`
      });
    }
  }

  // 3. Section rules / formulas question
  const sectionWithRules = lesson.writtenSummary.sections.find(
    s => (s.keyRules && s.keyRules.length > 0) || (s.formulas && s.formulas.length > 0)
  );

  if (sectionWithRules) {
    if (sectionWithRules.formulas && sectionWithRules.formulas.length > 0) {
      const formula = sectionWithRules.formulas[0];
      qList.push({
        id: `smart_formula_${lesson.id}_3`,
        question: `في محور "${sectionWithRules.title}"، ما هي العلاقة الرياضية أو القانون المنهجي المعتمد؟`,
        options: [
          formula,
          'لا توجد علاقة رياضية محددة بل حسابات تقريبية',
          'قانون حفظ الكتلة البسيط فقط',
          'النسبة المئوية العكسية للقيم الابتدائية'
        ],
        correctIndex: 0,
        explanation: `القانون المنهجي المستعمل في هذا الجزء هو: ${formula}.`
      });
    } else if (sectionWithRules.keyRules && sectionWithRules.keyRules.length > 0) {
      const rule = sectionWithRules.keyRules[0];
      qList.push({
        id: `smart_rule_${lesson.id}_3`,
        question: `ما هي القاعدة المنهجية الأساسية التي يجب مراعاتها عند حل تمارين "${sectionWithRules.title}" ؟`,
        options: [
          rule,
          'تخطي خطوات البرهان والانتقال للنتيجة النهائية مباشرة',
          'عدم الانتباه لشروط الوحدات الدولية وتطبيق الأرقام كما هي',
          'إهمال اتجاه التغير والتركيز على القيم الحدية فقط'
        ],
        correctIndex: 0,
        explanation: `القاعدة البيداغوجية الواجب اتباعها هي: ${rule}.`
      });
    }
  }

  // 4. Important Notes / Common errors
  const sectionWithNotes = lesson.writtenSummary.sections.find(
    s => s.importantNotes && s.importantNotes.length > 0
  );
  if (sectionWithNotes && sectionWithNotes.importantNotes && sectionWithNotes.importantNotes.length > 0) {
    const note = sectionWithNotes.importantNotes[0];
    qList.push({
      id: `smart_note_${lesson.id}_3b`,
      question: `ما هو التنبيه البيداغوجي الحاسم الذي يحذر منه الأساتذة في "${sectionWithNotes.title}" ؟`,
      options: [
        note,
        'عدم استعمال الآلة الحاسبة في أي مرحلة',
        'تجاهل كتابة الوحدات الدولية في النتيجة النهائية',
        'حفظ الأعداد دون فهم مغزاها الفيزيائي أو الرياضي'
      ],
      correctIndex: 0,
      explanation: `التنبيه الرسمي لتفادي الأخطاء الشائعة: ${note}.`
    });
  }

  // 5. Mindmap or conclusion question
  if (lesson.writtenSummary.mindMapPoints && lesson.writtenSummary.mindMapPoints.length > 0) {
    const keyPoint = lesson.writtenSummary.mindMapPoints[0];
    qList.push({
      id: `smart_map_${lesson.id}_4`,
      question: `في الخريطة الذهنية لمراجعة درس "${title}"، ما هي الخطوة أو الركيزة الأولى؟`,
      options: [
        keyPoint,
        'البدء مباشرة بحل التمارين المعقدة دون الإلمام بالتعاريف',
        'تجاهل الشروط النظامية والمجالات الرياضية',
        'حفظ الحلول النموذجية غيباً دون فهم خطوات الاستنتاج'
      ],
      correctIndex: 0,
      explanation: `الركيزة الأساسية في المراجعة المنظمة هي: ${keyPoint}.`
    });
  }

  // 6. Advice & exam methodology question
  if (lesson.writtenSummary.conclusionOrAdvice) {
    qList.push({
      id: `smart_advice_${lesson.id}_5a`,
      question: `ما هي نصيحة الأستاذ الذهبية للتحضير للامتحانات في درس "${title}" ؟`,
      options: [
        lesson.writtenSummary.conclusionOrAdvice,
        'الاكتفاء بقراءة الملخص شفوياً دون محاولة الحل الفردي على المسودة',
        'التركيز على المواضيع القديمة فقط وإهمال بناء المفاهيم الحديثة',
        'تضييع الوقت في استذكار التواريخ والأرقام غير المطلوبة'
      ],
      correctIndex: 0,
      explanation: `النصيحة البيداغوجية المعتمدة هي: ${lesson.writtenSummary.conclusionOrAdvice}.`
    });
  }

  // 7. Subject specific fallback question
  let qSubject = 'ما هي الخطوة الحاسمة لتحقيق أعلى علامة في هذا الموضوع في الامتحان أو البكالوريا؟';
  let qAns = 'فهم التعريف، استخراج المعطيات بدقة، تطبيق القانون بالوحدات الدولية، وصياغة تعليل منطقي سليم.';
  
  if (subj.includes('math')) {
    qSubject = 'عند دراسة سلوك الدوال والعبارات الرياضية في هذا الدرس، ما هو الإجراء الإلزامي قبل الحساب؟';
    qAns = 'تحديد مجموعة التعريف بدقة وشروط قابلية الاشتقاق أو مجالات دراسة الإشارة.';
  } else if (subj.includes('phys')) {
    qSubject = 'في مادة العلوم الفيزيائية، ما هو الشرط الضروري لقبول العلاقات والقوانين عند التطبيق العددي؟';
    qAns = 'التأكد من التوافق البعدي والتحويل الصارم لجميع المقادير إلى جملة الوحدات الدولية (S.I).';
  } else if (subj.startsWith('science_') || subj.includes('طبيع') || subj.includes('snv')) {
    qSubject = 'في مادة علوم الطبيعة والحياة، كيف يجب تقديم الإجابة على أسئلة الاستدلال العلمي والتحليل؟';
    qAns = 'التعريف بالوثيقة، استخراج الملاحظات والدلالات، وإبراز العلاقة السببية وصولاً إلى الاستنتاج.';
  } else if (subj.includes('philo')) {
    qSubject = 'في المقال الفلسفي المتعلق بهذا الموضوع، ما هي المنهجية المتبعة لبناء أطروحة مقنعة؟';
    qAns = 'عرض الموقف، الحجج المنطقية، الاستشهاد بأقوال الفلاسفة الموثقة، ثم النقد والمناقشة.';
  } else if (subj.includes('arab') || subj.includes('أدب')) {
    qSubject = 'في مادة اللغة العربية وآدابها، ما هو المعيار الأساسي للإجابة في أسئلة البناء الفكري واللغوي؟';
    qAns = 'فهم المعنى العام، التعليل المباشر من النص، وتحديد نوع وحكم الظاهرة اللغوية أو البيانية بدقة.';
  } else if (subj.includes('islam')) {
    qSubject = 'في مادة العلوم الإسلامية، ما هو الضابط المنهجي في الاستدلال واستخراج الأحكام والفوائد؟';
    qAns = 'الاستناد إلى النصوص الشرعية الصحيحة (القرآن والسنة) وربطها بالمقصد الشرعي وحكمة التشريع.';
  } else if (subj.includes('hist') || subj.includes('geog')) {
    qSubject = 'في مادة التاريخ والجغرافيا، ما هي المنهجية المعتمدة لتحقيق العلامة الكاملة في المقال والمصطلحات؟';
    qAns = 'مقدمة بإشكالية، الإجابة على شكل عناصر واضحة بالأرقام والتواريخ الدقيقة، وخاتمة كاستنتاج تاريخي.';
  }

  qList.push({
    id: `smart_gen_${lesson.id}_6`,
    question: qSubject,
    options: [
      qAns,
      'الاكتفاء بكتابة النتيجة النهائية دون تبرير أو منهجية',
      'الاعتماد على الحدس التخميني لتوفير الوقت',
      'تكرار نص السؤال كما هو في ورقة الإجابة'
    ],
    correctIndex: 0,
    explanation: `المنهجية الرسمية المعتمدة في تصحيح وزارة التربية تؤكد على: ${qAns}`
  });

  return qList;
}

// Master function to obtain quiz for ANY lesson
export function getLessonQuiz(lesson: Lesson): QuizQuestion[] {
  const combined: QuizQuestion[] = [];
  const seenQuestions = new Set<string>();

  const addQuestion = (q: QuizQuestion) => {
    if (!q || !q.question) return;
    const key = q.question.trim().toLowerCase();
    if (!seenQuestions.has(key)) {
      seenQuestions.add(key);
      combined.push(q);
    }
  };

  // 1. If the lesson already has explicit questions defined in its data object
  if (lesson.quiz && lesson.quiz.length > 0) {
    lesson.quiz.forEach(addQuestion);
  }

  // 2. Check topic-level curated quizzes
  const title = (lesson.title || '').toLowerCase();
  const unit = (lesson.unitTitle || '').toLowerCase();
  const subj = (lesson.subjectId || '').toLowerCase();

  let topicQuestions: QuizQuestion[] | undefined;

  // Math 3AS
  if (subj.includes('math_3as')) {
    if (title.includes('أسية') || title.includes('دوال أسية') || unit.includes('أسية')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['3as_math_exp'];
    } else if (title.includes('لوغاريتم') || title.includes('لوغاريتمية') || unit.includes('لوغاريتم')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['3as_math_ln'];
    } else if (title.includes('متتالي') || title.includes('تراجع') || unit.includes('متتالي')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['3as_math_sequences'];
    }
  } else if (subj.includes('physics_3as')) {
    if (title.includes('حركية') || title.includes('متابعة زمنية') || title.includes('أكسدة') || unit.includes('متابعة')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['3as_phys_kinetics'];
    } else if (title.includes('ميكانيك') || title.includes('نيوتن') || title.includes('قمر') || title.includes('كبلر') || unit.includes('ميكانيك')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['3as_phys_mechanics'];
    }
  } else if (subj.includes('science_3as')) {
    if (title.includes('بروتين') || title.includes('استنساخ') || title.includes('ترجمة') || title.includes('إنزيم')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['3as_sci_protein'];
    }
  } else if (subj.includes('philo')) {
    topicQuestions = SUBJECT_TOPIC_QUIZZES['3as_philo_science'];
  } else if (subj.includes('islamic')) {
    topicQuestions = SUBJECT_TOPIC_QUIZZES['islamic_sharia_purposes'];
  } else if (subj.includes('history')) {
    topicQuestions = SUBJECT_TOPIC_QUIZZES['history_revolution'];
  } else if (subj.includes('arabic')) {
    topicQuestions = SUBJECT_TOPIC_QUIZZES['arabic_literature'];
  } else if (subj.includes('math_2as')) {
    if (title.includes('كثيرات حدود') || title.includes('درجة ثانية')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['2as_math_polynomials'];
    }
  } else if (subj.includes('physics_2as')) {
    if (title.includes('طاقة حركية') || title.includes('عمل') || title.includes('ثقل')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['2as_phys_work_energy'];
    }
  } else if (subj.includes('science_2as')) {
    if (title.includes('منعكس') || title.includes('مشبك') || title.includes('عصبي')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['2as_sci_nervous'];
    }
  } else if (subj.includes('math_1as')) {
    if (title.includes('شعاع') || title.includes('مستقيم') || title.includes('تحليلية')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['1as_math_vectors'];
    }
  } else if (subj.includes('physics_1as')) {
    if (title.includes('عطالة') || title.includes('قوة') || title.includes('سرعة')) {
      topicQuestions = SUBJECT_TOPIC_QUIZZES['1as_phys_inertial'];
    }
  } else if (subj.includes('tech_1as')) {
    topicQuestions = SUBJECT_TOPIC_QUIZZES['1as_tech_logic'];
  }

  if (topicQuestions) {
    topicQuestions.forEach(addQuestion);
  }

  // 3. Fallback and enrich with smart curriculum questions
  const smartQuestions = generateSmartQuestionsForLesson(lesson);
  smartQuestions.forEach(addQuestion);

  // Return at least all combined (usually 5 to 10 questions)
  return combined.length > 0 ? combined : smartQuestions;
}
