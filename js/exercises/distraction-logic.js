import { distractionLevels } from './distraction-data.js';

let gameSessionLevels = [];
let currentLevelIndex = 0;
let stars = 0;
let targetsFound = 0;
let totalTargetsInLevel = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('patternWrapper'); // Reusing the pattern area
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');
const instructionText = document.getElementById('instructionText');

function initGame() {
    board.classList.add('visual-grid');
    board.style.marginTop = "30px"; 
    
    // Safety check: Ensure target area is fully visible when the game initializes or restarts
    targetArea.style.display = 'block';
    
    gameSessionLevels = [...distractionLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevelIndex = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevelIndex);
}

function loadLevel(index) {
    const level = gameSessionLevels[index];
    targetsFound = 0;
    totalTargetsInLevel = level.totalTargets;

    targetArea.innerHTML = `
        <div class="number-grid" style="margin-bottom: 40px;">
            <div class="number-card" style="cursor:default; font-size: 3rem; padding: 20px;">${level.targetValue}</div>
        </div>`;
    
    targetArea.style.marginBottom = "30px";

    board.innerHTML = '';
    instructionText.innerText = level.instruction;
    updateFeedback();
    
    // Future-proofed progress bar calculation using dynamic array length
    progressBar.style.width = `${(index / gameSessionLevels.length) * 100}%`;

    const shuffledGrid = [...level.grid].sort(() => Math.random() - 0.5);

    shuffledGrid.forEach(item => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon" style="padding: 10px;">${item}</div>`;
        
        card.addEventListener('click', () => handleSelection(item, level.targetValue, card));
        board.appendChild(card);
    });
}

function updateFeedback() {
    const remaining = totalTargetsInLevel - targetsFound;
    feedback.style.color = "inherit";
    feedback.innerText = `Keep going! ${remaining} more to find.`;
}

function handleSelection(selected, correct, element) {
    if (element.classList.contains('found') || element.classList.contains('wrong-shake')) return;

    if (selected === correct) {
        element.classList.add('found'); 
        targetsFound++;
        
        
        if (targetsFound === totalTargetsInLevel) {
            feedback.innerText = "Excellent filtering!";
            feedback.style.color = "var(--success-green)";
            stars += 1; 
            starDisplay.innerText = stars;
            
            setTimeout(() => {
                currentLevelIndex++;
                // Future-proofed checking using dynamic array length
                if (currentLevelIndex < gameSessionLevels.length) loadLevel(currentLevelIndex);
                else completeGame();
            }, 1200);
        } else {
            updateFeedback();
        }
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Careful! That's a distractor!";
        feedback.style.color = "var(--accent-orange)";
        setTimeout(() => {
            element.classList.remove('wrong-shake');
            updateFeedback();
        }, 800);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    targetArea.style.display = 'none';
    board.style.display = 'block';
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem;">🔍</div>
            <h2>Eagle Eye!</h2>
            <p>You filtered out the distractions and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button id="restartBtn" class="btn btn-primary" style="padding: 10px 20px; border:none; cursor:pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/focus-and-attention/index.html" style="color: #636e72; text-decoration: none;">Back to Exercises</a>
            </div>
        </div>`;
    
    document.getElementById('restartBtn').addEventListener('click', () => location.reload());
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);