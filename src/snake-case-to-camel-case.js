// @flow

/**
 * snake_case to camelCase
 */

const snakeCaseToCamelCase = (str: string): string =>
  str.replace(/(_\w)/g, (match) =>
    match[1].toUpperCase())

export default snakeCaseToCamelCase
