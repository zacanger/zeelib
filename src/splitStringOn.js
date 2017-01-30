const splitStringOn = (str, spl) => {
  if (!str || typeof str !== 'string') {
    console.warn('Please pass a string as first param.')
  }
  spl = spl || ''
  const idx = str.indexOf(spl)
  return idx === -1 ? null : [
    str.substr(0, idx)
  , str.substr(idx + spl.length)
  ]
}

export default splitStringOn
