import { middleSoundLevels } from './middle-sound-data.js';

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

function initGame() {
    gameSessionLevels = [...middleSoundLevels].sort(() => Math.random() - 0.5).slice(0, 10);
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
    feedback.innerText = `Which word has the same middle sound as ${level.target}?`;
    
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    const shuffledChoices = [...level.items].sort(() => Math.random() - 0.5);
    shuffledChoices.forEach(item => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon">${item.icon}</div><div class="item-name">${item.name}</div>`;
        
        const correctAnswer = level.items[0].name;
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
        feedback.innerText = "Great listening! The middle sounds match!";
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < gameSessionLevels.length) loadLevel(currentLevel);
            else completeGame();
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Listen to the sound in the middle...";
        feedback.style.color = "#e67e22";
        setTimeout(() => element.classList.remove('wrong-shake'), 500);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    targetArea.style.display = 'none'; // Hide target to make room for win message
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon">⭐</div>
            <h2>Middle Sound Master!</h2>
            <p>You found the middle sounds and earned <strong>${stars}</strong> stars!</p>
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