import { finalSoundLevels } from './final-sound-data.js';

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

function initGame() {
    // Safety check: Reset the target area visibility state for page cycles
    if (targetArea) {
        targetArea.style.display = 'block';
    }
    
    gameSessionLevels = [...finalSoundLevels].sort(() => Math.random() - 0.5).slice(0, 10);
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
    feedback.innerText = `Which word ends with the same sound as ${level.target}?`;
    
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    // CRITICAL FIX: Lock the true correct item value directly from the level structure first
    const correctAnswer = level.correct || level.items[0].name;

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
        feedback.innerText = "Excellent! The ending sounds match!";
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < gameSessionLevels.length) loadLevel(currentLevel);
            else completeGame();
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Listen to the very last sound...";
        feedback.style.color = "#e67e22";
        setTimeout(() => element.classList.remove('wrong-shake'), 500);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    targetArea.style.display = 'none';
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon reward-trophy">🏆</div>
            <h2>Final Sound Master!</h2>
            <p>You matched the ending sounds and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/phonological-awareness/index.html" style="color: #636e72; text-decoration: none;">Back to Phonological Awareness</a>
            </div>
        </div>`;
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);