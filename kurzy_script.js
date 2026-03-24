/**
 * Logic for Video Course View Switching and Quiz in kurzy.html
 */

let currentLessonId = null;
let currentTab = 'video';

function filterCourses(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });

    // Filter cards
    document.querySelectorAll('.video-card').forEach(card => {
        if (category === 'všetko' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function openLesson(lessonId) {
    const lesson = kurzyData[lessonId];
    if (!lesson) return;

    // Check for Premium
    if (lesson.isPremium) {
        alert("🔒 Táto lekcia je dostupná len pre Prémiových členov.\nAk máš záujem, kontaktuj nás!");
        return;
    }

    currentLessonId = lessonId;
    currentTab = 'video';

    // Update Header
    document.getElementById('lesson-title-display').innerText = lesson.title;

    // Switch Views
    document.getElementById('grid-view').style.display = 'none';
    document.getElementById('lesson-view').style.display = 'block';

    // Scroll to top
    window.scrollTo(0, 0);

    // Load initial content
    renderTabContent();
}

function closeLesson() {
    // Switch Views back
    document.getElementById('lesson-view').style.display = 'none';
    document.getElementById('grid-view').style.display = 'block';

    // Stop video
    document.getElementById('lesson-video-frame').src = '';

    // Scroll back to courses grid
    window.scrollTo(0, 0);
}

function switchTab(tab) {
    currentTab = tab;

    // Update active tab button style
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tab);
    });

    renderTabContent();
}

function renderTabContent() {
    const lesson = kurzyData[currentLessonId];

    // Hide all contents
    document.getElementById('tab-video-container').style.display = 'none';
    document.getElementById('tab-notes-container').style.display = 'none';
    document.getElementById('tab-quiz-container').style.display = 'none';

    if (currentTab === 'video') {
        const videoCont = document.getElementById('tab-video-container');
        videoCont.style.display = 'block';
        const iframe = document.getElementById('lesson-video-frame');
        if (iframe.src === '' || !iframe.src.includes(lesson.videoId)) {
            iframe.src = `https://www.youtube-nocookie.com/embed/${lesson.videoId}?autoplay=1`;
        }
    } else if (currentTab === 'notes') {
        const notesCont = document.getElementById('tab-notes-container');
        notesCont.style.display = 'block';
        notesCont.innerHTML = lesson.notes;
    } else if (currentTab === 'quiz') {
        const quizCont = document.getElementById('tab-quiz-container');
        quizCont.style.display = 'block';
        renderQuiz(lesson.quiz);
    }
}

function renderQuiz(quiz) {
    const quizCont = document.getElementById('tab-quiz-container');
    quizCont.innerHTML = '<h3>Otestuj sa!</h3>';

    quiz.forEach((q, qIndex) => {
        let optionsHtml = '';
        q.options.forEach((opt, optIndex) => {
            optionsHtml += `
                <label class="quiz-option">
                    <input type="radio" name="q${qIndex}" value="${optIndex}">
                    <span>${opt}</span>
                </label>
            `;
        });

        quizCont.innerHTML += `
            <div class="quiz-question-block" id="q-block-${qIndex}">
                <p class="quiz-question">${qIndex + 1}. ${q.question}</p>
                <div class="quiz-options-grid">
                    ${optionsHtml}
                </div>
                <div class="quiz-feedback" id="feedback-${qIndex}"></div>
            </div>
        `;
    });

    quizCont.innerHTML += `
        <button class="btn-primary" onclick="checkQuiz()" style="margin-top: 20px;">Vyhodnotiť test</button>
        <div id="quiz-result-summary" style="margin-top: 20px; font-weight: 800; font-size: 1.2rem;"></div>
    `;
}

function checkQuiz() {
    const lesson = kurzyData[currentLessonId];
    let correctCount = 0;

    lesson.quiz.forEach((q, qIndex) => {
        const selected = document.querySelector(`input[name="q${qIndex}"]:checked`);
        const feedback = document.getElementById(`feedback-${qIndex}`);
        const qBlock = document.getElementById(`q-block-${qIndex}`);

        if (selected) {
            const answerIndex = parseInt(selected.value);
            if (answerIndex === q.correct) {
                correctCount++;
                feedback.innerHTML = '<span style="color: var(--fin-green-dark);">Správne! ✅</span>';
                qBlock.style.borderColor = 'var(--fin-green-light)';
            } else {
                feedback.innerHTML = `<span style="color: var(--fin-red);">Nesprávne. ❌ Správna odpoveď: ${q.options[q.correct]}</span>`;
                qBlock.style.borderColor = 'var(--fin-red)';
            }
        } else {
            feedback.innerHTML = '<span style="color: #666;">Nevybrali ste odpoveď.</span>';
        }
    });

    const summary = document.getElementById('quiz-result-summary');
    summary.innerHTML = `Váš výsledok: ${correctCount} z ${lesson.quiz.length}`;
}
