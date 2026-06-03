import { syllableBuilderLevels } from './syllable-builder-data.js';

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
    gameSessionLevels = [...syllableBuilderLevels].sort(() => Math.random() - 0.5).slice(0, 10);
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

    patternWrapper.innerHTML = '';
    const container = document.createElement('div');
    container.className = 'sentence-display';
    container.style.borderColor = '#00cec9';
    // FIX: Lock the height of the image container so it CANNOT grow
    container.style.height = "220px"; 
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    
    const slotHtml = level.parts.map(() => `
        <div class="syllable-slot" style="width: 100px; height: 60px; border: 3px dashed #dfe6e9; border-radius: 10px; font-size: 1.5rem; font-weight: 800; color: #2d3436; display: flex; align-items: center; justify-content: center; padding: 0 5px; box-sizing: border-box; overflow: hidden;"></div>
    `).join('');

    container.innerHTML = `
        <div class="item-icon" style="font-size: 5rem; line-height: 1;">${level.image}</div>
        <div id="wordSlots" style="display: flex; gap: 10px; margin-top: 15px; justify-content: center; width: 100%;">
            ${slotHtml}
        </div>`;
    patternWrapper.appendChild(container);

    board.innerHTML = '';
    board.className = "visual-grid";
    
    // Board Layout Lock
    board.style.minHeight = "160px"; 
    board.style.display = "flex";
    board.style.flexWrap = "wrap";
    board.style.justifyContent = "center";
    board.style.gap = "15px";

    const shuffledParts = [...level.options].sort(() => Math.random() - 0.5);

    shuffledParts.forEach((part) => {
        const card = document.createElement('div');
        card.className = 'game-card-item';
        
        // FIX: Strict dimension locking for the cards
        card.style.width = "110px";
        card.style.height = "70px";
        card.style.flex = "0 0 110px"; // Prevents growing or shrinking
        card.style.display = "flex";
        card.style.alignItems = "center";
        card.style.justifyContent = "center";
        card.style.boxSizing = "border-box";
        card.style.overflow = "hidden"; // Clip any text that tries to push boundaries
        
        // Use span with white-space nowrap to keep text on one line
        card.innerHTML = `<span style="font-size: 1.4rem; font-weight: bold; white-space: nowrap;">${part}</span>`;
        
        card.addEventListener('click', () => handleSyllableClick(part, card, level));
        board.appendChild(card);
    });

    progressBar.style.width = `${(levelIndex / gameSessionLevels.length) * 100}%`;
}

function handleSyllableClick(part, cardElement, level) {
    // Fix: check visibility instead of opacity
    if (cardElement.style.visibility === "hidden") return;

    const slots = document.querySelectorAll('.syllable-slot');
    
    let nextSlotIndex = -1;
    for(let i=0; i<slots.length; i++) {
        if(slots[i].innerText === "") {
            nextSlotIndex = i;
            break;
        }
    }

    if (nextSlotIndex !== -1) {
        slots[nextSlotIndex].innerText = part;
        slots[nextSlotIndex].style.border = "3px solid #00cec9";
        userBuiltWord += part;
        
        // Fix: Use hidden so the card still takes up space, preventing layout shift
        cardElement.style.visibility = "hidden"; 
        cardElement.style.pointerEvents = "none";
    }

    const isFull = Array.from(slots).every(slot => slot.innerText !== "");
    
    if (isFull) {
        if (userBuiltWord === level.word) {
            handleSuccess();
        } else {
            handleFailure();
        }
    }
}

function handleSuccess() {
    feedback.innerText = "Perfect chunking!";
    feedback.style.color = "var(--success-green)";
    
    setTimeout(() => {
        stars += 1;
        starDisplay.innerText = stars;
        currentLevel++;
        if (currentLevel < gameSessionLevels.length) loadLevel(currentLevel);
        else completeGame();
    }, 1200);
}

function handleFailure() {
    feedback.innerText = "Almost! Try a different order.";
    feedback.style.color = "#e67e22";
    setTimeout(() => loadLevel(currentLevel), 1000);
}

function completeGame() {
    progressBar.style.width = '100%';
    patternWrapper.style.display = 'none';
    board.innerHTML = `
        <div class="win-screen">
            <div class="win-icon" style="font-size: 4rem; margin-bottom: 20px;">🏆</div>
            <h2 style="color: #00cec9;">Syllable Master!</h2>
            <p>You earned <strong>${stars}</strong> stars by building words!</p>
            <div class="win-actions" style="margin-top: 20px;">
                <button onclick="location.reload()" class="btn btn-primary" style="padding: 10px 20px; cursor: pointer;">Play Again</button>
                <br><br>
                <a href="/exercises/reading-basics/index.html" style="color: #636e72; text-decoration: none;">← Back to Reading Menu</a>
            </div>
        </div>`;
}

document.addEventListener('DOMContentLoaded', initGame);