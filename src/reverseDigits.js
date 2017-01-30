// reverse digits with correct sign handling
const reverseDigits = (n) =>
  Math.sign(n) * ('' + Math.abs(n)).split('').reverse().join('') || 0

export default reverseDigits
