import { imageSentenceLevels } from './image-sentence-data.js';

let gameSessionLevels = [];
let currentLevel = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const patternWrapper = document.getElementById('patternWrapper');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');
const instructionText = document.getElementById('instructionText');

function initGame() {
    patternWrapper.style.display = 'block';
    board.className = "visual-grid text-mode"; 
    board.style.display = ''; // Resets any inline display modifications from previous games

    // Pick 10 random levels for the session
    gameSessionLevels = [...imageSentenceLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    feedback.innerText = ""; 
    feedback.style.color = "inherit";

    // Re-applying the exact box structure for the level image
    patternWrapper.innerHTML = '';
    const imageBox = document.createElement('div');
    imageBox.className = 'sentence-display'; 
    imageBox.innerHTML = `<div class="item-icon" style="font-size: 5.5rem;">${level.image}</div>`;
    patternWrapper.appendChild(imageBox);

    board.innerHTML = '';
    instructionText.innerText = level.instruction;
    
    // Progress bar calculations using theme variables
    progressBar.style.backgroundColor = "var(--success-green)";
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    // Shuffle choices so the correct sentence isn't always in the same spot
    const shuffledChoices = [...level.options].sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(option => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div>${option}</div>`;
        card.addEventListener('click', () => handleSelection(option, level.correct, card));
        board.appendChild(card);
    });
}

function handleSelection(selected, correct, element) {
    // Safety guard clause: stops spam clicking during animations
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    if (selected === correct) {
        element.classList.add('correct-bounce');
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Excellent reading skills!";
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
        feedback.innerText = "Look at the picture again!";
        feedback.style.color = "#e67e22"; 
        
        setTimeout(() => {
            element.classList.remove('wrong-shake');
        }, 500);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    patternWrapper.style.display = 'none';
    
    // Keeps layout controlled by CSS grid instead of hardcoded block formatting
    board.style.display = ''; 
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
            <h2 style="color: #6c5ce7;">Sentence Explorer!</h2>
            <p>You matched the sentences to the pictures and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button id="btnPlayAgain" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/reading-basics/index.html" style="color: #636e72; text-decoration: none;">
                    Back to Reading Basics
                </a>
            </div>
        </div>`;
    
    feedback.innerText = "";

    // Clean Event Listener approach for ES Module architecture
    document.getElementById('btnPlayAgain').addEventListener('click', () => {
        initGame();
    });
}

document.addEventListener('DOMContentLoaded', initGame);