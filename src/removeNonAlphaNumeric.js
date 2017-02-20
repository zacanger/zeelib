// @ flow

const removeNonAlphaNumeric = (str: string) : string =>
  str.replace(/[^A-Za-z0-9 ]+/g, '')

export default removeNonAlphaNumeric
