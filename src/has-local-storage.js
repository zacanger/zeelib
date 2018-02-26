// @flow

/**
 * Check for localStorage access
 * @example
 * if (hasLocalStorage()) localStorage.setItem('foo', 'bar')
 */

const hasLocalStorage = (): bool => {
  try {
    const s = Math.random().toString(36).substring(8)
    window.localStorage.setItem(s, s)
    window.localStorage.removeItem(s)
    return true
  } catch (_) {
    return false
  }
}

export default hasLocalStorage
