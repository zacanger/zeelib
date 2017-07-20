// @flow

/**
 * Runs an event handler once
 * @example
 * const el = document.getElementById('foo')
 * eventOnce(el, 'click', console.log)
 */

const eventOnce = (
  el: HTMLElement,
  t: string,
  handler: () => any
): void => {
  const f = (e: Event): void => {
    e.target.removeEventListener(t, f)
    handler()
  }
  el.addEventListener(t, f)
}

export default eventOnce
