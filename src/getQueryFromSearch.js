// @flow

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
