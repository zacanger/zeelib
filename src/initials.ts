/**
 * Trims a string to just caps
 * @example
 * initials('Zac Anger') // => 'ZA'
 */

const initials = (str: string): string => {
  const a = str.match(/\b([A-Z])/g)
  return a ? a.join('') : str
}

export default initials
