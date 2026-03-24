/**
 * Data for Video Courses in kurzy.html
 */
const kurzyData = {
    'zaklady-investovania': {
        title: "Základy investovania",
        category: "investovanie",
        videoId: "ETxmCCsMoD0",
        notes: `
            <h3>Čo je to investovanie?</h3>
            <p>Investovanie je proces vkladania peňazí do aktív s očakávaním, že ich hodnota v čase porastie.</p>
            <ul>
                <li><strong>Aktíva:</strong> Akcie, dlhopisy, nehnuteľnosti, fondy (ETF).</li>
                <li><strong>Cieľ:</strong> Poraziť infláciu a budovať dlhodobý majetok.</li>
                <li><strong>Pravidlo č. 1:</strong> Nikdy neinvestuj do niečoho, čomu nerozumieš.</li>
            </ul>
            <h3>Zložené úročenie</h3>
            <p>Einstein ho nazval "ôsmy div sveta". Peniaze, ktoré zarobíte, začnú zarábať ďalšie peniaze.</p>
        `,
        quiz: [
            {
                question: "Čo je hlavným cieľom investovania?",
                options: ["Minúť všetky peniaze hneď.", "Zhodnotiť peniaze v čase a poraziť infláciu.", "Uložiť peniaze do banky s 0% úrokom."],
                correct: 1
            },
            {
                question: "Čo znamená zložené úročenie?",
                options: ["Úroky sa počítajú len z pôvodného vkladu.", "Úroky sa počítajú z vkladu aj z už pripísaných úrokov.", "Banka vám strhne poplatok za úrok."],
                correct: 1
            }
        ]
    },
    'ako-rozpocet': {
        title: "Ako si vytvoriť rozpočet",
        category: "peniaze",
        videoId: "ETxmCCsMoD0",
        notes: `
            <h3>Pravidlo 50/30/20</h3>
            <p>Jednoduchý spôsob, ako rozdeliť váš mesačný príjem:</p>
            <ul>
                <li><strong>50 %:</strong> Nevyhnutné výdavky (nájom, jedlo, účty).</li>
                <li><strong>30 %:</strong> Osobné radosti (koníčky, kino, reštaurácie).</li>
                <li><strong>20 %:</strong> Úspory a investície.</li>
            </ul>
            <h3>Sledovanie výdavkov</h3>
            <p>Ak nevieš, kam tvoje peniaze idú, nemôžeš ich ovládať. Používaj appku alebo jednoduchý excel.</p>
        `,
        quiz: [
            {
                question: "Koľko % by malo podľa pravidla 50/30/20 smerovať na úspory?",
                options: ["50 %", "30 %", "20 %"],
                correct: 2
            },
            {
                question: "Čo patrí medzi nevyhnutné výdavky?",
                options: ["Nájom a základné potraviny.", "Nové značkové tričko.", "Netflix predplatné."],
                correct: 0
            }
        ]
    },
    'co-je-inflacia': {
        title: "Čo je to inflácia?",
        category: "zaklady",
        videoId: "ETxmCCsMoD0",
        notes: `
            <h3>Pochopenie inflácie</h3>
            <p>Inflácia je rast všeobecnej cenovej hladiny. Znamená to, že za 1 euro si dnes kúpite menej ako pred rokom.</p>
            <ul>
                <li><strong>Príčina:</strong> Viac peňazí v obehu, vyššie náklady na výrobu.</li>
                <li><strong>Dopad:</strong> Peniaze na bežnom účte strácajú kúpnu silu.</li>
                <li><strong>Obrana:</strong> Investovanie do aktív, ktoré rastú rýchlejšie ako inflácia.</li>
            </ul>
        `,
        quiz: [
            {
                question: "Čo spôsobuje vysoká inflácia?",
                options: ["Zlacňovanie tovarov.", "Znižovanie kúpnej sily peňazí.", "Zvyšovanie hodnoty peňazí na účte."],
                correct: 1
            }
        ]
    },
    'hypoteka-vs-najom': {
        title: "Hypotéka vs. Podnájom",
        category: "banky",
        videoId: "ETxmCCsMoD0",
        notes: `
            <h3>Kedy zvoliť hypotéku?</h3>
            <p>Ak máte stabilný príjem a plánujete v danej lokalite zostať dlhodobo (10+ rokov).</p>
            <ul>
                <li><strong>Výhoda:</strong> Budujete vlastný majetok.</li>
                <li><strong>Nevýhoda:</strong> Zodpovednosť za opravy, nižšia flexibilita.</li>
            </ul>
            <h3>Kedy zvoliť podnájom?</h3>
            <p>Ak si ceníte flexibilitu, často cestujete alebo nemáte našetrené na akontáciu (LTV).</p>
        `,
        quiz: [
            {
                question: "Čo znamená skratka LTV?",
                options: ["Pomer výšky úveru k hodnote nehnuteľnosti.", "Dĺžka splácania hypotéky.", "Úroková sadzba v banke."],
                correct: 0
            }
        ]
    },
    'etf-fondy': {
        title: "Čo sú to ETF fondy?",
        category: "investovanie",
        videoId: "ETxmCCsMoD0",
        notes: `
            <h3>Exchange Traded Funds (ETF)</h3>
            <p>ETF je kôš akcií alebo dlhopisov, ktorý sa obchoduje na burze podobne ako bežné akcie.</p>
            <ul>
                <li><strong>Diverzifikácia:</strong> Kúpou jedného ETF vlastníte podiely v stovkách firiem (napr. S&P 500).</li>
                <li><strong>Nízke náklady:</strong> ETF sú zvyčajne oveľa lacnejšie ako podielové fondy v bankách.</li>
                <li><strong>Pasivita:</strong> Nemusíte vyberať jednotlivé akcie, investujete do celého trhu.</li>
            </ul>
        `,
        quiz: [
            {
                question: "Čo je hlavnou výhodou investovania do ETF S&P 500?",
                options: ["Vlastníte podiely v 500 najväčších US firmách.", "Garantovaný zisk 20% mesačne.", "Nulové riziko straty."],
                correct: 0
            }
        ]
    },
    'krypto-zaklady': {
        title: "Kryptomeny a Bitcoin",
        category: "krypto",
        videoId: "ETxmCCsMoD0",
        notes: `
            <h3>Svet kryptomien</h3>
            <p>Kryptomeny sú digitálne aktíva založené na technológii Blockchain.</p>
            <ul>
                <li><strong>Bitcoin:</strong> Prvá a najznámejšia kryptomena, často nazývaná digitálne zlato.</li>
                <li><strong>Decentralizácia:</strong> Žiadna banka ani vláda nekontroluje sieť.</li>
                <li><strong>Bezpečnosť:</strong> O svoje kľúče (seed) sa staráte vy sami.</li>
            </ul>
        `,
        quiz: [
            {
                question: "Kto kontroluje sieť Bitcoin?",
                options: ["Centrálna banka USA.", "Decentralizovaná sieť počítačov po celom svete.", "Elon Musk."],
                correct: 1
            }
        ]
    },
    'kreditne-karty': {
        title: "Kreditné karty a dlhy",
        category: "banky",
        videoId: "ETxmCCsMoD0",
        notes: `
            <h3>Kreditka vs. Debetka</h3>
            <p>Pri debetnej karte míňate svoje peniaze. Pri kreditnej karte si peniaze požičiavate od banky.</p>
            <ul>
                <li><strong>Bezúročné obdobie:</strong> Ak dlh splatíte včas, neplatíte úrok.</li>
                <li><strong>Pasca:</strong> Ak nesplatíte včas, úroky sú veľmi vysoké (často 15-20% ročne).</li>
            </ul>
        `,
        quiz: [
            {
                question: "Kedy banka začne účtovať úrok na kreditnej karte?",
                options: ["Okamžite po každom nákupe.", "Ak nesplatíte dlh do konca bezúročného obdobia.", "Banka nikdy neúčtuje úrok na kreditke."],
                correct: 1
            }
        ]
    },
    'financna-rezerva': {
        title: "Tvorba finančnej rezervy",
        category: "peniaze",
        videoId: "ETxmCCsMoD0",
        notes: `
            <h3>Váš záchranný vankúš</h3>
            <p>Finančná rezerva je suma peňazí odložená na neočakávané výdavky.</p>
            <ul>
                <li><strong>Odporúčaná suma:</strong> 3 až 6-násobok vašich mesačných výdavkov.</li>
                <li><strong>Kde ju držať:</strong> Na sporiacom účte, kde je dostupná okamžite.</li>
                <li><strong>Účel:</strong> Strata práce, oprava auta, nečakaný lekár.</li>
            </ul>
        `,
        quiz: [
            {
                question: "Aká je odporúčaná veľkosť finančnej rezervy?",
                options: ["Jedna mesačná výplata.", "3 až 6-násobok mesačných výdavkov.", "Dostatok peňazí na 10 rokov."],
                correct: 1
            }
        ]
    },
    'due-diligence': {
        title: "Ako na Due Diligence",
        category: "investovanie",
        videoId: "ETxmCCsMoD0",
        isPremium: true,
        notes: `
            <h3>Due Diligence (Hĺbková previerka)</h3>
            <p>Tento obsah je dostupný len pre <strong>Prémiových členov</strong>.</p>
            <p>V tejto lekcii sa dozviete, ako analyzovať firmu pred kúpou alebo investíciou, na čo sa zamerať v účtovných závierkach a ako identifikovať skryté riziká.</p>
        `,
        quiz: []
    },
    'pokrocile-strategie': {
        title: "Pokročilé investičné stratégie",
        category: "investovanie",
        videoId: "ETxmCCsMoD0",
        isPremium: true,
        notes: `
            <h3>Pokročilé stratégie</h3>
            <p>Tento obsah je dostupný len pre <strong>Prémiových členov</strong>.</p>
            <p>Témy: Short-selling, opčné stratégie, arbitráž a riadenie portfólia v krízových časoch.</p>
        `,
        quiz: []
    }
};
