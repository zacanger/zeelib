// @flow

/**
 * PascalCase to camelCase
 */

const pascalCaseToCamelCase = (s: string): string =>
  s.charAt(0).toLowerCase() + s.slice(1)

export default pascalCaseToCamelCase
