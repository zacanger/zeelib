/**
 * Trims a string to just caps
 * @example
 * initials('Zac Anger') // => 'ZA'
 */

export const initials = (str: string): string => {
  const a = str.match(/\b([A-Z])/g)
  return a ? a.join('') : str
}
