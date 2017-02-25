// @flow

const getIsBrowser = () : bool =>
  !!(typeof window !== 'undefined' && typeof process === 'undefined')

export default getIsBrowser
