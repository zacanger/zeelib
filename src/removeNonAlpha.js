const removeNonAlpha = (str) =>
  str.replace(/[^A-Za-z ]+/g, '')
export default removeNonAlpha
