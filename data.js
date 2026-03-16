// --- DÁTA PRE LEKCIE ---
const lessons = {
    // ============================================================
    // MODUL: Investovanie (Akcie, Fondy, ETF)
    // ============================================================
    'inv_zaklady_urocenie': {
        title: "1. Základy a Zložené Úročenie",
        text: "Tvoj najlepší priateľ pri investovaní je **ČAS!** ⏳ Čím skôr začneš, tým dlhšie tvoje peniaze rastú.\n\nZároveň objavíš silu **zloženého úročenia** – úrokov z úrokov. Tvoje zisky sa spoja s vkladom a začnú zarábať ďalej. Je to ako snehová guľa ❄️, ktorá sa kotúľa a exponenciálne rastie!",
        interactiveComponent: 'compound_interest_calculator',
        quiz: {
            question: "Čo má najväčší vplyv na dlhodobý rast investície?",
            options: [
                { text: "Dĺžka investičného horizontu a reinvestovanie ziskov.", correct: true },
                { text: "Výber najdrahšieho brokera.", correct: false },
                { text: "Len veľkosť prvého vkladu.", correct: false }
            ]
        },
        prev: null,
        initial_desc: "Sila času a snehovej gule ziskov."
    },
    'inv_riziko_poplatky': {
        title: "2. Riziko a Poplatky",
        text: "Nehádž **všetky vajíčka do jedného košíka!** 🧺 Diverzifikácia znamená rozloženie peňazí do rôznych aktív, aby si znížil celkové riziko.\n\nPozor však na **poplatky**, ktoré pomaly žerú tvoj výnos. Aj rozdiel 1 % ročne na poplatkoch môže po 30 rokoch znamenať tisíce eur. Čím nižšie poplatky, tým lepšie.",
        quiz: {
            question: "Prečo je dôležitá diverzifikácia a sledovanie poplatkov?",
            options: [
                { text: "Aby si znížil riziko straty a maximalizoval čistý výnos.", correct: true },
                { text: "Aby si platil banke čo najviac.", correct: false },
                { text: "Poplatky nemajú vplyv na dlhodobý zisk.", correct: false }
            ]
        },
        prev: 'inv_zaklady_urocenie',
        initial_desc: "Ako chrániť majetok pred stratou a poplatkami."
    },
    'inv_etf_pasivne': {
        title: "3. ETF a Pasívne Investovanie",
        icon: "fas fa-layer-group",
        text: "**ETF (Exchange Traded Fund)** je fond, ktorý často kopíruje nejaký index (napr. S&P 500). Kúpiš si tak 'balík' stoviek firiem naraz.\n\nNajjednoduchšia stratégia je **pravidelné investovanie fixnej sumy** (DCA). Nekúkaš denne na grafy, ale investuješ napríklad raz mesačne. Takto buduješ majetok pasívne a efektívne.",
        quiz: {
            question: "Čo je hlavnou výhodou široko diverzifikovaného ETF a stratégie DCA?",
            options: [
                { text: "Okamžitá diverzifikácia a priemerovanie nákupnej ceny.", correct: true },
                { text: "Garancia, že trh nikdy neklesne.", correct: false },
                { text: "Možnosť zbohatnúť do týždňa.", correct: false }
            ]
        },
        prev: 'inv_riziko_poplatky',
        initial_desc: "Krok za krokom k celému svetu v tvojom portfóliu."
    },

    // ============================================================
    // MODUL: Základy financií
    // ============================================================
    'zf_peniaze': {
        title: "1. Čo sú peniaze a ako fungujú",
        icon: "fas fa-coins",
        text: "Peniaze sú **nástroj na výmenu**. Pomáhajú ľuďom jednoducho obchodovať. Namiesto výmeny vecí (napr. jablká za pizzu) používame peniaze ako prostredníka.\n\nPeniaze majú 3 hlavné funkcie:\n• **Prostriedok výmeny** – platíš nimi za tovary a služby\n• **Uchovávateľ hodnoty** – môžeš ich odložiť na neskôr\n• **Jednotka hodnoty** – vieš porovnať ceny rôznych vecí",
        interactiveComponent: 'money_quiz',
        quiz: {
            question: "Na čo slúžia peniaze?",
            options: [
                { text: "Aby boli ľudia bohatí.", correct: false },
                { text: "Ako nástroj výmeny.", correct: true },
                { text: "Len na platenie daní.", correct: false }
            ]
        },
        prev: null,
        initial_desc: "Pochop, čo sú peniaze a prečo existujú."
    },
    'zf_aktiva_pasiva': {
        title: "2. Aktíva vs. Pasíva",
        icon: "fas fa-balance-scale",
        text: "**Aktívum** je niečo, čo ti prináša peniaze. **Pasívum** je niečo, čo ti peniaze berie.\n\n• 📈 Investícia = aktívum\n• 🚗 Auto ktoré len stojí peniaze = pasívum\n\nKľúč k budovaniu bohatstva: **Nakupuj aktíva, minimalizuj pasíva!**",
        interactiveComponent: 'aktiva_pasiva_game',
        quiz: {
            question: "Čo je aktívum?",
            options: [
                { text: "Niečo, čo ti prináša peniaze.", correct: true },
                { text: "Niečo, čo ti berie peniaze.", correct: false },
                { text: "Každá vec, ktorú vlastníš.", correct: false }
            ]
        },
        prev: 'zf_peniaze',
        initial_desc: "Nauč sa rozlišovať, čo ťa obohacuje a čo ochudobňuje."
    },
    'zf_rozpocet': {
        title: "3. Osobný rozpočet – Pravidlo 50/30/20",
        icon: "fas fa-chart-pie",
        text: "Základom všetkého je vedieť, koľko zarábaš a koľko míňaš. Pravidlo **50/30/20** ti pomôže:\n\n• **50 %** na nevyhnutnosti (nájom, strava)\n• **30 %** na radosť (kino, koníčky)\n• **20 %** na úspory a investície",
        interactiveComponent: 'budget_503020',
        quiz: {
            question: "Na čo by malo podľa pravidla 50/30/20 smerovať 20 % tvojich príjmov?",
            options: [
                { text: "Na zábavu a reštaurácie.", correct: false },
                { text: "Na úspory, investície a splácanie dlhov.", correct: true },
                { text: "Na nájom a stravu.", correct: false }
            ]
        },
        prev: 'zf_aktiva_pasiva',
        initial_desc: "Spoznaj pravidlo 50/30/20 a vyskúšaj si kalkulačku."
    },
    'zf_uspory': {
        title: "4. Prečo ľudia netvoria úspory",
        icon: "fas fa-piggy-bank",
        text: "Mnoho ľudí minie **celý príjem** na výdavky. Najväčšie dôvody:\n\n• Nemajú plán – nevedia, kam peniaze idú\n• Lifestyle creep – s vyšším príjmom rastú aj výdavky\n• 'Zaslúžim si to' efekt – odmeňujú sa za prácu\n\nSkús si rozdeliť mesačný rozpočet a uvidíš, či ti niečo zostane.",
        interactiveComponent: 'budget_simulator',
        quiz: {
            question: "Prečo je dôležité sledovať svoje výdavky?",
            options: [
                { text: "Pretože banky to vyžadujú.", correct: false },
                { text: "Aby si vedel, kam peniaze odchádzajú a mohol ušetriť.", correct: true },
                { text: "Nemá to žiadny praktický význam.", correct: false }
            ]
        },
        prev: 'zf_rozpocet',
        initial_desc: "Zisti, prečo väčšina ľudí nemá úspory."
    },
    'zf_rezerva': {
        title: "5. Finančná rezerva – Núdzový fond",
        icon: "fas fa-shield-alt",
        text: "Skôr než začneš investovať, potrebuješ **železnú rezervu**. Je to tvoj vankúš pre prípad straty práce, pokazenej práčky alebo nečakaných lekárskych výdavkov.\n\nIdeálna veľkosť sú tvoje **výdavky na 3 až 6 mesiacov**.\n\nKde ju držať? Na rýchlo prístupnom sporiacom účte s nízkym rizikom.",
        interactiveComponent: 'emergency_fund_calculator',
        quiz: {
            question: "Aká veľká by mala byť tvoja finančná rezerva?",
            options: [
                { text: "Aspoň 10 000 eur bez ohľadu na moje výdavky.", correct: false },
                { text: "Moje bežné výdavky na 3 až 6 mesiacov.", correct: true },
                { text: "Celá moja mesačná výplata.", correct: false }
            ]
        },
        prev: 'zf_uspory',
        initial_desc: "Tvoj bezpečnostný vankúš – vypočítaj si koľko potrebuješ."
    },
    'zf_inflacia': {
        title: "6. Inflácia – strata hodnoty peňazí",
        icon: "fas fa-fire-alt",
        text: "**Inflácia** znamená, že ceny časom rastú a za rovnaké peniaze kúpiš menej. Ak máš peniaze len na bežnom účte alebo v hotovosti, ich kúpna sila klesá.\n\nPreto je dôležité mať rezervu v bezpečí, ale zvyšok peňazí postupne presúvať do aktív, ktoré majú šancu infláciu poraziť (napr. akcie, ETF).",
        interactiveComponent: 'inflation_simulator',
        quiz: {
            question: "Čo spôsobuje inflácia tvojim úsporám, ak sú dlhodobo len na bežnom účte?",
            options: [
                { text: "Zvyšuje ich hodnotu, lebo ceny klesajú.", correct: false },
                { text: "Nemá na ne žiadny vplyv.", correct: false },
                { text: "Znižuje ich kúpnu silu – kúpiš za ne menej.", correct: true }
            ]
        },
        prev: 'zf_rezerva',
        initial_desc: "Pochopíš, prečo 'peniaze pod vankúšom' nie sú riešenie."
    },
    'zf_dlhy': {
        title: "7. Dobré a zlé dlhy",
        icon: "fas fa-credit-card",
        text: "Nie každý dlh je zlý! **Dobrý dlh** (napr. hypotéka na byt) ti pomáha budovať majetok. **Zlý dlh** (napr. pôžička na nový mobil alebo dovolenku) ti len ťahá peniaze z vrecka kvôli vysokým úrokom.\n\n**Metódy splácania dlhov:**\n• **Snowball** – splácať najmenšie dlhy ako prvé (motivácia)\n• **Avalanche** – splácať dlhy s najvyšším úrokom ako prvé (matematicky najlepšie)",
        interactiveComponent: 'debt_calculator',
        quiz: {
            question: "Ktorý z nasledujúcich dlhov sa zvyčajne považuje za ZLÝ dlh?",
            options: [
                { text: "Hypotéka na bývanie s nízkym úrokom.", correct: false },
                { text: "Študentská pôžička na vzdelanie.", correct: false },
                { text: "Spotrebný úver na novú hernú konzolu.", correct: true }
            ]
        },
        prev: 'zf_inflacia',
        initial_desc: "Nauč sa rozlišovať úvery a vyskúšaj si kalkulačku dlhov."
    },

    // ============================================================
    // MODUL: Psychológia peňazí & Finančné ciele
    // ============================================================
    'psy_impulzivne': {
        title: "1. Impulzívne nákupy",
        icon: "fas fa-brain",
        text: "Impulzívne nákupy sú nákupy, ktoré robíme **bez premyslenia**. Často po nich nasleduje pocit viny.\n\nPri nákupe sa uvoľňuje **dopamín** – chemická odmena v mozgu. To vysvetľuje, prečo nakupovanie môže byť návykové.",
        quiz: {
            question: "Prečo radi nakupujeme impulzívne?",
            options: [
                { text: "Mozog uvoľní dopamín – pocit odmeny.", correct: true },
                { text: "Pretože vždy potrebujeme nové veci.", correct: false },
                { text: "Pretože nás k tomu núti banka.", correct: false }
            ]
        },
        prev: null,
        initial_desc: "Pochop, prečo míňaš bez premyslenia."
    },
    'psy_marketing': {
        title: "2. Marketingové triky",
        icon: "fas fa-bullhorn",
        text: "Obchody a reklamy využívajú **psychologické triky**, aby ťa prinútili kúpiť:\n\n• **Zľavy a časovo obmedzené ponuky** – vytvára pocit naliehavosti\n• **Lákavé obaly a reklamy** – apelujú na emócie\n• **Sociálny tlak** – 'všetci to majú'\n• **Cena 9,99 €** – vyzerá lacnejšie ako 10 €\n\nKľúč: **Počkaj 24 hodín** pred impulzívnym nákupom. Skutočne to potrebuješ?",
        interactiveComponent: 'psychology_quiz',
        quiz: {
            question: "Aký marketingový trik vytvára pocit naliehavosti?",
            options: [
                { text: "Vernostný program.", correct: false },
                { text: "Časovo obmedzená ponuka / zľavy.", correct: true },
                { text: "Bezplatná doprava.", correct: false }
            ]
        },
        prev: 'psy_impulzivne',
        initial_desc: "Odhaľ triky, ktoré používajú obchody."
    },
    'psy_mindset': {
        title: "3. Money Mindset",
        icon: "fas fa-lightbulb",
        text: "Tvoj **postoj k peniazom** ovplyvňuje tvoje rozhodnutia. Rozlišuj medzi **potrebami** a **túžbami**.\n\n• **Potreba** – niečo čo potrebuješ na prežitie (jedlo, bývanie)\n• **Túžba** – niečo čo chceš, ale nepotrebuješ (nový iPhone, značkové oblečenie)\n\nZmeň svoj mindset: Peniaze nie sú len na míňanie – sú nástrojom na **budovanie slobody**.",
        quiz: {
            question: "Aký je rozdiel medzi potrebou a túžbou?",
            options: [
                { text: "Žiadny rozdiel – sú rovnaké.", correct: false },
                { text: "Potreba je na prežitie, túžba je niečo extra.", correct: true },
                { text: "Túžba je dôležitejšia ako potreba.", correct: false }
            ]
        },
        prev: 'psy_marketing',
        initial_desc: "Zmeň spôsob, akým premýšľaš o peniazoch."
    },
    'psy_ciele': {
        title: "4. Finančné ciele – SMART",
        icon: "fas fa-bullseye",
        text: "Efektívne finančné ciele sú **SMART**:\n\n• **S**pecifické – presne vieš, čo chceš\n• **M**erateľné – vieš sledovať pokrok\n• **A**dosiahnuteľné – realistické\n• **R**elevantné – dôležité pre teba\n• **T**ermínované – máš deadline\n\nPríklad: 'Ušetrím 1000 € na notebook do 10 mesiacov odkladaním 100 € mesačne.'",
        interactiveComponent: 'goal_tracker',
        quiz: {
            question: "Čo znamená písmeno T v SMART cieľoch?",
            options: [
                { text: "Tajné.", correct: false },
                { text: "Termínované – máš konkrétny deadline.", correct: true },
                { text: "Teoretické.", correct: false }
            ]
        },
        prev: 'psy_mindset',
        initial_desc: "Nauč sa stanovovať ciele a sleduj si pokrok."
    },

    // ============================================================
    // MODUL: Krypto
    // ============================================================
    'krypto_zaklady': {
        title: "1. Čo je to Bitcoin a Blockchain?",
        icon: "fab fa-bitcoin",
        text: "**Kryptomeny** sú digitálne peniaze. Nepatria žiadnej banke ani štátu. Fungujú vďaka technológii zvanej **Blockchain** – čo je vlastne obrovská verejná účtovná kniha, do ktorej sa zapisujú všetky transakcie a nedá sa sfalšovať. Najznámejšou a prvou kryptomenou je **Bitcoin**.",
        quiz: {
            question: "Čo je to Blockchain?",
            options: [
                { text: "Tajná banka vo Švajčiarsku.", correct: false },
                { text: "Nová aplikácia na platenie od Googlu.", correct: false },
                { text: "Decentralizovaná verejná účtovná kniha transakcií.", correct: true }
            ]
        },
        prev: null,
        initial_desc: "Spoznaj digitálne zlato a základnú technológiu."
    },
    'krypto_ethereum': {
        title: "2. Ethereum a Smart Kontrakty",
        icon: "fab fa-ethereum",
        text: "Kým Bitcoin je ako 'digitálne zlato', **Ethereum** je ako obrovský svetový počítač. Zaviedlo tzv. **Smart Kontrakty** (inteligentné zmluvy). Sú to programy, ktoré sa vykonajú úplne automaticky, keď sa splnia vopred dohodnuté podmienky, a to bez potreby právnika alebo notára.",
        quiz: {
            question: "Čo umožňujú Smart Kontrakty (Inteligentné zmluvy)?",
            options: [
                { text: "Automatické vykonanie dohody bez prostredníka.", correct: true },
                { text: "Zníženie spotreby elektriny pri ťažbe Bitcoinu.", correct: false },
                { text: "Odosielanie fyzických listov cez internet.", correct: false }
            ]
        },
        prev: 'krypto_zaklady',
        initial_desc: "Objav svet inteligentných zmlúv."
    },
    'krypto_bezpecnost': {
        title: "3. Bezpečnosť a Peňaženky",
        icon: "fas fa-wallet",
        text: "V krypte platí zlaté pravidlo: **'Not your keys, not your coins'** (Nemáš kľúče, nemáš mince). Ak držíš krypto na burze, reálne ho nevlastníš. Pre maximálnu bezpečnosť by si mal používať **Hardvérovú peňaženku** (tzv. Cold Wallet) – zariadenie podobné USB kľúču, ktoré je odpojené od internetu a chráni ťa pred hackermi.",
        quiz: {
            question: "Aký je najbezpečnejší spôsob uloženia kryptomien?",
            options: [
                { text: "Nechať ich dlhodobo na kryptomenovej burze.", correct: false },
                { text: "Uložiť ich na hardvérovú peňaženku (Cold Wallet).", correct: true },
                { text: "Vytlačiť si ich na papier a zakopať v záhrade.", correct: false }
            ]
        },
        prev: 'krypto_ethereum',
        initial_desc: "Ako neprísť o svoje ťažko zarobené krypto."
    },

    // ============================================================
    // MODUL: Bankovníctvo
    // ============================================================
    'banka_ucty': {
        title: "1. Bežný vs. Sporiaci účet",
        icon: "fas fa-piggy-bank",
        text: "Banka je miesto, kde sú tvoje peniaze v bezpečí, ale nezarábajú veľa. **Bežný účet** slúži na každodenné platby (výplata, nákupy). **Sporiaci účet** ponúka síce malý úrok, ale z dlhodobého hľadiska na ňom peniaze kvôli inflácii strácajú kúpnu silu. Preto by mal slúžiť len na uloženie tvojej finančnej rezervy, nie na budovanie majetku.",
        quiz: {
            question: "Na čo je primárne určený bežný účet v banke?",
            options: [
                { text: "Na dlhodobé zhodnocovanie majetku a ochranu pred infláciou.", correct: false },
                { text: "Na každodenné transakcie, platenie účtov a prijímanie výplaty.", correct: true },
                { text: "Je to špeciálny účet na nákup akcií.", correct: false }
            ]
        },
        prev: null,
        initial_desc: "Kde držať peniaze a prečo."
    },
    'banka_hypoteky': {
        title: "2. Ako funguje hypotéka?",
        icon: "fas fa-house-user",
        text: "**Hypotéka** je dlhodobý úver na bývanie, pri ktorom ručíš zakúpenou nehnuteľnosťou. Banka ti zvyčajne nepožičia 100 % sumy, ale napríklad 80 % (tzv. **LTV** - Loan to Value). Zvyšných 20 % musíš mať našetrených. Pri hypotéke si všímaj hlavne **úrokovú sadzbu** a **dobu fixácie** (čas, počas ktorého ti banka garantuje, že sa úrok nezmení).",
        quiz: {
            question: "Čo znamená skratka LTV pri hypotéke?",
            options: [
                { text: "Pomer výšky úveru k hodnote nehnuteľnosti (Loan to Value).", correct: true },
                { text: "Poplatok za predčasné splatenie úveru.", correct: false },
                { text: "Zákonné poistenie proti neschopnosti splácať.", correct: false }
            ]
        },
        prev: 'banka_ucty',
        initial_desc: "Ako fungujú úvery na bývanie."
    },
    'banka_zarobok': {
        title: "3. Ako banky zarábajú?",
        icon: "fas fa-exchange-alt",
        text: "Banky nie sú charita. Ich hlavným zdrojom príjmov je **rozdiel v úrokoch**. Funguje to takto: Tebe dajú na sporiacom účte úrok napríklad 1 % ročne. Tvoje peniaze ale nenechajú ležať v trezore, obratom ich požičajú niekomu inému vo forme hypotéky alebo spotrebného úveru za 5 % až 10 % úrok. Tento rozdiel je ich zisk.",
        quiz: {
            question: "Z čoho primárne banky tvoria svoj zisk?",
            options: [
                { text: "Tlačia nové peniaze na povolenie štátu.", correct: false },
                { text: "Len z mesačných poplatkov za vedenie účtov.", correct: false },
                { text: "Z rozdielu medzi úrokmi, ktoré platia sporiteľom a úrokmi od dlžníkov.", correct: true }
            ]
        },
        prev: 'banka_hypoteky',
        initial_desc: "Odhaľ, ako funguje bankový biznis."
    },

    // ============================================================
    // MODUL: Budgeting (Praktický)
    // ============================================================
    'budget_tracker': {
        title: "1. Sledovanie výdavkov",
        icon: "fas fa-receipt",
        text: "Prvý krok k lepšiemu hospodáreniu je **vedieť, kam peniaze odchádzajú**. Zapisuj si každý výdavok – od kávy po nájom. Po mesiaci budeš prekvapený, koľko peňazí uteká na maličkosti.\n\nKategórie: **Jedlo, Bývanie, Zábava, Doprava** – roztried si výdavky a získaj prehľad.",
        interactiveComponent: 'expense_tracker',
        quiz: {
            question: "Prečo je dôležité sledovať výdavky?",
            options: [
                { text: "Nemá to žiadny zmysel.", correct: false },
                { text: "Aby si videl, kam peniaze odchádzajú a mohol ušetriť.", correct: true },
                { text: "Lebo to vyžaduje zákon.", correct: false }
            ]
        },
        prev: null,
        initial_desc: "Vyskúšaj si tracker výdavkov."
    },
    'budget_fixne_variabilne': {
        title: "2. Fixné vs variabilné výdavky",
        icon: "fas fa-sliders-h",
        text: "**Fixné výdavky** sú pravidelné a rovnaké každý mesiac: nájom, poistenie, predplatné. **Variabilné výdavky** sa menia: jedlo, zábava, oblečenie.\n\nTrik: Fixné výdavky je ťažké znížiť, ale keď ich znížiš, efekt je dlhodobý. Variabilné výdavky vieš ovplyvniť okamžite.",
        quiz: {
            question: "Čo je príklad fixného výdavku?",
            options: [
                { text: "Lístok do kina.", correct: false },
                { text: "Mesačný nájom.", correct: true },
                { text: "Nákup oblečenia.", correct: false }
            ]
        },
        prev: 'budget_tracker',
        initial_desc: "Pochop, aké výdavky vieš ovplyvniť."
    },
    'budget_1000': {
        title: "3. Ako ušetriť prvých 1000 €",
        icon: "fas fa-trophy",
        text: "Prvých 1000 € je najťažších. Tu sú tipy:\n\n• **Sprav si audit** – pozri sa 3 mesiace späť, čo si kúpil zbytočne\n• **Pravidlo 24 hodín** – pred nákupom počkaj deň\n• **Challenge:** Odlož každý deň +1 € (1+2+3... = za 45 dní máš 1035 €)\n• **Cancel nepotrebné predplatné** – koľko streamovacích služieb reálne používaš?\n\n**Splň výzvu a ušetri svojich prvých 1000 €!** 🎯",
        quiz: {
            question: "Aký je dobrý trik na obmedzenie impulzívnych nákupov?",
            options: [
                { text: "Kúpiť si všetko okamžite v zľave.", correct: false },
                { text: "Počkať 24 hodín pred nákupom.", correct: true },
                { text: "Nevšímať si ceny.", correct: false }
            ]
        },
        prev: 'budget_fixne_variabilne',
        initial_desc: "Praktické tipy a challenge na ušetrenie 1000 €."
    }
};

// --- DÁTA PRE MODULY ---
const modules = {
    'zaklady': {
        title: "Základy financií",
        description: "Peniaze, rozpočet, dlhy, inflácia a finančná rezerva. Plná interaktívnych nástrojov!",
        lessonKeys: ['zf_peniaze', 'zf_aktiva_pasiva', 'zf_rozpocet', 'zf_uspory', 'zf_rezerva', 'zf_inflacia', 'zf_dlhy']
    },
    'budgeting': {
        title: "Budgeting – Praktické nástroje",
        description: "Tracker výdavkov, rozpočet a challenge na ušetrenie prvých 1000 €.",
        lessonKeys: ['budget_tracker', 'budget_fixne_variabilne', 'budget_1000']
    },
    'psychologia': {
        title: "Psychológia peňazí & Ciele",
        description: "Impulzívne nákupy, marketing, money mindset a SMART ciele s goal trackerom.",
        lessonKeys: ['psy_impulzivne', 'psy_marketing', 'psy_mindset', 'psy_ciele']
    },
    'investovanie': {
        title: "Investovanie (Akcie, Fondy, ETF)",
        description: "Základy a pokročilé stratégie pre dlhodobý rast majetku, vrátane pasívneho investovania cez ETF.",
        lessonKeys: ['inv_zaklady_urocenie', 'inv_riziko_poplatky', 'inv_etf_pasivne']
    },
    'krypto': {
        title: "Krypto (Bitcoin, NFT)",
        description: "Základy digitálnych aktív, blockchainu a bezpečnosti.",
        lessonKeys: ['krypto_zaklady', 'krypto_ethereum', 'krypto_bezpecnost']
    },
    'hypoteky': {
        title: "Bankovníctvo",
        description: "Ako fungujú bežné účty, úvery a hypotéky.",
        lessonKeys: ['banka_ucty', 'banka_hypoteky', 'banka_zarobok']
    }
};