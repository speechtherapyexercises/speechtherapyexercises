import { oddOneOutLevels } from './phonological-data.js';

/**
 * Odd One Out - Game Engine
 * Features: Session Shuffling (10 levels), Progress Tracking, Visual Feedback
 */

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

// DOM Elements
const board = document.getElementById('gameBoard');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

/**
 * Initializes the game session with 10 random levels
 */
function initGame() {
    // 1. Shuffle the full master list of 30
    const shuffledMasterList = [...oddOneOutLevels].sort(() => Math.random() - 0.5);
    
    // 2. Take only the first 10 for this session
    gameSessionLevels = shuffledMasterList.slice(0, 10);
    
    // 3. Reset state
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    
    loadLevel(currentLevel);
}

/**
 * Renders the current level
 */
function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    board.innerHTML = '';
    
    // Update the UI text
    feedback.innerText = level.instruction || "Which one starts with a different sound?";
    
    // Calculate progress based on 10 levels
    const progress = (levelIndex / gameSessionLevels.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Shuffle the cards so the odd one moves around
    const shuffledCards = [...level.items].sort(() => Math.random() - 0.5);

    shuffledCards.forEach(item => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `
            <div class="item-icon">${item.icon}</div>
            <div class="item-name">${item.name}</div>
        `;
        
        card.addEventListener('click', () => handleSelection(item.name, level.target, card));
        board.appendChild(card);
    });
}

/**
 * Handles clicks and logic
 */
function handleSelection(selectedName, correctName, element) {
    // Prevent clicking while an animation is playing
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    if (selectedName === correctName) {
        element.classList.add('correct-bounce');
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Excellent! You found it!";
        
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < gameSessionLevels.length) {
                loadLevel(currentLevel);
                feedback.style.color = "inherit"; // Reset text color
            } else {
                completeGame();
            }
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Not quite! Try again.";
        // Optional: change feedback text to a soft orange/red
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
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon">🎉</div>
            <h2>Great Job!</h2>
            <p>You finished 10 sets and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/phonological-awareness/index.html" style="color: #636e72; text-decoration: none;">Back to Menu</a>
            </div>
        </div>
    `;
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);