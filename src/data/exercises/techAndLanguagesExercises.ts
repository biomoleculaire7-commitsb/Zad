import { Exercise } from '../../types';

export const TECH_AND_LANGUAGES_EXERCISES_MAP: Record<string, Exercise[]> = {
  // ==========================================
  // MANAGEMENT & ECONOMICS
  // ==========================================
  'gestion_3as_amortissement': [
    {
      id: 'ex_gest_3as_amort_2',
      title: 'تطبيق محاسبي شامل: إعداد جدول الاهتلاك الخطي واختبار خسارة القيمة والتسجيل في اليومية',
      difficulty: 'متوسط',
      bacYear: 'بكالوريا شعبة تسيير واقتصاد',
      points: 7,
      question: `في 02/01/2021 اقتنت مؤسسة "الوفاق" الصناعية شاحنة نقل بضائع (معدات نقل - حساب 2182) بمبلغ 2,000,000 دج خارج الرسم، مدتها النفعية 5 سنوات وتُهتلك خطياً. القيمة المتبقية في نهاية العمر النفعي معدومة.
في 31/12/2022، وبسبب انخفاض أسعار الشاحنات في السوق، تبين أن سعر البيع الصافي للشاحنة هو 1,100,000 دج والقيمة النفعية 1,150,000 دج.
المطلوب:
1. احسب معدل الاهتلاك الخطي t وقسط الاهتلاك السنوي Annuité لسنتي 2021 و 2022.
2. احسب القيمة القابلة للاسترجاع في 31/12/2022، ثم تحقق من وجود خسارة قيمة (Dépréciation).
3. احسب مقدار خسارة القيمة وسجل قيدها في دفتر اليومية بتاريخ 31/12/2022.
4. أعد جدول الاهتلاك المعدل للسنوات المتبقية (2023، 2024، 2025) بعد تعديل قاعدة الحساب، وسجل قسط اهتلاك سنة 2023.`,
      hint: 'القيمة القابلة للاسترجاع هي القيمة الأكبر بين سعر البيع الصافي والقيمة النفعية. وخسارة القيمة = VNC - القيمة القابلة للاسترجاع.',
      detailedSolution: [
        {
          stepNumber: 1,
          stepTitle: 'معدل الاهتلاك وقسط السنتين الأوليين',
          explanation: `• معدل الاهتلاك الخطي: t = 100 / N = 100 / 5 = 20%.
• قسط الاهتلاك السنوي: A = Vo * t = 2,000,000 * 0.20 = 400,000 دج.
قسط سنة 2021 = 400,000 دج.
قسط سنة 2022 = 400,000 دج.
مجموع الاهتلاكات المتراكمة حتى 31/12/2022:
∑ A = 400,000 + 400,000 = 800,000 دج.
القيمة المحاسبية الصافية قبل اختبار الخسارة:
VNC = Vo - ∑ A = 2,000,000 - 800,000 = 1,200,000 دج.`,
          score: '2.0 ن'
        },
        {
          stepNumber: 2,
          stepTitle: 'اختبار خسارة القيمة وتحديد مقدارها',
          explanation: `• القيمة القابلة للاسترجاع هي الأكبر بين:
- سعر البيع الصافي: 1,100,000 دج.
- القيمة النفعية: 1,150,000 دج.
إذن: القيمة القابلة للاسترجاع = 1,150,000 دج.
• المقارنة: بما أن VNC (1,200,000 دج) أكبر من القيمة القابلة للاسترجاع (1,150,000 دج)، فإن هناك خسارة قيمة محققة:
PV = VNC - القيمة القابلة للاسترجاع = 1,200,000 - 1,150,000 = 50,000 دج.
القيمة المحاسبية الصافية المعدلة في 31/12/2022: VNC_corrigée = 1,150,000 دج.`,
          score: '2.0 ن'
        },
        {
          stepNumber: 3,
          stepTitle: 'التسجيل المحاسبي في دفتر اليومية بتاريخ 31/12/2022',
          explanation: `من حـ/ 681 (مخصصات الاهتلاكات والمؤونات وخسائر القيمة - أصول غير جارية) : 450,000 دج
  إلى حـ/ 28182 (اهتلاك معدات النقل) : 400,000 دج (تسجيل قسط الاهتلاك السنوي)
  وإلى حـ/ 29182 (خسائر القيمة عن معدات النقل) : 50,000 دج (إثبات خسارة القيمة للشاحنة).`,
          score: '1.5 ن'
        },
        {
          stepNumber: 4,
          stepTitle: 'جدول الاهتلاك المعدل وقسط سنة 2023',
          explanation: `المدة المتبقية: 5 - 2 = 3 سنوات.
القاعدة الجديدة لحساب الاهتلاك ابتداءً من 2023 هي VNC المعدلة: 1,150,000 دج.
القسط السنوي الجديد لكل سنة (2023، 2024، 2025):
A' = 1,150,000 / 3 = 383,333.33 دج.
• قيد 31/12/2023:
من حـ/ 681 إلى حـ/ 28182 بمبلغ 383,333.33 دج (تسجيل قسط اهتلاك معدل لسنة 2023).`,
          score: '1.5 ن'
        }
      ]
    }
  ],

  // ==========================================
  // FRENCH LANGUAGE
  // ==========================================
  'french_3as_texte_histoire': [
    {
      id: 'ex_fr_3as_hist_2',
      title: 'Épreuve type Bac: Compréhension de l\'écrit, visée communicative et compte-rendu objectif',
      difficulty: 'متوسط',
      bacYear: 'Sujet officiel du Baccalauréat Algérien - Français',
      points: 7,
      question: `Texte d’histoire :
« Le 8 mai 1945, alors que le monde fêtait la victoire sur le nazisme, le peuple algérien manifestait pacifiquement à Sétif, Guelma et Kherrata pour revendiquer son droit légitime à l’indépendance. La réponse de l’administration coloniale française fut d’une férocité inouïe : massacres aveugles de civils sans défense, bombardements et arrestations massives. Cet événement tragique marqua un tournant décisif dans l’histoire de l’Algérie, démontrant l’inutilité de la lutte politique pacifique et ouvrant inéluctablement la voie à la lutte armée du 1er Novembre 1954. »

Questions :
1. De quel événement historique traite ce texte ? À quelle date et dans quelles villes s’est-il déroulé ?
2. Relevez du texte quatre termes ou expressions appartenant au champ lexical de « la répression coloniale ».
3. « La réponse de l’administration coloniale française fut d’une férocité inouïe. »
   - Réécrivez cette phrase à la forme passive ou transformez l'adjectif « férocité inouïe » en une proposition subordonnée.
4. Quelle est la visée communicative de l’auteur dans ce texte d’histoire ?
5. Rédigez le compte-rendu objectif de ce texte (environ 6 à 8 lignes) selon les normes méthodologiques du Baccalauréat algérien.`,
      hint: 'Le compte-rendu objectif se compose d\'une accroche (titre, auteur, source, thème, visée) et d\'un résumé fidèle des idées sans avis personnel.',
      detailedSolution: [
        {
          stepNumber: 1,
          stepTitle: 'Compréhension et champ lexical',
          explanation: `1. Événement historique : Les massacres du 8 mai 1945 en Algérie, survenus à Sétif, Guelma et Kherrata lors des manifestations pacifiques pour l'indépendance.
2. Champ lexical de « la répression coloniale » : « férocité inouïe », « massacres aveugles », « bombardements », « arrestations massives ».`,
          score: '2.0 pts'
        },
        {
          stepNumber: 2,
          stepTitle: 'Fonctionnement de la langue et visée communicative',
          explanation: `3. Transformation : « Les manifestations pacifiques furent violemment réprimées par l'administration coloniale... » ou « Une réponse qui était d'une férocité que personne n'avait ouïe auparavant. »
4. Visée communicative : L'auteur vise à informer et faire connaître un fait d’histoire douloureux (les massacres du 8 mai 1945) et à rendre hommage aux martyrs, tout en dénonçant la barbarie coloniale et en expliquant la portée historique qui a déclenché la guerre de libération nationale.`,
          score: '2.0 pts'
        },
        {
          stepNumber: 3,
          stepTitle: 'Modèle officiel du Compte-Rendu Objectif',
          explanation: `• Accroche :
Il s'agit d'un texte d'histoire à visée informative et testimoniale, dans lequel l'auteur évoque les tragiques événements du 8 mai 1945 en Algérie et leur impact historique sur l'éveil national.
• Résumé :
L'auteur rappelle que les Algériens sont sortis manifester pacifiquement pour réclamer leur indépendance le jour de la victoire alliée. Cependant, les forces coloniales ont réagi par une répression sanglante et des massacres à grande échelle contre la population civile. L'auteur conclut que cette tragédie a scellé l'échec des voies pacifiques et a constitué le déclencheur fondamental de la Révolution armée du 1er Novembre 1954.`,
          score: '3.0 pts'
        }
      ]
    }
  ],

  // ==========================================
  // ENGLISH LANGUAGE
  // ==========================================
  'eng_3as_ancient_civilizations': [
    {
      id: 'ex_eng_3as_civ_2',
      title: 'Baccalaureate Model Test: Reading Comprehension, Grammar and Written Production',
      difficulty: 'متوسط',
      bacYear: 'Official Algerian Baccalaureate - English',
      points: 7,
      question: `Part One: Reading (15 points)
Read the text carefully then do the activities:
"Ancient civilizations flourished thanks to geographical advantages such as rivers and fertile plains. The Mesopotamians and ancient Egyptians developed sophisticated irrigation systems, written language, and legal codes. However, climate shifts, resource depletion, and internal warfare eventually led to their inevitable collapse. Today, understanding these civilizations helps humanity learn how sustainable practices can preserve our modern world."

Questions:
1. Say whether the following statements are True or False:
   a) Geography played a negligible role in the prosperity of ancient civilizations.
   b) Internal conflicts contributed to the downfall of ancient empires.
2. In which paragraph is it mentioned that ancient people developed writing and laws?
3. Rewrite sentence (b) so that it means the same as sentence (a):
   a) Ancient people developed sophisticated irrigation systems because they needed water for farming.
   b) Since ancient people .............................................................
4. Combine the following pairs of sentences using the connector between brackets:
   - "Civilizations neglected environmental balance." / "Civilizations eventually collapsed." (Because of)
5. Written Expression: Write a paragraph of about 80 words explaining why modern nations should preserve historical monuments and ancient heritage.`,
      hint: 'Because of is followed by a noun phrase or gerund: Because of neglecting environmental balance...',
      detailedSolution: [
        {
          stepNumber: 1,
          stepTitle: 'Reading Comprehension',
          explanation: `1. True or False:
a) False ("Ancient civilizations flourished thanks to geographical advantages...").
b) True ("...internal warfare eventually led to their inevitable collapse.").
2. Paragraph identification: It is mentioned in paragraph 1 ("...developed sophisticated irrigation systems, written language, and legal codes.").`,
          score: '2.5 pts'
        },
        {
          stepNumber: 2,
          stepTitle: 'Grammar and Sentence Transformations',
          explanation: `3. Sentence transformation:
"Since ancient people needed water for farming, they developed sophisticated irrigation systems."
4. Combining with connectors:
"Because of neglecting environmental balance, civilizations eventually collapsed." OR "Civilizations eventually collapsed because of their neglect of environmental balance."`,
          score: '2.0 pts'
        },
        {
          stepNumber: 3,
          stepTitle: 'Written Expression Model',
          explanation: `Preserving historical monuments and ancient heritage is of paramount importance for several reasons. First, ancient relics and archaeological sites represent the identity, memory, and cultural pride of nations. Second, historical monuments attract thousands of tourists annually, generating substantial economic revenue and supporting local employment. Finally, studying ancient architecture and artifacts provides valuable lessons in engineering, sustainability, and human resilience, helping modern generations avoid the mistakes of past empires.`,
          score: '2.5 pts'
        }
      ]
    }
  ],

  // ==========================================
  // TECHNOLOGY / ENGINEERING
  // ==========================================
  'tech_3as_engineering': [
    {
      id: 'ex_tech_3as_eng_2',
      title: 'تطبيق نموذجي في المنطق التوافقي ومخططات كارنو وتبسيط الدوال المنطقية',
      difficulty: 'متوسط',
      bacYear: 'بكالوريا شعبة تقني رياضي (هندسة كهربائية وميكانيكية)',
      points: 6,
      question: `نريد تشغيل مضخة مياه أوتوماتيكية (المخرج S) انطلاقاً من ثلاثة ملتقطات ثنائية (A و B و C):
- A: حساس مستوى الماء في الخزان (A = 1 عندما يكون الخزان فارغاً).
- B: حساس درجة حرارة المضخة (B = 1 عندما تكون الحرارة عادية وآمنة، B = 0 عند فرط الحرارة).
- C: مفتاح التشغيل اليدوي للطوارئ (C = 1 مفعل).
تشتغل المضخة (S = 1) في الحالتين التاليتين:
- إذا كانت الحرارة عادية (B = 1) والخزان فارغاً (A = 1).
- أو إذا تم تفعيل مفتاح الطوارئ (C = 1) وكانت الحرارة آمنة (B = 1).
المطلوب:
1. أنشئ جدول الحقيقة للمخرج S بدلالة المتغيرات A و B و C.
2. اكتب المعادلة المنطقية للمخرج S في شكلها الكانونيكي الأول (مجموع الجداءات المينتيرمات).
3. استعمل جدول كارنو (Tableau de Karnaugh) لتبسيط المعادلة المنطقية S.
4. ارسم المخطط المنطقي (Logigramme) للدالة المبسطة باستعمال بوابات منطقية أساسية (ET و OU).`,
      hint: 'لاحظ أن الشرط المشترك في كلا الحالتين هو أن تكون الحرارة آمنة (B = 1).',
      detailedSolution: [
        {
          stepNumber: 1,
          stepTitle: 'جدول الحقيقة للدالة المنطقية S',
          explanation: `جدول الحقيقة ذو 8 أسطر (2^3 = 8):
A B C | S
0 0 0 | 0
0 0 1 | 0 (الحرارة B=0 غير آمنة)
0 1 0 | 0
0 1 1 | 1 (B=1 و C=1)
1 0 0 | 0
1 0 1 | 0
1 1 0 | 1 (A=1 و B=1)
1 1 1 | 1 (A=1 و B=1 و C=1)
تأخذ S القيمة 1 عند التراكيب: (0,1,1) و (1,1,0) و (1,1,1).`,
          score: '2.0 ن'
        },
        {
          stepNumber: 2,
          stepTitle: 'المعادلة الكانونيكية الأولى وتبسيط كارنو',
          explanation: `• العبارة الكانونيكية الأولى (Somme de mintermes):
S = (A_bar . B . C) + (A . B . C_bar) + (A . B . C)
• جدول كارنو (Karnaugh):
نضع B في سطر و AC في الأعمدة أو العكس. نجمع الخانات المتجاورة:
- نجمع (A . B . C_bar) مع (A . B . C) ==> يعطينا الحد: A . B.
- نجمع (A_bar . B . C) مع (A . B . C) ==> يعطينا الحد: B . C.
إذن العبارة المبسطة النهائية هي:
S = (A . B) + (B . C) = B . (A + C).`,
          formulaUsed: 'S = B . (A + C)',
          score: '2.5 ن'
        },
        {
          stepNumber: 3,
          stepTitle: 'التصميم المنطقي (Logigramme)',
          explanation: `تصميم الدارة باستعمال بوابتين فقط:
1. بوابة جمع منطقي (OU): مدخلاها A و C تعطي المخرج (A + C).
2. بوابة ضرب منطقي (ET): مدخلها الأول هو ناتج بوابة OU أي (A + C)، ومدخلها الثاني هو المتغير B، لتعطي المخرج النهائي S = B . (A + C).
هذا التصميم يقلل التكلفة المادية للدارات المتكاملة ويزيد من سرعتها وموثوقيتها.`,
          score: '1.5 ن'
        }
      ]
    }
  ]
};
