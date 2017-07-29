// @flow

/**
 * Takes search string and returns an object
 * @example
 * getQueryFromSearch('?foo-bar') // { foo: 'bar' }
 */

const getQueryFromSearch = (search: string): Object => {
  const ps = {}
  search
    .substring(1)
    .split('&')
    .forEach((p) => {
      const [ k, v ] = p.split('=')
      ps[k] = decodeURIComponent(v)
    })

  return ps
}

export default getQueryFromSearch
