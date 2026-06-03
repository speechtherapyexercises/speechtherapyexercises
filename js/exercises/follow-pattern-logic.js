import { followPatternLevels } from './follow-pattern-data.js';

/**
 * Follow the Pattern - Game Engine
 */

let gameSessionLevels = []; 
let currentLevel = 0;
let stars = 0;

// DOM Elements
const board = document.getElementById('gameBoard');
const patternWrapper = document.getElementById('patternWrapper'); 
const feedback = document.getElementById('feedbackArea');
const starDisplay = document.getElementById('starCount');
const progressBar = document.getElementById('progressBar');
const instructionText = document.getElementById('instructionText');

function initGame() {
    // CRITICAL FIX: Ensure pattern layout wrapper is visible and layout grids are properly reset
    if (patternWrapper) {
        patternWrapper.style.display = 'block';
    }
    
    if (board) {
        board.style.display = ''; // Clear out the inline display block used by the win screen
        board.classList.add('visual-grid');
    }

    // Shuffle and pick 10 levels
    gameSessionLevels = [...followPatternLevels].sort(() => Math.random() - 0.5).slice(0, 10);
    
    currentLevel = 0;
    stars = 0;
    if (starDisplay) starDisplay.innerText = stars;
    if (progressBar) progressBar.style.width = '0%';
    
    loadLevel(currentLevel);
}

function loadLevel(levelIndex) {
    const level = gameSessionLevels[levelIndex];
    if (!level) return;
    
    patternWrapper.innerHTML = '';
    
    const sequenceContainer = document.createElement('div');
    sequenceContainer.className = 'number-grid'; 
    sequenceContainer.style.marginBottom = '40px';

    level.sequence.forEach(item => {
        const itemBox = document.createElement('div');
        itemBox.className = 'number-card'; 
        itemBox.style.cursor = 'default';
        itemBox.textContent = item;
        sequenceContainer.appendChild(itemBox);
    });

    const questionBox = document.createElement('div');
    questionBox.className = 'number-card';
    questionBox.style.borderStyle = 'dashed';
    questionBox.style.backgroundColor = '#f0f7ff';
    questionBox.textContent = '?';
    sequenceContainer.appendChild(questionBox);

    patternWrapper.appendChild(sequenceContainer);

    board.innerHTML = '';
    if (feedback) {
        feedback.style.color = "inherit";
        feedback.innerText = "";
    }
    
    // Safety check for optional text elements
    if (instructionText) {
        instructionText.innerText = level.instruction || "What comes next in the pattern?";
    }
    
    if (progressBar) {
        progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;
    }

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
        if (starDisplay) starDisplay.innerText = stars;
        
        if (feedback) {
            feedback.innerText = "Excellent! You found the pattern!";
            feedback.style.color = "var(--success-green)";
        }
        
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
        if (feedback) {
            feedback.innerText = "Look closely at the sequence again!";
            feedback.style.color = "var(--accent-orange)";
        }
        
        setTimeout(() => {
            element.classList.remove('wrong-shake');
            if (feedback) feedback.style.color = "inherit";
        }, 800);
    }
}

function completeGame() {
    if (progressBar) progressBar.style.width = '100%';
    if (patternWrapper) patternWrapper.style.display = 'none';
    
    if (board) {
        board.style.display = 'block'; // Reset from grid for full-width win screen layout
        board.innerHTML = `
            <div class="win-screen">
                <div class="win-icon" style="font-size: 4rem;">🏆</div>
                <h2>Pattern Expert!</h2>
                <p>You completed 10 patterns and earned <strong>${stars}</strong> stars!</p>
                <div class="win-actions" style="margin-top: 20px;">
                    <button id="restartBtn" class="btn btn-primary" style="padding: 10px 20px; border:none; cursor:pointer;">Play Again</button>
                    <br><br>
                    <a href="/exercises/focus-and-attention/index.html" style="color: #636e72; text-decoration: none;">Back to Exercises</a>
                </div>
            </div>`;
    }
    
    if (feedback) feedback.innerText = "";
    
    // Smooth reset via state variables rather than crashing on module scopes or forcing slow full refreshes
    document.getElementById('restartBtn').addEventListener('click', () => {
        initGame();
    });
}

document.addEventListener('DOMContentLoaded', initGame);