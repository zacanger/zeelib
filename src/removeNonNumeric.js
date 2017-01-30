const removeNonNumeric = str =>
  str.replace(/[^0-9-.]/g, '')
export default removeNonNumeric
