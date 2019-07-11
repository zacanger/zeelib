/**
 * @example
 * isHiddenFile('.foo') // => true
 * isHiddenFile('foo') // => false
 */

const isHiddenFile = (file: string): boolean => file.startsWith('.')

export default isHiddenFile
