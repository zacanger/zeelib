const getIsBrowser = () =>
  typeof window !== 'undefined' && !!process.browser
export default getIsBrowser
