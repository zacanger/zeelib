// [RegExp] -> RegExp
const combineRegex = (rs, opts) => new RegExp(rs.map(r => r.source).join(''), opts)
export default combineRegex
