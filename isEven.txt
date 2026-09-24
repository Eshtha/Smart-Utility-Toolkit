/**
 * Custom Module: Checks if a number is even or odd.
 */
function isEven(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        throw new Error("Input must be a valid number");
    }
    return number % 2 === 0;
}

module.exports = isEven;