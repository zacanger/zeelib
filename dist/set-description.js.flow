// @flow

import setAttribute from './set-attribute'

/**
 * Sets meta description
 * @example
 * setDescription('Best site 13/10 would visit')
 */

const setDescription = (s: string): void => {
  const meta = document.head && document.head.querySelector('meta[name=description]')
  if (meta) {
    setAttribute(meta, 'content', s)
  }
}

export default setDescription
