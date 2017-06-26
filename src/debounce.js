// @flow

function debounce (
  f: () => any,
  wait: number,
  immediate: bool = false
): any {
  console.error('`debounce` is deprecated.')
  let timeout = null
  return function () {
    let ctx = this
    let args = arguments

    const later = () => {
      timeout = null
      if (!immediate) {
        f.apply(ctx, args)
      }
    }

    const now = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (now) {
      f.apply(ctx, args)
    }
  }
}

export default debounce
