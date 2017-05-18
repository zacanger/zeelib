// @flow

/**
 * Takes search string and returns an object.
 * Example: `?foo=bar` -> `foo: 'bar'`
 */

const getQueryFromSearch = (s: string): Object => {
  const ps = {}
  s
    .substring(1)
    .split('&')
    .forEach((p) => {
      const [ k, v ] = p.split('=')
      ps[k] = decodeURIComponent(v)
    })

  return ps
}

export default getQueryFromSearch
