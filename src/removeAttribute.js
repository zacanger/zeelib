// @flow

/**
 * Remove an attribute from an element
 */

const removeAttribute = (
  el: HTMLElement,
  attr: string
): void => {
  el.removeAttribute(attr)
}

export default removeAttribute
