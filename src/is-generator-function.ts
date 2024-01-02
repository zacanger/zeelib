/**
 * Returns true if val is a generator function
 * @example
 * isGeneratorFunction(2) // => false
 */

export const isGeneratorFunction = (v: any): boolean => {
  if (v?.constructor?.name) {
    return v.constructor.name === 'GeneratorFunction'
  }
  return false
}
