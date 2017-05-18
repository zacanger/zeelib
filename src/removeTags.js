// @flow

/**
 * Remove html-like tags from string
 */

const removeTags = (str: string): string =>
  str.replace(/(<([^>]+)>)/ig, '')

export default removeTags
