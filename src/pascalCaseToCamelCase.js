// @flow

/**
 * PascalCase to camelCase
 */

const pascalCaseToCamelCase = (str: string): string =>
  str.charAt(0).toLowerCase() + str.slice(1)

export default pascalCaseToCamelCase
