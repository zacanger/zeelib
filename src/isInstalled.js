// @flow

const isInstalled = (pkgName: string) : bool => {
  try {
    require.resolve(pkgName)
    return true
  } catch (e) {
    return false
  }
}

export default isInstalled
