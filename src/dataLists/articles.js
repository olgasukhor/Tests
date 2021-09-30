const articles = [
    {
        "id": "1",
        "name": "Сухоруков С.І.",
        "title": "Оцінка деформуємості заготовок при поперечно-клиновій прокатці",
        "description": "/ С.І. Сухоруков, К.І. Коцюбівська., І.О. Сивак // Наукові нотатки: міжвузівський зб. – Луцьк: ЛДТУ, 2009. -.С. 272 – 275."
    },
    {
        "id": "2",
        "name": "Kotsiubivska K.I.",
        "title": "Radial Extrusion of workpieces using backpressure",
        "description": "/ K.I. Kotsubivska, Yu. A. Burennikov, I. Rusu and I.O. Sivak // Buletinul Institutului Politehnik din Jasi: Tomul LV (LIX), Fasc. 4, 2009. – P. 195 – 202."
    },
    {
        "id": "3",
        "name": "Kozlov L.G.",
        "title": "Dynamic characteristics of the proportionally-controlled pressure valve",
        "description": "/ L.G. Kozlov, Yu.A. Burennikov, V.A. Kovalchuk // Bulletin of the Polytechnic Institute of Iasi. – 2009. – Vol. LV (LIX), Part 4. – Р. 203-209."
    },
    {
        "id": "4",
        "name": "Коцюбівська К.І., Бурєнніков Ю.А., Сивак І.О.",
        "title": "Напружено-деформований стан та деформуємість заготовок при поперечному видавлюванні з протитиском",
        "description": "// збірник наукових праць Вінницького державного аграрного університету. Серія: Технічні науки. Вип. 4. – 2010. – С.55-58"
    },
    {
        "id": "5",
        "name": "Сивак І.О., Ярошенко Т.В.",
        "title": "Зміцнення поверхневого шару металу у разі вдавлювання кульки",
        "description": "// Вісник ВПІ. – №4(91).– 2010. – С.54-58."
    },
    {
        "id": "6",
        "name": "Сивак Р.И., Сивак И.О.",
        "title": "Пластичность металлов при сложном нагружении",
        "description": "// Вісник НТУУ «КПІ» №60. Серія: Машинобудування. – 2010.–С129-132."
    },
    {
        "id": "7",
        "name": "Сивак Р.И., Сердюк О.В., Сивак И.О.",
        "title": "Влияние немонотонности пластической деформации на напряженное состояние",
        "description": "// Обработка металлов давленим: Сборник научн. тр. – Краматорськ: ДГМА.– №2(23).– 2010.– С.3-7"
    },
    {
        "id": "8",
        "name": "Ярошенко Т. В., Сивак І. О.",
        "title": "Ступінь зміцнення металлу та залишкові напруження в поверхневому шарі деталі після обкочування тороїдальним роликом.",
        "description": "// Обработка металлов давлением: сб-к научн. трудов. – Краматорск: ДГМА. - №3(28). – 2011. – С. 12 – 15. ISN 2076-2151."
    },
    {
        "id": "9",
        "name": "Коцюбівська К.І., Бурєнніков Ю. А., Сивак І. О.",
        "title": "Ресурс пластичності металів при поперечному видавлюванні з протитиском.",
        "description": "- Монографія - Вінниця: ВНТУ, 2011. – 156 с."
    },
    {
        "id": "10",
        "name": "Сивак Р. И., Нахайчук О. В., Сивак И. О.",
        "title": "Влияние геометрии траектории нагружения на пластичность",
        "description": "// Обработка металлов давлением: сб-к научн. трудов. – Краматорск: ДГМА. - №1(26). – 2011. – С. 22 – 25. ISN 2076-2151"
    },
    {
        "id": "11",
        "name": "Сивак Р. И., Савчинский И. Г., Сивак И. О.",
        "title": "Оценка предельных деформаций при немонотонном нагружении",
        "description": "// Вісник Національного технічного університету України «КПІ» Серія. Машинобудування. – К.: НТУУ «КПІ». - №60. – 2011. – С. 247 - 250."
    },
    {
        "id": "12",
        "name": "Козлов Л.Г., Шаматієнко Я.В., Ковальчук А.І., Черніюк В.М.",
        "title": "Стійкість гідропривода з пропорційним керуванням при знакозмінному навантаженні",
        "description": "і// Вісник Хмельницького національного університету – Хмельницький- №4-2011-С.14-19"
    },
    {
        "id": "13",
        "name": "Дерібо О.В., Сердюк О.В., Сивак І.О.",
        "title": "Електрогідравлічний стежний привод пристрою для обробки поверхневим пластичним деформуванням",
        "description": "// Вісник Вінницького політехнічного інституту –Вінниця,:ВНТУ-№6-2010-С.76-80"
    },
    {
        "id": "14",
        "name": "Савуляк В.В.",
        "title": "Вплив тертя на процес штампування регулярних профілів з листових матеріалів",
        "description": "[Електронний ресурс] // Наукові праці Вінницького національного технічного університету.– 2011.– №3.– Режим доступу до журн.: http://www.nbuv.gov.ua/e-journals/VNTU/2011_2/2011-2.files/uk/11dolped_ua.pdf"
    },
    {
        "id": "15",
        "name": "Дерібо О.В., Дусанюк Ж.П. ",
        "title": "Досвід викладання теми «Сумарна похибка механічної обробки та її складові» дисципліни «Теоретичні основи технології виробництва деталей та складання машин»",
        "description": "// Вісник Вінницького політехнічного інституту –Вінниця,:ВНТУ-№5-2011-С.194-198"
    },
    {
        "id": "16",
        "name": "Sivak I., Savulyak V., Chorna J.",
        "title": "CONSTRUCTION OF PLASTICITY DIAGRAMS ON THE BASIS OF LIMIT FORMING DURING UPSETTING PROCESS",
        "description": " /Buletinul institutului politehnic Din Iasi.- Tomul LVII (LXI), Fasc. 4, 2011-P.209-217"
    },
    {
        "id": "17",
        "name": "SAVULIAK V.",
        "title": "MODELLING OF THE PROCESS OF REGULAR ROFILES STAMPING FROM SHEET MATERIALS",
        "description": "Buletinul institutului politehnic Din Iasi.- Tomul LVII (LXI), Fasc. 4, 2011-P.199-208"
    },
    {
        "id": "18",
        "name": "KOZLOV L.",
        "title": "ENERGY-SAVING  MECHATRONIC DRIVE OF THE MANIPULATOR",
        "description": "/Buletinul institutului politehnic Din Iasi.- Tomul LVII (LXI), Fasc. 3, 2011-P.231-239"
    },
    {
        "id": "19",
        "name": "KOZLOV   L.,   LOZOVSKIY   S.,   KOVALCHUK   V.,   TSIMBAL   V.",
        "title": "DYNAMIC CHARACTERISTICS OF THE HYDRAULIC DRIVE WITH PROPORTIONAL FLOW RATE CONTR",
        "description": "/Buletinul institutului politehnic Din Iasi.- Tomul LVII (LXI), Fasc. 3, 2011-P.239-247"
    },
    {
        "id": "20",
        "name": "BURENNIKOV YU., KOZLOV L., PETROV A.",
        "title": "DYNAMIC AND STATIC CHARACTERISTICS OF THE LS HYDRAULIC DRIVE ON THE BASIS OF MULTIMODE DIRECTIONAL CONTROL VALVE",
        "description": "/Buletinul institutului politehnic Din Iasi.- Tomul LVII (LXI), Fasc. 2, 2011-P.211-219"
    },
    {
        "id": "21",
        "name": "BURENNIKOV YU., KOZLOV L., REPINSKIY S.",
        "title": "OPTIMIZATION OF THE DESIGN PARAMETERS OF A COMBINED FLOW REGULATOR FOR THE VARIABLE AXIAL-PISTON PUMP",
        "description": "/Buletinul institutului politehnic Din Iasi.- Tomul LVII (LXI), Fasc. 2, 2011-P.219-229"
    },
    {
        "id": "22",
        "name": "Лозінський Д. О.",
        "title": "Дослідження системи керування пропорційним електрогідравлічним розподільником",
        "description": "[Електронний ресурс] / Д. О. Лозінський, Л. Г. Козлов, М. М. Лозінська, В. О. Сенченко, Є. І. // Наукові праці Вінницького національного технічного університету.– 2011.– №2.– Режим доступу до журн.:   http://www.nbuv.gov.ua/e-journals/VNTU/2011_2/2011-2.files/uk/11dolped_ua.pdf"
    },
    {
        "id": "23",
        "name": "Лозан Н.М., Муляр Ю.І., Сапожинський Ю.М., Дупляк В.Д.",
        "title": "Конструкція пристрою для оброблення деревини",
        "description": "/Науковий вісник НЛТУ України – Львів – 2011 –Випуск 21.13 - С.141-146."
    },
    {
        "id": "24",
        "name": "SAVULIAK V., SEMICHASNOVA N.",
        "title": "ENSURING RELIABLE OPERATION OF HYDRAULIC DRIVES WITH HYDRAULIC MOTORS",
        "description": "/Buletinul institutului politehnic Din Iasi.- Tomul LVII (LXI), Fasc. 4, 2011-P.191-199."
    },
    {
        "id": "25",
        "name": "BURENNIKOV YU., RUSU I., LOZAN N.",
        "title": "METAL PLASTICITY UNDER NON-MONOTONIC LOADING",
        "description": "/Buletinul institutului politehnic Din Iasi.- Tomul LVII (LXI), Fasc. 2, 2011 - P.229-237."
    },
    {
        "id": "26",
        "name": "BURENNIKOV YU., BURENNIKOV YU. JR, DOBROVOLSKY A., KRIVA S.",
        "title": "BUSINESS PROCESSES PERFECTION OF SMALL MOTOR TRANSPORTENTERPRISES",
        "description": "/Buletinul institutului politehnic Din Iasi.- Tomul LVII (LXI), Fasc. 2, 2011 - P.237-245."
    },
    {
        "id": "27",
        "name": "Савуляк В. В.,  Мальований І. Ю.",
        "title": "Розширення технологічних можливостей отримання гнутих профілів з листових матеріалів із покриттям.",
        "description": "/Наукові праці ВНТУ, №2. – 2012. – 5 с. http://praci.vntu.edu.ua/article/download/2328/2581"
    },
    {
        "id": "28",
        "name": "Савуляк В. В., Ницимайло В. О.",
        "title": "Выбор параметров покрытия для обеспечения минимальных радиусов изгиба.",
        "description": "/Вісник ВПІ, №4. -2012. с.168 – 172."
    },
    {
        "id": "29",
        "name": "Сивак І. О., Ярошенко Т. В.",
        "title": "Оцінка ступеня зміцнення і пошкодженості поверхневого шару металу при вдавлюванні кульки",
        "description": "// Обработка металлов давлением: сб-к научн. трудов. – Краматорск: ДГМА. - №2(31). – 2012. – С. 40 – 44. ISN 2076-2151"
    },
    {
        "id": "30",
        "name": "Сухоруков С.І., Петров О.В., Осіпов Д.С.",
        "title": "Сучасні перспективи розвитку систем автоматизованого проектування технологічної оснастки",
        "description": "// Вісник Хмельницького національного університету – Хмельницький - №6 - 2011-С.156-160/"
    },
    {
        "id": "31",
        "name": "Сухоруков С. И., Сивак И. О., Коцюбивская Е. И.",
        "title": "Влияние параметров разбиения конечно-элементной модели на точность результатов моделирования процесса поперечно-клиновой прокатки",
        "description": "// Обработка металлов давлением: сб-к научн. трудов. – Краматорск: ДГМА. - №3 (32). – 2012. – С. 35 – 40. ISN 2076-2151"
    },
    {
        "id": "32",
        "name": "Сердюк О. В.",
        "title": "Моделирование процесса деформирования поверхностного слоя при обкатке цилиндрическим роликом",
        "description": "// Обработка металлов давлением: сб-к научн. трудов. – Краматорск: ДГМА. - №3 (32). – 2012. – С. 15 – 19. ISN 2076-2151."
    },
    {
        "id": "33",
        "name": "Гайдамак О.Л., Огородников В.А., Гончарук А.О., Сивак И.О.",
        "title": "Исследование силовых характеристик процесса формообразования радиальным обжатием канавок на деталях типа стержень",
        "description": "// Обработка металлов давлением: сб-к научн. трудов. – Краматорск: ДГМА. - №3 (32). – 2012. – С. 131 – 134. ISN 2076-2151."
    },
    {
        "id": "34",
        "name": "Козлов Л.Г.",
        "title": "Вплив конструктивних параметрів системи керування на стійкість гідропривода, чутливого до навантаження",
        "description": "/ Л.Г. Козлов, М.В. Гесаль, В.А. Ковальчук, В.Є. Арбузова // Наукові нотатки. Луцький національний технічний університет .– 2011.–Вип. №35.–С.96-100"
    },
    {
        "id": "35",
        "name": "Савуляк В.І.",
        "title": "Аналіз відмов гідроприводів мобільних машин під час запуску",
        "description": "/Промислова гідравліка та пневматика. 2012, №1(35), – С.12-14"
    },
    {
        "id": "36",
        "name": "Іскович-Лотоцький Р. Д.",
        "title": "Вплив вібраційних навантажень на процес зневоднення жому цукрового буряка",
        "description": "/ Р. Д. Іскович-Лотоцький, О. В. Поліщук, С. В. Репінський, А. В. Слабкий // Збірник наукових праць Вінницького національного аграрного університету. – 2012. – № 10 т.1 (58). – С. 128–136."
    },
    {
        "id": "37",
        "name": "Бурєнніков Ю. А.",
        "title": "Оптимізація конструктивних параметрів комбінованого регулятора подачі аксіально-поршневого регульованого насоса",
        "description": "/ Ю. А. Бурєнніков, Л. Г. Козлов, С. В. Репінський, О. В. Поліщук // Промислова гідравліка і пневматика. – 2012. – № 1(35). – С. 73–77."
    },
    {
        "id": "38",
        "name": "Бурєнніков Ю. А.",
        "title": "Система керування аксіально-поршневого регульованого насоса з профільованим вікном золотника комбінованого регулятора подачі",
        "description": "/ Ю. А. Бурєнніков, Л. Г. Козлов, С. В. Репінський // Вісник Національного технічного університету України «Київський політехнічний інститут». Серія Машинобудування. – 2012. – № 64. – С. 113–118."
    },
    {
        "id": "39",
        "name": "Бурєнніков Ю. А.",
        "title": "Аналіз переваг та недоліків існуючих регуляторів подачі та потужності в системі керування аксіально-поршневого регульованого насоса",
        "description": "/ Ю. А. Бурєнніков, Л. Г. Козлов, С. В. Репінський, О. В. Поліщук // Вісник Вінницького політехнічного інституту. – 2012. – № 5. – С. 107-113."
    },
    {
        "id": "40",
        "name": "Лозінський Д. О.",
        "title": "Порівняльні дослідження варіантів першого каскаду пропорційного електрогідравлічного розподільника",
        "description": "[Електронний ресурс] / Д.О. Лозінський, Л.Г. Козлов, Є.І. Шевчук // Наукові праці Вінницького національного технічного університету.– 2012.– №2.– Режим доступу до журн.: http://www.nbuv.gov.ua/e-journals/VNTU/2012_2/2012-2.files/uk/ 12dalehd_ua.pdf"
    },
    {
        "id": "41",
        "name": "Петров О.В.",
        "title": "Формування величини зрівноважу вального перепаду тиску в гідроприводі чутливому до навантаження, на базі мультирежимного гідророзподільника",
        "description": "/ О.В. Петров, Л.Г. Козлов// Вісник ВНТУ. – 2012 . - №2 .- с. 179 -184."
    },
    {
        "id": "42",
        "name": "Козлов Л.Г.",
        "title": "Енергоощадний гідропривід , чутливий до навантаження, на базі мультирежимного гідро розподільника",
        "description": "/ Л.Г. Козлов, О.В. Петров // Промислова гідравліка і пневматика.-  Вінниця: ВДАУ, 2012.- №2 (36) .- С. 77-80 "
    },
    {
        "id": "43",
        "name": "Петров О.В.",
        "title": "Інтерфейс обміну даних  у середовищі MatLab Simulink для математичного моделювання робочих процесів у гідроприводі, чутливому до навантаження",
        "description": "/ О.В. Петров Л.Г. Козлов С.М. Лозовський О.С. Дроздов // Вісник СДУ. Сер. Технічні науки .- 2011 .- №3 .- С. 103-110."
    },
    {
        "id": "44",
        "name": "Петров О.В.",
        "title": "Дослідження гідравлічних втрат тиску у тривимірних моделях гідроагрегатів за допомогою комп’ютерного моделювання гідродинамічних процесів у CAD/CAE  - системі",
        "description": " / О.В. Петров  С.І. Сухоруков П.О. Печенкін О.О. Павлюк // Промислова гідравліка та пневматика. -  Вінниця : ВДАУ, 2012 .- №1 (35) .- С. 78-80."
    },
    {
        "id": "45",
        "name": "Сухоруков С.І.",
        "title": "Вплив параметрів процесу плоскої  поперечно-клинової прокатки на величину використаного ресурсу пластичності",
        "description": "/ С.І. Сухоруков, В.О. Сорокоумова, В.О. Багрій / Вісник Хмельницького національного університету. – Хмельницький, 2013. – №1. – C. 37-40. "
    },
    {
        "id": "46",
        "name": "Сивак І.О.",
        "title": "Розподіл внутрішніх силових факторів в перерізі циліндричної заготовки при локальному навантаженні",
        "description": "/  І.О. Сивак, О.М. Мироненко, Є.І. Шевчук / Наукові праці Вінницького національного технічного університету, №1. -2013. с.32 – 36. "
    },
    {
        "id": "47",
        "name": "Сухоруков С. И., Сивак И. О., Коцюбивская Е. И.",
        "title": "Влияние параметров разбиения конечно-элементной модели на точность результатов моделирования процесса поперечно-клиновой прокатки",
        "description": "// Обработка металлов давлением: сб-к научн. трудов. – Краматорск: ДГМА. - №3 (32). – 2012. – С. 35 – 40."
    },
    {
        "id": "48",
        "name": "Сердюк О. В.",
        "title": "Моделирование процесса деформирования поверхностного слоя при обкатке цилиндрическим роликом",
        "description": "// Обработка металлов давлением: сб-к научн. трудов. – Краматорск: ДГМА. - №3 (32). – 2012. – С. 15 – 19."
    },
    {
        "id": "49",
        "name": "Козлов Л.Г.",
        "title": "Мехатронна гідросистема мобільної машини",
        "description": "// Вісник Східноукраїнсько-го університету імені Володимира Даля – 2012 -  №6 – С.22-30."
    },
    {
        "id": "50",
        "name": "Бурєнніков Ю. А., Козлов Л.Г., Репінський С. В.",
        "title": "Система керування аксиально-поршневого насоса з профільованим вікном золотника регулятора подачi",
        "description": "// Вісник КПІ. «Машинобудування»  – 2012 – № 64 – С.113-118."
    },
    {
        "id": "51",
        "name": "Бурєнніков Ю. А., Козлов Л.Г., Репінський С. В., Поліщук О.В.",
        "title": "Аналіз переваг та недоліків існуючих регуляторів подачі та потужності в системах керування аксиально-поршневих регульованих насосів",
        "description": "// Вісник ВПІ.  – 2012 – № 5 –С.107-113."
    },
    {
        "id": "52",
        "name": "Козлов Л.Г., Петров О.В., Павлюк О.О., Печенкін П.О.",
        "title": "Удосконалення елементів конструкції гідроагрегатів на основі комп’ютерного моделювання гідродинамічних процесів у CAD/CAE-системі",
        "description": "// Сборник научных трудов SWorld. Материалы международной научно-практической конференции «Современные проблемы и пути их решения в науке, транспорте, производстве и образовании’2012». – Выпуск 4. Том 5. – Одесса: КУПРИЕНКО, 2012. – ЦИТ: 412-0756. – С. 75-79."
    },
    {
        "id": "53",
        "name": "Козлов Л.Г., Бойко І.В., Піонткевич О.В.",
        "title": "Вплив параметрів системи керування на стійкість гідропривода інваріантного до знакозмінного навантаження",
        "description": "// Наукові нотатки. –ЛНТУ – 2013 – № 40 – С. 118-124."
    },
    {
        "id": "54",
        "name": "Козлов Л.Г., Товкач А.О., Зінченко А.В.",
        "title": "Зменшення втрат потужності в гідросистемі мобільної робочої машини",
        "description": "// Вісник ХНУ – 2013 – № 4 – С. 53-61."
    },
    {
        "id": "55",
        "name": "Козлов Л.Г., Гайдамак О.Л., Піонткевич О.В.",
        "title": "Вплив параметрів на стійкість та швидкодію гідропривода з електрогідравлічним керуванням",
        "description": "// Вісник ХНУ – 2013 – № 4 – С. 29-34."
    },
    {
        "id": "56",
        "name": "Kozlov L.",
        "title": "Digital PD controller for dynamic correction of the differential component coefficient for a mechatronic hydraulic system",
        "description": "// Tehnomus journal: Proceedings of the XVIIth International Conference “New Technologies and Products in Machine  Manufacturing  Technologies”.  –  Suceava,  Romania,  May  17  –  18,  2013.  – P. 120-125."
    },
    {
        "id": "57",
        "name": "Пурдик В.П.",
        "title": "Математичне моделювання регулятора витрати з робочим органом із полімерного матеріалу",
        "description": "/ Брицький О.Л.// Промислова гідравліка та пневматика .  – 2013. - №1(39). - С.75-77."
    },
    {
        "id": "58",
        "name": "Пурдик В. П.",
        "title": "Стенд для експериментального дослідження динамічних характеристик гнучких рукавів",
        "description": "[електронний ресурс]./ Поздняков М.Ю., // Наукові праці Вінницького національного технічного університету.–№1.–2013.Режим доступу до журналу http://www.nbuv.gov.ua/e-journals/VNTU/2013-1.files/uk/"
    },
    {
        "id": "59",
        "name": "Пурдик В.П.",
        "title": "Математичне моделювання регулятора витрати з робочим органом із полімерного матеріалу",
        "description": "/ Брицький О.Л., – Промислова гідравліка та пневматика.– 2013.-  №1(39) – С. 75-77."
    },
    {
        "id": "60",
        "name": "Пурдик В.П.",
        "title": "Методика визначення  динамічних характеристик гнучких рукавів високого тиску.",
        "description": "/ Поздняков М.Ю.//Луцький національний технічний університет. Наукові нотатки. Міжвузівський збірник (за галузями знань «Машинобудування та металообробка», «Інженерна механіка», «Металургія та матеріало-знавство»  Випуск 41 Частина 2 (квітень – червень, 2013) С. 139-143."
    },
    {
        "id": "61",
        "name": "Брицький О.Л. ",
        "title": "Особливості математичного моделювання регулятора витрати з робочим органом із полімерного матеріалу",
        "description": "/ Пурдик В.П.// – Луцький національний технічний університет. Наукові нотатки. Міжвузівський збірник (за галузями знань «Машинобудування та металообробка», «Інженерна механіка», «Металургія та матеріало-знавство»  Випуск 42 Частина 2 (квітень – червень, 2013) С. 216-219."
    },
    {
        "id": "62",
        "name": "Пурдик В.П.",
        "title": "Експериментальні дослідження динамічних характеристик гнучких трубопроводів високого тиску",
        "description": "/Поздняков М.Ю.//  Промислова гідравліка та пневматика.– 2013 -  №4(39)  -  С.75-77."
    },
    {
        "id": "63",
        "name": "Лозінський Д.О.",
        "title": "Експериментальні дослідження першого каскаду пропорційного електрогідравлічного розподлільника з незалежним керуванням потоків",
        "description": "/ Д.О. Лозінський, А. М. Білінський, А. О. Наконечна // Вісник факультету машинобудування та транспорту.  – 2017. – №1. – С. 53–59."
    },

]

export default articles;