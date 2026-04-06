// Dark Mode Toggle
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.innerText = theme === 'light' ? '🌙' : '☀️';
    }
}

// FAQ Accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('active');
        });
    });
}

// Team Modal Logic
const teamData = {
    'lukas': {
        name: "Lukáš Roman",
        role: "Founder",
        image: "img/team/lukas.png",
        bio: "Volám sa Lukáš Roman a pochádzam z Bardejova. Študujem letecké a kozmické technológie na Technickej univerzite v Košiciach a zároveň externe právo na Univerzite Pavla Jozefa Šafárika. Popri štúdiu sa dlhodobo venujem osobným financiám a finančnej gramotnosti, ktoré ma zaujali najmä z praktického hľadiska – ako robiť lepšie rozhodnutia v bežnom živote. FinLit vznikol ako moja iniciatíva preniesť tieto poznatky ďalej a vytvoriť niečo, čo má reálny dopad. Zároveň ho vnímam ako prvý krok k tomu, aby som sa postupne presadil vo svete financií."
    },
    'peter': {
        name: "Peter Sabol",
        role: "Co-Founder",
        image: "img/team/peter.png",
        bio: "Ahoj, volám sa Peter Sabol a pochádzam z Bardejova a som študentom inžinierskeho stupňa na TUKE v odbore Počítačové siete. Zároveň študujem inžiniersky program Finančné riadenie podniku na EUBA. Mám ukončené bakalárske štúdium a dlhodobo sa zaujímam o prepájanie technológií a financií. Popri štúdiu sa venujem investovaniu a aktívne pracujem na svojom osobnom rozvoji – či už v oblasti vedomostí, disciplíny alebo dlhodobého myslenia. Zaujíma ma budovanie hodnoty, efektívne riadenie zdrojov a neustále zlepšovanie samého seba. Rád by som svoje skúsenosti posúval ďalej a pomáhal ľuďom lepšie porozumieť investovaniu a práci s financiami vďaka projektu FinLit."
    },
    'adrian': {
        name: "Adrian Cimbaľák",
        role: "Co-Founder",
        image: "img/team/adrian.png",
        bio: "Ahoj, som Adrian Cimbaľák, mám 20 rokov a som z Bardejova. Študujem na TUKE v Košiciach a mám skúsenosti z financií, vrátane práce finančného poradcu.  S kolegami sme vytvorili aplikáciu, pretože mladí ľudia často nerozumejú peniazom – chceme im to vysvetliť jednoducho a hravo.  Baví ma tvoriť nové veci, rozvíjať sa a pracovať na projektoch, ktoré majú zmysel. A raz si chcem kúpiť vilu s výhľadom na more – ideálne bez instantných rezancov"
    }
};

function showMember(id) {
    const member = teamData[id];
    if (!member) return;

    const modal = document.getElementById('team-modal');
    const detail = document.getElementById('member-detail');

    detail.innerHTML = `
        <div class="member-header">
            <img src="${member.image}" alt="${member.name}">
            <div>
                <h2>${member.name}</h2>
                <div class="member-role">${member.role}</div>
            </div>
        </div>
        <div class="member-bio">
            <p>${member.bio}</p>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

function closeMemberModal() {
    const modal = document.getElementById('team-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    const modal = document.getElementById('team-modal');
    if (event.target === modal) {
        closeMemberModal();
    }
});

// Initialize everything on load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initFAQ();
});
