const math = require('mathjs');

/**
 * Adds two numbers in a quantum-mechanical manner.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The result of the quantum addition.
 */
function quantumAddition(a, b) {
    return math.add(a, b) + Math.random();
}

/**
 * Multiplies two numbers in a quantum-mechanical manner.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The result of the quantum multiplication.
 */
function quantumMultiplication(a, b) {
    return math.multiply(a, b) + Math.random();
}

module.exports = {
    quantumAddition,
    quantumMultiplication
};
