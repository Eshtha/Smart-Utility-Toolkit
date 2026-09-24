/**
 * Demonstrates custom module creation, importing, and reusability.
 */
const isEven = require('./modules/isEven');
const { log } = require('./modules/logger');

log("Demonstrating custom module reusability", "INFO");

const testNumbers = [4, 7, 10, 15, 22];

testNumbers.forEach(num => {
    const result = isEven(num);
    if (result) {
        log(`${num} is EVEN`, "SUCCESS");
    } else {
        log(`${num} is ODD`, "WARN");
    }
});