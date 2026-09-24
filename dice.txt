/**
 * Random Dice Generator using the built-in 'crypto' module.
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

function rollDice() {
    // Generate secure random integer between 1 and 6
    return crypto.randomInt(1, 7);
}

const rollsCount = 5;
const logFilePath = path.join(__dirname, 'dice_history.txt');

console.log(`--- Rolling Dice ${rollsCount} Times ---`);

let historyOutput = `Dice Roll Session: ${new Date().toISOString()}\n`;

for (let i = 1; i <= rollsCount; i++) {
    const result = rollDice();
    const logLine = `🎲 Dice Rolled (${i}): ${result}`;
    console.log(logLine);
    historyOutput += logLine + '\n';
}

// Bonus: Save roll history to file
fs.appendFileSync(logFilePath, historyOutput + '\n');