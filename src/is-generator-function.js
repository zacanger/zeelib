// @flow

/**
 * Returns true if val is a generator function
 * @example
 * isGeneratorFunction(2) // => false
 */

const isGeneratorFunction = (v: mixed): bool => {
  if (v && v.constructor && v.constructor.name) {
    return v.constructor.name === 'GeneratorFunction'
  }
  return false
}

export default isGeneratorFunction
