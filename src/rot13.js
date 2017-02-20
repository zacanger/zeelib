// @flow

function rot13 (s: string) : string {
  return (s || this).split('').map((_) => {
    if (!_.match(/[A-Za-z]/)) {
      return _
    }
    const c = Math.floor(_.charCodeAt(0) / 97)
    const k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26
    return String.fromCharCode(k + ((c === 0) ? 64 : 96))
  }).join('')
}

export default rot13
