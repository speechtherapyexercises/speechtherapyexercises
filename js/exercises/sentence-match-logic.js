import { sentenceMatchLevels } from './sentence-match-data.js';

let gameSessionLevels = [];
let currentLevel = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const patternWrapper = document.getElementById('patternWrapper');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');
const instructionText = document.getElementById('instructionText');

function initGame() {
    patternWrapper.style.display = 'block';
    board.classList.add('visual-grid', 'tracking-grid'); 

    gameSessionLevels = [...sentenceMatchLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    
    // --- ADD THIS LINE TO CLEAR THE FEEDBACK ---
    feedback.innerText = ""; 
    // -------------------------------------------

    patternWrapper.innerHTML = '';
    
    // Create the Target Sentence
    const sentenceBox = document.createElement('div');
    sentenceBox.className = 'sentence-display'; 
    sentenceBox.textContent = level.sentence;
    patternWrapper.appendChild(sentenceBox);

    board.innerHTML = '';
    board.className = "visual-grid text-mode"; 
    
    instructionText.innerText = level.instruction;
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    const shuffledChoices = [...level.options].sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(option => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div>${option}</div>`;
        card.addEventListener('click', () => handleSelection(option, level.correct, card));
        board.appendChild(card);
    });
}

function handleSelection(selected, correct, element) {
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    if (selected === correct) {
        element.classList.add('correct-bounce');
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Great reading skills!";
        feedback.style.color = "var(--success-green)";
        
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < gameSessionLevels.length) loadLevel(currentLevel);
            else completeGame();
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Read the sentence one more time!";
        feedback.style.color = "var(--accent-orange)";
        setTimeout(() => {
            element.classList.remove('wrong-shake');
            feedback.style.color = "inherit";
        }, 800);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    patternWrapper.style.display = 'none';
    board.style.display = 'block';
    
    board.innerHTML = `
        <div class="win-screen" style="text-align: center; padding: 40px 20px;">
            <div class="win-icon" style="font-size: 4rem; margin-bottom: 20px;">📝</div>
            <h2 style="color: #6c5ce7;">Sentence Star!</h2>
            <p>You are a sentence completion expert! You earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 30px; display: flex; flex-direction: column; align-items: center; gap: 15px;">
                <button id="restartBtn" class="btn btn-primary" style="padding: 12px 30px;">Play Again</button>
                <a href="/exercises/reading-basics/index.html" style="color: #636e72; text-decoration: none; font-weight: 500;">
                     Back to Reading Basics
                </a>
            </div>
        </div>`;
    
    document.getElementById('restartBtn').addEventListener('click', () => location.reload());
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);
