/**
 * Simple `throttle` implementation
 * @param {function} f to throttle
 * @param {number} wait ms
 * @param {boolean} lead optional, defaults to false
 * @param {boolean} trail, optional, defaults to false
 * @returns {any} result
 */

function throttle (
  f,
  wait,
  lead = false,
  trail = false
) {
  let ctx
  let args
  let res
  let timeout = null
  let prev = 0

  const later = () => {
    prev = lead === false ? 0 : Date.now()
    timeout = null
    res = f.apply(ctx, args)
    if (!timeout) {
      ctx = args = null
    }
  }

  return function () {
    const now = Date.now()
    if (!prev && lead === false) {
      prev = now
    }
    const remain = wait - (now - prev)
    ctx = this
    args = arguments
    if (remain <= 0 || remain > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      prev = now
      res = f.apply(ctx, args)
      if (!timeout) {
        ctx = args = null
      }
    } else if (!timeout && trail !== false) {
      timeout = setTimeout(later, remain)
    }

    return res
  }
}

export default throttle
