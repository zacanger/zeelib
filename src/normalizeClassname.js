// @flow

/**
 * Normalize classnames. Similar to the `classnames` lib.
 * Replaces newlines with spaces, can take array of classnames,
 * converts to string
 * Returns arg as string if it's not an array or a string
 */

const normalizeClassname = (arg: any[] | string): string => {
  const replaceNewlines = (a) => a.replace(/\s+/g, ' ').trim()
  const replaceArr = (a) => a.map((i) => `${i}`).join(' ')
  if (Array.isArray(arg)) return replaceNewlines(replaceArr(arg))
  if (typeof arg === 'string') return replaceNewlines(arg)
  return replaceNewlines(`${arg}`)
}
export default normalizeClassname
