/**
 * Check if current process is running as root.
 * @example
 * isRoot() // => true
 */

const isRoot = (): boolean =>
  process.env.USER === 'root' || !!(process.getuid && process.getuid() === 0)

export default isRoot
