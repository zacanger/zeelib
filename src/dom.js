// some dom things
export const scrollTop = () =>
  window.scrollTo(0, 0)

export const getWidth = () =>
  window.innerWidth ||
  window.document.documentElement.clientWidth

export const getHeight = () =>
  window.innerHeight ||
  window.document.documentElement.clientHeight

export const getScrollBarWidth = () =>
  window.innerWidth - window.document.documentElement.clientWidth

export const getReferrer = () =>
  document.referrer

export const getIsBrowser = () =>
  typeof window !== 'undefined' && !!process.browser

export const getScrollPosition = () =>
  ({ scrollX: window.scrollX, scrollY: window.scrollY })

export const restoreScrollPosition = ({ scrollX, scrollY }) =>
  window.scrollTo(scrollX, scrollY)

export const getCookie = (name) => {
  const value = '; ' + document.cookie
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}
