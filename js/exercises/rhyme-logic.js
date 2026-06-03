import { rhymeLevels } from './rhyme-data.js';

/**
 * Rhyme Matcher - Game Engine
 */

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

// DOM Elements
const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

/**
 * Starts a 10-level session from the 30-level master list
 */
function initGame() {
    // Shuffle the master 30 and take 10
    gameSessionLevels = [...rhymeLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    
    loadLevel(currentLevel);
}

/**
 * Sets up the Target and the Choice Cards
 */
function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    
    // 1. Setup the Target Card (The word to match)
    targetArea.innerHTML = `
        <div class="item-icon">${level.targetIcon}</div>
        <div class="item-name">${level.target}</div>
    `;

    // 2. Setup the Board
    board.innerHTML = '';
    feedback.style.color = "inherit"; // Reset color
    feedback.innerText = `Find the word that rhymes with ${level.target}!`;
    
    // 3. Update Progress
    const progress = (levelIndex / gameSessionLevels.length) * 100;
    progressBar.style.width = `${progress}%`;

    // 4. Shuffling the Choices (so the answer isn't always first)
    const shuffledChoices = [...level.items].sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(item => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `
            <div class="item-icon">${item.icon}</div>
            <div class="item-name">${item.name}</div>
        `;
        
        // Use the first item's name from the data as the "Correct" answer
        const correctAnswer = level.items[0].name;
        
        card.addEventListener('click', () => handleSelection(item.name, correctAnswer, card));
        board.appendChild(card);
    });
}

/**
 * Handles clicks and transitions
 */
function handleSelection(selectedName, correctName, element) {
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    if (selectedName === correctName) {
        element.classList.add('correct-bounce');
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Excellent! They sound the same!";
        
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
        feedback.innerText = "Try saying them both out loud!";
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
    targetArea.style.display = 'none'; // Hide target to make room for win message
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon">🏆</div>
            <h2>Rhyme Master!</h2>
            <p>You matched 10 rhyming pairs and earned <strong>${stars}</strong> stars!</p>
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