// removes html-like tags
const removeTags = (str) =>
  str.replace(/(<([^>]+)>)/ig, '')
export default removeTags
