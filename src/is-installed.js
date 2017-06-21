// @flow

/**
 * Returns true if the passed node_module name is installed
 * @example
 * isInstalled('zeelib') // => true
 */

const isInstalled = (pkgName: string): bool => {
  try {
    require.resolve(pkgName)
    return true
  } catch (_) {
    return false
  }
}

export default isInstalled
