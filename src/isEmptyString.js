const isEmptyString = str => {
  if (str === undefined || str === null) {
    return true
  }
  return (/^[ \t\s]*$/).test(str)
}
export default isEmptyString
