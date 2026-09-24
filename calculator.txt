/**
 * CLI-Based Calculator using process.argv
 * Supported operations: add, sub, mul, div
 * Usage: node calculator.js <operation> <num1> <num2>
 */

const args = process.argv.slice(2);

if (args.length < 3) {
    console.log("Usage: node calculator.js <operation> <num1> <num2>");
    console.log("Operations: add, sub, mul, div");
    process.exit(1);
}

const operation = args[0].toLowerCase();
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Both inputs must be valid numbers.");
    process.exit(1);
}

let result;

switch (operation) {
    case 'add':
        result = num1 + num2;
        break;
    case 'sub':
        result = num1 - num2;
        break;
    case 'mul':
        result = num1 * num2;
        break;
    case 'div':
        if (num2 === 0) {
            console.log("Error: Division by zero is not allowed.");
            process.exit(1);
        }
        result = num1 / num2;
        break;
    default:
        console.log(`Error: Invalid operation '${operation}'. Supported: add, sub, mul, div`);
        process.exit(1);
}

console.log(`Result: ${result}`);