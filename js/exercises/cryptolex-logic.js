import { cryptolexLevels } from './cryptolex-data.js';

let gameSessionLevels = [];
let currentLevelIndex = 0;
let stars = 0;
let foundTargets = 0; // Fixed: consistent naming
let currentSequence = []; 
let isTransitioning = false;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');
const instructionText = document.getElementById('instructionText'); // Defined only once

function initGame() {
    board.className = "visual-grid cryptolex-grid"; 
    board.style.display = 'grid'; 
    targetArea.style.display = 'none';

    gameSessionLevels = [...cryptolexLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevelIndex = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevelIndex);
}

function loadLevel(index) {
    const level = gameSessionLevels[index];
    foundTargets = 0; 
    currentSequence = [];
    isTransitioning = false;
    
    instructionText.innerText = level.instruction;
    
    board.innerHTML = '';
    updateFeedback();
    
    progressBar.style.width = `${(index / gameSessionLevels.length) * 100}%`;

    // We now iterate through the 18 items in the grid
    level.grid.forEach(letter => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon">${letter}</div>`;
        card.addEventListener('click', () => handleSelection(letter, card, level.targetWord));
        board.appendChild(card);
    });
}

function updateFeedback() {
    feedback.innerText = `Sequences found: ${foundTargets} / 2`;
    feedback.style.color = "var(--text-dark)";
}

function handleSelection(selected, element, targetWord) {
    if (isTransitioning || element.classList.contains('found')) return;

    const sequence = targetWord.split('');
    const nextExpected = sequence[currentSequence.length];

    if (selected === nextExpected) {
        currentSequence.push(selected);
        element.classList.add('found', 'correct-bounce');
        
        if (currentSequence.length === sequence.length) {
            foundTargets++;
            currentSequence = [];
            feedback.innerText = `Great! Found ${foundTargets}/2 sequences.`;
            
            if (foundTargets === 2) {
                isTransitioning = true;
                stars += 1;
                starDisplay.innerText = stars;
                setTimeout(nextLevel, 1200);
            }
        }
    } else {
        element.classList.add('wrong-shake');
        setTimeout(() => element.classList.remove('wrong-shake'), 800);
    }
}

function nextLevel() {
    currentLevelIndex++;
    if (currentLevelIndex < gameSessionLevels.length) {
        loadLevel(currentLevelIndex);
    } else {
        completeGame();
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon">🎯</div>
            <h2>Lexicographer!</h2>
            <p>You earned <strong>${stars}</strong> stars!</p>
            <button onclick="location.reload()" class="btn btn-primary">Play Again</button>
            <a href="/exercises/visual-discrimination/index.html" 
               style="display: block; margin-top: 15px; color: #636e72; text-decoration: none;">
               Back to Menu
            </a>
        </div>`;
}

document.addEventListener('DOMContentLoaded', initGame);