import { completionLevels } from './syllable-completion-data.js';

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

function initGame() {
    targetArea.style.removeProperty('display');
    targetArea.style.display = 'block'; 
    board.className = "visual-grid text-mode";
    
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(3, auto)';
    board.style.justifyContent = 'center';
    board.style.gap = '16px';

    gameSessionLevels = [...completionLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    
    targetArea.innerHTML = `
        <div class="item-icon" style="font-size: 80px; margin-bottom: 10px;">${level.icon}</div>
        <div id="wordDisplay" class="no-wrap-text" style="font-size: 1.5rem; font-weight: bold;">${level.display}</div>
    `;
    
    board.innerHTML = '';
    feedback.style.color = "inherit";
    feedback.innerText = `Which syllable is missing?`;
    
    progressBar.style.backgroundColor = "var(--success-green)";
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    // 1. Separate the correct answer from the wrong options
    const wrongOptions = level.options.filter(syllable => syllable !== level.correct);
    
    // 2. Pick exactly 2 wrong options randomly
    const randomWrongOptions = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    
    // 3. Combine and shuffle
    const finalThreeChoices = [level.correct, ...randomWrongOptions].sort(() => Math.random() - 0.5);

    finalThreeChoices.forEach(syllable => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon" style="font-size: 1.2rem;">${syllable}</div>`;
        
        card.addEventListener('click', () => handleSelection(syllable, level.correct, card));
        board.appendChild(card);
    });
}

function handleSelection(selected, correct, element) {
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    const level = gameSessionLevels[currentLevel];
    const currentWordDisplay = document.getElementById('wordDisplay');

    if (selected === correct) {
        element.classList.add('correct-bounce');
        
        // Show the full word by replacing the --- placeholder with the correct syllable
        if (currentWordDisplay) {currentWordDisplay.textContent = level.display.replace(/_+/, level.correct);}
        
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Great job! You finished the word!";
        feedback.style.color = "var(--success-green)";
        
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < gameSessionLevels.length) {
                loadLevel(currentLevel);
            } else {
                completeGame();
            }
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Try a different syllable...";
        feedback.style.color = "#e67e22";
        
        setTimeout(() => {
            element.classList.remove('wrong-shake');
        }, 500);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    targetArea.innerHTML = ''; 
    targetArea.style.setProperty('display', 'none', 'important'); 
    
    board.style.display = ''; 
    board.style.gridTemplateColumns = '';
    board.style.justifyContent = '';
    board.style.gap = '';
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
            <h2 style="color: #6c5ce7;">Syllable Master!</h2>
            <p>You completed the words and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/reading-basics/index.html" style="color: #636e72; text-decoration: none;">
                     Back to Menu
                </a>
            </div>
        </div>
    `;
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);