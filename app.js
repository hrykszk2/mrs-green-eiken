import questionBank from './vocab_data.js';

// DOM Elements
const screens = {
    home: document.getElementById('home-screen'),
    quiz: document.getElementById('quiz-screen'),
    explanation: document.getElementById('explanation-screen'),
    result: document.getElementById('result-screen'),
    vocab: document.getElementById('vocab-screen')
};

// State
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedOptionIndex = null;
let savedVocab = JSON.parse(localStorage.getItem('mrsGreenEikenVocab')) || [];
let currentMode = 'normal'; // 'normal' or 'vocab'

// Initialize
function init() {
    // Home screen buttons
    document.getElementById('btn-start-normal').addEventListener('click', () => startQuiz('normal'));
    document.getElementById('btn-start-vocab').addEventListener('click', () => startQuiz('vocab'));
    document.getElementById('btn-open-vocab').addEventListener('click', openVocabBook);

    // Quiz screen
    document.getElementById('btn-answer').addEventListener('click', checkAnswer);

    // Explanation screen
    document.getElementById('btn-next').addEventListener('click', nextQuestion);
    document.getElementById('btn-save-vocab').addEventListener('click', saveToVocab);
    document.getElementById('btn-speak').addEventListener('click', speakSentence);

    // Global back/home buttons
    document.querySelectorAll('.btn-home').forEach(btn => {
        btn.addEventListener('click', () => switchScreen('home'));
    });
}

function switchScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startQuiz(mode) {
    currentMode = mode;
    let pool = [];
    
    if (mode === 'vocab') {
        if (savedVocab.length === 0) {
            alert('単語帳に保存された問題がありません。まずは通常モードで問題を保存してください。');
            return;
        }
        pool = questionBank.filter(q => savedVocab.includes(q.id));
    } else {
        pool = questionBank;
    }

    // Select 10 random questions (or less if pool is smaller)
    currentQuestions = shuffleArray(pool).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    
    loadQuestion();
    switchScreen('quiz');
}

function loadQuestion() {
    selectedOptionIndex = null;
    const q = currentQuestions[currentQuestionIndex];
    
    // Update Progress
    document.getElementById('current-q-num').textContent = currentQuestionIndex + 1;
    document.getElementById('progress-bar').style.width = `${((currentQuestionIndex) / currentQuestions.length) * 100}%`;
    
    // Update Question
    document.getElementById('question-type').textContent = q.type === 'conversation' ? '会話文' : '短文';
    document.getElementById('question-text').textContent = q.text;
    
    // Update Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = `${index + 1}. ${opt}`;
        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });

    // Reset Answer Button
    const ansBtn = document.getElementById('btn-answer');
    ansBtn.classList.add('disabled');
    ansBtn.disabled = true;
}

function selectOption(index, btnElement) {
    selectedOptionIndex = index;
    
    // Update UI
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    btnElement.classList.add('selected');
    
    // Enable Answer button
    const ansBtn = document.getElementById('btn-answer');
    ansBtn.classList.remove('disabled');
    ansBtn.disabled = false;
}

function checkAnswer() {
    const q = currentQuestions[currentQuestionIndex];
    const isCorrect = selectedOptionIndex === q.answer;
    
    if (isCorrect) {
        score++;
        document.getElementById('result-title').innerHTML = '<i class="fa-solid fa-circle-check"></i> 正解！';
        document.getElementById('result-title').className = 'result-title correct';
    } else {
        document.getElementById('result-title').innerHTML = '<i class="fa-solid fa-circle-xmark"></i> 不正解';
        document.getElementById('result-title').className = 'result-title incorrect';
    }

    // Fill the blank for display
    const fullSentence = q.text.replace('(    )', `[ ${q.options[q.answer]} ]`);
    document.getElementById('full-sentence-text').textContent = fullSentence;
    document.getElementById('translation-text').textContent = q.translation;
    document.getElementById('explanation-text').textContent = q.explanation;
    
    // Check if already in vocab
    const saveBtn = document.getElementById('btn-save-vocab');
    if (savedVocab.includes(q.id)) {
        saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> 保存済み';
        saveBtn.disabled = true;
        saveBtn.style.opacity = '0.5';
    } else {
        saveBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i> 単語帳に保存';
        saveBtn.disabled = false;
        saveBtn.style.opacity = '1';
    }

    switchScreen('explanation');
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
        switchScreen('quiz');
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('final-score').textContent = score;
    const total = currentQuestions.length;
    document.querySelector('.total').textContent = `/${total}`;
    
    let msg = '';
    const ratio = score / total;
    if (ratio === 1) {
        msg = 'Perfect!! ミセス愛が素晴らしいです🍏';
    } else if (ratio >= 0.7) {
        msg = 'Great job! 合格圏内です✨';
    } else {
        msg = 'Keep trying! 単語帳で復習しましょう📚';
    }
    document.getElementById('result-message').textContent = msg;
    
    switchScreen('result');
}

function saveToVocab() {
    const q = currentQuestions[currentQuestionIndex];
    if (!savedVocab.includes(q.id)) {
        savedVocab.push(q.id);
        localStorage.setItem('mrsGreenEikenVocab', JSON.stringify(savedVocab));
        
        const saveBtn = document.getElementById('btn-save-vocab');
        saveBtn.innerHTML = '<i class="fa-solid fa-check"></i> 保存済み';
        saveBtn.disabled = true;
        saveBtn.style.opacity = '0.5';
    }
}

function openVocabBook() {
    const listContainer = document.getElementById('vocab-list');
    const emptyState = document.getElementById('vocab-empty-state');
    
    listContainer.innerHTML = '';
    
    if (savedVocab.length === 0) {
        emptyState.style.display = 'flex';
    } else {
        emptyState.style.display = 'none';
        
        // Render saved words
        const savedQuestions = questionBank.filter(q => savedVocab.includes(q.id));
        savedQuestions.forEach(q => {
            const item = document.createElement('div');
            item.className = 'vocab-item';
            
            const fullSentence = q.text.replace('(    )', `[ ${q.options[q.answer]} ]`);
            
            item.innerHTML = `
                <div class="vocab-sentence">${fullSentence}</div>
                <div class="vocab-translation">${q.translation}</div>
                <div class="vocab-explanation">${q.explanation}</div>
            `;
            listContainer.appendChild(item);
        });
    }
    
    switchScreen('vocab');
}

function speakSentence() {
    const text = document.getElementById('full-sentence-text').textContent;
    if ('speechSynthesis' in window) {
        // Stop any current speech
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // Slightly slower for learning
        window.speechSynthesis.speak(utterance);
    } else {
        alert("お使いのブラウザは音声読み上げに対応していません。");
    }
}

// Start
document.addEventListener('DOMContentLoaded', init);
