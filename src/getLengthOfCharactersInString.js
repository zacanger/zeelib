// @flow

const getLengthOfCharactersInString = (s: string, el: string): number =>
  s.split('').filter((c) => c === el).length

export default getLengthOfCharactersInString
