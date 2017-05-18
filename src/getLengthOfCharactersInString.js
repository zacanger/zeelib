// @flow

/**
 * Find out how many of a given character is in a string
 */

const getLengthOfCharactersInString = (s: string, el: string): number =>
  s.split('').filter((c) => c === el).length

export default getLengthOfCharactersInString
