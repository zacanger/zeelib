// @flow

/**
 * Remove an attribute from an element
 */

const removeAttribute = (
  el: HTMLElement,
  a: string
): void => {
  el.removeAttribute(a)
}

export default removeAttribute
