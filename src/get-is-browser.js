const getIsBrowser = () => {
  console.error('`getIsBrowser` is deprecated. Please use `isBrowser`.')
  return !!(typeof window !== 'undefined' && typeof process === 'undefined')
}

export default getIsBrowser
