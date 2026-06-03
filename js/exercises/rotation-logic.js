import { rotationLevels } from './rotation-data.js';

let gameSessionLevels = [];
let currentLevelIndex = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('patternWrapper');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');
const instructionText = document.getElementById('instructionText');

function initGame() {
    // Shuffling and limiting to 5 levels
    gameSessionLevels = [...rotationLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevelIndex = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevelIndex);
}

function loadLevel(index) {
    const level = gameSessionLevels[index];

    // 1. Remove the Target Image injection entirely
    targetArea.innerHTML = ''; 

    // 2. Keep the Instruction
    instructionText.innerText = level.instruction;

    // 3. Setup Board
    board.innerHTML = '';
    feedback.innerText = "Tap the matching orientation!";
    progressBar.style.width = `${(index / gameSessionLevels.length) * 100}%`;

    // 4. Create the 4 Choice Options
    level.options.forEach((optionPath, idx) => {
    const card = document.createElement('div');
    // Add both the standard class AND your new specific class
    card.className = 'game-card-item rotation-card'; 
    card.innerHTML = `<img src="${optionPath}" alt="Option">`;
    
    card.addEventListener('click', () => handleSelection(idx, level.correctIndex, card));
    board.appendChild(card);
});
}

function handleSelection(selectedIndex, correctIndex, element) {
    if (element.classList.contains('found') || element.classList.contains('wrong-shake')) return;

    if (selectedIndex === correctIndex) {
        element.classList.add('correct-bounce');
        stars += 1; // 1 star per level
        starDisplay.innerText = stars;
        
        setTimeout(() => {
            currentLevelIndex++;
            if (currentLevelIndex < gameSessionLevels.length) {
                loadLevel(currentLevelIndex);
            } else {
                completeGame();
            }
        }, 1000);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Not quite! Look at the target again.";
        setTimeout(() => {
            element.classList.remove('wrong-shake');
        }, 800);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    targetArea.style.display = 'none';
    board.style.display = 'block';
    
    board.innerHTML = `
        <div class="win-screen">
            <h2>Rotation Master!</h2>
            <p>You earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button id="restartBtn" class="btn btn-primary" onclick="location.reload()">Play Again</button>
                <br><br>
                <a href="/exercises/focus-and-attention/index.html" style="color: #636e72; text-decoration: none; font-weight: 500;">
                    Back to Exercises
                </a>
            </div>
        </div>`;
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);