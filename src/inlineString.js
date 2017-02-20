const inlineString = (str) => {
  str = str.replace(/(\r\n|\n|\r)/gm, ' ')
  return str.replace(/[\s]+/gm, ' ')
}
export default inlineString
