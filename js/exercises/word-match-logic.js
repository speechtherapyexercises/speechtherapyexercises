import { wordMatchLevels } from './word-match-data.js';

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

    gameSessionLevels = [...wordMatchLevels]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
    
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    patternWrapper.innerHTML = '';
    
    // Create the Target Word Card
    const sequenceContainer = document.createElement('div');
    sequenceContainer.className = 'number-grid'; 
    sequenceContainer.style.marginBottom = '50px';

    const wordBox = document.createElement('div');
    wordBox.className = 'number-card';
    wordBox.style.width = 'auto';
    wordBox.style.padding = '20px 50px';
    wordBox.style.fontSize = '3.5rem';
    wordBox.style.letterSpacing = '8px';
    wordBox.style.cursor = 'default';
    wordBox.style.border = '4px solid var(--primary-blue, #0984e3)';
    // REMOVED PILL SHAPE: Set border-radius to 12px for a modern, boxy feel
    wordBox.style.borderRadius = '12px'; 
    wordBox.textContent = level.word;
    
    sequenceContainer.appendChild(wordBox);
    patternWrapper.appendChild(sequenceContainer);

    board.innerHTML = '';
    feedback.style.color = "inherit";
    instructionText.innerText = level.instruction;
    
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    const shuffledChoices = [...level.choices].sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(option => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon">${option}</div>`;
        
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
        feedback.innerText = "Excellent reading!";
        feedback.style.color = "var(--success-green)";
        
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < gameSessionLevels.length) loadLevel(currentLevel);
            else completeGame();
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Try reading the letters again!";
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
            <div class="win-icon" style="font-size: 4rem; margin-bottom: 20px;">📚</div>
            <h2 style="color: #0984e3;">Word Explorer!</h2>
            <p>Your reading skills are growing! You earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 30px; display: flex; flex-direction: column; align-items: center; gap: 15px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 12px 30px; cursor: pointer;">Play Again</button>
                <a href="/exercises/reading-basics/index.html" style="color: #636e72; text-decoration: none; font-weight: 500;">
                    ← Back to Reading Menu
                </a>
            </div>
        </div>`;
    
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);