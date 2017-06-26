const combineRegex = (rs, opts) => {
  console.error('`combineRegex` is deprecated.')
  return new RegExp(rs.map((r) => r.source).join(''), opts)
}

export default combineRegex
