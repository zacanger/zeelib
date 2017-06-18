// @flow

/**
 * Find out how many of a given character is in a string
 * @example
 * getLengthOfCharactersInString('a', 'aaa') // => 3
 */

const getLengthOfCharactersInString = (el: string, str: string): number =>
  str.split('').filter((c) => c === el).length

export default getLengthOfCharactersInString
