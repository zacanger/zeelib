// @ flow

// [RegExp] -> RegExp
const combineRegex = (rs, opts) : RegExp =>
  new RegExp(rs.map((r) => r.source).join(''), opts)

export default combineRegex
