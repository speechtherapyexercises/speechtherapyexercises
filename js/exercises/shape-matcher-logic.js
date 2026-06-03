import { shapeMatcherLevels } from './shape-matcher-data.js';

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

function initGame() {
    // 1. Ensure targetArea is visible (in case of replay without reload)
    targetArea.style.display = 'block'; 
    
    // 2. Randomize and pick 10 levels
    gameSessionLevels = [...shapeMatcherLevels]
        .sort(() => Math.random() - 0.5)
        .slice(0, 10);
        
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    
    // Set Target Letter
    targetArea.innerHTML = `<div class="item-icon large-display">${level.icon}</div>`;
    board.innerHTML = '';
    feedback.style.color = "inherit";
    feedback.innerText = `Find the letter that looks exactly like this one!`;
    
    // Progress calculation
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    // Shuffle the 4 choices so the correct answer isn't always in the same spot
    const shuffledChoices = [...level.items].sort(() => Math.random() - 0.5);
    
    shuffledChoices.forEach(item => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon">${item.icon}</div>`;
        
        // FIX: Compare against level.target instead of level.items[0]
        card.addEventListener('click', () => handleSelection(item.name, level.target, card));
        board.appendChild(card);
    });
}

function handleSelection(selected, correct, element) {
    // Prevent double-clicking
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    if (selected === correct) {
        element.classList.add('correct-bounce');
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Great eyes! That's a perfect match!";
        feedback.style.color = "var(--success-green)"; // Use your CSS variable
        
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
        feedback.innerText = "Look closely at the shape...";
        feedback.style.color = "var(--accent-orange)"; // Use your CSS variable
        
        // Remove shake after animation so it can be triggered again
        setTimeout(() => element.classList.remove('wrong-shake'), 500);
    }
}

/**
 * Final Win Screen
 */
function completeGame() {
    progressBar.style.width = '100%';
    targetArea.style.display = 'none'; // Hide target to make room for win message
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem;">🏆</div>
            <h2>Visual Master!</h2>
            <p>You matched the letters perfectly and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/visual-discrimination/index.html" style="color: #636e72; text-decoration: none;">Back to Visual Discrimination</a>
            </div>
        </div>
    `;
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);