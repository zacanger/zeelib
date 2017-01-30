// gh:artificerentertainment
const nco = (variable, defaultValue) =>
  (variable === null || typeof variable === 'undefined') ? defaultValue : variable
export default nco
