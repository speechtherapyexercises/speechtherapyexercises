import { wordSpottingLevels } from './word-spotting-data.js';

let gameSessionLevels = [];
let currentLevelIndex = 0;
let stars = 0;

const board = document.getElementById('gameBoard');
const targetArea = document.getElementById('targetArea');
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');

function initGame() {
    // Pick 10 random words from your data for this session
    gameSessionLevels = [...wordSpottingLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevelIndex = 0;
    stars = 0;
    starDisplay.innerText = stars;
    loadLevel(currentLevelIndex);
}

function loadLevel(index) {
    const level = gameSessionLevels[index];
    
    // Shuffle the 4 options (the 1 correct + 3 tricky ones)
    const shuffledOptions = [...level.grid].sort(() => Math.random() - 0.5);

    targetArea.innerText = level.target;
    board.innerHTML = '';
    feedback.innerText = "Which one matches perfectly?";
    feedback.style.color = "inherit";
    
    progressBar.style.width = `${(index / gameSessionLevels.length) * 100}%`;

    shuffledOptions.forEach(word => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        card.innerHTML = `<div class="item-icon">${word}</div>`;
        
        card.addEventListener('click', () => handleSelection(word, level.target, card));
        board.appendChild(card);
    });
}

function handleSelection(selected, correct, element) {
    // Prevent clicking multiple times after finding the answer
    if (board.classList.contains('level-complete')) return;

    if (selected === correct) {
        board.classList.add('level-complete');
        element.classList.add('correct-bounce');
        feedback.innerText = "Great spotting! That's the one.";
        feedback.style.color = "var(--success-green)";
        
        stars += 1;
        starDisplay.innerText = stars;

        setTimeout(() => {
            board.classList.remove('level-complete');
            currentLevelIndex++;
            if (currentLevelIndex < gameSessionLevels.length) {
                loadLevel(currentLevelIndex);
            } else {
                completeGame();
            }
        }, 1500);
    } else {
        element.classList.add('wrong-shake');
        feedback.innerText = "Not quite—look closely at the letters!";
        feedback.style.color = "var(--accent-orange)";
        
        setTimeout(() => {
            element.classList.remove('wrong-shake');
        }, 800);
    }
}

/**
 * Final Win Screen
 */
function completeGame() {
    progressBar.style.width = '100%';
    targetArea.style.display = 'none'; // Hide target to make room for win message
    board.style.display = 'block'; 
    
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem;">📖</div>
            <h2>Word Master!</h2>
            <p>You have a great eye for detail! You earned <strong>${stars}</strong> stars.</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/visual-discrimination/index.html" style="color: #636e72; text-decoration: none;">Back to Exercises</a>
            </div>
        </div>
    `;
    feedback.innerText = "";
}

document.addEventListener('DOMContentLoaded', initGame);