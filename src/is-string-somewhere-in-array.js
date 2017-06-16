// @flow

/**
 * Returns true if the string is contained somewhere in the array
 */

const isStringSomewhereInArray = (el: string, arr: string[]): bool =>
  arr.some((a) =>
    el.toLowerCase().includes(a.toLowerCase()) || a.toLowerCase().includes(el.toLowerCase()))

export default isStringSomewhereInArray
