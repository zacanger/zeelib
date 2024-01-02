/**
 * Returns true if the passed node_module name is installed
 * @example
 * isInstalled('zeelib') // => true
 */

export const isInstalled = (pkgName: string): boolean => {
  try {
    require.resolve(pkgName)
    return true
  } catch {
    return false
  }
}
