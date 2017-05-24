// @flow

/**
 * Find out how many of a given character is in a string
 */

const getLengthOfCharactersInString = (str: string, el: string): number =>
  str.split('').filter((c) => c === el).length

export default getLengthOfCharactersInString
