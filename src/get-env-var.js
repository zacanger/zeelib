// @flow

import isNode from './is-node'

/**
 * Get some environment variable.
 * @example
 * getEnvVar('FOO') // => something
 */

const getEnvVar = (v: string): string => {
  if (isNode()) {
    return process.env[v] || ''
  }
  return ''
}

export default getEnvVar
