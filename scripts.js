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
        bio: "Zakladateľ a vizionár projektu FinAp. Verí, že finančná gramotnosť by mala byť pevnou súčasťou vzdelávania každého mladého človeka. Lukáš vedie strategický rozvoj a partnerstvá."
    },
    'peter': {
        name: "Peter Sabol",
        role: "Co-Founder",
        image: "img/team/peter.png",
        bio: "Spoluzakladateľ, ktorý sa stará o budovanie vzťahov so školami a metodický rozvoj vzdelávacieho obsahu. Peter zabezpečuje, aby naše prednášky boli interaktívne a zrozumiteľné."
    },
    'adrian': {
        name: "Adrian Cimbaľák",
        role: "Co-Founder",
        image: "img/team/adrian.png",
        bio: "Ahoj, som Adrian Cimbaľák, mám 20 rokov a pochádzam z Bardejova. Momentálne študujem na TUKE v Košiciach. Mám skúsenosti z oblasti financií a pracoval som aj ako finančný poradca, čo mi dalo reálny pohľad na to, ako ľudia narábajú s peniazmi v každodennom živote. Spolu s kolegami sme sa rozhodli vytvoriť túto aplikáciu, pretože sme si uvedomili, že mladí ľudia často nevedia pracovať s financiami – hlavne preto, že im to nikto poriadne nevysvetlil. Naším cieľom je to zmeniť a pomôcť im pochopiť peniaze jednoduchou a hravou formou. Baví ma prichádzať s novými nápadmi a neustále na sebe pracovať – či už v oblasti technológií, alebo osobného rozvoja. Mojím cieľom je vytvárať veci, ktoré majú reálny význam a pomáhajú ľuďom. A popri tom si raz kúpiť vilu na kopci s výhľadom na more – ideálne legálne a bez toho, aby som jedol instantné rezance do konca života"
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
