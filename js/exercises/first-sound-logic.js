import { initialSoundLevels } from './initial-sound-data.js';

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

function initGame() {
    // Un-hide the target area in case we are restarting
    if (targetArea) {
        targetArea.style.display = ''; 
    }
    
    gameSessionLevels = [...initialSoundLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    targetArea.innerHTML = `<div class="item-icon">${level.icon}</div><div class="item-name">${level.target}</div>`;
    board.innerHTML = '';
    feedback.style.color = "inherit";
    feedback.innerText = `What starts like ${level.target}?`;
    
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    // CRITICAL FIX: Ensure we explicitly check against the designated target sound logic
    // (Assuming level.targetMatch holds the true name/sound property to match against)
    const correctAnswer = level.targetMatch || level.items[0].name; 

    const shuffledChoices = [...level.items].sort(() => Math.random() - 0.5);
    shuffledChoices.forEach(item => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon">${item.icon}</div><div class="item-name">${item.name}</div>`;
        
        card.addEventListener('click', () => handleSelection(item.name, correctAnswer, card));
        board.appendChild(card);
    });
}

function handleSelection(selected, correct, element) {
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    if (selected === correct) {
        element.classList.add('correct-bounce');
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Perfect Match!";
        
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < 10) loadLevel(currentLevel);
            else completeGame();
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Not quite! Listen to the very first sound.";
        
        setTimeout(() => {
            element.classList.remove('wrong-shake');
        }, 500);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    targetArea.style.display = 'none'; 
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon">🎯</div>
            <h2>Sound Expert!</h2>
            <p>You earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button id="btnPlayAgain" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/phonological-awareness/index.html" style="color: #636e72; text-decoration: none;">Back to Phonological Awareness</a>
            </div>
        </div>
    `;
    feedback.innerText = "";

    // CLEAN FIX: Add event listener explicitly in JS since inline HTML cannot access module functions
    document.getElementById('btnPlayAgain').addEventListener('click', () => {
        window.location.reload();
    });
}

document.addEventListener('DOMContentLoaded', initGame);