// @flow

/**
 * Split a string on given char
 * @example
 * splitStringOn('asdfasdf asdf', 'a') // => [ '', 'sdfasdf asdf' ]
 */

const splitStringOn = (str: string, spl: string = ''): string[] | null => {
  if (!str || typeof str !== 'string') {
    console.warn('Please pass a string as first param.')
  }
  const idx = str.indexOf(spl)
  return idx === -1 ? null : [
    str.substr(0, idx),
    str.substr(idx + spl.length)
  ]
}

export default splitStringOn
