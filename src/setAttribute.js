// @flow

/**
 * Set an attribute on an element
 */

const setAttribute = (
  el: HTMLElement,
  attr: string,
  val: string
): void => {
  el.setAttribute(attr, val)
}

export default setAttribute
