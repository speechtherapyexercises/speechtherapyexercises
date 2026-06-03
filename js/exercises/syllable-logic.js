import { syllableLevels } from './syllable-data.js';

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

// DOM Elements
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');
const numberButtons = document.querySelectorAll('.number-card');
const gameBoard = document.getElementById('gameBoard');

/**
 * Initialize Game
 */
function initGame() {
    // Shuffle 20 levels and take 10 for this session
    gameSessionLevels = [...syllableLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    
    // Add Click Listeners to Number Buttons
    numberButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedValue = parseInt(btn.getAttribute('data-val'));
            const correctAnswer = gameSessionLevels[currentLevel].count;
            handleSelection(selectedValue, correctAnswer, btn);
        });
    });

    loadLevel(currentLevel);
}

/**
 * Load Question
 */
function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    
    // 1. Update Target
    targetArea.innerHTML = `
        <div class="item-icon">${level.icon}</div>
        <div class="item-name">${level.name}</div>
    `;

    // 2. Reset Feedback
    feedback.style.color = "inherit";
    feedback.innerText = `Clap out the word: ${level.name.toUpperCase()}`;
    
    // 3. Update Progress
    const progress = (levelIndex / gameSessionLevels.length) * 100;
    progressBar.style.width = `${progress}%`;
}

/**
 * Handle Selection
 */
function handleSelection(selected, correct, element) {
    // Prevent clicking while animating
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    if (selected === correct) {
        element.classList.add('correct-bounce');
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Great clapping!";
        feedback.style.color = "var(--success-green)";
        
        setTimeout(() => {
            element.classList.remove('correct-bounce');
            currentLevel++;
            if (currentLevel < gameSessionLevels.length) {
                loadLevel(currentLevel);
            } else {
                completeGame();
            }
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Try clapping again...";
        feedback.style.color = "#e67e22";
        
        setTimeout(() => {
            element.classList.remove('wrong-shake');
        }, 500);
    }
}

/**
 * Game Over
 */
function completeGame() {
    progressBar.style.width = '100%';
    
    // 1. Hide the target area
    targetArea.style.display = 'none'; 
    
    // 2. USE gameBoard (the variable you defined at the top)
    gameBoard.innerHTML = `
        <div class="win-screen">
            <div class="win-icon">👏</div>
            <h2>Syllable Hero!</h2>
            <p>You earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/phonological-awareness/index.html" style="color: #636e72; text-decoration: none;">Back to Menu</a>
            </div>
        </div>
    `;
    
    // 3. Clear feedback
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);