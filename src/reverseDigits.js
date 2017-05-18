/**
 * Reverse digits with correct sign handling
 * Example: `reverseDigits(-123)` -> `-321`
 * @param {number} num
 * @returns {number} num
 */

const reverseDigits = (n) =>
  Math.sign(n) * ('' + Math.abs(n)).split('').reverse().join('') || 0

export default reverseDigits
