import { differentLetterLevels } from './different-letter-data.js';

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');
const headerArea = document.querySelector('.exercise-intro');

function initGame() {
    // Reset layout elements
    if (headerArea) headerArea.style.display = 'block';
    targetArea.style.removeProperty('display');
    targetArea.style.display = 'block';
    
    gameSessionLevels = [...differentLetterLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    
    targetArea.innerHTML = `
        <div class="word-display-box" style="font-size: 4rem; padding: 10px 30px;">${level.target}</div>
    `;
    
    board.innerHTML = '';
    feedback.style.color = "inherit";
    feedback.innerText = `Find the letter that is DIFFERENT!`;
    
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;
    
    level.options.forEach(letter => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon">${letter}</div>`;
        
        card.addEventListener('click', () => handleSelection(letter, level.correct, card));
        board.appendChild(card);
    });
}

function handleSelection(selected, correct, element) {
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    if (selected === correct) {
        element.classList.add('correct-bounce');
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Great eyes! You found it!";
        
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < 10) loadLevel(currentLevel);
            else completeGame();
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "That one is the same. Look closer!";
        feedback.style.color = "#e67e22";
        setTimeout(() => element.classList.remove('wrong-shake'), 500);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    
    // Clean up all UI elements to leave only the Win Screen
    if (headerArea) headerArea.style.display = 'none';
    targetArea.innerHTML = '';
    targetArea.style.setProperty('display', 'none', 'important');
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon">⭐</div>
            <h2>Eagle Eye Master!</h2>
            <p>You spotted all the differences and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/visual-discrimination/index.html" style="color: #636e72; text-decoration: none;">Back to Menu</a>
            </div>
        </div>
    `;
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);