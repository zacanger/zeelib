const normalizeClassname = (arg) => {
  console.error('`normalizeClassname` is deprecated. Please use the `classnames` lib instead.')
  const replaceNewlines = (a) => a.replace(/\s+/g, ' ').trim()
  const replaceArr = (a) => a.map((i) => `${i}`).join(' ')
  if (Array.isArray(arg)) return replaceNewlines(replaceArr(arg))
  if (typeof arg === 'string') return replaceNewlines(arg)
  return replaceNewlines(`${arg}`)
}
export default normalizeClassname
