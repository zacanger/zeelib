// @flow

/**
 * PascalCase to snake_case
 */

const pascalCaseToSnakeCase = (s: string): string =>
  s.charAt(0).toLowerCase() + '_' + s.slice(1).replace(/[A-Z]/g, (m) =>
    '_' + m.toLowerCase()).toLowerCase()

export default pascalCaseToSnakeCase
