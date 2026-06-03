import { growthLevels } from './growth-data.js';

let gameSessionLevels = [];
let currentLevel = null;
let userSelection = [];
let currentLevelIndex = 0;
let stars = 0;

// Cache DOM elements
const board = document.getElementById('gameBoard');
const slotArea = document.getElementById('patternWrapper');
const instructionText = document.getElementById('instructionText');
const progressBar = document.getElementById('progressBar');
const starCount = document.getElementById('starCount');

export function initGame() {
    // Shuffle and pick 10 levels
    const shuffledAll = [...growthLevels].sort(() => Math.random() - 0.5);
    gameSessionLevels = shuffledAll.slice(0, 10);
    
    currentLevelIndex = 0;
    stars = 0;
    
    // Reset UI
    if (progressBar) progressBar.style.width = '0%';
    if (starCount) starCount.innerText = '0';
    
    renderLevel(currentLevelIndex);
}

function renderLevel(index) {
    currentLevel = gameSessionLevels[index];
    userSelection = [];
    
    board.style.display = 'grid'; // Reset display to grid
    board.innerHTML = '';
    slotArea.innerHTML = '';
    slotArea.style.display = 'flex';
    instructionText.innerText = currentLevel.instruction;
    instructionText.style.display = 'block';

    // 1. Create Slots
    for (let i = 0; i < 4; i++) {
        const slot = document.createElement('div');
        slot.className = 'game-card-item';
        slotArea.appendChild(slot);
    }

    // 2. Create Choices
    const shuffled = [...currentLevel.sequence].sort(() => Math.random() - 0.5);
    shuffled.forEach(stepNum => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.style.backgroundImage = `url('../../images/growth-sequence/${currentLevel.category}${stepNum}.webp')`;
        card.style.backgroundSize = "contain";
        card.style.backgroundRepeat = "no-repeat";
        card.style.backgroundPosition = "center";
        card.style.cursor = "pointer";
        
        card.addEventListener('click', (e) => handleSelection(stepNum, e.target));
        board.appendChild(card);
    });
}

function handleSelection(stepNum, clickedElement) {
    const slots = document.querySelectorAll('#patternWrapper .game-card-item');
    
    if (userSelection.length < slots.length) {
        userSelection.push(stepNum);
        
        const slot = slots[userSelection.length - 1];
        slot.style.backgroundImage = `url('../../images/growth-sequence/${currentLevel.category}${stepNum}.webp')`;
        slot.style.backgroundSize = "contain";
        slot.style.backgroundRepeat = "no-repeat";
        slot.style.backgroundPosition = "center";

        clickedElement.style.visibility = 'hidden';

        if (userSelection.length === slots.length) {
            checkResult();
        }
    }
}

function checkResult() {
    const isCorrect = userSelection.every((val, index) => val === currentLevel.sequence[index]);
    const slots = document.querySelectorAll('#patternWrapper .game-card-item');
    
    if (isCorrect) {
        slots.forEach(slot => slot.style.borderColor = "green");
        stars++;
        starCount.innerText = stars;
        
        // Progress: 10 levels total
        progressBar.style.width = `${((currentLevelIndex + 1) / gameSessionLevels.length) * 100}%`;
        
        setTimeout(() => {
            currentLevelIndex++;
            if (currentLevelIndex < gameSessionLevels.length) {
                renderLevel(currentLevelIndex);
            } else {
                completeGame();
            }
        }, 1000);
    } else {
        slots.forEach(slot => slot.style.borderColor = "red");
        setTimeout(() => renderLevel(currentLevelIndex), 1000);
    }
}

function completeGame() {
    slotArea.style.display = 'none';
    instructionText.style.display = 'none';
    
    board.innerHTML = `
        <div class="win-screen" style="text-align: center; padding: 40px 20px;">
            <div class="win-icon" style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
            <h2>Visual Master!</h2>
            <p>You matched the sequences perfectly and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer; background-color: #e67e22; color: white; border: none; border-radius: 5px;">Play Again</button>
                <br><br>
                <a href="/exercises/focus-and-attention/index.html" style="color: #636e72; text-decoration: none; font-weight: 500;">
                     Back to Exercises
                </a>
            </div>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', initGame);