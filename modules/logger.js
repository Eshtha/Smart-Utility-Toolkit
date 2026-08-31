/**
 * Custom Module: Logger utility with optional timestamp and ANSI colors.
 */
const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    cyan: "\x1b[36m"
};

function log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    let color = colors.reset;

    if (type === 'SUCCESS') color = colors.green;
    else if (type === 'WARN') color = colors.yellow;
    else if (type === 'ERROR') color = colors.red;
    else if (type === 'INFO') color = colors.cyan;

    console.log(`${color}[${timestamp}] [${type}] ${message}${colors.reset}`);
}

module.exports = { log };