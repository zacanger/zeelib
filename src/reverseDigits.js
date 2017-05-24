/**
 * Reverse digits with correct sign handling
 * Example: `reverseDigits(-123)` -> `-321`
 * @param {number} num
 * @returns {number}
 */

const reverseDigits = (num) =>
  Math.sign(num) * ('' + Math.abs(num)).split('').reverse().join('') || 0

export default reverseDigits
