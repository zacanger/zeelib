// @flow

/**
 * Set an attribute on an element
 */

const setAttribute = (
  el: HTMLElement,
  a: string,
  v: string
): void => {
  el.setAttribute(a, v)
}

export default setAttribute
