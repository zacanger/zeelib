// @flow

// removes html-like tags
const removeTags = (str: string) : string =>
  str.replace(/(<([^>]+)>)/ig, '')

export default removeTags
