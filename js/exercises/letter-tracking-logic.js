import { letterTrackingLevels } from './letter-tracking-data.js';

let gameSessionLevels = [];
let currentLevelIndex = 0;
let stars = 0;
let targetsFound = 0;
let totalTargetsInLevel = 0;
let isTransitioning = false;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

function initGame() {
    targetArea.style.display = 'block';
    board.className = "visual-grid text-mode"; 
    board.style.display = 'grid'; 
    
    // Explicitly forces 4 columns and 4 rows, bypassing any stubborn global stylesheet limits
    board.style.setProperty('grid-template-columns', 'repeat(4, 1fr)', 'important');
    board.style.setProperty('grid-template-rows', 'repeat(4, 1fr)', 'important');
    
    isTransitioning = false;

    gameSessionLevels = [...letterTrackingLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevelIndex = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevelIndex);
}

function loadLevel(index) {
    const level = gameSessionLevels[index];
    targetsFound = 0;
    isTransitioning = false;

    const shuffledGrid = [...level.grid].sort(() => Math.random() - 0.5);
    totalTargetsInLevel = level.grid.filter(letter => letter === level.target).length;

    // Explicitly bumps the top main target display font size up
    targetArea.innerHTML = `<div class="item-icon large-display" style="font-size: 3.5rem; font-weight: bold;">${level.target}</div>`;
    board.innerHTML = '';
    updateFeedback();
    
    progressBar.style.backgroundColor = "var(--success-green)";
    progressBar.style.width = `${(index / gameSessionLevels.length) * 100}%`;

    shuffledGrid.forEach(letter => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        
        // Explicitly bumps the 16 interactive options font size up
        card.innerHTML = `<div class="item-icon" style="font-size: 2.2rem; font-weight: bold; display: flex; align-items: center; justify-content: center; height: 100%;">${letter}</div>`;
        
        card.addEventListener('click', () => handleSelection(letter, level.target, card));
        board.appendChild(card);
    });
    starDisplay.innerText = stars;
}

function updateFeedback() {
    const remaining = totalTargetsInLevel - targetsFound;
    feedback.style.color = "inherit";
    feedback.innerText = `Find all the matching letters! ${remaining} left to find.`;
}

function handleSelection(selected, correct, element) {
    if (isTransitioning || element.classList.contains('found') || element.classList.contains('wrong-shake')) return;

    if (selected === correct) {
        element.classList.add('found'); 
        
        // Inline Border Outline Fix: Hugs the box with a green border outline!
        element.style.borderColor = "var(--success-green)";
        element.style.borderWidth = "3px";
        element.style.borderStyle = "solid";
        element.style.boxShadow = "0 0 8px rgba(46, 204, 113, 0.2)"; 
        element.style.pointerEvents = "none"; 
        
        targetsFound++;
        starDisplay.innerText = stars;
        
        if (targetsFound === totalTargetsInLevel) {
            isTransitioning = true; 
            stars += 1;
            starDisplay.innerText = stars;
            feedback.innerText = "You found them all! Moving to next set...";
            feedback.style.color = "var(--success-green)";
            
            setTimeout(() => {
                currentLevelIndex++;
                if (currentLevelIndex < gameSessionLevels.length) {
                    loadLevel(currentLevelIndex);
                } else {
                    completeGame();
                }
            }, 1500);
        } else {
            updateFeedback();
        }
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "That one is a different shape!";
        feedback.style.color = "var(--accent-orange)";
        setTimeout(() => {
            updateFeedback();
            element.classList.remove('wrong-shake');
        }, 800);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    targetArea.style.display = 'none';
    
    // Clear out our forced 4x4 properties so the win layout renders correctly
    board.style.removeProperty('grid-template-columns');
    board.style.removeProperty('grid-template-rows');
    board.style.display = ''; 
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem; margin-bottom: 20px;">🎯</div>
            <h2 style="color: #6c5ce7;">Eagle Eye!</h2>
            <p>You tracked down every letter and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/visual-discrimination/index.html" style="color: #636e72; text-decoration: none;">
                     Back to Exercises
                </a>
            </div>
        </div>`;
    
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);