const isInstalled = (pkgName) => {
  try {
    require.resolve(pkgName)
    return true
  } catch (e) {
    return false
  }
}
export default isInstalled
