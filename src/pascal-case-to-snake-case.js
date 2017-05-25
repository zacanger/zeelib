// @flow

/**
 * PascalCase to snake_case
 */

const pascalCaseToSnakeCase = (str: string): string =>
  str.charAt(0).toLowerCase() + '_' + str.slice(1).replace(/[A-Z]/g, (m) =>
    '_' + m.toLowerCase()).toLowerCase()

export default pascalCaseToSnakeCase
