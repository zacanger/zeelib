// removes non-alpha-numeric chars
const removeNonAlphaNumeric = (str) =>
  str.replace(/[^A-Za-z0-9 ]+/g, '')
export default removeNonAlphaNumeric
