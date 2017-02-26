const abbrev = (s) =>
  s.match(/\b([A-Z])/g) ? s.match(/\b([A-Z])/g).join('') : s

export default abbrev
