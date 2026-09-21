import { Lesson } from '../../types';

export const OFFICIAL_PROGRESSIONS_1AS_LESSONS: Lesson[] = [
  // =========================================================================
  // 1. ENGLISH (اللغة الإنجليزية - 1AS Scientific & Literary)
  // Based on the Official Ministry of National Education Annual Progression (Sept 2018)
  // =========================================================================
  {
    id: 'eng_1as_u1_getting_through',
    title: 'Unit 1: Getting Through - Intercultural Exchanges, Information Tech & Communication',
    unitTitle: 'Unit 1: Getting Through (Official Ministry Progression - Term 1)',
    trimester: 1,
    subjectId: 'english_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 1,
    durationEstimate: '45 mins',
    description: 'Master intercultural communication through modern means (computers, email, Internet). Core grammar includes the Imperative, Sequencers (first, then, next, finally), Modals of necessity and obligation (must, have to, need to), Comparatives of adjectives and adverbs, and expressing purpose (in order to, so as to).',
    objectives: [
      'Name the main parts of a computer and talk about communication technologies',
      'Use sequencers and the imperative to give clear step-by-step instructions',
      'Express obligation and necessity using must, have to, and need to',
      'Apply comparatives (more / less + adj + than) to contrast means of exchange',
      'Write a structured formal email or letter of inquiry / job application',
    ],
    videoResources: [
      {
        id: 'vid_eng_1as_getting_through_1',
        teacherName: 'الأستاذة نادية للإنجليزية',
        teacherTitle: 'أستاذة مكونة لمادة اللغة الإنجليزية للتعليم الثانوي بالجزائر',
        videoTitle: 'Unit 1: Getting Through - All Grammar Rules & Vocabulary for 1AS',
        duration: '42:15',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'English with Nadia Algeria',
        viewsCount: '450K views',
        notes: 'Explains sequencers, modals, and writing an email step-by-step.',
      },
    ],
    writtenSummary: {
      introduction: 'Unit 1 "Getting Through" introduces Secondary Education Year 1 students to the essential communicative and linguistic tools required for international and digital exchange, focusing on computer literacy, correspondence, and instructions.',
      sections: [
        {
          title: '1. Giving Instructions: Imperative & Sequencers',
          content: 'To give clear instructions or write a technical manual:\n- Use the Imperative (infinitive without "to"): e.g., "Click on the icon", "Do not turn off the power".\n- Link steps chronologically using sequencers: First, Secondly, Then, Next, After that, Finally.\nExample: First, connect the cable. Next, switch on the monitor. Finally, enter your password.',
          keyRules: [
            'Imperative affirmative: Base verb (e.g. Save your document)',
            'Imperative negative: Don\'t + Base verb (e.g. Don\'t delete the file)',
          ],
        },
        {
          title: '2. Expressing Obligation and Necessity (Modals)',
          content: '- Must / Have to: Express strong duty or necessity.\n  Example: "You must save your work regularly."\n- Need to: Expresses necessity from the speaker\'s perspective.\n  Example: "I need to upgrade my browser."\n- Lack of obligation: Don\'t have to / Needn\'t.\n  Example: "You don\'t have to print the document; an email is enough."',
          formulas: [
            'Obligation: Subject + must / have to + Base verb',
            'No obligation: Subject + don\'t / doesn\'t have to + Base verb',
          ],
        },
        {
          title: '3. Comparatives of Adjectives & Adverbs',
          content: '- Short adjectives: adj + -er + than (faster than, easier than).\n- Long adjectives: more + adj + than (more convenient than).\n- Inferiority: less + adj + than (less expensive than).\n- Purpose clauses: in order to / so as to / to + infinitive.\n  Example: "He opened his inbox in order to download the attachment."',
        },
      ],
      mindMapPoints: [
        'Imperative + Sequencers: First, Then, Next, Finally',
        'Modals: Must / Have to (obligation), Need to (necessity)',
        'Comparatives: Faster than, More efficient than, Less costly than',
        'Expressing Purpose: in order to, so as to + Base verb',
      ],
      conclusionOrAdvice: 'In exam writing tests, remember to structure your email with formal greetings (Dear Sir/Madam), concise body paragraphs using sequencers, and a polite closing (Yours faithfully/sincerely).',
    },
    exercises: [
      {
        id: 'ex_eng_1as_u1_1',
        title: 'Grammar Practice: Sequencers & Modals of Obligation',
        difficulty: 'متوسط',
        points: 6,
        question: 'A. Put the following instructions for sending an email in chronological order using the sequencers (First, Next, Then, Finally):\n1) Click on the "Send" button.\n2) Write the recipient\'s email address in the "To" field.\n3) Log into your email account.\n4) Compose your message and attach the document.\n\nB. Complete with: must, don\'t have to, or in order to:\n1) You ________ study hard to succeed in the exam.\n2) She went to the cybercafe ________ print her project.\n3) Tomorrow is a public holiday, so we ________ wake up early.',
        hint: 'Start by logging in, then specify the recipient before writing and sending.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'Ordering instructions with sequencers',
            explanation: 'First, log into your email account.\nNext, write the recipient\'s email address in the "To" field.\nThen, compose your message and attach the document.\nFinally, click on the "Send" button.',
            score: '3.0 pts',
          },
          {
            stepNumber: 2,
            stepTitle: 'Filling blanks with modals and purpose linkers',
            explanation: '1) You must study hard to succeed in the exam. (Obligation)\n2) She went to the cybercafe in order to print her project. (Purpose: in order to + infinitive)\n3) Tomorrow is a public holiday, so we don\'t have to wake up early. (Absence of obligation)',
            score: '3.0 pts',
          },
        ],
      },
    ],
  },
  {
    id: 'eng_1as_u2_our_findings',
    title: 'Unit 2: Our Findings Show - Communication, The Press & Reported Speech',
    unitTitle: 'Unit 2: Our Findings Show (Official Ministry Progression - Term 2)',
    trimester: 2,
    subjectId: 'english_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 2,
    durationEstimate: '45 mins',
    description: 'Explore the world of mass media, newspapers, and surveys. Master Direct and Indirect (Reported) Speech, reporting verbs (suggested, ordered, warned, inquired), adverbs of manner (politely, quickly), and expressing contrast (whereas, on the contrary, but).',
    objectives: [
      'Compare sensational newspapers (tabloids) with serious quality broadsheets',
      'Convert direct statements, orders, and questions into reported speech with accurate tense shift',
      'Use suitable reporting verbs instead of repetitive "said" and "told"',
      'Interpret graphs and statistical surveys into concise written reports',
    ],
    videoResources: [
      {
        id: 'vid_eng_1as_reported_speech',
        teacherName: 'الأستاذ ناصر إنجليزية ثانوي',
        teacherTitle: 'مفتش ومنسق مادة الإنجليزية للطور الثانوي',
        videoTitle: 'Direct and Indirect Speech for 1AS - Complete Lesson with Rules',
        duration: '38:40',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'English BAC Algeria',
        viewsCount: '310K views',
        notes: 'Covers tense backshifting and changes in pronouns and time indicators.',
      },
    ],
    writtenSummary: {
      introduction: 'Unit 2 focuses on media literacy, conducting questionnaires, and accurately reporting information using Reported Speech.',
      sections: [
        {
          title: '1. Direct to Reported Speech: Tense Backshift',
          content: 'When the reporting verb is in the past (e.g. He said that...):\n- Present Simple -> Past Simple ("I read books" -> He said that he read books)\n- Present Continuous -> Past Continuous ("I am writing" -> He said that he was writing)\n- Past Simple / Present Perfect -> Past Perfect ("I saw it" -> He said that he had seen it)\n- Will -> Would | Can -> Could | May -> Might',
          keyRules: [
            'Now -> Then | Today -> That day | Yesterday -> The day before | Tomorrow -> The next day',
            'Here -> There | This -> That | These -> Those',
          ],
        },
        {
          title: '2. Reported Questions and Orders',
          content: '- Wh-questions: Retain the question word + affirmative word order (Subject + Verb).\n  Example: "Where do you live?" -> He asked me where I lived.\n- Yes/No questions: Use "if" or "whether".\n  Example: "Do you read the press?" -> She asked if I read the press.\n- Orders / Requests: reporting verb + object + to / not to + verb.\n  Example: "Be polite" -> The journalist urged him to be polite.',
        },
      ],
      mindMapPoints: [
        'Direct Speech: Uses inverted commas "..."',
        'Reported Speech: Shift tense backwards when reporting verb is in the past',
        'Reporting Verbs: declared, stated, suggested, advised, questioned',
      ],
      conclusionOrAdvice: 'Remember never to use question marks or quotation marks in reported speech.',
    },
    exercises: [
      {
        id: 'ex_eng_1as_u2_1',
        title: 'Reported Speech Mastery: Transforming Statements and Questions',
        difficulty: 'متوسط',
        points: 6,
        question: 'Rewrite sentence (b) so that it means the same as sentence (a):\n1. a) The editor said: "Our magazine publishes verified facts."\n   b) The editor stated that ______________________________.\n2. a) "Why are you interviewing this scientist?" the reporter asked.\n   b) The reporter asked me ______________________________.\n3. a) "Don\'t believe fake news on social media," the teacher warned the students.\n   b) The teacher warned the students _____________________.',
        hint: 'Change publishes to published, remove the question format in 2, and use "not to" for negative imperatives.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'Transforming statement 1',
            explanation: 'The editor stated that their magazine published verified facts. (Our -> their, publishes -> published).',
            score: '2.0 pts',
          },
          {
            stepNumber: 2,
            stepTitle: 'Transforming question 2',
            explanation: 'The reporter asked me why I was interviewing that scientist. (Why + subject I + was interviewing + this -> that).',
            score: '2.0 pts',
          },
          {
            stepNumber: 3,
            stepTitle: 'Transforming negative order 3',
            explanation: 'The teacher warned the students not to believe fake news on social media.',
            score: '2.0 pts',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 2. FRENCH (اللغة الفرنسية - 1AS)
  // Based on the Official Progression: Le texte explicatif & Le discours argumentatif
  // =========================================================================
  {
    id: 'fr_1as_p1_texte_vulgarisation',
    title: 'Projet 1: Les textes de vulgarisation de l\'information scientifique (Le texte explicatif)',
    unitTitle: 'Projet 1: Vulgarisation scientifique (Programme officiel 1AS - 1er Trimestre)',
    trimester: 1,
    subjectId: 'french_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 1,
    durationEstimate: '45 mins',
    description: 'Comprendre et analyser les textes explicatifs et de vulgarisation scientifique. Étude approfondie des procédés explicatifs (définition, illustration, reformulation, dénomination, comparaison), du système énonciatif objectif (effacement de l\'auteur, passif, tournures impersonnelles), et techniques du résumé.',
    objectives: [
      'Repérer les caractéristiques d\'un texte explicatif de vulgarisation scientifique',
      'Identifier les procédés explicatifs: définition, reformulation, illustration, comparaison',
      'Analyser le système énonciatif objectif: tournures impersonnelles, présent de vérité générale',
      'Rédiger un résumé objectif en supprimant les détails secondaires',
    ],
    videoResources: [
      {
        id: 'vid_fr_1as_explicatif',
        teacherName: 'الأستاذ منصوري للفرنسية',
        teacherTitle: 'أستاذ منسق لمادة اللغة الفرنسية للتعليم الثانوي بالجزائر',
        videoTitle: 'Projet 1: Le texte de vulgarisation scientifique - Tous les procédés explicatifs',
        duration: '40:30',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'Français Lycée Algérie',
        viewsCount: '380K vues',
        notes: 'Explication détaillée avec exemples de textes officiels des épreuves de 1AS.',
      },
    ],
    writtenSummary: {
      introduction: 'Le texte de vulgarisation scientifique vise à transmettre un savoir spécialisé à un public non spécialiste avec clarté, rigueur et objectivité.',
      sections: [
        {
          title: '1. Les procédés explicatifs fondamentaux',
          content: '- La définition: Donne le sens précis d\'un terme ("Le réchauffement climatique est l\'augmentation continue des températures moyennes").\n- La reformulation: Réexplique un terme en d\'autres mots ("c\'est-à-dire", "en d\'autres termes").\n- L\'illustration: Fournit un exemple concret ("par exemple", "comme", "tel que").\n- La comparaison: Rapproche deux faits pour faciliter la compréhension ("à l\'image de", "comme").\n- La dénomination: Attribue un nom scientifique ("appelé", "qualifié de").',
          keyRules: [
            'Objectivité absolue: Absence de pronoms de la 1ère personne (je, nous) et de jugements de valeur',
            'Emploi du présent de vérité générale',
          ],
        },
        {
          title: '2. Les tournures impersonnelles et la nominalisation',
          content: '- Tournures impersonnelles: "Il est prouvé que...", "Il s\'agit de...", "Il convient de..."\n- Voix passive: Permet de mettre en valeur l\'action ou l\'objet plutôt que l\'agent.\n- La nominalisation: Transformer une phrase verbale en groupe nominal pour condenser l\'information (Ex: "L\'eau s\'évapore" -> "L\'évaporation de l\'eau").',
        },
      ],
      mindMapPoints: [
        'Texte explicatif = Visée informative et didactique',
        'Procédés: Définition, Reformulation, Illustration, Comparaison',
        'Langue: Présent intemporel, Passif, Tournures impersonnelles',
        'Résumé: Garder la thèse et les idées directrices, supprimer les exemples',
      ],
      conclusionOrAdvice: 'Dans l\'épreuve de compréhension de l\'écrit, vérifiez toujours les connecteurs logiques (ainsi, donc, car) pour identifier les étapes de la progression thématique.',
    },
    exercises: [
      {
        id: 'ex_fr_1as_p1_1',
        title: 'Identification des procédés explicatifs et nominalisation',
        difficulty: 'متوسط',
        points: 6,
        question: '1. Identifiez le procédé explicatif employé dans chaque phrase:\na) « La photosynthèse, c\'est-à-dire le mécanisme par lequel les plantes vertes captent la lumière, produit de l\'oxygène. »\nb) « Les énergies renouvelables, comme l\'énergie solaire et l\'énergie éolienne, sont inépuisables. »\nc) « L\'eau lourde est un composé chimique constitué de deutérium et d\'oxygène. »\n\n2. Transformez les phrases verbales suivantes en phrases nominales:\na) L\'océan se pollue rapidement.\nb) Les forêts disparaissent sous l\'effet des incendies.',
        hint: 'Repérez les mots-clés "c\'est-à-dire", "comme", "est un...", et formez le nom correspondant à "pollue" et "disparaissent".',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'Identification des procédés explicatifs',
            explanation: 'a) La reformulation (introduite par "c\'est-à-dire").\nb) L\'illustration / l\'exemplification (introduite par "comme").\nc) La définition (introduite par le verbe d\'état "est").',
            score: '3.0 pts',
          },
          {
            stepNumber: 2,
            stepTitle: 'Nominalisation',
            explanation: 'a) « La pollution rapide de l\'océan. »\nb) « La disparition des forêts sous l\'effet des incendies. »',
            score: '3.0 pts',
          },
        ],
      },
    ],
  },
  {
    id: 'fr_1as_p2_lettre_ouverte',
    title: 'Projet 2: Le discours argumentatif et la lettre ouverte de sensibilisation',
    unitTitle: 'Projet 2: Discours argumentatif (Programme officiel 1AS - 2ème Trimestre)',
    trimester: 2,
    subjectId: 'french_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 2,
    durationEstimate: '45 mins',
    description: 'Maîtriser les rouages de l\'argumentation: défendre une thèse, réfuter la thèse adverse, structure d\'une lettre ouverte aux autorités, modalisateurs de certitude et d\'adhésion, rapports logiques de cause, conséquence et opposition.',
    objectives: [
      'Distinguer entre la thèse défendue et la thèse adverse réfutée',
      'Identifier les arguments et leurs connecteurs d\'organisation (d\'abord, en outre, enfin)',
      'Employer les modalisateurs (sans doute, incontestablement, il est impératif)',
      'Structurer une lettre ouverte officielle selon les normes de communication citoyenne',
    ],
    videoResources: [
      {
        id: 'vid_fr_1as_argumentatif',
        teacherName: 'الأستاذ كرماني فرنسية',
        teacherTitle: 'أستاذ اللغة الفرنسية للطور الثانوي',
        videoTitle: 'Le discours argumentatif et la lettre ouverte - Méthodologie et Vocabulaire',
        duration: '44:10',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'Français Kermani',
        viewsCount: '290K vues',
        notes: 'Analyse des arguments d\'autorité, de logique et d\'expérience.',
      },
    ],
    writtenSummary: {
      introduction: 'Le discours argumentatif vise à convaincre ou persuader le destinataire d\'adopter une opinion (thèse) ou de poser des actes pour résoudre un problème public.',
      sections: [
        {
          title: '1. Structure du texte argumentatif',
          content: '- Introduction: Thème + Prise de position (Thèse).\n- Développement: Présentation d\'arguments logiques illustrés par des exemples concrets, reliés par des connecteurs (D\'une part, de plus, en conséquence).\n- Conclusion: Synthèse et réaffirmation de la thèse avec appel à l\'action.',
        },
        {
          title: '2. Les modalisateurs et connecteurs logiques',
          content: '- Modalisateurs: Expressions traduisant l\'attitude de l\'énonciateur (certainement, à mon avis, il est primordial).\n- Opposition & Concession: Mais, cependant, néanmoins, bien que.\n- Cause & Conséquence: Parce que, puisque, donc, c\'est pourquoi.',
        },
      ],
      mindMapPoints: [
        'Thèse: Opinion principale défendue',
        'Arguments: Preuves et justifications logiques',
        'Exemples: Illustrations concrètes de la vie quotidienne',
        'Visée: Persuader (sentiments) ou Convaincre (raison)',
      ],
      conclusionOrAdvice: 'Dans une lettre ouverte, n\'oubliez pas les formules de politesse d\'ouverture et de fermeture ainsi que l\'apostrophe aux décideurs.',
    },
    exercises: [
      {
        id: 'ex_fr_1as_p2_1',
        title: 'Analyse d\'arguments et connecteurs logiques',
        difficulty: 'متوسط',
        points: 6,
        question: 'Complétez le paragraphe suivant par les connecteurs logiques appropriés (Cependant, En effet, C\'est pourquoi, D\'une part):\n« Le reboisement est une urgence écologique nationale. ________, les arbres absorbent des tonnes de dioxyde de carbone. ________, la déforestation se poursuit à un rythme inquiétant. ________, nous appelons les autorités à intensifier les campagnes de plantation. »',
        hint: 'Le premier connecteur introduit une explication (En effet), le deuxième une opposition (Cependant), le troisième une conséquence/conclusion (C\'est pourquoi).',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'Remplissage logique des connecteurs',
            explanation: '1. En effet (justifie la nécessité écologique du reboisement).\n2. Cependant (marque l\'opposition avec la réalité de la déforestation continue).\n3. C\'est pourquoi (introduit la conclusion logique et l\'appel à l\'action).',
            score: '6.0 pts',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 3. ISLAMIC SCIENCES (العلوم الإسلامية - 1AS)
  // Based on the Official Curriculum: العلم وأخلاقياته، التجويد، الكسب الحلال، الحكم الشرعي
  // =========================================================================
  {
    id: 'isl_1as_u1_ilm_tajweed',
    title: 'المقطع 1: العلم وأخلاقياته ومقدمة في علم التجويد (أحكام النون والميم الساكنتين)',
    unitTitle: 'المقطع الأول: من هدي القرآن الكريم (التدرج السنوي الوزاري 2018 - الفصل 1)',
    trimester: 1,
    subjectId: 'islamic_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 1,
    durationEstimate: '45 دقيقة',
    description: 'مكانة العلم والعلماء في الإسلام، أخلاقيات طالب العلم، مقدمة في علم التجويد، وأحكام النون الساكنة والتنوين الأربعة (الإظهار الحلقي، الإدغام بنوعيه، الإقلاب، الإخفاء الحقيقي) وأحكام الميم الساكنة (الإخفاء الشفوي، إدغام المتماثلين، الإظهار الشفوي).',
    objectives: [
      'معرفة وجوب طلب العلم ومنزلة العلماء في الشريعة الإسلامية',
      'إتقان أحكام النون الساكنة والتنوين الأربعة وتطبيقها عملياً برواية ورش عن نافع',
      'التمييز الدقيق بين الإظهار، الإدغام بغنة وبغير غنة، الإقلاب، والإخفاء',
      'تطبيق أحكام الميم الساكنة والنون والميم المشددتين',
    ],
    videoResources: [
      {
        id: 'vid_isl_1as_tajweed',
        teacherName: 'الأستاذة بوسعادي',
        teacherTitle: 'مؤلفة كتب التيسير وأستاذة العلوم الإسلامية المتميزة بالجزائر',
        videoTitle: 'العلوم الإسلامية أولى ثانوي: العلم وأخلاقياته وأحكام النون الساكنة والتنوين كاملة',
        duration: '39:20',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'الأستاذة نوال بوسعادي',
        viewsCount: '620K مشاهدة',
        notes: 'شرح رائع بمخارج الحروف وأمثلة من القرآن الكريم.',
      },
    ],
    writtenSummary: {
      introduction: 'تعتبر هذه الوحدة مدخلاً أساسياً للتعليم الثانوي، ترغّب التلميذ في الإقبال على العلم والتحلي بآدابه، مع تمكينه من القراءة الصحيحة للقرآن الكريم وفق رواية ورش عن نافع المعتمدة رسمياً في الجزائر.',
      sections: [
        {
          title: '1. العلم وأخلاقياته في الإسلام',
          content: '- وجوب طلب العلم: قال رسول الله ﷺ: «طلب العلم فريضة على كل مسلم». يشمل العلوم الشرعية والعلوم الكونية النافعة.\n- منزلة العلماء: رفع الله درجاتهم ﴿يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ﴾.\n- أخلاقيات طالب العلم: الإخلاص لله، التواضع، العمل بالعلم، احترام المعلم، والصبر على مشاق التحصيل.',
        },
        {
          title: '2. أحكام النون الساكنة والتنوين',
          content: 'للنون الساكنة والتنوين 4 أحكام أساسية:\n1. الإظهار الحلقي: إخراج النون بوضوح من مخرجها عند 6 أحرف حلقية (ء، هـ، ع، ح، غ، خ) مجموعة في أوائل: "أخي هاك علماً حازه غير خاسر". مثال: ﴿مَنْ آمَنَ﴾.\n2. الإدغام: دمج النون في الحرف الموالي بحيث يصيران حرفاً واحداً مشدداً، وحروفه 6 مجموعة في "يرملون":\n  - بغنة في حروف "ينمو" (ي، ن، م، و). مثال: ﴿مَن يَقُولُ﴾.\n  - بغير غنة في حرفي (ل، ر). مثال: ﴿مِّن لَّدُنْهُ﴾.\n3. الإقلاب: قلب النون الساكنة أو التنوين ميماً مخفاة بغنة عند حرف واحد وهو (الباء). مثال: ﴿مِن بَعْدِ﴾.\n4. الإخفاء الحقيقي: نطق النون بصفة بين الإظهار والإدغام مع بقاء الغنة عند بقية الحروف الهجائية (15 حرفاً) مجموعة في أوائل كلمات بيت:\n"صف ذا ثنا كم جاد شخص قد سما ... دم طيباً زد في تقى ضع ظالماً".',
          keyRules: [
            'الغنة: صوت لذيذ يخرج من الخيشوم مقداره حركتان',
            'يشترط في الإدغام أن يكون في كلمتين، فإن كان في كلمة واحدة وجب الإظهار المطلق (دنيا، بنيان، قنوان، صنوان)',
          ],
        },
      ],
      mindMapPoints: [
        'العلم: واجب شرعي وفريضة على كل مسلم',
        'أحكام النون والتنوين: الإظهار (6 أحرف)، الإدغام (6 أحرف)، الإقلاب (حرف الباء)، الإخفاء (15 حرفاً)',
        'أحكام الميم الساكنة: الإخفاء الشفوي (عند الباء)، الإدغام الشفوي (عند الميم)، الإظهار الشفوي (باقي الحروف)',
      ],
      conclusionOrAdvice: 'في أسئلة الاختبار، استخرج الكلمة واذكر الحكم التجويدي مع تحديد السبب والحرف بدقة.',
    },
    exercises: [
      {
        id: 'ex_isl_1as_1',
        title: 'استخراج وتطبيق أحكام التجويد من النصوص القرآنية',
        difficulty: 'متوسط',
        points: 6,
        question: 'استخرج حكم النون الساكنة والتنوين مبيناً السبب ونوع الحكم في الآيات الكريمة التالية:\n1) ﴿وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ﴾\n2) ﴿فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ﴾\n3) ﴿كَلَّا لَيُنبَذَنَّ فِي الْحُطَمَةِ﴾\n4) ﴿إِنَّ الْإِنسَانَ خُلِقَ هَلُوعًا﴾',
        hint: 'انظر للحرف الواقع بعد النون الساكنة مباشرة وطابقه مع مجموعات الأحرف المدروسة.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'الحكم في الآية الأولى: ﴿مَنْ خَافَ﴾',
            explanation: 'الحكم: إظهار حلقي.\nالسبب: مجيء حرف الخاء (وهو من حروف الحلق) بعد النون الساكنة.',
            score: '1.5 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'الحكم في الآية الثانية: ﴿فَمَن يَعْمَلْ﴾ و ﴿خَيْرًا يَرَهُ﴾',
            explanation: 'الحكم: إدغام بغنة (ناقص).\nالسبب: مجيء حرف الياء (من حروف ينمو) بعد النون الساكنة وبعد التنوين.',
            score: '1.5 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'الحكم في الآية الثالثة: ﴿لَيُنبَذَنَّ﴾',
            explanation: 'الحكم: إقلاب.\nالسبب: مجيء حرف الباء بعد النون الساكنة، فتقلب النون ميماً مخفاة بغنة.',
            score: '1.5 ن',
          },
          {
            stepNumber: 4,
            stepTitle: 'الحكم في الآية الرابعة: ﴿الْإِنسَانَ﴾',
            explanation: 'الحكم: إخفاء حقيقي بغنة.\nالسبب: وقوع حرف السين (من حروف الإخفاء الـ 15) بعد النون الساكنة.',
            score: '1.5 ن',
          },
        ],
      },
    ],
  },
  {
    id: 'isl_1as_u2_kasb_iman',
    title: 'المقطع 1: أهمية الكسب الحلال ودلائل القدرة والحكم الشرعي وشروط التكليف',
    unitTitle: 'المقطع الأول والثاني: السنة النبوية والقيم الإيمانية (التدرج الوزاري 1AS)',
    trimester: 1,
    subjectId: 'islamic_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 2,
    durationEstimate: '45 دقيقة',
    description: 'تحليل ودراسة حديث الكسب الحلال النبوي الشريف: «إن الله طيب لا يقبل إلا طيبا...»، دلائل القدرة الإلهية وإعمال العقل في سورة الأنعام، وتعريف الحكم الشرعي وأقسامه التكليفية والوضعية وشروط التكليف وعوارضه.',
    objectives: [
      'استظهار وفهم معاني ودلالات حديث أبي هريرة في تحري الكسب الطيب الحلال',
      'بيان شروط استجابة الدعاء وعلاقتها بطهارة المطعم والملبس والمال',
      'التمييز بين الحكم التكليفي (الأحكام الخمسة) والحكم الوضعي (السبب، الشرط، المانع)',
      'تحديد شروط التكليف (البلوغ والعقل) والتمييز بين عوارض التكليف السماوية والمكتسبة',
    ],
    videoResources: [
      {
        id: 'vid_isl_1as_kasb_halal',
        teacherName: 'الأستاذ عمارة بن عمارة',
        teacherTitle: 'أستاذ العلوم الإسلامية ومفتش التعليم الثانوي',
        videoTitle: 'الكسب الحلال والحكم الشرعي التكليفي والوضعي لأولى ثانوي بالتفصيل',
        duration: '45:00',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'العلوم الإسلامية للثانوي',
        viewsCount: '280K مشاهدة',
        notes: 'التركيز على مذهب المالكية في تقسيم الحكم التكليفي والوضعي.',
      },
    ],
    writtenSummary: {
      introduction: 'توضح هذه الوحدة أسس الاستقامة المالية والسلوكية للمسلم عبر تحري الكسب الحلال، وتربط ذلك بفهم منظومة الأحكام الشرعية التكليفية والوضعية التي تنظم حياة المكلف.',
      sections: [
        {
          title: '1. حديث الكسب الحلال وشروط قبول العمل',
          content: 'عن أبي هريرة رضي الله عنه قال: قال رسول الله ﷺ: «أيها الناس إن الله طيب لا يقبل إلا طيباً... ثم ذكر الرجل يطيل السفر أشعث أغبر، يمد يديه إلى السماء: يا رب يا رب، ومطعمه حرام، ومشربه حرام، وملبسه حرام، وغذي بالحرام، فأنى يستجاب لذلك؟» [رواه مسلم].\nأهم التوجيهات:\n- الطيب هو الطاهر المنزه عن النقائص والشبهات.\n- الكسب الحلال شرط جوهري لإجابة الدعاء وقبول الصدقات وسائر الأعمال.\n- الحرام يحجب العبد عن ربه ويمنع استجابة الدعاء ولو كان مضطراً مسافراً.',
        },
        {
          title: '2. الحكم الشرعي وأقسامه',
          content: '- تعريف الحكم الشرعي: خطاب الله تعالى المتعلق بأفعال المكلفين طلباً أو تخييراً أو وضعاً.\n- أولاً: الحكم التكليفي (ما فيه طلب فعل أو كف أو تخيير):\n  1. الواجب: ما يثاب فاعله ويعاقب تاركه (كالصلاة).\n  2. المندوب (المستحب): ما يثاب فاعله ولا يعاقب تاركه (كالرواتب).\n  3. الحرام: ما يعاقب فاعله ويثاب تاركه امتثالاً (كالسرقة).\n  4. المكروه: ما يثاب تاركه ولا يعاقب فاعله (كأكل البصل قبل المسجد).\n  5. المباح: ما لا ثواب ولا عقاب في فعله أو تركه لذاته.\n- ثانياً: الحكم الوضعي (ما جعله الشارع علامة على حكم آخر):\n  1. السبب: يلزم من وجوده الوجود ومن عدمه العدم (كدخول الوقت لوجوب الصلاة).\n  2. الشرط: يلزم من عدمه العدم ولا يلزم من وجوده وجود ولا عدم لذاته (كالطهارة للصلاة).\n  3. المانع: يلزم من وجوده العدم (كالردة أو القتل لمانع الميراث).',
          keyRules: [
            'شروط التكليف العامة: البلوغ والعقل وفهم الخطاب',
            'عوارض التكليف: سماوية (كالجنون والنوم والنسيان) ومكتسبة (كالسكر والجهل بالتقصير)',
          ],
        },
      ],
      mindMapPoints: [
        'الكسب الطيب: شرط لقبول الدعاء وصحة العمل',
        'الحكم التكليفي: واجب، مندوب، حرام، مكروه، مباح',
        'الحكم الوضعي: السبب، الشرط، المانع، الصحة والفساد',
        'شروط التكليف: العقل + البلوغ',
      ],
      conclusionOrAdvice: 'في الامتحانات احرص على التمييز بين السبب والشرط: السبب هو الدافع للحكم (دلوك الشمس سبب الصلاة)، والشرط هو المتطلب لصحته (الوضوء شرط صحة الصلاة).',
    },
    exercises: [
      {
        id: 'ex_isl_1as_2',
        title: 'تطبيق شرعي: التمييز بين الأحكام التكليفية والوضعية',
        difficulty: 'متوسط',
        points: 6,
        question: 'بيّن نوع الحكم الشرعي (تكليفي أو وضعي) وحكمه الدقيق في الحالات التالية:\n1) صيام شهر رمضان المبارك على المسلم البالغ القادر.\n2) الوضوء بالنسبة لصحة الصلاة.\n3) غياب الشاهدين والولي في عقد الزواج.\n4) صيام يوم الشك أو يوم عيد الفطر.',
        hint: 'ميز بين ما هو طلب فعل مباشر وبين ما هو شرط أو مانع أو صحة وبطلان.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'الحالة 1: صيام رمضان',
            explanation: 'نوع الحكم: حكم تكليفي.\nالحكم الدقيق: واجب عيني (فرض)، يثاب فاعله ويعاقب تاركه عمداً.',
            score: '1.5 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'الحالة 2: الوضوء بالنسبة للصلاة',
            explanation: 'نوع الحكم: حكم وضعي.\nالحكم الدقيق: شرط صحة، يلزم من عدم الوضوء بطلان الصلاة، ولا يلزم من وجود الوضوء وجوب الصلاة بذاته.',
            score: '1.5 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'الحالة 3: غياب الشاهدين والولي في الزواج',
            explanation: 'نوع الحكم: حكم وضعي.\nالحكم الدقيق: مانع لصحة العقد / مبطل للعقد (عقد باطل لغياب الأركان والشروط الشرعية).',
            score: '1.5 ن',
          },
          {
            stepNumber: 4,
            stepTitle: 'الحالة 4: صيام يوم العيد',
            explanation: 'نوع الحكم: حكم تكليفي.\nالحكم الدقيق: حرام شرعاً (طلب كف جازم)، صومه معصية لا تجوز.',
            score: '1.5 ن',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 4. PHYSICS & CHEMISTRY (العلوم الفيزيائية 1AS)
  // Based on the Official Progression: بنية الذرة، من المجهري إلى العياني، انكسار الضوء
  // =========================================================================
  {
    id: 'phys_1as_u3_atom_structure',
    title: 'الوحدة 3: بنية وهندسة أفراد بعض الأنواع الكيميائية ونماذج لويس وجليسبي وكرام',
    unitTitle: 'الوحدة 3: المادة وتحولاتها (التدرج السنوي الوزاري 1AS - الفصل 1)',
    trimester: 1,
    subjectId: 'physics_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 3,
    durationEstimate: '50 دقيقة',
    description: 'بنية الذرة وتطور نموذجها، مكونات النواة (Z البروتونات و N النيترونات)، النظائر والكتلة الذرية المتوسطة، نموذج التوزيع الإلكتروني على الطبقات (K, L, M)، قاعدتا الثنائية والثمانية، الروابط التكافؤية المستقطبة وغير المستقطبة، نموذج لويس، نموذج التنافر للأزواج الإلكترونية جليسبي (Gillespie AXnEm)، والتمثيل الفضائي لكرام (Cram).',
    objectives: [
      'تطبيق رمز النواة A_Z X لتحديد عدد البروتونات والنيترونات والإلكترونات',
      'كتابة التوزيع الإلكتروني للطبقات K, L, M واستنتاج موقع العنصر في الجدول الدوري (السطر والعمود)',
      'تمثيل الجزيئات الكيميائية وفق نموذج لويس مع تمييز الأزواج الرابطة وغير الرابطة',
      'التنبؤ بالشكل الهندسي للجزيئات وفق نموذج جليسبي (خطي، مثلث مستو، رباعي وجوه، هرمي، منحنٍ) وتمثيل كرام',
    ],
    videoResources: [
      {
        id: 'vid_phys_1as_lewis_gillespie',
        teacherName: 'الأستاذ شريفي رابح',
        teacherTitle: 'مفتش التعليم الثانوي ومؤلف كتاب الجديد في الفيزياء',
        videoTitle: 'بنية وهندسة الجزيئات: تمثيل لويس وجليسبي وكرام بالتفصيل للأولى ثانوي',
        duration: '54:10',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'الأستاذ شريفي رابح فيزياء',
        viewsCount: '980K مشاهدة',
        notes: 'شرح مبسط لكيفية استنتاج الصيغة AXnEm والهندسة الفضائية للجزيء.',
      },
    ],
    writtenSummary: {
      introduction: 'تمثل هذه الوحدة الجسر الذي يربط بين العالم المجهري المكون من الذرات والأيونات والجزيئات وبين الخصائص الكيميائية والفيزيائية للمادة في الحالة العيانية.',
      sections: [
        {
          title: '1. بنية الذرة والتوزيع الإلكتروني',
          content: '- النواة المركزية: تتكون من نكليونات (بروتونات موجبة عددها Z، ونيترونات متعادلة N = A - Z)، حيث A هو العدد الكتلي.\n- السحابة الإلكترونية: إلكترونات سالبة تدور حول النواة عددها يساوي Z في الذرة المتعادلة كهربائياً.\n- التوزيع على الطبقات (K, L, M):\n  * الطبقة K تتشبع بـ 2 إلكترون.\n  * الطبقة L تتشبع بـ 8 إلكترونات.\n  * الطبقة M تتشبع بـ 8 إلكترونات (في حدود Z ≤ 18 المقررة).\n- موقع العنصر في الجدول الدوري المبسط:\n  * رقم السطر = عدد الطبقات الإلكترونية المشغولة.\n  * رقم العمود = عدد إلكترونات الطبقة السطحية (الخارجية).',
          keyRules: [
            'قاعدة الثنائية الإلكترونية: تطبق على الذرات القريبة من الهيليوم (H, Li, Be) لتستقر بـ 2 إلكترون',
            'قاعدة الثمانية الإلكترونية: تسعى بقية الذرات لفقد أو كسب أو مشاركة إلكترونات لتشبيع طبقتها السطحية بـ 8 إلكترونات',
          ],
        },
        {
          title: '2. نماذج تمثيل الجزيئات (لويس، جليسبي، كرام)',
          content: '- نموذج لويس (Lewis):\n  * يمثل الذرة برمزها محاطة بإلكترونات التكافؤ.\n  * الزوج الرابط: خط يربط ذرتين (مشاركة بإلكترونين).\n  * الزوج غير الرابط: خط يوضع فوق رمز الذرة.\n- نموذج جليسبي (Gillespie VSEPR): صيغته العامة AX_n E_m حيث:\n  * A: الذرة المركزية | X_n: عدد الذرات المرتبطة | E_m: عدد الأزواج غير الرابطة للذرة المركزية.\n  * AX4 (مثل CH4): رباعي وجوه منتظم (زاوية 109.5°).\n  * AX3E1 (مثل NH3): هرم ثلاثي القاعدة (زاوية 107°).\n  * AX2E2 (مثل H2O): شكل مرفقي (منحنٍ) (زاوية 104.5°).\n  * AX2 (مثل CO2): شكل خطي مستقيم (زاوية 180°).\n- نموذج كرام (Cram): تمثيل فضائي ثلاثي الأبعاد:\n  * خط عادي: رابطة في مستوى الورقة.\n  * مثلث مملوء: رابطة متجهة للأمام نحو المشاهد.\n  * مثلث مخطط: رابطة متجهة للخلف وراء مستوى الورقة.',
        },
      ],
      mindMapPoints: [
        'الذرة A_Z X: بروتونات Z، نيترونات A-Z، إلكترونات Z',
        'الجدول الدوري: السطر = عدد الطبقات، العمود = إلكترونات التكافؤ',
        'جليسبي: AX4 (رباعي وجوه)، AX3E (هرمي)، AX2E2 (مرفقي/منحن)',
        'كرام: رسم ثلاثي الأبعاد (مستو، أمام، خلف)',
      ],
      conclusionOrAdvice: 'في الاختبار احرص دائماً على حساب إلكترونات التكافؤ بدقة قبل رسم تمثيل لويس، ولا تنسَ الأزواج غير الرابطة للذرات الجانبية كالأكسجين والكلور.',
    },
    exercises: [
      {
        id: 'ex_phys_1as_u3_1',
        title: 'تمرين شامل: التوزيع الإلكتروني ونماذج لويس وجليسبي وكرام',
        difficulty: 'متوسط',
        points: 6,
        question: 'معطى العناصر التالية بأعدادها الشحنية: الكربون C (Z=6)، الهيدروجين H (Z=1)، النيتروجين N (Z=7)، الأكسجين O (Z=8).\n1) اكتب التوزيع الإلكتروني لكل ذرة وحدد موقعها في الجدول الدوري (السطر والعمود).\n2) ما هو عدد الروابط التكافؤية التي تستطيع كل ذرة تشكيلها للوصول للاستقرار؟\n3) مثل جزيء الماء H2O وجزيء النشادر NH3 وفق نموذج لويس.\n4) استنتج الصيغة الرمزية وفق نموذج جليسبي لكل من H2O و NH3 وحدد شكلهما الهندسي في الفضاء.',
        hint: 'احسب إلكترونات الطبقة الخارجية، وعدد الروابط يساوي عدد الإلكترونات الناقصة للتشبع (8 - n).',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'التوزيع الإلكتروني والموقع في الجدول',
            explanation: '- H (Z=1): (K)1 -> السطر 1، العمود I.\n- C (Z=6): (K)2 (L)4 -> السطر 2، العمود IV.\n- N (Z=7): (K)2 (L)5 -> السطر 2، العمود V.\n- O (Z=8): (K)2 (L)6 -> السطر 2، العمود VI.',
            score: '2.0 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'تكافؤ الذرات (عدد الروابط الممكنة)',
            explanation: '- الهيدروجين H: ينقصه 1 إلكترون لتحقيق قاعدة الثنائية -> يشكل رابطة واحدة تكافؤية.\n- الكربون C: ينقصه 4 إلكترونات لتحقيق قاعدة الثمانية -> يشكل 4 روابط تكافؤية.\n- النيتروجين N: ينقصه 3 إلكترونات -> يشكل 3 روابط تكافؤية وله زوج غير رابط.\n- الأكسجين O: ينقصه 2 إلكترون -> يشكل رابطتين تكافؤيتين وله زوجان غير رابطين.',
            score: '1.5 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'نموذج لويس لجزيئي H2O و NH3',
            explanation: '- جزيء الماء H2O: ذرة الأكسجين O مركزية ترتبط برابطتين تكافؤيتين مع ذرتي H، وتحمل O زوجين غير رابطين (خطين فوق وتحت O).\n- جزيء النشادر NH3: ذرة النيتروجين N مركزية ترتبط بـ 3 روابط مع 3 ذرات H، وتحمل N زوجاً واحداً غير رابط.',
            score: '1.0 ن',
          },
          {
            stepNumber: 4,
            stepTitle: 'صيغة جليسبي والشكل الهندسي',
            explanation: '- للماء H2O: صيغة جليسبي هي AX2E2 (ذرتان مرتبطتان وزوجان غير رابطين) -> الشكل الهندسي: مرفقي / منحنٍ (coudée).\n- للنشادر NH3: صيغة جليسبي هي AX3E1 (ثلاث ذرات وزوج غير رابط واحد) -> الشكل الهندسي: هرمي ثلاثي القاعدة (pyramide trigonale).',
            score: '1.5 ن',
          },
        ],
      },
    ],
  },
  {
    id: 'phys_1as_u6_micro_macro',
    title: 'الوحدة 6 و 10: من المجهري إلى العياني والمقاربة الكمية لتفاعل كيميائي (جدول التقدم)',
    unitTitle: 'الوحدة 6 و 10: كمية المادة وجدول تقدم التفاعل (التدرج السنوي الوزاري 1AS)',
    trimester: 2,
    subjectId: 'physics_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 4,
    durationEstimate: '50 دقيقة',
    description: 'المقادير المولية: المول، عدد أفوغادرو NA، الكتلة المولية الجزيئية والذرية، حساب كمية المادة للأجسام الصلبة والسائلة والغازية (قانون الغاز المثالي PV=nRT والحجم المولي Vm)، التركيز المولي C والكتلي Cm وقانون التمديد، جدول تقدم التفاعل الكيميائي، المتفاعل المحد، التقدم الأعظمي xmax، وحصيلة المادة.',
    objectives: [
      'حساب كمية المادة n بمختلف القوانين: n = m/M، n = V/Vm، n = C * V، n = (P*V)/(R*T)',
      'تطبيق قانون التمديد وحساب معامل التمديد F = C0 / C1 = V1 / V0',
      'إنشاء جدول تقدم التفاعل الكيميائي وتحديد المتفاعل المحد وقيمة التقدم الأعظمي xmax',
      'استنتاج حصيلة المادة في الحالة النهائية للتفاعل الكيميائي وحساب كتل وحجوم النواتج',
    ],
    videoResources: [
      {
        id: 'vid_phys_1as_tableau_avancement',
        teacherName: 'الأستاذ زيدون فيزياء',
        teacherTitle: 'أستاذ متميز في العلوم الفيزيائية للطور الثانوي',
        videoTitle: 'جدول تقدم التفاعل من الألف إلى الياء وحساب المتفاعل المحد للأولى ثانوي',
        duration: '48:15',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'فيزياء الأولى ثانوي الجزائر',
        viewsCount: '520K مشاهدة',
        notes: 'حل تطبيقي لتمارين كلاسيكية ترد في اختبارات الفصل الثاني.',
      },
    ],
    writtenSummary: {
      introduction: 'تسمح هذه الوحدة بالانتقال من دراسة الذرات والجسيمات المجهرية إلى القياسات العيانية العملية للكتل والحجوم والضغوط في المخابر والصناعة الكيميائية.',
      sections: [
        {
          title: '1. علاقات حساب كمية المادة (n)',
          content: '- للأجسام الصلبة والسوائل النقية: n = m / M (حيث m الكتلة بالغرام، M الكتلة المولية بـ g/mol).\n- للغازات: n = V_gaz / V_m (في الشروط النظامية T=0°C, P=1atm يكون الحجم المولي Vm = 22.4 L/mol).\n- للغاز المثالي في أي شروط: P * V = n * R * T (مع P بالباسكال Pa، V بالمتر مكعب m3، T بالكلفن K = °C + 273.15، و R = 8.314 J/mol.K).\n- للمحاليل المائية: n = C * V (حيث C التركيز المولي بـ mol/L، و V حجم المحلول باللتر).\n- قانون التمديد (التخفيف): كمية مادة المذاب محفوظة: n_initial = n_final أي C0 * V0 = C1 * V1.\n- معامل التمديد: F = C0 / C1 = V1 / V0.',
          formulas: [
            'n = m / M',
            'n = V_g / V_m',
            'P * V = n * R * T',
            'n = C * V',
            'C_m = C * M (التركيز الكتلي)',
          ],
        },
        {
          title: '2. جدول تقدم التفاعل الكيميائي والمتفاعل المحد',
          content: 'لمعادلة كيميائية عامة: a A + b B -> c C + d D:\n- في الحالة الابتدائية (x = 0): n(A) = n0(A)، n(B) = n0(B)، n(C) = 0، n(D) = 0.\n- في الحالة الانتقالية (عند تقدم x): n(A) = n0(A) - ax، n(B) = n0(B) - bx، n(C) = cx، n(D) = dx.\n- في الحالة النهائية (عند التقدم الأعظمي x_max):\n  * نفرض أن A متفاعل محد: n0(A) - a*x_max1 = 0 => x_max1 = n0(A) / a.\n  * نفرض أن B متفاعل محد: n0(B) - b*x_max2 = 0 => x_max2 = n0(B) / b.\n  * قيمة التقدم الأعظمي x_max هي القيمة الأصغر بين x_max1 و x_max2، والمتفاعل المقابل لها هو المتفاعل المحد.',
          keyRules: [
            'المتفاعل المحد هو المتفاعل الذي يستهلك كلياً قبل الآخرين ويوقف التفاعل',
            'المزيج يسمى ستوكيومترياً إذا كان: n0(A)/a = n0(B)/b حيث ينفد المتفاعلان معاً في النهاية',
          ],
        },
      ],
      mindMapPoints: [
        'قوانين كمية المادة: n = m/M = V/Vm = C*V',
        'التمديد: C0*V0 = C1*V1 (إضافة ماء مقطر ينقص التركيز ويزيد الحجم)',
        'جدول التقدم: 3 حالات (ابتدائية x=0، انتقالية x، نهائية x_max)',
        'المتفاعل المحد: صاحب أصغر قيمة x_max نظرية',
      ],
      conclusionOrAdvice: 'في الاختبارات انتبه دائماً إلى تحويل الحجم إلى اللتر (1mL = 10^-3 L) وحساب الكتلة المولية الجزيئية بعناية دون نسيان الأقواس.',
    },
    exercises: [
      {
        id: 'ex_phys_1as_u6_1',
        title: 'مسألة اختبارية: تفاعل الزنك مع حمض كلور الماء وجدول التقدم',
        difficulty: 'مستوى بكالوريا / اختبار',
        points: 6,
        question: 'نضع كتلة قدرها m = 1.3 g من مسحوق معدن الزنك Zn في حجم V = 100 mL من محلول حمض كلور الماء (H+ + Cl-) تركيزه المولي C = 0.5 mol/L. يحدث تفاعل كيميائي ينتج عنه غاز ثنائي الهيدروجين H2 وشوارد الزنك Zn2+ وفق المعادلة:\nZn (s) + 2 H+ (aq) -> Zn2+ (aq) + H2 (g)\nيعطى: M(Zn) = 65.4 g/mol ، الحجم المولي Vm = 24 L/mol.\n1) احسب كميات المادة الابتدائية لكل من الزنك وشوارد الهيدروجين n0(Zn) و n0(H+).\n2) أنشئ جدول تقدم التفاعل.\n3) عيّن المتفاعل المحد وقيمة التقدم الأعظمي x_max.\n4) احسب حجم غاز الهيدروجين الناتج V(H2) في الحالة النهائية.',
        hint: 'احسب n0(Zn) = m/M و n0(H+) = C*V، ثم قارن بين n0(Zn)/1 و n0(H+)/2.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'حساب كميات المادة الابتدائية',
            explanation: '- n0(Zn) = m / M = 1.3 / 65.4 ≈ 0.02 mol = 20 mmol.\n- n0(H+) = C * V = 0.5 mol/L * (100 * 10^-3 L) = 0.05 mol = 50 mmol.',
            formulaUsed: 'n = m/M و n = C*V',
            score: '1.5 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'إنشاء جدول تقدم التفاعل',
            explanation: '- معادلة التفاعل: Zn + 2 H+ -> Zn2+ + H2\n- الحالة الابتدائية (x=0): Zn: 0.02 mol | H+: 0.05 mol | Zn2+: 0 | H2: 0\n- الحالة الانتقالية (x): Zn: (0.02 - x) | H+: (0.05 - 2x) | Zn2+: x | H2: x\n- الحالة النهائية (x_max): Zn: (0.02 - x_max) | H+: (0.05 - 2x_max) | Zn2+: x_max | H2: x_max.',
            score: '1.5 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'تعيين المتفاعل المحد والتقدم الأعظمي x_max',
            explanation: '- إذا كان Zn هو المحد: 0.02 - x_max1 = 0 => x_max1 = 0.02 mol.\n- إذا كان H+ هو المحد: 0.05 - 2*x_max2 = 0 => x_max2 = 0.05 / 2 = 0.025 mol.\nبما أن x_max1 < x_max2 (0.02 < 0.025)، فإن التقدم الأعظمي هو: x_max = 0.02 mol والمتفاعل المحد هو معدن الزنك Zn.',
            score: '1.5 ن',
          },
          {
            stepNumber: 4,
            stepTitle: 'حساب حجم غاز الهيدروجين المنطلق',
            explanation: 'من جدول التقدم في الحالة النهائية:\nn(H2) = x_max = 0.02 mol.\nحجم الغاز المنطلق: V(H2) = n(H2) * Vm = 0.02 mol * 24 L/mol = 0.48 L = 480 mL.',
            formulaUsed: 'V = n * Vm',
            score: '1.5 ن',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 5. NATURAL & LIFE SCIENCES (علوم الطبيعة والحياة 1AS)
  // Based on the Official Progression: التركيب الضوئي، العوامل المؤثرة، والتنسيق الوظيفي
  // =========================================================================
  {
    id: 'sci_1as_u2_photosynthesis_full',
    title: 'المجال 2: دخول الطاقة الضوئية في العالم الحي والتركيب الضوئي وتغذية النبات الأخضر',
    unitTitle: 'المجال التعلمي الثاني: تحويل المادة وتدفق الطاقة في نظام بيئي (1AS)',
    trimester: 2,
    subjectId: 'science_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 2,
    durationEstimate: '45 دقيقة',
    description: 'آليات امتصاص النسغ الخام بواسطة الأوبار الماصة ونقله عبر الأوعية الخشبية، امتصاص CO2 عبر الثغور الورقية، بنية الصانعات الخضراء، طيف امتصاص اليخضور وعلاقته بطيف نشاط التركيب الضوئي، ومعادلة التركيب الضوئي التخليقية وإنتاج النشا وسريان النسغ الكامل في اللحاء.',
    objectives: [
      'تحديد مقر امتصاص النسغ الخام (الأوبار الماصة) ومسار نقله في الأوعية الخشبية الناقلة',
      'وصف بنية الثغور الورقية ورسمها تخطيطياً ودورها كمنفذ وحيد لغاز CO2',
      'المقارنة بين طيف الامتصاع وطيف النشاط واستنتاج دور الإشعاعات الحمراء والزرقاء الأكثر فعالية',
      'كتابة المعادلة الإجمالية للتركيب الضوئي واستنتاج مصير المواد العضوية المصنعة',
    ],
    videoResources: [
      {
        id: 'vid_bourich_photosynthesis',
        teacherName: 'الأستاذ بوالريش أحمد',
        teacherTitle: 'مؤلف كتب النجاح ومصمم السلاسل النموذجية للعلوم الطبيعية',
        videoTitle: 'دخول الطاقة الضوئية في العالم الحي والتركيب الضوئي كامل للأولى ثانوي',
        duration: '50:20',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'الأستاذ بوالريش علوم',
        viewsCount: '870K مشاهدة',
        notes: 'شرح تجارب إنجلمان وتجارب الثغور الورقية واستخلاص اليخضور الخام.',
      },
    ],
    writtenSummary: {
      introduction: 'يمثل التركيب الضوئي البوابة البيولوجية الأساسية لدخول الطاقة الضوئية المجانية في السلسلة الغذائية وتدفق الطاقة في الأنظمة البيئية.',
      sections: [
        {
          title: '1. امتصاص ونقل النسغ الخام وثنائي أكسيد الكربون',
          content: '- الأوبار الماصة: امتدادات سيتوبلازمية لخلايا البشرة في منطقة الأوبار الماصة للجذر، تزيد من مساحة التماس مع التربة لامتصاص الماء والأملاح المعدنية (النسغ الناقص).\n- الأوعية الخشبية: خلايا ميتة متطاولة متراصة شاقولياً تلاشت جدرانها العرضية وترسبت على جدرانها مادة الخشبين (اللينين)، مسؤولة عن نقل النسغ الناقص من الجذور نحو الأوراق صعوداً.\n- الثغور الورقية: بنى مجهرية متواجدة بكثرة على السطح السفلي للورقة، تتكون كل ثغرة من خليتين كلويتين حارستين تتوسطهما فتحة ثغرية وغرفة تحت ثغرية، وهي المنفذ الرئيسي لدخول CO2 وخروج O2 وبخار الماء (النتح).',
        },
        {
          title: '2. ظاهرة التركيب الضوئي وطيف الامتصاص',
          content: '- اليخضور (الكلوروفيل): صبغة خضراء متواجدة داخل أغشية التيلاكويد في الصانعات الخضراء (Chloroplastes)، تلتقط الطاقة الضوئية.\n- طيف الامتصاص: يمتص اليخضور الخام بشدة الإشعاعات الطرفية (الحمراء 650-700nm والزرقاء البنفسجية 400-450nm) ويمتص بنسبة ضئيلة الإشعاعات الصفراء بينما يعكس الإشعاعات الخضراء (لهذا تبدو النباتات خضراء).\n- طيف النشاط: يتطابق منحنى طيف النشاط التخليقي مع منحنى طيف الامتصاص، مما يثبت أن الإشعاعات الأكثر امتصاصاً هي الأكثر نجاعة وفعالية في التركيب الضوئي (تجربة إنجلمان).\n- المعادلة الإجمالية الكيميائية:\n6 CO2 + 12 H2O --(ضوء + يخضور)--> C6H12O6 + 6 O2 + 6 H2O',
          formulas: [
            '6 CO2 + 6 H2O -> C6H12O6 + 6 O2 (المعادلة المختصرة)',
          ],
        },
      ],
      mindMapPoints: [
        'الأوبار الماصة: امتصاص الماء والشوارد (النسغ الخام)',
        'الأوعية الخشبية: نقل النسغ الخام صعوداً نحو الأوراق',
        'الثغور الورقية: مدخل غاز CO2 اللازم للتركيب الحيوي',
        'اليخضور: لاقط ضوئي (يمتص الإشعاعات الحمراء والزرقاء بفعالية قصوى)',
      ],
      conclusionOrAdvice: 'في التفسير العلمي لتجربة إنجلمان، اذكر دائماً تجمع البكتيريا الشرهة للأكسجين حول خيط طحلب الإسبيروجيرا المضاء بالأشعة الحمراء والزرقاء لأنها مناطق ذات طرح أعظمي لغاز O2.',
    },
    exercises: [
      {
        id: 'ex_sci_1as_photo_1',
        title: 'تحليل تجربة علمية: مقارنة طيف الامتصاص وطيف نشاط التركيب الضوئي',
        difficulty: 'متوسط',
        points: 6,
        question: 'أظهر تحليل طيف امتصاص محلول اليخضور الخام امتصاصاً قوياً للأشعة الزرقاء البنفسجية (400-450 nm) والأشعة الحمراء (650-680 nm)، وعدم امتصاص للأشعة الخضراء (500-550 nm).\n1) فسّر لماذا تبدو أوراق النباتات ذات لون أخضر للعين المجردة.\n2) كيف تفسر تطابق منحنى شدة التركيب الضوئي مع منحنى طيف امتصاص اليخضور؟\n3) ما هو دور الصانعات الخضراء في إنتاج الكتلة الحيوية النباتية؟',
        hint: 'اللون الذي نراه هو اللون المنعكس غير الممتص، وتطابق المنحنيين يثبت فعالية الإشعاعات الممتصة.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'تفسير اللون الأخضر للنباتات',
            explanation: 'تبدو أوراق النبات خضراء لأن صبغة اليخضور تمتص الإشعاعات الزرقاء والحمراء وتسمح بمرور أو تعكس الإشعاعات الخضراء، فتصل الإشعاعات الخضراء المنعكسة إلى عين المشاهد.',
            score: '2.0 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'تفسير تطابق طيف الامتصاص وطيف النشاط',
            explanation: 'التطابق يثبت أن الطاقة الضوئية الممتصة من طرف صبغة اليخضور هي وحدها المستخدمة في التفاعلات الكيميائية لتركيب السكريات وانطلاق غاز الأكسجين، فالإشعاعات الأكثر امتصاصاً (الحمراء والزرقاء) هي الأكثر نجاعة وفعالية في إنجاز التركيب الضوئي.',
            score: '2.5 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'دور الصانعات الخضراء في إنتاج الكتلة الحيوية',
            explanation: 'الصانعات الخضراء هي العضيات الخلوية ومقر تحويل الطاقة الضوئية إلى طاقة كيميائية كامنة في المواد العضوية (النشا)، والتي تتفكك لاحقاً إلى سكروز ينتقل في اللحاء ليغذي كافة أنسجة النبات ويحقق النمو.',
            score: '1.5 ن',
          },
        ],
      },
    ],
  },
  {
    id: 'sci_1as_u3_biomass_coordination',
    title: 'المجال 3 و 4: تحسين إنتاج الكتلة الحيوية والعامل المحدد والتنسيق الوظيفي العصبي',
    unitTitle: 'المجال التعلمي الثالث والرابع: تحسين الكتلة الحيوية ووحدة العضوية (1AS)',
    trimester: 3,
    subjectId: 'science_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 3,
    durationEstimate: '45 دقيقة',
    description: 'تأثير العوامل الترابية والمناخية (الحرارة، الإضاءة، تركيز CO2)، مفهوم العامل المحدد، إنتاج سلالات مرغوبة بالتهجين واصطفاء السلالات النقية، التكاثر باللمة (الافتسال وزراعة المرستيم)، استجابة العضوية للجهد العضلي، والتنسيق العصبي الإعاشي عبر البصلة السيسائية والأعصاب الودية وقرب الودية.',
    objectives: [
      'تحديد مفهوم العامل المحدد وأهمية التحكم في البيوت البلاستيكية لرفع المردود الزراعي',
      'تطبيق التهجين الوراثي وتفسير تصالبات السلالات النقية والصفات السائدة والمتنحية',
      'التعرف على تقنيات التكاثر باللمة ومخاطر الاستعمال المفرط للأسمدة وتدهور التنوع الحيوي',
      'تفسير التنسيق بين الجهد العضلي وزيادة التدفق الدموي والهوائي وتنظيم ضربات القلب عصبياً',
    ],
    videoResources: [
      {
        id: 'vid_sci_1as_genetics_biomass',
        teacherName: 'الأستاذ بن خريف علوم',
        teacherTitle: 'أستاذ ومؤطر لمادة علوم الطبيعة والحياة بالجزائر',
        videoTitle: 'العوامل المؤثرة على إنتاج الكتلة الحيوية والتنسيق العصبي للأولى ثانوي',
        duration: '46:30',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'علوم الطبيعة والحياة بن خريف',
        viewsCount: '410K مشاهدة',
        notes: 'حل تمارين التهجين وتفسير منحنيات العامل المحدد بدقة منهجية.',
      },
    ],
    writtenSummary: {
      introduction: 'تجمع هذه الوحدة بين التطبيقات الزراعية التكنولوجية لتحسين الأمن الغذائي وإنتاج الكتلة الحيوية، وبين الفهم الفسيولوجي للتنسيق العصبي الذي يضمن وحدة وتكامل العضوية.',
      sections: [
        {
          title: '1. العوامل المؤثرة على إنتاج الكتلة الحيوية والعامل المحدد',
          content: '- العوامل الترابية: الخصائص الفيزيائية (المسامية والنفاذية) والكيميائية (المعادن ودرجة الحموضة pH)، ويتم تحسينها بالحرث والتسميد والسقي.\n- العوامل المناخية: الإضاءة، الحرارة، وتركيز CO2 (الزراعة المحمية في البيوت البلاستيكية تسمح بالتحكم الدقيق فيها وتسريع النضج ومضاعفة الإنتاج).\n- مفهوم العامل المحدد: هو العامل المناخي أو الترابي البعيد عن حده الأمثل والذي يحد بمفرده من سرعة وشدة التركيب الضوئي ومردود الكتلة الحيوية مهما توفرت بقية العوامل.',
        },
        {
          title: '2. تحسين الكتلة الحيوية بالتهجين والانتقاء التدريجي',
          content: '- التهجين: مصالبة بين سلالتين من نفس النوع تختلفان في صفات وراثية بهدف جمع الصفات المرغوبة في أفراد الجيل الأول (هجناء).\n- التكاثر باللمة (Clonage): إكثار النباتات المرغوبة دون المرور بالتكاثر الجنسي للحفاظ على نمطها الوراثي، ومن طرقه: الافتسال الدقيق، زراعة المرستيم، وزراعة البروتوبلازم.',
        },
        {
          title: '3. التنسيق الوظيفي العصبي أثناء الجهد العضلي',
          content: '- أثناء الجهد العضلي: يزداد استهلاك O2 والغلوكوز وطرح CO2 والحرارة.\n- استجابة العضوية: تزداد الوتيرة التنفسية والوتيرة القلبية لزيادة التدفق الدموي المحمل بالأكسجين نحو العضلات.\n- التحكم الإعاشي:\n  * الجهاز قرب الودي (العصب المعدي الرئوي العاشر X): يفرز الأستيل كولين ويبطئ ضربات القلب.\n  * الجهاز الودي (الأعصاب الودية): يفرز النورأدرينالين ويسرع ضربات القلب والوتيرة التنفسية.',
        },
      ],
      mindMapPoints: [
        'العامل المحدد: العامل البعيد عن قيمته المثلى ويتحكم في المردود الإجمالي',
        'التهجين: جمع الصفات المرغوبة، والانتقاء يهدف لتثبيت السلالة النقية',
        'التكاثر باللمة: إكثار سلالة نباتية متطابقة بالافتسال أو زراعة المرستيم',
        'التنسيق العصبي الإعاشي: الودي (تسريع) وقرب الودي (تبطيء وتثبيط)',
      ],
      conclusionOrAdvice: 'في أسئلة التهجين، اذكر دائماً النمط الظاهري، ثم النمط الوراثي للأبوين، ثم جدول التوزيع الوراثي للأمشاج وحساب النسب المئوية (9/16, 3/16, 3/16, 1/16).',
    },
    exercises: [
      {
        id: 'ex_sci_1as_biomass_1',
        title: 'تطبيق وراثي: تهجين سلالتين من القمح وانتقاء السلالة المفيدة',
        difficulty: 'متوسط',
        points: 6,
        question: 'تمت مصالبة بين سلالتين نقيتين من القمح:\n- السلالة الأولى: ذات حبات كثيرة وفقيرة بالمدخرات (كثيرة، فقيرة)\n- السلالة الثانية: ذات حبات قليلة وغنية بالمدخرات (قليلة، غنية)\nفكانت نباتات الجيل الأول (G1) كلها: ذات حبات كثيرة وغنية بالمدخرات.\n1) ما هي الصفات السائدة والمتنحية؟ علل.\n2) حدد النمط الوراثي لأفراد الجيل الأول (G1) باعتماد الرموز: (كا/ك) لكثيرة/قليلة، و (غا/غ) لغنية/فقيرة.\n3) ما هي السلالة النقية المرغوبة اقتصادياً التي يسعى الفلاح لعزلها وتكثيرها؟',
        hint: 'الصفة التي تظهر بنسبة 100% في الجيل الأول هي الصفة السائدة.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'تحديد الصفات السائدة والمتنحية',
            explanation: '- صفة "حبات كثيرة" سائدة (كا) على صفة "حبات قليلة" المتنحية (ك).\n- صفة "غنية بالمدخرات" سائدة (غا) على صفة "فقيرة بالمدخرات" المتنحية (غ).\nالتعليل: أفراد الجيل الأول هجناء وظهرت فيهم جميعاً صفة (حبات كثيرة وغنية بالمدخرات) بنسبة 100%.',
            score: '2.0 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'النمط الوراثي لأفراد الجيل الأول (G1)',
            explanation: 'أفراد الجيل الأول هجناء ثنائيو اللواقح (Hétérozygotes) ونمطهم الوراثي هو: (كا // ك  غا // غ).',
            score: '2.0 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'تحديد السلالة المرغوبة وتثبيتها',
            explanation: 'السلالة المرغوبة اقتصادياً وزراعياً هي السلالة النقية الحاملة للصفتين السائدتين معاً: "سلالة كثيرة الحبات وغنية بالمدخرات نقية"، ونمطها الوراثي النقي هو: (كا // كا  غا // غا).\nيتم تثبيتها عبر الانتقاء التدريجي وإكثارها خضرياً بتقنية التكاثر باللمة (زراعة المرستيم).',
            score: '2.0 ن',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 6. PROCESS ENGINEERING / TECHNOLOGY (هندسة الطرائق - التكنولوجيا 1AS)
  // Based on the Official Progression: معالجة المياه المستعملة، تحضير الصابون، الأسبرين
  // =========================================================================
  {
    id: 'tech_1as_proc_water_soap',
    title: 'هندسة الطرائق: معالجة المياه المستعملة، تفاعل التصبن، والتحضير المخبري للأسبرين',
    unitTitle: 'مجال هندسة الطرائق والتكنولوجيا (التدرج السنوي الوزاري 1AS)',
    trimester: 2,
    subjectId: 'tech_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 2,
    durationEstimate: '45 دقيقة',
    description: 'الكفاءات المقررة في هندسة الطرائق للسنة الأولى ثانوي: تصنيف ملوثات المياه المستعملة ومراحل محطة المعالجة (الغربلة، نزع الرمال، نزع الزيوت، المعالجة البيولوجية والتطهير بالكلور)، كيمياء تحضير الصابون بتفاعل التصبن (زيت + هيدروكسيد الصوديوم) واختبار جودته، والبحث التوثيقي حول تصنيع الأسبرين (حمض أسيتيل ساليسيليك) مخبرياً واستعمالاته الطبية.',
    objectives: [
      'التعرف على ملوثات المياه المستعملة ومراحل التصفية في محطات معالجة المياه (STEP)',
      'وصف التركيب التجريبي لتفاعل التصبن وشرح دور كل متفاعل ومحلول ملحي مشبع',
      'التعرف على خطوات اصطناع الأسبرين مخبرياً والكشف عن نقاوته',
      'تطبيق إجراءات السلامة والأمن المخبري في التعامل مع الكواشف الكيميائية المركزة',
    ],
    videoResources: [
      {
        id: 'vid_tech_1as_genie_procedes',
        teacherName: 'الأستاذ سمير هندسة طرائق',
        teacherTitle: 'أستاذ التعليم الثانوي لمادة هندسة الطرائق والتكنولوجيا بالجزائر',
        videoTitle: 'هندسة الطرائق أولى ثانوي: معالجة المياه وصناعة الصابون وتحضير الأسبرين',
        duration: '44:00',
        youtubeId: 'qQz27Z_B3Lw',
        downloadUrl: 'https://www.youtube.com/watch?v=qQz27Z_B3Lw',
        quality: '1080p HD',
        channelName: 'هندسة الطرائق ثانوي الجزائر',
        viewsCount: '195K مشاهدة',
        notes: 'عرض تجارب التصبن المخبرية وخطوات محطة معالجة المياه المستعملة.',
      },
    ],
    writtenSummary: {
      introduction: 'تعتبر هندسة الطرائق فرعاً تكنولوجياً حيوياً يدرس تحويل المواد الأولية إلى منتجات نافعة ذات جودة عالية عبر تفاعلات كيميائية وفيزيائية مضبوطة بيئياً وصناعياً.',
      sections: [
        {
          title: '1. محطة معالجة المياه المستعملة (STEP)',
          content: 'تمر معالجة المياه المستعملة بالمراحل المتسلسلة التالية:\n1. المعالجة الأولية الفيزيائية:\n  - الغربلة (Dégrillage): حجز المواد الصلبة العائمة الكبيرة الحجم بواسطة قضبان متوازية.\n  - إزالة الرمال والتراب (Dessablage): ترسيب الحبيبات المعدنية الثقيلة بالجاذبية في أحواض هادئة الجريان.\n  - إزالة الزيوت والشحوم (Dégraissage): تعويم المواد الدهنية الخفيفة بفضل ضخ فقاعات هواء لتطفو وتكشط سطحياً.\n2. المعالجة البيولوجية الثانوية:\n  - استعمال الكائنات الحية الدقيقة (البكتيريا الهوائية النشطة) لهضم وتفكيك المواد العضوية المنحلة في أحواض التهوية.\n3. المعالجة الثالثية (التطهير والتعقيم):\n  - القضاء على الجراثيم والبكتيريا الممرضة بواسطة إضافة غاز الكلور Cl2 أو الأوزون أو الأشعة فوق البنفسجية UV قبل تصريف الماء أو إعادة استعماله في الري الزراعي.',
        },
        {
          title: '2. تفاعل التصبن وصناعة الصابون',
          content: '- تعريف التصبن: تفاعل كيميائي بطيء وتام يحدث بين ثلاثي غليسيريد (مادة دهنية مثل زيت الزيتون) وقاعدة قوية (محلول هيدروكسيد الصوديوم NaOH لإنتاج صابون صلب، أو KOH لصابون سائل):\n  ثلاثي غليسيريد + 3 NaOH -> صابون (ملح الصوديوم للحمض الدهني) + غليسيرول (كحول ثلاثي).\n- عملية التمليح (Relargage): بعد انتهاء التسخين بالارتداد، يسكب المزيج في محلول مشبع من كلوريد الصوديوم (NaCl) لترسيب الصابون وفصله عن الغليسيرول لأن الصابون لا يذوب في الماء المالح.',
        },
        {
          title: '3. تصنيع الأسبرين (Aspirine)',
          content: '- الاسم العلمي: حمض أسيتيل ساليسيليك (Acide acétylsalicylique C9H8O4).\n- التحضير المخبري: يتم بتفاعل حمض الساليسيليك مع بلا ماء حمض الإيثانويك (Anhydride acétique) في وجود قطرات من حمض الكبريتيك المركز H2SO4 كـ وسيط تفاعل.\n- الخصائص والاستعمالات: مسكن للآلام (Antalgique)، خافض للحرارة (Antipyrétique)، ومضاد لتخثر الدم.',
        },
      ],
      mindMapPoints: [
        'معالجة المياه: غربلة -> نزع الرمال -> نزع الزيوت -> معالجة بيولوجية -> تطهير',
        'تفاعل التصبن: دهن + صودا كاوية NaOH -> صابون + غليسيرول',
        'التمليح: إضافة محلول ملحي NaCl لترسيب الصابون وعزله',
        'الأسبرين: حمض ساليسيليك + بلا ماء إيثانويك (مسكن وخافض للحرارة)',
      ],
      conclusionOrAdvice: 'في أسئلة الاختبار عن التصبن، يطرح دائماً سؤال حول دور محلول كلوريد الصوديوم المشبع: الإجابة الدقيقة النموذجية هي "عزل وترسيب الصابون (عملية التمليح) بسبب انعدام ذوبانه في الماء المالح".',
    },
    exercises: [
      {
        id: 'ex_tech_1as_soap_1',
        title: 'تطبيق مخبري: خطوات صناعة الصابون ومحطة معالجة المياه',
        difficulty: 'متوسط',
        points: 6,
        question: 'أثناء حصة الأعمال المخبرية في مادة التكنولوجيا (هندسة الطرائق)، قام التلميذ بمزج 20 mL من زيت المائدة مع 20 mL من محلول الصودا الكاوية NaOH المركز و 10 mL من الإيثانول، ثم سخن المزيج مع الارتداد لمدة 30 دقيقة.\n1) ما هو الدور الذي يلعبه الإيثانول المضاف إلى وسط التفاعل؟\n2) بعد انتهاء التفاعل، يسكب المزيج داخل بيشر يحتوي على محلول مشبع من كلوريد الصوديوم NaCl. ما هو الهدف من هذه الخطوة وماذا تسمى؟\n3) اذكر مرحلتين من مراحل المعالجة الفيزيائية الأولية للمياه المستعملة في محطات التطهير (STEP).',
        hint: 'الإيثانول يذيب الزيت والصودا في آن واحد ليجعل الوسط متجانساً، وإضافة الملح تسمى التمليح.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'دور الإيثانول في تفاعل التصبن',
            explanation: 'دور الإيثانول هو العمل كـ مذيب ومجانس لوسط التفاعل؛ لأن الزيت مركب عضوي لا يمتزج بالماء ولا بمحلول الصودا المائي، فيعمل الإيثانول على إذابتهما معاً لزيادة سطح التماس وتسريع التفاعل.',
            score: '2.0 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'دور محلول كلوريد الصوديوم واسم العملية',
            explanation: 'الهدف: ترسيب وعزل الصابون المتشكل وفصله عن الغليسيرول وباقي المكونات لأن الصابون قليل الذوبان جداً في المحاليل الملحية المشبعة.\nاسم العملية: عملية التمليح (Relargage).',
            score: '2.0 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'مرحلتان من المعالجة الفيزيائية للمياه المستعملة',
            explanation: '1. الغربلة (Dégrillage): لحجز المواد الصلبة كبيرة الحجم كالأكياس والبلاستيك والورق.\n2. إزالة الرمال والتراب (Dessablage): لترسيب الحبيبات المعدنية الثقيلة بالجاذبية.',
            score: '2.0 ن',
          },
        ],
      },
    ],
  },

  // =========================================================================
  // 7. MATHEMATICS (الرياضيات 1AS - جذع مشترك علوم وجذع مشترك آداب)
  // Based on the Official Progression: الدوال المرجعية، العبارات الجبرية، والإحصاء
  // =========================================================================
  {
    id: 'math_1as_functions_stats',
    title: 'الرياضيات (1AS): الدوال المرجعية (مربع ومقلوب وجذر)، العبارات الجبرية ومؤشرات الإحصاء',
    unitTitle: 'الدوال المرجعية والإحصاء (التدرج السنوي الوزاري - الفصل 2 و 3)',
    trimester: 2,
    subjectId: 'math_1as_sci',
    gradeId: '1as',
    streamId: 'tc_science',
    order: 2,
    durationEstimate: '50 دقيقة',
    description: 'دراسة الدوال المرجعية (الدالة التآلفية، دالة مربع x^2، دالة المقلوب 1/x، ودالة الجذر التربيعي √x)، استنتاج جداول التغيرات وشفعية الدوال (زوجية أو فردية)، الشكل النموذجي لكثير حدود الدرجة الثانية وحل المعادلات بالمميز Δ، ومؤشرات الإحصاء الوصفية (الوسط الحسابي، الوسيط، الربيعيات Q1 و Q3، المخطط بالعلبة، والانحراف المعياري).',
    objectives: [
      'دراسة اتجاه تغير وتمثيل الدوال المرجعية (مربع، مقلوب، جذر تربيعي)',
      'التحقق من شفعية دالة جبرياً وبيانياً (التناظر بالنسبة لمحور التراتيب أو المبدأ O)',
      'كتابة الشكل النموذجي لكثير الحدود ax^2 + bx + c وحل المعادلات بالمميز Δ',
      'حساب مؤشرات الموقع (الوسط الحسابي x̄، الوسيط Me، المنوال) ومؤشرات التشتت (المدى، الانحراف الربعي Q3-Q1، الانحراف المعياري σ)',
    ],
    videoResources: [
      {
        id: 'vid_nour_1as_fonctions',
        teacherName: 'الأستاذ نور الدين',
        teacherTitle: 'مؤلف كتب النجاح وأشهر أستاذ رياضيات للثانوي بالجزائر',
        videoTitle: 'الدوال المرجعية ودراسة التغيرات والشفعية من الألف إلى الياء للأولى ثانوي',
        duration: '56:40',
        youtubeId: 'wQZ1N3B7Yt8',
        downloadUrl: 'https://www.youtube.com/watch?v=wQZ1N3B7Yt8',
        quality: '1080p HD',
        channelName: 'الأستاذ نور الدين رياضيات',
        viewsCount: '1.2M مشاهدة',
        notes: 'التركيز على تفكيك الدوال واستنتاج منحنيات الدوال انطلاقاً من الدوال المرجعية.',
      },
    ],
    writtenSummary: {
      introduction: 'تعتبر الدوال المرجعية النواة التي تبنى عليها دراسة التحليل الرياضي في التعليم الثانوي، وتتكامل مع العبارات الجبرية والإحصاء الوصفي لبناء تفكير استدلالي دقيق.',
      sections: [
        {
          title: '1. الدوال المرجعية وخصائصها الأساسية',
          content: '- دالة مربع f(x) = x^2: معرّفة على R، متناقصة تماماً على ]-∞, 0] ومتزايدة تماماً على [0, +∞[، دالة زوجية منحناها البياني قطع مكافئ متناظر بالنسبة لمحور التراتيب.\n- دالة المقلوب f(x) = 1/x: معرّفة على R*، متناقصة تماماً على ]-∞, 0[ وعلى ]0, +∞[، دالة فردية منحناها قطع زائد متناظر بالنسبة لمبدأ المعلم O.\n- دالة الجذر التربيعي f(x) = √x: معرّفة ومتزايدة تماماً على [0, +∞[.\n- شفعية دالة f:\n  * زوجية: إذا كان لكل x من Df يكون -x ∈ Df و f(-x) = f(x).\n  * فردية: إذا كان لكل x من Df يكون -x ∈ Df و f(-x) = -f(x).',
          formulas: [
            'f(-x) = f(x) ⇔ دالة زوجية (تناظر محوري حول (Oy))',
            'f(-x) = -f(x) ⇔ دالة فردية (تناظر مركزي حول O)',
          ],
        },
        {
          title: '2. الشكل النموذجي والمميز لكثير حدود الدرجة الثانية',
          content: 'لكل عبارة f(x) = ax^2 + bx + c مع a ≠ 0:\n- الشكل النموذجي: f(x) = a * [ (x + b/(2a))^2 - Δ / (4a^2) ] حيث Δ = b^2 - 4ac.\n- حل المعادلة ax^2 + bx + c = 0:\n  * إذا كان Δ > 0: تقبل حلين متمايزين: x1 = (-b - √Δ) / 2a و x2 = (-b + √Δ) / 2a.\n  * إذا كان Δ = 0: تقبل حلاً مضاعفاً: x0 = -b / 2a.\n  * إذا كان Δ < 0: لا تقبل أي حل حقيقي في R.',
        },
        {
          title: '3. مؤشرات الإحصاء الوصفي (الموقع والتشتت)',
          content: '- مؤشرات الموقع: الوسط الحسابي x̄ = Σ(ni * xi) / N، الوسيط Me (القيمة التي تقسم السلسلة المرتبة إلى نصفين متساويين 50%)، والربيعيات Q1 (25% من القيم على الأقل) و Q3 (75% من القيم).\n- مؤشرات التشتت: المدى E = x_max - x_min، الانحراف الربعي = Q3 - Q1، والتباين V والانحراف المعياري σ = √V.\n- المخطط بالعلبة (Boîte à moustaches): يمثل بالقيم الخمس: أصغر قيمة، Q1، الوسيط Me، Q3، أكبر قيمة.',
        },
      ],
      mindMapPoints: [
        'الدوال المرجعية: x^2 (زوجية)، 1/x (فردية)، √x (موجبة)',
        'كثير حدود الدرجة 2: حساب المميز Δ = b^2 - 4ac واستنتاج الحلول',
        'الإحصاء: مؤشرات الموقع (الوسط، الوسيط Me) ومؤشرات التشتت (المدى، σ)',
        'المخطط بالعلبة: يلخص السلسلة بالربيعيات والوسيط',
      ],
      conclusionOrAdvice: 'في أسئلة الإحصاء، تذكر دائماً ترتيب القيم تصاعدياً قبل استخراج الوسيط Me والربيعيات Q1 و Q3.',
    },
    exercises: [
      {
        id: 'ex_math_1as_funcs_1',
        title: 'مسألة شاملة: دراسة شفعية دالة وحل معادلة من الدرجة الثانية بالمميز',
        difficulty: 'مستوى بكالوريا / اختبار',
        points: 6,
        question: 'لتكن الدالة العدية المعرفة على R بـ: f(x) = 2x^2 - 4x - 6.\n1) اكتب f(x) على الشكل النموذجي.\n2) حل في R المعادلة: f(x) = 0 باستعمال المميز Δ ثم فكك f(x) إلى جداء عاملين من الدرجة الأولى.\n3) لتكن الدالة g المعرفة بـ: g(x) = 2x^2 / (x^2 + 1). ادرس شفعية الدالة g وفسر النتيجة هندسياً.',
        hint: 'الشكل النموذجي يكتب: a[(x + b/2a)^2 - Δ/4a^2]، ولدراسة الشفعية احسب g(-x).',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'كتابة f(x) على الشكل النموذجي',
            explanation: 'f(x) = 2(x^2 - 2x) - 6 = 2[(x - 1)^2 - 1] - 6 = 2(x - 1)^2 - 2 - 6 = 2(x - 1)^2 - 8.\nإذن الشكل النموذجي هو: f(x) = 2(x - 1)^2 - 8.',
            formulaUsed: 'f(x) = a(x - α)^2 + β',
            score: '2.0 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'حل المعادلة f(x) = 0 وتحليل العبارة',
            explanation: 'Δ = b^2 - 4ac = (-4)^2 - 4(2)(-6) = 16 + 48 = 64 > 0.\nبما أن Δ موجب تماماً، فإن المعادلة تقبل حلين متمايزين:\nx1 = (-(-4) - √64) / (2 * 2) = (4 - 8) / 4 = -1.\nx2 = (-(-4) + √64) / (2 * 2) = (4 + 8) / 4 = 3.\nمجموعة الحلول: S = {-1, 3}.\nالتحليل إلى جداء عوامل: f(x) = a(x - x1)(x - x2) = 2(x + 1)(x - 3).',
            formulaUsed: 'Δ = b^2 - 4ac و x = (-b ± √Δ) / 2a',
            score: '2.5 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'دراسة شفعية الدالة g(x) والتفسير الهندسي',
            explanation: 'مجموعة تعريف الدالة g هي R لأن المقام x^2 + 1 > 0 دوماً.\nلكل x من R، لدينا -x من R.\ng(-x) = 2(-x)^2 / [(-x)^2 + 1] = 2x^2 / (x^2 + 1) = g(x).\nبما أن g(-x) = g(x)، فإن الدالة g هي دالة زوجية.\nالتفسير الهندسي: المنحنى البياني للدالة g يقبل محور التراتيب (Oy) كمحور تناظر له.',
            score: '1.5 ن',
          },
        ],
      },
    ],
  },
  {
    id: 'math_1as_lit_stats_funcs',
    title: 'الرياضيات (1AS آداب): تنظيم المعطيات الإحصائية وحساب مؤشرات الموقع والدوال العددية',
    unitTitle: 'الإحصاء والدوال (التدرج السنوي الوزاري 1AS آداب - الفصل 1 و 2)',
    trimester: 1,
    subjectId: 'math_1as_lit',
    gradeId: '1as',
    streamId: 'tc_literature',
    order: 1,
    durationEstimate: '40 دقيقة',
    description: 'المنهاج المخصص للجذع المشترك آداب وفق التدرج الوزاري: مجموعات الأعداد، الحساب على القوى والجذور، المقارنة والحصر والقيمة المطلقة كمسافة، مفهوم الدالة وتعيين الصور والسوابق من جدول أو منحنى، والإحصاء الوصفي (الجدولة، التكرار والتواتر، الوسط الحسابي، المنوال، والوسيط والتمثيلات البيانية بالأعمدة والدوائر).',
    objectives: [
      'التحكم في العمليات على الكسور والجذور والقوى للفرع الأدبي',
      'حساب المسافة بين عددين وتفسير القيمة المطلقة هندسياً',
      'قراءة المنحنيات وجداول القيم واستخراج صور وسوابق الأعداد',
      'إنجاز الجداول الإحصائية وحساب الوسط الحسابي والوسيط وتفسير المخطط بالأعمدة والدائري',
    ],
    videoResources: [
      {
        id: 'vid_math_1as_lit',
        teacherName: 'الأستاذ نور الدين',
        teacherTitle: 'أستاذ الرياضيات للثانوي بالجزائر',
        videoTitle: 'رياضيات أولى ثانوي أدبي: الإحصاء والدوال والحساب بالتفصيل المبسط',
        duration: '45:00',
        youtubeId: 'wQZ1N3B7Yt8',
        downloadUrl: 'https://www.youtube.com/watch?v=wQZ1N3B7Yt8',
        quality: '1080p HD',
        channelName: 'الأستاذ نور الدين',
        viewsCount: '490K مشاهدة',
        notes: 'مخصص بالكامل للمنهاج الأدبي وطريقة حل أسئلة الفروض والاختبارات.',
      },
    ],
    writtenSummary: {
      introduction: 'يهدف منهاج الرياضيات لجذع مشترك آداب إلى تزويد الطالب بأدوات التفكير المنطقي والقدرة على قراءة وتفسير الجداول الإحصائية والرسوم البيانية التي تواجهه في الحياة المعاصرة.',
      sections: [
        {
          title: '1. القيمة المطلقة كمسافة والحصر',
          content: '- المسافة بين عددين a و b هي: d(a, b) = |a - b| = |b - a|.\n- هندسياً: إذا كانت A نقطة فاصلتها a و M نقطة فاصلتها x، فإن |x - a| هي المسافة AM.\n- حل المعادلة |x - c| = r يكافئ: x = c + r أو x = c - r.\n- حل المتراجحة |x - c| ≤ r يكافئ المجال المغلق: [c - r, c + r].',
        },
        {
          title: '2. قراءة الدوال وتمثيلها البياني',
          content: '- صورة عدد a بالدالة f هي القيمة f(a) المحسوبة أو المقروءة على محور التراتيب.\n- سابقة عدد b هي قيم x على محور الفواصل التي تحقق f(x) = b.\n- الدالة التآلفية: f(x) = ax + b تمثل بمستقيم معامله التوجيهي a، وتكون متزايدة تماماً إذا كان a > 0 ومتناقصة إذا كان a < 0.',
        },
        {
          title: '3. مؤشرات الموقع الإحصائية',
          content: '- الوسط الحسابي (Moyenne): مجموع حاصل ضرب كل قيمة في تكرارها مقسوماً على التكرار الكلي N.\n- المنوال (Mode): هي القيمة الأكثر تكراراً في السلسلة الإحصائية.\n- الوسيط (Médiane): هي القيمة التي تقسم السلسلة المرتبة ترتيباً تصاعدياً إلى نصفين متساويين.\n- التواتر (Fréquence): f = n / N (التكرار الجزئي مقسوماً على التكرار الكلي)، وتواتر النسبة المئوية = f * 100%.',
        },
      ],
      mindMapPoints: [
        'المسافة: d(a,b) = |b - a|',
        'المعادلات: |x - a| = r تعني x = a ± r',
        'الإحصاء: الوسط الحسابي x̄، المنوال الأكثر تكراراً، والوسيط Me المنصف للسلسلة',
        'النسبة المئوية في المخطط الدائري: الزاوية = التواتر * 360°',
      ],
      conclusionOrAdvice: 'في الاختبار الأدبي، يتميز سؤال الإحصاء بسهولة نقاطه، احرص فقط على تنظيم الجدول في أسطر واضحة (القيم، التكرار، التكرار المجمع الصاعد، والتواتر).',
    },
    exercises: [
      {
        id: 'ex_math_1as_lit_1',
        title: 'تمرين شامل في الإحصاء الحسابي لطلبة الآداب',
        difficulty: 'سهل',
        points: 6,
        question: 'إليك علامات 20 تلميذاً في فرض مادة اللغة العربية:\nالقيم (العلامات): 8، 10، 12، 14، 16.\nالتكرارات (عدد التلاميذ): 3، 5، 6، 4، 2.\n1) ما هو التكرار الكلي N للتلاميذ؟\n2) احسب الوسط الحسابي m لعلامات التلاميذ.\n3) حدد المنوال لهذه السلسلة مع التعليل.\n4) أوجد وسيط السلسلة الإحصائية Me.',
        hint: 'الوسط الحسابي هو مجموع الجداءات (العلامة * التكرار) مقسوماً على 20.',
        detailedSolution: [
          {
            stepNumber: 1,
            stepTitle: 'حساب التكرار الكلي N',
            explanation: 'N = 3 + 5 + 6 + 4 + 2 = 20 تلميذاً.',
            score: '1.0 ن',
          },
          {
            stepNumber: 2,
            stepTitle: 'حساب الوسط الحسابي m',
            explanation: 'm = (8*3 + 10*5 + 12*6 + 14*4 + 16*2) / 20\nm = (24 + 50 + 72 + 56 + 32) / 20 = 234 / 20 = 11.7 من 20.',
            formulaUsed: 'm = Σ(xi * ni) / N',
            score: '2.0 ن',
          },
          {
            stepNumber: 3,
            stepTitle: 'تحديد المنوال',
            explanation: 'المنوال هو العلامة 12 لأنها تقابل أكبر تكرار (6 تلاميذ).',
            score: '1.5 ن',
          },
          {
            stepNumber: 4,
            stepTitle: 'إيجاد الوسيط Me',
            explanation: 'بما أن N = 20 (عدد زوجي)، فإن رتبة الوسيط هي بين القيمة العاشرة والحادية عشرة.\nبحساب التكرار المجمع الصاعد:\n- حتى 8: 3 تلاميذ\n- حتى 10: 8 تلاميذ\n- حتى 12: 14 تلميذاً\nإذن القيمة العاشرة هي 12، والقيمة الحادية عشرة هي 12.\nالوسيط: Me = (12 + 12) / 2 = 12.',
            score: '1.5 ن',
          },
        ],
      },
    ],
  },
];
