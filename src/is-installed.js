// @flow

/**
 * Returns true if the passed node_module name is installed
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
