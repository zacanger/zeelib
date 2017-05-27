// @flow

/**
 * Calls preventDefault and stopPropagation
 * if they exist
 */

const preventDefault = (e: EventTarget): void => {
  if (e) {
    if (typeof e.preventDefault === 'function') {
      e.preventDefault()
    }
    if (typeof e.stopPropagation === 'function') {
      e.stopPropagation()
    }
  }
}

export default preventDefault
