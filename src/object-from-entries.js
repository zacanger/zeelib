// @flow

/**
 * Get an object from an array of entries
 */

const objectFromEntries = (entries: any[]): Object => {
  const res = {}
  const len = entries.length
  for (let i = 0; i < len; ++i) {
    const ent = entries[i]
    const key = ent[0]
    const val = ent[1]
    res[key] = val
  }
  return res
}

export default objectFromEntries
