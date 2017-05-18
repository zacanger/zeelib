// @flow

/**
 * snake_case to PascalCase
 */

const snakeCaseToPascalCase = (s: string): string => {
  const c = s.toLowerCase().replace(/_[a-z]/g, (m) =>
    m.slice(1).toUpperCase())
  return c.charAt(0).toUpperCase() + c.slice(1)
}

export default snakeCaseToPascalCase
