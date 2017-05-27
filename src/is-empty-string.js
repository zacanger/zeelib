const isEmptyString = (str) => {
  console.error('`isEmptyString` is deprecated. Please use `isEmpty` instead.')
  if (str === undefined || str === null) {
    return true
  }
  return (/^[ \t\s]*$/).test(str)
}

export default isEmptyString
