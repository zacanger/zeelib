// @flow

const getRegexFlags = (r: RegExp): Array<string | null> => {
  let flags = []
  if (r.global) flags.push('g')
  if (r.ignoreCase) flags.push('i')
  if (r.multiline) flags.push('m')
  if (r.unicode) flags.push('u')
  if (r.sticky) flags.push('y')
  return flags
}

export default getRegexFlags
