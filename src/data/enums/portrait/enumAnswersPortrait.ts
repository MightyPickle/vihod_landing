export enum SexualOrientation {
  HOMO = 'Гомосексуальная (вас привлекают преимущественно люди вашего гендера романтически и/или сексуально)',
  BI = 'Бисексуальная / Пансексуальная (вас привлекают романтически и/или сексуально люди более чем одного гендера)',
  HETERO = 'Гетеросексуальная (вас привлекают романтически и/или сексуально мужчины, если вы женщина, и женщины, если вы мужчина)',
  ASEX = 'Асексуальная (вас вообще не привлекают люди ни сексуально, ни романтически)',
  OTHER = 'Другое',
}

export enum Gender {
  MALE = 'Мужчина',
  FEMALE = 'Женщина',
  NON_BINAIRY = 'Небинарный человек',
}

export enum SettlementType {
  MEGAPOLIS = 'Город (более 4 млн.)',
  CITY = 'Город (от 1 млн. до 4 млн.)',
  LARGE_TOWN = 'Город (от 500 тыс. до 1 млн.)',
  MEDIUM_TOWN = 'Город (от 100 до 500 тыс.)',
  SMALL_TOWN = 'Малый город (до 100 тыс.)',
  SELO = 'Сельское поселение',
}

export enum EducationLevel {
  PRIMARY = 'Начальное (1-8 классы школы)',
  BASIC = 'Среднее общее (9-11 классов школы)',
  BASIC_SPECIAL = 'Среднее профессиональное (колледж, техникум)',
  HIGHER = 'Высшее (включая высшее неполное, полное, а также ученую степень)',
}

export enum FederalDistrictShorten {
  CENTRAL = 'ЦФО', // Центральный федеральный округ
  NORTHWEST = 'СЗФО', // Северо-Западный федеральный округ
  SOUTHERN = 'ЮФО', // Южный федеральный округ
  NORTH_CAUCASUS = 'СКФО', // Северо-Кавказский федеральный округ
  VOLGA = 'ПФО', // Приволжский федеральный округ
  URALS = 'УФО', // Уральский федеральный округ
  SIBERIAN = 'СФЩ', // Сибирский федеральный округ
  FAR_EASTERN = 'ДФО', // Дальневосточный федеральный округ
}

export enum FederalDistrict {
  CENTRAL = 'Центральный федеральный округ',
  NORTHWEST = 'Северо-Западный федеральный округ',
  SOUTHERN = 'Южный федеральный округ',
  NORTH_CAUCASUS = 'Северо-Кавказский федеральный округ',
  VOLGA = 'Приволжский федеральный округ',
  URALS = 'Уральский федеральный округ',
  SIBERIAN = 'Сибирский федеральный округ',
  FAR_EASTERN = 'Дальневосточный федеральный округ',
}

export enum FriendsAwareness {
  NO_ONE_KNOWS = 'Никто из них не знает',
  CLOSEST_FRIENDS = 'Самые близкие друзья',
  MAJORITY_OF_FRIENDS = 'Большинство друзей',
  OTHER = 'Другое',
}

export enum FamilyAwareness {
  NO_ONE_KNOWS = 'Никто из них не знает',
  CLOSEST_FAMILY_MEMBERS = 'Один или несколько самых близких членов семьи',
  MAJORITY_OF_FAMILY_MEMBERS = 'Большинство родственников',
  OTHER = 'Другое',
}

export enum ClassmatesColleaguesAwareness {
  NO_ONE_KNOWS = 'Никто из них не знает',
  SOME_CLASSMATES_COLLEAGUES = 'Один или несколько одноклассников/однокурсников/коллег (в нынешнем учебном/рабочем коллективе)',
  MAJORITY_OF_CLASSMATES_COLLEAGUES = 'Большинство одноклассников/однокурсников/коллег (в нынешнем учебном/рабочем коллективе)',
  OTHER = 'Другое',
}

export enum SocialCircle {
  LGBT_PLUS = 'ЛГБТК+ людей',
  HETERO_CIS = 'гетеросексуальных цисгендерных людей',
  EQUAL_MIX = 'и ЛГБТК+ людей, и гетеросексуальных цисгендерных людей в равном количестве',
}

export enum SocialCircleAttitude {
  FRIENDLY_TO_LGBT_PLUS = 'Дружественно настроенные к ЛГБТК+ люди (отсутствует гомо/трансфобия, в том числе внутренняя)',
  ACCEPTING_BUT_OCCASIONAL_PHOBIA = 'Люди, которые хорошо относятся к вам, но иногда проявляют гомо/трансфобию, в том числе внутреннюю (например: “Ты нормальный, но в целом я против геев” или “Я гей, но большинство других геев меня раздражает”)',
  CLAIM_FRIENDLY_ATTITUDE = 'Люди, которые заявляют, что они дружественно настроены к ЛГБТК+, но вы чувствуете их предвзятое отношение',
  HOMO_TRANS_PHOBIC = 'Гомо/трансфобные люди',
  OTHER = 'Другое',
}

// Используется через reduce
export enum Regions {
  AMURSKAYA_OBLAST = 'АМУРСКАЯ ОБЛАСТЬ',
  EVREYSKAYA_AVTONOMNAYA_OBLAST = 'ЕВРЕЙСКАЯ АВТОНОМНАЯ ОБЛАСТЬ',
  ZABAYKALSKY_KRAI = 'ЗАБАЙКАЛЬСКИЙ КРАЙ',
  KAMCHATSKY_KRAI = 'КАМЧАТСКИЙ КРАЙ',
  MAGADANSKAYA_OBLAST = 'МАГАДАНСКАЯ ОБЛАСТЬ',
  PRIMORSKY_KRAI = 'ПРИМОРСКИЙ КРАЙ',
  RESPUBLIKA_BURYATIYA = 'РЕСПУБЛИКА БУРЯТИЯ',
  RESPUBLIKA_SAKHA_YAKUTIYA = 'РЕСПУБЛИКА САХА (ЯКУТИЯ)',
  SAKHALINSKAYA_OBLAST = 'САХАЛИНСКАЯ ОБЛАСТЬ',
  KHABAROVSKY_KRAI = 'ХАБАРОВСКИЙ КРАЙ',
  CHUKOTSKY_AVTONOMNY_OKRUG = 'ЧУКОТСКИЙ АВТОНОМНЫЙ ОКРУГ',
  KIROVSKAYA_OBLAST = 'КИРОВСКАЯ ОБЛАСТЬ',
  NIZHEGORODSKAYA_OBLAST = 'НИЖЕГОРОДСКАЯ ОБЛАСТЬ',
  ORENBURGSKAYA_OBLAST = 'ОРЕНБУРГСКАЯ ОБЛАСТЬ',
  PENZENSKAYA_OBLAST = 'ПЕНЗЕНСКАЯ ОБЛАСТЬ',
  PERMSKY_KRAI = 'ПЕРМСКИЙ КРАЙ',
  RESPUBLIKA_BASHKORTOSTAN = 'РЕСПУБЛИКА БАШКОРТОСТАН',
  RESPUBLIKA_MARIY_EL = 'РЕСПУБЛИКА МАРИЙ ЭЛ',
  RESPUBLIKA_MORDOVIYA = 'РЕСПУБЛИКА МОРДОВИЯ',
  RESPUBLIKA_TATARSTAN = 'РЕСПУБЛИКА ТАТАРСТАН',
  SAMARSKAYA_OBLAST = 'САМАРСКАЯ ОБЛАСТЬ',
  SARATOVSKAYA_OBLAST = 'САРАТОВСКАЯ ОБЛАСТЬ',
  UDMURTSKAYA_RESPUBLIKA = 'УДМУРТСКАЯ РЕСПУБЛИКА',
  ULYANOVSKAYA_OBLAST = 'УЛЬЯНОВСКАЯ ОБЛАСТЬ',
  CHUVASHSKAYA_RESPUBLIKA = 'ЧУВАШСКАЯ РЕСПУБЛИКА',
  ARKHANGELSKAYA_OBLAST = 'АРХАНГЕЛЬСКАЯ ОБЛАСТЬ',
  VOLOGODSKAYA_OBLAST = 'ВОЛОГОДСКАЯ ОБЛАСТЬ',
  KALININGRADSKAYA_OBLAST = 'КАЛИНИНГРАДСКАЯ ОБЛАСТЬ',
  LENINGRADSKAYA_OBLAST = 'ЛЕНИНГРАДСКАЯ ОБЛАСТЬ',
  MURMANSKAYA_OBLAST = 'МУРМАНСКАЯ ОБЛАСТЬ',
  NOVGORODSKAYA_OBLAST = 'НОВГОРОДСКАЯ ОБЛАСТЬ',
  PSKOVSKAYA_OBLAST = 'ПСКОВСКАЯ ОБЛАСТЬ',
  RESPUBLIKA_KARELIYA = 'РЕСПУБЛИКА КАРЕЛИЯ',
  RESPUBLIKA_KOMI = 'РЕСПУБЛИКА КОМИ',
  SAINT_PETERSBURG = 'САНКТ-ПЕТЕРБУРГ',
  KABARDINO_BALKARSKAYA_RESPUBLIKA = 'КАБАРДИНО-БАЛКАРСКАЯ РЕСПУБЛИКА',
  KARACHAYEVO_CHERKESSKAYA_RESPUBLIKA = 'КАРАЧАЕВО-ЧЕРКЕССКАЯ РЕСПУБЛИКА',
  RESPUBLIKA_DAGESTAN = 'РЕСПУБЛИКА ДАГЕСТАН',
  RESPUBLIKA_SEVERNAYA_OSETIYA_ALANIYA = 'РЕСПУБЛИКА СЕВЕРНАЯ ОСЕТИЯ – АЛАНИЯ',
  STAVROPOLSKY_KRAI = 'СТАВРОПОЛЬСКИЙ КРАЙ',
  CHECHENSKAYA_RESPUBLIKA = 'ЧЕЧЕНСКАЯ РЕСПУБЛИКА',
  ALTAISKY_KRAI = 'АЛТАЙСКИЙ КРАЙ',
  IRKUTSKAYA_OBLAST = 'ИРКУТСКАЯ ОБЛАСТЬ',
  KEMEROVSKAYA_OBLAST = 'КЕМЕРОВСКАЯ ОБЛАСТЬ',
  KRASNOYARSKY_KRAI = 'КРАСНОЯРСКИЙ КРАЙ',
  NOVOSIBIRSKAYA_OBLAST = 'НОВОСИБИРСКАЯ ОБЛАСТЬ',
  OMSKAYA_OBLAST = 'ОМСКАЯ ОБЛАСТЬ',
  RESPUBLIKA_ALTAI = 'РЕСПУБЛИКА АЛТАЙ',
  RESPUBLIKA_TYVA = 'РЕСПУБЛИКА ТЫВА',
  RESPUBLIKA_KHAKASIYA = 'РЕСПУБЛИКА ХАКАСИЯ',
  TOMSKAYA_OBLAST = 'ТОМСКАЯ ОБЛАСТЬ',
  KURGANSKAYA_OBLAST = 'КУРГАНСКАЯ ОБЛАСТЬ',
  NENETSKY_AVTONOMNY_OKRUG = 'НЕНЕЦКИЙ АВТОНОМНЫЙ ОКРУГ',
  SVERDLOVSKAYA_OBLAST = 'СВЕРДЛОВСКАЯ ОБЛАСТЬ',
  TYUMENSKAYA_OBLAST = 'ТЮМЕНСКАЯ ОБЛАСТЬ',
  KHANTY_MANSIYSKY_AVTONOMNY_OKRUG = 'ХАНТЫ-МАНСИЙСКИЙ АВТОНОМНЫЙ ОКРУГ',
  CHELYABINSKAYA_OBLAST = 'ЧЕЛЯБИНСКАЯ ОБЛАСТЬ',
  YAMALO_NENETSKY_AVTONOMNY_OKRUG = 'ЯМАЛО-НЕНЕЦКИЙ АВТОНОМНЫЙ ОКРУГ',
  BELGORODSKAYA_OBLAST = 'БЕЛГОРОДСКАЯ ОБЛАСТЬ',
  BRYANSKAYA_OBLAST = 'БРЯНСКАЯ ОБЛАСТЬ',
  VLADIMIRSKAYA_OBLAST = 'ВЛАДИМИРСКАЯ ОБЛАСТЬ',
  VORONEZHSKAYA_OBLAST = 'ВОРОНЕЖСКАЯ ОБЛАСТЬ',
  IVANOVSKAYA_OBLAST = 'ИВАНОВСКАЯ ОБЛАСТЬ',
  KALUGASKAYA_OBLAST = 'КАЛУЖСКАЯ ОБЛАСТЬ',
  KOSTROMSKAYA_OBLAST = 'КОСТРОМСКАЯ ОБЛАСТЬ',
  KURSKAYA_OBLAST = 'КУРСКАЯ ОБЛАСТЬ',
  LIPETSKAYA_OBLAST = 'ЛИПЕЦКАЯ ОБЛАСТЬ',
  MOSCOW = 'МОСКВА',
  MOSKOVSKAYA_OBLAST = 'МОСКОВСКАЯ ОБЛАСТЬ',
  ORLOVSKAYA_OBLAST = 'ОРЛОВСКАЯ ОБЛАСТЬ',
  RYAZANSKAYA_OBLAST = 'РЯЗАНСКАЯ ОБЛАСТЬ',
  SMOLNSKAYA_OBLAST = 'СМОЛЕНСКАЯ ОБЛАСТЬ',
  TAMBOVSKAYA_OBLAST = 'ТАМБОВСКАЯ ОБЛАСТЬ',
  TVERSKAYA_OBLAST = 'ТВЕРСКАЯ ОБЛАСТЬ',
  TULSKAYA_OBLAST = 'ТУЛЬСКАЯ ОБЛАСТЬ',
  YAROSLAVSKAYA_OBLAST = 'ЯРОСЛАВСКАЯ ОБЛАСТЬ',
  ASTRAKHANSKAYA_OBLAST = 'АСТРАХАНСКАЯ ОБЛАСТЬ',
  VOLGOGRADSKAYA_OBLAST = 'ВОЛГОГРАДСКАЯ ОБЛАСТЬ',
  KRASNODARSKY_KRAI = 'КРАСНОДАРСКИЙ КРАЙ',
  RESPUBLIKA_ADYGEYA = 'РЕСПУБЛИКА АДЫГЕЯ',
  RESPUBLIKA_KALMYKIYA = 'РЕСПУБЛИКА КАЛМЫКИЯ',
  ROSTOVSKAYA_OBLAST = 'РОСТОВСКАЯ ОБЛАСТЬ',
}
