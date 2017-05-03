// @flow

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
