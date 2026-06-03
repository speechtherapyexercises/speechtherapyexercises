import { completionLevels } from './letter-completion-data.js';

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

function initGame() {
    // Reset the target area display rule back to default when a new game starts
    targetArea.style.removeProperty('display');
    targetArea.style.display = 'block'; 
    board.className = "visual-grid text-mode";
    
    // Grid Centering Fix: Centers the cards while keeping their original sizing completely intact
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(3, auto)';
    board.style.justifyContent = 'center';
    board.style.gap = '16px';

    // Standard session: 10 random items
    gameSessionLevels = [...completionLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    
    // Using the emoji icon instead of an image file
    targetArea.innerHTML = `
        <div class="item-icon" style="font-size: 80px; margin-bottom: 10px;">${level.icon}</div>
        <div id="wordDisplay" class="no-wrap-text">${level.display}</div>
    `;
    
    board.innerHTML = '';
    feedback.style.color = "inherit";
    feedback.innerText = `Which letter is missing?`;
    
    // Progress bar syncing
    progressBar.style.backgroundColor = "var(--success-green)";
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    // 1. Separate the correct answer from the wrong options
    const wrongOptions = level.options.filter(letter => letter !== level.correct);
    
    // 2. Pick exactly 2 wrong options randomly
    const randomWrongOptions = wrongOptions.sort(() => Math.random() - 0.5).slice(0, 2);
    
    // 3. Combine the correct answer back with the 2 wrong options and shuffle the final 3 cards
    const finalThreeChoices = [level.correct, ...randomWrongOptions].sort(() => Math.random() - 0.5);

    finalThreeChoices.forEach(letter => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon">${letter}</div>`;
        
        card.addEventListener('click', () => handleSelection(letter, level.correct, card));
        board.appendChild(card);
    });
}

function handleSelection(selected, correct, element) {
    // Guard clause: stops multi-clicks during animations
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    const level = gameSessionLevels[currentLevel];
    const currentWordDisplay = document.getElementById('wordDisplay');

    if (selected === correct) {
        element.classList.add('correct-bounce');
        
        // Show the full word (revealing the missing letter)
        if (currentWordDisplay) currentWordDisplay.textContent = level.word; 
        
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
        feedback.innerText = "Try a different letter...";
        feedback.style.color = "#e67e22";
        
        setTimeout(() => {
            element.classList.remove('wrong-shake');
        }, 500);
    }
}

/**
 * Final Win Screen
 */
function completeGame() {
    progressBar.style.width = '100%';
    
    // Wipe layout contents completely
    targetArea.innerHTML = ''; 
    
    // FIX: Forces the layout box wrapper container to disappear by overriding existing stylesheet styles
    targetArea.style.setProperty('display', 'none', 'important'); 
    
    // Resets inline grid properties so the win card formats cleanly
    board.style.display = ''; 
    board.style.gridTemplateColumns = '';
    board.style.justifyContent = '';
    board.style.gap = '';
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
            <h2 style="color: #6c5ce7;">Word Builder Master!</h2>
            <p>You completed the words and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/visual-discrimination/index.html" style="color: #636e72; text-decoration: none;">
                    ← Back to Menu
                </a>
            </div>
        </div>
    `;
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);