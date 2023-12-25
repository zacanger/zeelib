import typeOf from './type-of'

/**
 * Get monadic empty/zero value for a type
 * @example
 * mzero(1) // =>
 * mzero([1]) // => []
 */

const mzero = (v?: any): any => {
  switch (typeOf(v)) {
    case 'null': return null
    case 'array': return []
    // eslint-disable-next-line prefer-regex-literals
    case 'regexp': return new RegExp('')
    case 'date': return new Date()
    case 'object': return {}
    case 'number': return 0
    case 'string': return 0
    case 'map': return new Map()
    case 'set': return new Set()
    case 'bigint': return BigInt(0)
  }
  return undefined
}

export default mzero
