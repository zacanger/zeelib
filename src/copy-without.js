const copyWithout = (
  target,
  source,
  ...keys
) => {
  console.error('`copyWithout` is deprecated.')
  const copy = Object.assign(target, source)
  for (const key of keys) {
    delete copy[key]
  }
  return copy
}

export default copyWithout
