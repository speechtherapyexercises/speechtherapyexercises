import { wordBuilderLevels } from './word-builder-data.js';

let gameSessionLevels = [];
let currentLevel = 0;
let stars = 0;
let userBuiltWord = "";

const board = document.getElementById('gameBoard');
const patternWrapper = document.getElementById('patternWrapper');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

function initGame() {
    gameSessionLevels = [...wordBuilderLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    userBuiltWord = "";
    feedback.innerText = "";
    feedback.style.color = "inherit";

    // Display Target Image and empty slots
    patternWrapper.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'sentence-display';
    container.style.borderColor = '#6c5ce7';
    container.style.padding = '20px';
    
    container.innerHTML = `
        <div class="item-icon" style="font-size: 5rem;">${level.image}</div>
        <div id="wordSlots" style="display: flex; gap: 10px; margin-top: 15px; justify-content: center;">
            ${level.word.split('').map(() => `<div class="slot" style="width: 50px; height: 60px; border-bottom: 5px solid #dfe6e9; font-size: 2.5rem; font-weight: 800; color: #2d3436; display: flex; align-items: center; justify-content: center;"></div>`).join('')}
        </div>`;
    patternWrapper.appendChild(container);

    // Display Scrambled Letters
    board.innerHTML = '';
    board.className = "visual-grid";
    
    level.letters.forEach(letter => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.style.minHeight = '100px';
        card.innerHTML = `<div class="item-icon" style="font-size: 3rem;">${letter}</div>`;
        
        card.addEventListener('click', () => handleLetterClick(letter, card, level.word));
        board.appendChild(card);
    });

    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;
}

function handleLetterClick(letter, cardElement, targetWord) {
    if (cardElement.style.opacity === "0.3") return;

    const slots = document.querySelectorAll('.slot');
    if (userBuiltWord.length < targetWord.length) {
        slots[userBuiltWord.length].innerText = letter;
        userBuiltWord += letter;
        cardElement.style.opacity = "0.3";
        cardElement.style.pointerEvents = "none";
    }

    if (userBuiltWord.length === targetWord.length) {
        if (userBuiltWord === targetWord) {
            handleSuccess();
        } else {
            handleFailure();
        }
    }
}

function handleSuccess() {
    feedback.innerText = "Excellent spelling!";
    feedback.style.color = "var(--success-green)";
    
    // Removed the correct-bounce class to stop the green glow
    setTimeout(() => {
        stars += 1;
        starDisplay.innerText = stars;
        currentLevel++;
        if (currentLevel < gameSessionLevels.length) loadLevel(currentLevel);
        else completeGame();
    }, 1200);
}

function handleFailure() {
    feedback.innerText = "Look at the letters again!";
    feedback.style.color = "#e67e22";

    setTimeout(() => {
        loadLevel(currentLevel);
    }, 1000);
}

function completeGame() {
    progressBar.style.width = '100%';
    patternWrapper.style.display = 'none';
    board.style.display = 'block';
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
            <h2 style="color: #6c5ce7;">Word Builder Master!</h2>
            <p>You built all the words and earned <strong>${stars}</strong> stars!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/reading-basics/index.html" style="color: #636e72; text-decoration: none;">← Back to Reading Menu</a>
            </div>
        </div>`;
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);