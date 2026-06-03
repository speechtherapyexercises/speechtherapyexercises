import { sequencingLevels } from './sequencing-data.js';

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
    board.classList.add('visual-grid');
    gameSessionLevels = [...sequencingLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevel = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    patternWrapper.innerHTML = '';
    
    const sequenceContainer = document.createElement('div');
    sequenceContainer.className = 'number-grid'; 
    sequenceContainer.style.marginBottom = '40px';

    level.sequence.forEach(item => {
        const itemBox = document.createElement('div');
        itemBox.className = 'number-card'; 
        itemBox.style.cursor = 'default';
        
        if(item === "_") {
            itemBox.style.borderStyle = 'dashed';
            itemBox.style.backgroundColor = '#f0f7ff';
            itemBox.style.color = '#3498db';
        }
        
        itemBox.textContent = item;
        sequenceContainer.appendChild(itemBox);
    });

    patternWrapper.appendChild(sequenceContainer);

    board.innerHTML = '';
    feedback.style.color = "inherit";
    instructionText.innerText = level.instruction;
    
    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;

    const shuffledChoices = [...level.options].sort(() => Math.random() - 0.5);

    shuffledChoices.forEach(option => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon">${option}</div>`;
        card.addEventListener('click', () => handleSelection(option, level.correct, card));
        board.appendChild(card);
    });
}

function handleSelection(selected, correct, element) {
    if (element.classList.contains('correct-bounce') || element.classList.contains('wrong-shake')) return;

    if (selected === correct) {
        element.classList.add('correct-bounce');
        stars += 1;
        starDisplay.innerText = stars;
        feedback.innerText = "Correct! You know your sequences!";
        feedback.style.color = "var(--success-green)";
        
        setTimeout(() => {
            currentLevel++;
            if (currentLevel < gameSessionLevels.length) loadLevel(currentLevel);
            else completeGame();
        }, 1200);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Try counting again!";
        feedback.style.color = "var(--accent-orange)";
        setTimeout(() => {
            element.classList.remove('wrong-shake');
            feedback.style.color = "inherit";
        }, 800);
    }
}

function completeGame() {
    progressBar.style.width = '100%';
    patternWrapper.style.display = 'none';
    board.style.display = 'block';
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem;">🔢</div>
            <h2>Sequence Master!</h2>
            <p>You completed 10 sequences and earned <strong>${stars}</strong> stars!</p>
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